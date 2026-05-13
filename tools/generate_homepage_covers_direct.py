#!/usr/bin/env python3
from __future__ import annotations

import base64
import csv
import json
import os
from pathlib import Path

import requests
from dotenv import load_dotenv


ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "data/homepage_cover_prompts.csv"
LOG_DIR = ROOT / "data/generated_cover_logs"
LOG_DIR.mkdir(parents=True, exist_ok=True)

OPENROUTER_ROOT = Path("/Users/alvin/Desktop/隐喻语义 LLM 项目/openrouter_image_api")
load_dotenv(OPENROUTER_ROOT / ".env")

API_KEY = os.getenv("OPENROUTER_API_KEY")
BASE_URL = os.getenv("OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1").rstrip("/")
MODEL = os.getenv("IMAGE_MODEL", "google/gemini-2.5-flash-image")


def extract_image(data: dict) -> bytes:
    message = data["choices"][0]["message"]
    image_url = None
    if isinstance(message.get("images"), list) and message["images"]:
        first = message["images"][0]
        image_url = first.get("image_url", {}).get("url") or first.get("url")
    if not image_url and isinstance(message.get("content"), list):
        for item in message["content"]:
            if item.get("type") in {"image_url", "output_image"}:
                image_url = item.get("image_url", {}).get("url") or item.get("url")
                if image_url:
                    break
    if not image_url:
        raise RuntimeError("No image payload found in response")
    if image_url.startswith("data:image/"):
        return base64.b64decode(image_url.split(",", 1)[1])
    resp = requests.get(image_url, timeout=180)
    resp.raise_for_status()
    return resp.content


def main() -> int:
    if not API_KEY:
        raise RuntimeError("Missing OPENROUTER_API_KEY")
    rows = list(csv.DictReader(CSV_PATH.open(encoding="utf-8", newline="")))
    session = requests.Session()
    endpoint = f"{BASE_URL}/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://wzhengyang.com",
        "X-Title": "Wang Zhengyang Homepage Covers",
    }

    for idx, row in enumerate(rows, start=1):
        target_path = Path(row["planned_asset_path"])
        target_path.parent.mkdir(parents=True, exist_ok=True)
        payload = {
            "model": MODEL,
            "messages": [{"role": "user", "content": row["prompt"]}],
            "modalities": ["image", "text"],
            "stream": False,
            "image_config": {"aspect_ratio": "1:1", "image_size": "1K"},
        }
        print(f"[{idx}/{len(rows)}] generating {target_path.name}")
        response = session.post(endpoint, headers=headers, json=payload, timeout=180)
        if response.status_code != 200:
            raise RuntimeError(f"HTTP {response.status_code}: {response.text[:1000]}")
        data = response.json()
        image_bytes = extract_image(data)
        target_path.write_bytes(image_bytes)
        (LOG_DIR / f"{target_path.stem}.json").write_text(
            json.dumps(
                {
                    "pair_id": row["pair_id"],
                    "target_path": str(target_path),
                    "model": MODEL,
                    "prompt": row["prompt"],
                    "response_summary": {
                        "id": data.get("id"),
                        "usage": data.get("usage"),
                    },
                },
                ensure_ascii=False,
                indent=2,
            ),
            encoding="utf-8",
        )
        print(f"  saved {target_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

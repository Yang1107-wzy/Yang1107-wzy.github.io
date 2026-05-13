#!/usr/bin/env python3
from __future__ import annotations

import csv
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OPENROUTER_ROOT = Path("/Users/alvin/Desktop/隐喻语义 LLM 项目/openrouter_image_api")
PYTHON = OPENROUTER_ROOT / ".venv/bin/python"
BATCH_SCRIPT = OPENROUTER_ROOT / "scripts/batch_generate_dataset.py"
CSV_PATH = ROOT / "data/homepage_cover_prompts.csv"


def main() -> int:
    if not OPENROUTER_ROOT.exists():
      raise FileNotFoundError(f"Missing OpenRouter workspace: {OPENROUTER_ROOT}")
    if not PYTHON.exists():
      raise FileNotFoundError(f"Missing venv python: {PYTHON}")
    if not BATCH_SCRIPT.exists():
      raise FileNotFoundError(f"Missing batch script: {BATCH_SCRIPT}")
    if not CSV_PATH.exists():
      raise FileNotFoundError(f"Missing CSV: {CSV_PATH}")

    with CSV_PATH.open(encoding="utf-8", newline="") as f:
      rows = list(csv.DictReader(f))
    print(f"Preparing to generate {len(rows)} homepage covers from {CSV_PATH}")

    cmd = [
      str(PYTHON),
      str(BATCH_SCRIPT),
      "--input",
      str(CSV_PATH),
      "--overwrite-existing",
      "--sleep",
      "2.0",
      "--timeout",
      "180",
      "--aspect-ratio",
      "1:1",
      "--image-size",
      "1K",
      "--prompt-version-filter",
      "homepage_cover_v1",
    ]
    print("Running:", " ".join(cmd))
    result = subprocess.run(cmd, cwd=str(OPENROUTER_ROOT))
    return result.returncode


if __name__ == "__main__":
    sys.exit(main())

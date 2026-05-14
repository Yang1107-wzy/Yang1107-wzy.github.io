#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path("/Users/alvin/Desktop/Yang1107-wzy.github.io")
ASSETS = ROOT / "assets"
SOURCE_ICON = Path("/Users/alvin/Downloads/iShot_2026-05-14_09.20.55.png")


DISPLAY_SPECS = {
    "profile.jpg": ("profile-display.webp", 480, 600),
    "st-net.png": ("st-net-display.webp", 720, 495),
    "startup-posture.png": ("startup-posture-display.webp", 720, 495),
    "project-actigraph-sensor.png": ("project-actigraph-sensor-display.webp", 720, 495),
    "project-archery.png": ("project-archery-display.webp", 720, 495),
    "project-cardiac-ultrasound.png": ("project-cardiac-ultrasound-display.webp", 720, 495),
    "project-cgf-height.png": ("project-cgf-height-display.webp", 720, 495),
    "project-fyp-ble-llm.png": ("project-fyp-ble-llm-display.webp", 720, 495),
    "project-hydrology.png": ("project-hydrology-display.webp", 720, 495),
    "project-metavision-db.png": ("project-metavision-db-display.webp", 720, 495),
    "project-startup-posture.png": ("project-startup-posture-display.webp", 720, 495),
}


def build_display_assets() -> None:
    for source_name, (target_name, width, height) in DISPLAY_SPECS.items():
        src = ASSETS / source_name
        dst = ASSETS / target_name
        if not src.exists():
            continue
        with Image.open(src) as im:
            processed = ImageOps.fit(im.convert("RGB"), (width, height), method=Image.Resampling.LANCZOS)
            processed.save(dst, "WEBP", quality=78, method=6)


def build_favicons() -> None:
    if not SOURCE_ICON.exists():
        raise FileNotFoundError(f"Missing source icon: {SOURCE_ICON}")
    with Image.open(SOURCE_ICON) as im:
        rgb = im.convert("RGB")
        square = ImageOps.fit(rgb, (512, 512), method=Image.Resampling.LANCZOS, centering=(0.5, 0.42))
        square.save(ASSETS / "android-chrome-512x512.png", "PNG")
        square.resize((192, 192), Image.Resampling.LANCZOS).save(ASSETS / "android-chrome-192x192.png", "PNG")
        square.resize((180, 180), Image.Resampling.LANCZOS).save(ASSETS / "apple-touch-icon.png", "PNG")
        square.resize((32, 32), Image.Resampling.LANCZOS).save(ASSETS / "favicon-32x32.png", "PNG")
        square.resize((16, 16), Image.Resampling.LANCZOS).save(ASSETS / "favicon-16x16.png", "PNG")
        square.save(ASSETS / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])


def main() -> int:
    build_display_assets()
    build_favicons()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

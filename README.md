<p align="center">
  <img src="assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Mac Utility Suite" width="100%" />
</p>

<p align="center">
  <strong>English</strong> · <a href="docs/README.vi.md">Tiếng Việt</a> · <a href="docs/README.ja.md">日本語</a> · <a href="docs/README.ko.md">한국어</a> · <a href="docs/README.zh.md">简体中文</a> · <a href="docs/README.th.md">ไทย</a> · <a href="docs/README.id.md">Indonesia</a> · <a href="docs/README.de.md">Deutsch</a> · <a href="docs/README.es.md">Español</a> · <a href="docs/README.it.md">Italiano</a> · <a href="docs/README.pt.md">Português</a>
</p>

# NidoBox — NTFS Read/Write, NidoDrop LAN & Mac Utility Suite

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Homebrew](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidobox-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Apple Silicon](https://img.shields.io/badge/Apple_Silicon-arm64_Full-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Intel Mac](https://img.shields.io/badge/Intel-x86__64_Core-64748b?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(formerly NidoNTFS)* is a native SwiftUI utility for **macOS 13.0+**, built as dedicated single-architecture packages with zero Rosetta overhead.

## Downloads

| Mac Architecture | Installer (`v1.3.0`) | Included Capabilities |
| :--- | :--- | :--- |
| **Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Full Suite: NTFS R/W, NidoDrop LAN, Archive, Cleaner, Media, Capture + OCR, Snap, Shelf (`9.2 MB`) |
| **Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Core Edition: NTFS R/W, S.M.A.R.T. Health, NidoDrop LAN (`9.0 MB`) |

### Homebrew

```bash
brew install --cask stevedat/tap/nidobox
# Upgrade: brew update && brew upgrade --cask nidobox
```

## Core Capabilities

- **Kextless NTFS Read/Write (`arm64` & `x86_64`):** User-space `NTFS-3G` + `FUSE-T` mount in `/Volumes` without disabling SIP, S.M.A.R.T. health, and sleep/wake safe flush.
- **NidoDrop LAN (`arm64` & `x86_64`):** Local Wi-Fi file and clipboard transfer via QR + 4-digit PIN directly to mounted drives.
- **Studio Suite (`arm64` Apple Silicon):** Archive (`.zip`/`.7z`/`.rar`/`.iso`), Disk Cleaner, Batch Media Converter, Screen Capture + on-device OCR, Window Snap, and Drop Shelf.
- **Seamless In-Place Upgrade:** Auto-updates from legacy `NidoNTFS` while preserving macOS permissions and helper setup.

## Interface

| NTFS Read/Write & S.M.A.R.T. | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write" /> | <img src="assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Auto-Updater & System Settings** | **Studio Tools & Companion Apps** |
| <img src="assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## Architecture

<p align="center">
  <img src="assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## Verify Checksums

```bash
shasum -a 256 -c SHA256SUMS.txt
```

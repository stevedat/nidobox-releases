<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Mac Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <strong>Tiếng Việt</strong> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">简体中文</a> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — Đọc/Ghi NTFS, NidoDrop LAN & Bộ Tiện Ích macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Homebrew](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidobox-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Apple Silicon](https://img.shields.io/badge/Apple_Silicon-arm64_Full-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Intel Mac](https://img.shields.io/badge/Intel-x86__64_Core-64748b?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(tên mới của NidoNTFS)* là tiện ích SwiftUI nguyên bản cho **macOS 13.0+**, biên dịch riêng từng kiến trúc chip, không qua Rosetta.

## Tải Bộ Cài

| Kiến trúc máy | Bộ cài (`v1.3.0`) | Link luôn mới nhất | Tính năng bao gồm |
| :--- | :--- | :--- | :--- |
| **Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-1.3.0-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/download/v1.3.0/NidoBox-1.3.0-arm64.dmg) | [`NidoBox-mac-arm64.dmg`](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Bản đầy đủ: NTFS R/W, NidoDrop LAN, Giải nén, Dọn đĩa, Media, Chụp + OCR, Cửa sổ, Khay tạm (`9.2 MB`) |
| **Intel (`x86_64`)** | [**NidoBox-1.3.0-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/download/v1.3.0/NidoBox-1.3.0-x64.dmg) | [`NidoBox-mac-x64.dmg`](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Bản cốt lõi: NTFS R/W, S.M.A.R.T., NidoDrop LAN (`9.0 MB`) |

### Cài Qua Homebrew

```bash
brew install --cask stevedat/tap/nidobox
# Upgrade: brew update && brew upgrade --cask nidobox
```

## Tính Năng Chính

- **Đọc/Ghi NTFS Không Kext (`arm64` & `x86_64`):** Mount trực tiếp vào `/Volumes` qua `NTFS-3G` + `FUSE-T` không cần tắt SIP, theo dõi S.M.A.R.T. và tự `sync` trước khi ngủ.
- **NidoDrop LAN (`arm64` & `x86_64`):** Truyền tệp và Clipboard qua Wi-Fi nội bộ bằng mã QR + PIN 4 số thẳng vào ổ cứng ngoài.
- **Bộ Công Cụ Studio (`arm64` Apple Silicon):** Giải nén/Nén (`.zip`/`.7z`/`.rar`/`.iso`), Dọn ổ đĩa, Chuyển đổi Media, Chụp + Vision OCR, Chia cửa sổ và Khay tạm.
- **Nâng Cấp Giữ Nguyên Quyền:** Tự động cập nhật từ `NidoNTFS` cũ sang `NidoBox`, giữ nguyên Helper và quyền macOS đã cấp.

## Giao Diện

| NTFS Read/Write & S.M.A.R.T. | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Auto-Updater & System Settings** | **Studio Tools & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## Kiến Trúc

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## Kiểm Chứng SHA-256

```bash
shasum -a 256 -c SHA256SUMS.txt
```

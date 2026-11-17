<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Native Desktop Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <strong>Tiếng Việt</strong> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">简体中文</a> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — Đọc/Ghi NTFS, NidoDrop LAN & Bộ Tiện Ích Nguyên Bản (macOS & Windows)

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![macOS arm64 & x64](https://img.shields.io/badge/macOS_13%2B-arm64_%26_x64-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Windows x64 & ARM64](https://img.shields.io/badge/Windows_10%2F11-x64_%26_ARM64-0078D4?style=flat-square&logo=windows)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(tên mới của NidoNTFS)* là bộ tiện ích nguyên bản cho **macOS 13.0+** (SwiftUI) và **Windows 10/11** (Rust + Tauri 2.0 + WebGPU), đóng gói riêng từng kiến trúc chip, không qua lớp giả lập.

## Tải Bộ Cài

| Hệ điều hành & Chip | Bộ cài (`v1.4.0`) | Tính năng bao gồm |
| :--- | :--- | :--- |
| **macOS Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Bản Mac đầy đủ: NTFS R/W, NidoDrop LAN, Giải nén, Dọn đĩa, Media, Chụp + OCR, Quay màn hình, Cửa sổ, Khay tạm (`9.7 MB`) |
| **macOS Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Bản Mac cốt lõi: NTFS R/W, S.M.A.R.T., NidoDrop LAN (`9.0 MB`) |
| **Windows 10/11 x64 (`x86_64`)** · Intel & AMD | [**NidoBox-win-x64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-x64.exe) | Bản Windows x64 Native: Capture Studio (WebGPU + Ghi chú cong + OCR), NidoDrop LAN, Đổi ảnh hàng loạt, Giải nén, Tự khởi động (`2.9 MB`) |
| **Windows 11 ARM64 (`aarch64`)** · Snapdragon X | [**NidoBox-win-arm64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-arm64.exe) | Bản Windows ARM64 Native (Snapdragon X / Copilot+): Trọn bộ tính năng Windows nguyên bản (`2.6 MB`) |

## Tính Năng Chính

- **Đọc/Ghi NTFS Không Kext (`macOS arm64 & x86_64`):** Mount trực tiếp vào `/Volumes` qua `NTFS-3G` + `FUSE-T` không cần tắt SIP, theo dõi S.M.A.R.T. và tự `sync` trước khi ngủ.
- **NidoDrop LAN Tốc Độ Cao (`macOS & Windows`):** Truyền tệp lớn và Clipboard qua Wi-Fi nội bộ bằng mã QR + PIN 4 số với luồng `TCP_NODELAY` và tải tiếp nối HTTP Range.
- **Bộ Công Cụ Mac Studio (`macOS arm64`):** Giải nén/Nén (`.zip`/`.7z`/`.rar`/`.iso`), Dọn ổ đĩa, Chuyển đổi Media, Chụp thông minh (Tiêu điểm, Che mờ, Ghi chú ghim cong, Tự che AI, OCR theo yêu cầu), Biên tập nhanh bản ghi video, Chia cửa sổ và Khay tạm.
- **Phiên Bản Windows Native (`win-x64 & win-arm64`):** Bộ cài gọn nhẹ ~3 MB chạy Rust + WebGPU với Capture Studio, ghi chú S-curve, Tự che dữ liệu nhạy cảm, `Windows.Media.Ocr` bật theo nhu cầu, đổi ảnh hàng loạt đa luồng, giải nén chống Zip-Slip và chạy ngầm khay hệ thống.

## Giao Diện

| NTFS Read/Write & Drop Shelf HUD | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write & Drop Shelf" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Smart Screenshot Markup & Auto-Shield** | **Quick Record Studio & Video Trimmer** |
| <img src="../assets/screenshots/05_smart_capture_markup.png" width="100%" alt="NidoBox Smart Capture Markup" /> | <img src="../assets/screenshots/06_quick_record_studio.png" width="100%" alt="NidoBox Quick Record Studio" /> |
| **Auto-Updater & System Settings** | **Batch Media, Archive & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## Kiến Trúc

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## Kiểm Chứng SHA-256

```bash
# macOS / Linux
shasum -a 256 -c SHA256SUMS.txt
# Windows PowerShell
Get-FileHash .\NidoBox-win-*.exe -Algorithm SHA256
```

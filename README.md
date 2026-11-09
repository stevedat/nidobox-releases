<p align="center">
  <img src="assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

# NidoNTFS — Native NTFS Read/Write, USB/SSD/SD Optimizer & NidoDrop LAN for macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Global_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** là bộ công cụ hệ thống gốc (**Native SwiftUI Universal 2: `arm64` + `x86_64`**) gọn nhẹ dành cho **macOS 13.0+ (Ventura, Sonoma, Sequoia, Tahoe)**, kết hợp trình quản lý **Đọc & Ghi ổ cứng NTFS / USB / Thẻ nhớ SD tốc độ cao không cần Kernel Extension (`NTFS-3G 2026.9.28` + `FUSE-T 1.2.9`)**, bộ giải nén & đóng gói luồng trực tiếp **NidoArchive (`libarchive 3.7.4`)**, trạm truyền tệp nội bộ **NidoDrop LAN** và trình cập nhật tự động **NidoUpdater**.

---

## 📦 Tải Nhanh Bộ Cài Mới Nhất / Direct Downloads (Evergreen Links)

Các liên kết dưới đây luôn tự động trỏ tới phiên bản chính thức mới nhất (`Latest Release — v1.2.1`):

| Hệ điều hành / Platform | Kiến trúc | Bộ cài trực tiếp / Direct Download | Ghi chú |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | Bộ cài kéo-thả chuẩn (`.dmg` — 15.9 MB) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | Evergreen alias cho Mac chip M (`.dmg` — 15.9 MB) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | Evergreen alias cho Mac Intel (`.dmg` — 15.9 MB) |
| **macOS Universal 2 (Versioned DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.1-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.1/NidoNTFS-1.2.1-universal.dmg) | Bản đóng gói `v1.2.1` (`.dmg` — 15.9 MB) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | Gói nén `.app` & `NidoUpdater` (`.zip` — 14.6 MB) |

---

## ⚡ Cài Đặt & Nâng Cấp Qua Homebrew (macOS)

```bash
brew install --cask stevedat/tap/nidontfs
```

Nâng cấp lên phiên bản mới nhất:
```bash
brew update && brew upgrade --cask nidontfs
```

---

## 🖥️ Giao Diện Thực Tế / Native macOS Screenshots

| 1. Đọc & Ghi Ổ Cứng NTFS, USB Flash & Thẻ Nhớ SD | 2. Trạm Truyền Tệp & Clipboard NidoDrop LAN |
| :---: | :---: |
| <img src="assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. Tự Động Cập Nhật (`NidoUpdater`) & 11 Ngôn Ngữ** | **4. Hệ Sinh Thái Sản Phẩm Độc Lập** |
| <img src="assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ Kiến Trúc Kỹ Thuật / System Architecture

<p align="center">
  <img src="assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## ✨ Năng Lực Cốt Lõi / Core Capabilities

1. **Nhận Diện Phần Cứng Chuyên Sâu & Đọc/Ghi NTFS Thích Ứng (`NTFS-3G 2026.9.28` + `FUSE-T 1.2.9`):**
   - Phân biệt chính xác **SSD NVMe/SATA**, **USB Flash Drive**, **Thẻ nhớ SD/MicroSD**, **Ổ cứng cơ học (HDD)**, **USB Superfloppy** và phân vùng MBR `0x07` (`ExFAT` vs `NTFS`) bằng chữ ký OEM Boot Sector.
   - Tự động điều chỉnh khung truyền I/O thích ứng (**4 MB** cho SSD, **2 MB** cho HDD, **512 KB** cho USB Flash / Thẻ nhớ SD) giúp chống nghẽn bộ đệm NAND và triệt tiêu lỗi Finder `Error -36`.
   - Không yêu cầu hạ bảo mật SIP hay cài đặt Kernel Extension (`kext`); tích hợp mở khoá `hiberfil.sys`, sửa lỗi `ntfsfix`, đổi tên nhãn `ntfslabel` và định dạng `mkntfs`.
2. **Giải Nén & Đóng Gói Luồng Trực Tiếp (`NidoArchive` — `libarchive 3.7.4`):**
   - Giải nén thẳng `.zip`, `.7z`, `.rar`, `.tar.gz`, `.tar.xz`, `.iso`, `.cab`, `.xar` vào ổ cứng ngoài / USB với bộ đệm gộp **1 MB (Write-Coalescing)** mà không tốn dung lượng tạm trên ổ SSD trong máy Mac.
3. **Trạm Truyền Tệp Nội Bộ NidoDrop LAN:**
   - Truyền file dung lượng lớn (bộ đệm POSIX 1 MB, cơ chế tệp tạm nguyên tử `.nidopart` + `fsync`, hỗ trợ tua video `HTTP 206 Partial Content`) và đồng bộ **Smart Clipboard 2 chiều** giữa macOS, iOS, Android và Windows qua mạng Wi-Fi/LAN nội bộ bằng **Mã QR + mã PIN 4 số**.
4. **11 Ngôn Ngữ Toàn Cầu & Cập Nhật Tự Động (`NidoUpdater`):**
   - Hỗ trợ 11 ngôn ngữ (VI, EN, TH, JA, KO, ZH, ID, DE, IT, ES, PT) với thời gian tải 0ms; tự động kiểm tra và xác thực mã băm `SHA-256` + chữ ký số Apple Notarization trước khi nâng cấp.

---

## 🔐 Kiểm Chứng Toàn Vẹn Tệp / SHA-256 Verification

Tải tệp `SHA256SUMS.txt` từ trang Release mới nhất và kiểm tra trên Terminal:

```bash
shasum -a 256 -c SHA256SUMS.txt
```

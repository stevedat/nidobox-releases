<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

<p align="center">
  [🇺🇸 English](../README.md) · **[🇻🇳 Tiếng Việt](README.vi.md)** · [🇹🇭 ภาษาไทย](README.th.md) · [🇯🇵 日本語](README.ja.md) · [🇰🇷 한국어](README.ko.md) · [🇨🇳 简体中文](README.zh.md) · [🇮🇩 Bahasa Indonesia](README.id.md) · [🇩🇪 Deutsch](README.de.md) · [🇮🇹 Italiano](README.it.md) · [🇪🇸 Español](README.es.md) · [🇵🇹 Português](README.pt.md)
</p>

# NidoNTFS — Đọc/Ghi NTFS Nguyên Bản, Sức Khoẻ Ổ Đĩa S.M.A.R.T., Tối Ưu I/O USB/SSD & NidoDrop LAN cho macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Native_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** là bộ công cụ hệ thống gốc (**Native SwiftUI Universal 2: `arm64` + `x86_64`**) dành cho **macOS 13.0+ (Ventura, Sonoma, Sequoia, Tahoe)**, kết hợp trình quản lý **Đọc & Ghi NTFS không cần kext (`NTFS-3G 2026.9.28` + `FUSE-T 1.2.9`)**, theo dõi **Sức khoẻ ổ đĩa S.M.A.R.T.**, giải nén luồng trực tiếp **NidoArchive (`libarchive 3.7.4`)**, trạm truyền tệp nội bộ **NidoDrop LAN** và **NidoUpdater**.

---

## 📦 Tải Nhanh Bộ Cài Chính Thức

Các liên kết dưới đây luôn tự động trỏ tới bản phát hành mới nhất đã công chứng Apple (`v1.2.2`):

| Hệ điều hành | Kiến trúc | Bộ cài trực tiếp | Ghi chú |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | Bộ cài kéo-thả chuẩn (`16.1 MB`) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | Bộ cài cho Mac chip M1–M4 (`16.1 MB`) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | Bộ cài cho Mac chip Intel (`16.1 MB`) |
| **macOS Universal 2 (`v1.2.2` DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.2-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.2/NidoNTFS-1.2.2-universal.dmg) | Bộ cài kéo-thả chuẩn (`16.1 MB`) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | Gói nén `.app` di động (`14.9 MB`) |

---

## ⚡ Cài Đặt & Nâng Cấp Qua Homebrew

```bash
brew install --cask stevedat/tap/nidontfs
```

```bash
brew update && brew upgrade --cask nidontfs
```

---

## ✨ Tính Năng Cốt Lõi

- **Đọc/Ghi NTFS Không Cần Kext & Chống Treo Máy Khi Sleep/Wake:** Vận hành trên `NTFS-3G` + `FUSE-T` kết hợp truy vấn bảng mount `MNT_NOWAIT` không chặn nhân, tự động xả đệm (`sync`) trước khi máy ngủ và dọn dẹp tức thì điểm mount ngắt kết nối.
- **Hiển Thị Sức Khoẻ Ổ Đĩa & S.M.A.R.T. Trực Quan:** Theo dõi trạng thái S.M.A.R.T., tuổi thọ chip nhớ còn lại (`%`), nhiệt độ (`°C`), tổng dữ liệu Đọc/Ghi (`TBW/TBR`), tốc độ cổng USB vật lý (cảnh báo khi cắm SSD vào cáp/cổng `USB 2.0 480 Mbps`) và cấu hình I/O.
- **Bộ Máy I/O Thích Ứng Đa Thiết Bị:** Tự động phân bổ khung truyền `4 MB` cho SSD, `2 MB` cho HDD và `512 KB` cho USB Flash / Thẻ nhớ SD — triệt tiêu lỗi Finder `Error -36`.
- **Giải Nén Luồng Trực Tiếp (`NidoArchive` — `libarchive 3.7.4`):** Giải nén thẳng `.zip`, `.7z`, `.rar`, `.tar.gz`, `.xz`, `.iso` vào ổ đĩa ngoài với bộ đệm gộp 1 MB, không tốn dung lượng tạm trên ổ trong.
- **Trạm Truyền Tệp Nội Bộ NidoDrop LAN:** Truyền tệp dung lượng lớn và đồng bộ Clipboard 2 chiều giữa macOS, iOS, Android, Windows qua Wi-Fi/LAN bằng mã QR & PIN 4 số.

---

## 🖥️ Giao Diện Thực Tế Trên macOS

| 1. NTFS, USB & SD Read/Write + S.M.A.R.T. Health | 2. NidoDrop LAN File & Clipboard Station |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. NidoUpdater & 11-Language Engine** | **4. Companion Apps Ecosystem** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ Kiến Trúc Kỹ Thuật

<p align="center">
  <img src="../assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## 🔐 Kiểm Chứng Toàn Vẹn Tệp (SHA-256)

```bash
shasum -a 256 -c SHA256SUMS.txt
```

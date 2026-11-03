<p align="center">
  <img src="assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

# NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** là bộ công cụ hệ thống gốc (**Native SwiftUI Universal 2: `arm64` + `x86_64`**) gọn nhẹ dành cho **macOS 13.0+ (Ventura, Sonoma, Sequoia, Tahoe)**, kết hợp trình quản lý **Đọc & Ghi ổ cứng NTFS tốc độ cao không cần Kernel Extension (`NTFS-3G 2026.9.28` + `FUSE-T 1.2.9`)**, trạm truyền tệp nội bộ **NidoDrop LAN** và trình cập nhật tự động **NidoUpdater**.

---

## 📦 Tải Nhanh Bộ Cài Mới Nhất / Direct Downloads (Evergreen Links)

Các liên kết dưới đây luôn tự động trỏ tới phiên bản chính thức mới nhất (`Latest Release`):

| Hệ điều hành / Platform | Kiến trúc | Bộ cài trực tiếp / Direct Download | Ghi chú |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | Bộ cài kéo-thả chuẩn (`.dmg` — ~15.3 MB) |
| **macOS Universal 2 (Versioned DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.0.0-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-1.0.0-universal.dmg) | Bản đóng gói `v1.0.0` (`.dmg` — ~15.3 MB) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | Gói nén `.app` chạy trực tiếp & `NidoUpdater` (`.zip` — ~14.2 MB) |

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

| 1. Đọc & Ghi Ổ Cứng NTFS (`NTFS-3G` + `FUSE-T`) | 2. Trạm Truyền Tệp & Clipboard NidoDrop LAN |
| :---: | :---: |
| <img src="assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. Tự Động Cập Nhật (`NidoUpdater`) & Quyền Trợ Lý** | **4. Hệ Sinh Thái Nido Holdings & VieLotus** |
| <img src="assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="VieLotus & Nido Holdings Ecosystem" /> |

---

## 🏛️ Kiến Trúc Kỹ Thuật / System Architecture

<p align="center">
  <img src="assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## ✨ Năng Lực Cốt Lõi / Core Capabilities

1. **Đọc & Ghi NTFS Toàn Diện Không Cần Kext (`NTFS-3G 2026.9.28` + `FUSE-T 1.2.9`):**
   - Không yêu cầu hạ bảo mật SIP (`System Integrity Protection`) hay cài đặt Kernel Extension (`kext`).
   - Tự động chuyển ổ đĩa NTFS sang chế độ **Đọc & Ghi (Read/Write)** ngay khi cắm vào máy Mac.
   - Tích hợp mở khoá phân vùng ngủ đông Windows (`hiberfil.sys`), kiểm tra & sửa lỗi phân vùng (`ntfsfix`), đổi tên nhãn ổ đĩa (`ntfslabel`), định dạng (`mkntfs`) và quản lý ổ đĩa ngoài `APFS / ExFAT / FAT32`.
2. **Trạm Truyền Tệp Nội Bộ NidoDrop LAN:**
   - Truyền file dung lượng lớn (Streaming I/O, hỗ trợ tua video `HTTP 206 Partial Content`) và đồng bộ **Smart Clipboard 2 chiều** giữa macOS, iOS, Android và Windows qua mạng Wi-Fi/LAN nội bộ bằng **Mã QR + mã PIN 4 số** (chống dò mã constant-time).
   - Cho phép chọn **ổ cứng ngoài / ổ NTFS đang cắm** làm thư mục đích để lưu trực tiếp tệp từ điện thoại sang ổ cứng rời mà không tốn dung lượng ổ SSD trong máy Mac.
3. **Trình Cập Nhật Tự Động Tích Hợp (`NidoUpdater`):**
   - Tự động kiểm tra bản phát hành mới từ `latest-mac.json` / GitHub Releases API, đối chiếu mã băm `SHA-256` & chữ ký số `codesign` trước khi nâng cấp tự động vào `/Applications/NidoNTFS.app`.
4. **Song Ngữ Anh – Việt (`VI` / `EN`) & Quản Lý Hệ Thống Sạch Sẽ:**
   - Chuyển đổi ngôn ngữ tức thì (`VI` ⇄ `EN`), hỗ trợ tự khởi động cùng macOS (`LaunchAgent`), chạy ngầm trên thanh Menu Bar và công cụ gỡ bỏ sạch 1 chạm (`Clean Uninstall`).

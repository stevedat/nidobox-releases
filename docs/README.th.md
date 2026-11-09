<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

<p align="center">
  [🇺🇸 English](../README.md) · [🇻🇳 Tiếng Việt](README.vi.md) · **[🇹🇭 ภาษาไทย](README.th.md)** · [🇯🇵 日本語](README.ja.md) · [🇰🇷 한국어](README.ko.md) · [🇨🇳 简体中文](README.zh.md) · [🇮🇩 Bahasa Indonesia](README.id.md) · [🇩🇪 Deutsch](README.de.md) · [🇮🇹 Italiano](README.it.md) · [🇪🇸 Español](README.es.md) · [🇵🇹 Português](README.pt.md)
</p>

# NidoNTFS — อ่าน/เขียน NTFS เนทีฟ, ตรวจสอบสุขภาพดิสก์ S.M.A.R.T., ปรับแต่ง I/O USB/SSD และ NidoDrop LAN สำหรับ macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Native_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** คือยูทิลิตี้ระบบเนทีฟ SwiftUI Universal 2 (`arm64` + `x86_64`) สำหรับ **macOS 13.0+**. รองรับการอ่าน/เขียน NTFS โดยไม่ต้องใช้ kext (`NTFS-3G` + `FUSE-T`), การตรวจสอบสุขภาพดิสก์ S.M.A.R.T., การแตกไฟล์ตรงลงดิสก์ (`NidoArchive`) และการแชร์ไฟล์ผ่าน LAN (`NidoDrop`).

---

## 📦 ดาวน์โหลดโดยตรง

ลิงก์ด้านล่างชี้ไปยังเวอร์ชันล่าสุดที่ผ่านการรับรองจาก Apple (`v1.2.2`):

| แพลตฟอร์ม | สถาปัตยกรรม | ลิงก์ดาวน์โหลด | รูปแบบ |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | ตัวติดตั้งมาตรฐาน `.dmg` (`16.1 MB`) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | สำหรับ Apple Silicon M1–M4 (`16.1 MB`) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | สำหรับ Intel Mac (`16.1 MB`) |
| **macOS Universal 2 (`v1.2.2` DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.2-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.2/NidoNTFS-1.2.2-universal.dmg) | ตัวติดตั้งมาตรฐาน `.dmg` (`16.1 MB`) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | ไฟล์พกพา `.zip` (`14.9 MB`) |

---

## ⚡ ติดตั้งผ่าน Homebrew

```bash
brew install --cask stevedat/tap/nidontfs
```

```bash
brew update && brew upgrade --cask nidontfs
```

---

## ✨ จุดเด่นสำคัญ

- **อ่าน/เขียน NTFS ความเร็วสูงและเสถียรเมื่อ Sleep/Wake:** ใช้ `MNT_NOWAIT` ป้องกันอาการค้างของ Finder เมื่อถอดสาย USB หรือพับหน้าจอ.
- **ตรวจสอบสุขภาพดิสก์ S.M.A.R.T.:** แสดงสถานะ S.M.A.R.T., อายุการใช้งาน SSD (`%`), อุณหภูมิ (`°C`), และความเร็วพอร์ต USB (`5–10 Gbps` vs `USB 2.0`).
- **Adaptive I/O Engine:** ปรับขนาดบัฟเฟอร์อัตโนมัติ (`4 MB` สำหรับ SSD, `2 MB` สำหรับ HDD, `512 KB` สำหรับ USB Flash / SD Card).
- **NidoArchive & NidoDrop LAN:** แตกไฟล์ `.zip`, `.7z`, `.rar`, `.iso` ลงดิสก์โดยตรง และส่งไฟล์ข้ามอุปกรณ์ผ่าน Wi-Fi LAN ด้วย QR Code.

---

## 🖥️ หน้าจอการใช้งานบน macOS

| 1. NTFS, USB & SD Read/Write + S.M.A.R.T. Health | 2. NidoDrop LAN File & Clipboard Station |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. NidoUpdater & 11-Language Engine** | **4. Companion Apps Ecosystem** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ สถาปัตยกรรมระบบ

<p align="center">
  <img src="../assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## 🔐 ตรวจสอบแฮช SHA-256

```bash
shasum -a 256 -c SHA256SUMS.txt
```

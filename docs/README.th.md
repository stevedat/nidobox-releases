<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Mac Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">简体中文</a> · <strong>ไทย</strong> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — อ่าน/เขียน NTFS, NidoDrop LAN และชุดยูทิลิตี้สำหรับ macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Homebrew](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidobox-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Apple Silicon](https://img.shields.io/badge/Apple_Silicon-arm64_Full-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Intel Mac](https://img.shields.io/badge/Intel-x86__64_Core-64748b?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(ชื่อเดิม NidoNTFS)* แอป SwiftUI เนทีฟสำหรับ **macOS 13.0+** แยกแพ็กเกจตามสถาปัตยกรรมชิปโดยตรง

## ดาวน์โหลด

| สถาปัตยกรรม | ตัวติดตั้ง (`v1.3.0`) | ฟีเจอร์ในชุด |
| :--- | :--- | :--- |
| **Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | ชุดเต็ม: NTFS R/W, NidoDrop LAN, Archive, Cleaner, Media, Capture + OCR, Snap (`9.2 MB`) |
| **Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | รุ่นหลัก: NTFS R/W, S.M.A.R.T., NidoDrop LAN (`9.0 MB`) |

### Homebrew

```bash
brew install --cask stevedat/tap/nidobox
# Upgrade: brew update && brew upgrade --cask nidobox
```

## ความสามารถหลัก

- **อ่าน/เขียน NTFS ไม่ใช้ Kext (`arm64` & `x86_64`):** เมาท์ใน `/Volumes` โดยไม่ต้องปิด SIP พร้อมตรวจสุขภาพ S.M.A.R.T.
- **NidoDrop LAN (`arm64` & `x86_64`):** ส่งไฟล์และคลิปบอร์ดผ่าน Wi-Fi ด้วย QR + PIN 4 หลักลงไดรฟ์นอกได้ทันที
- **Studio Suite (เฉพาะ `arm64`):** แตกไฟล์, ล้างดิสก์, แปลงสื่อ, แคปหน้าจอ + OCR ในเครื่อง, จัดหน้าต่าง และ Drop Shelf
- **อัปเกรดต่อเนื่อง:** อัปเดตจาก `NidoNTFS` เดิมโดยคงสิทธิ์ระบบครบถ้วน

## หน้าจอใช้งาน

| NTFS Read/Write & S.M.A.R.T. | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Auto-Updater & System Settings** | **Studio Tools & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## สถาปัตยกรรม

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## ตรวจสอบ SHA-256

```bash
shasum -a 256 -c SHA256SUMS.txt
```

<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Native Desktop Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">简体中文</a> · <strong>ไทย</strong> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — อ่าน/เขียน NTFS, NidoDrop LAN และชุดยูทิลิตี้เนทีฟ (macOS & Windows)

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![macOS arm64 & x64](https://img.shields.io/badge/macOS_13%2B-arm64_%26_x64-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Windows x64 & ARM64](https://img.shields.io/badge/Windows_10%2F11-x64_%26_ARM64-0078D4?style=flat-square&logo=windows)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(ชื่อเดิม NidoNTFS)* ชุดยูทิลิตี้เนทีฟสำหรับ **macOS 13.0+** (SwiftUI) และ **Windows 10/11** (Rust + Tauri 2.0 + WebGPU) แยกแพ็กเกจตามสถาปัตยกรรมชิปโดยตรง

## ดาวน์โหลด

| ระบบและสถาปัตยกรรม | ตัวติดตั้ง (`v1.4.0`) | ฟีเจอร์ในชุด |
| :--- | :--- | :--- |
| **macOS Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Mac ชุดเต็ม: NTFS R/W, NidoDrop LAN, Archive, Cleaner, Media, Capture + OCR, Snap (`13.5 MB`) |
| **macOS Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Mac รุ่นหลัก: NTFS R/W, S.M.A.R.T., NidoDrop LAN (`11.1 MB`) |
| **Windows 10/11 x64 (`x86_64`)** · Intel & AMD | [**NidoBox-win-x64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-x64.exe) | Windows x64 เนทีฟ: Capture Studio (WebGPU + OCR), NidoDrop LAN, แปลงภาพชุด, แตกไฟล์, เริ่มอัตโนมัติ (`2.9 MB`) |
| **Windows 11 ARM64 (`aarch64`)** · Snapdragon X | [**NidoBox-win-arm64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-arm64.exe) | Windows ARM64 เนทีฟ (Snapdragon X / Copilot+): ชุดเต็มสำหรับ Windows ARM64 (`2.6 MB`) |

## ความสามารถหลัก

- **อ่าน/เขียน NTFS ไม่ใช้ Kext (`macOS arm64 & x86_64`):** เมาท์ใน `/Volumes` โดยไม่ต้องปิด SIP พร้อมตรวจสุขภาพ S.M.A.R.T.
- **NidoDrop LAN ความเร็วสูง (`macOS & Windows`):** ส่งไฟล์และคลิปบอร์ดผ่าน Wi-Fi ด้วย QR + PIN 4 หลัก
- **Mac Studio Suite (`macOS arm64`):** แตกไฟล์, ล้างดิสก์, แปลงสื่อ, แคปหน้าจอ + OCR ตามต้องการ, ตัดต่อวิดีโออัดหน้าจอ, จัดหน้าต่าง
- **Windows Native Edition (`win-x64 & win-arm64`):** ขนาดเบา ~3 MB ด้วย Rust + WebGPU พร้อม Capture Studio, โน้ตเส้นโค้ง, ปิดข้อมูลสำคัญอัตโนมัติ, OCR ตามต้องการ และรันบนซิสเต็มเทรย์

## หน้าจอใช้งาน

| NTFS Read/Write & Drop Shelf HUD | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write & Drop Shelf" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Smart Screenshot Markup & Auto-Shield** | **Quick Record Studio & Video Trimmer** |
| <img src="../assets/screenshots/05_smart_capture_markup.png" width="100%" alt="NidoBox Smart Capture Markup" /> | <img src="../assets/screenshots/06_quick_record_studio.png" width="100%" alt="NidoBox Quick Record Studio" /> |
| **Auto-Updater & System Settings** | **Batch Media, Archive & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## สถาปัตยกรรม

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## ตรวจสอบ SHA-256

```bash
# macOS / Linux
shasum -a 256 -c SHA256SUMS.txt
# Windows PowerShell
Get-FileHash .\NidoBox-win-*.exe -Algorithm SHA256
```

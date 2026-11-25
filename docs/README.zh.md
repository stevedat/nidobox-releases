<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Native Desktop Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <strong>简体中文</strong> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — 原生 NTFS 读写、NidoDrop 局域网快传与桌面工具套件 (macOS & Windows)

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![macOS arm64 & x64](https://img.shields.io/badge/macOS_13%2B-arm64_%26_x64-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Windows x64 & ARM64](https://img.shields.io/badge/Windows_10%2F11-x64_%26_ARM64-0078D4?style=flat-square&logo=windows)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Linux x86_64 & ARM64](https://img.shields.io/badge/Linux-APT_%7C_deb_%7C_rpm_%7C_arch_%7C_flatpak-f97316?style=flat-square&logo=linux)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** 是面向 **macOS 13.0+** (SwiftUI) 与 **Windows 10/11** (Rust + Tauri 2.0 + WebGPU) 的原生桌面工具箱，按芯片架构提供独立单架构安装包。

## 下载安装包

| 系统与芯片架构 | 当前版本 (`v1.4.1`) | 包含功能 |
| :--- | :--- | :--- |
| **macOS Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Mac 完整套件：NTFS 读写、NidoDrop、解压、清理、媒体转换、截图 + OCR、录屏、分屏 (`10.2 MB`) |
| **macOS Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Mac 核心版：NTFS 读写、S.M.A.R.T. 检测、NidoDrop 局域网传输 (`9.4 MB`) |
| **Windows 10/11 x64 (`x86_64`)** · Intel & AMD | [**NidoBox-win-x64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-x64.exe) | Windows x64 原生版：Capture Studio (WebGPU + 标注 + OCR)、NidoDrop 快传、批量图像转换、归档解压、开机自启 (`3.0 MB`) |
| **Windows 11 ARM64 (`aarch64`)** · Snapdragon X | [**NidoBox-win-arm64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-arm64.exe) | Windows ARM64 原生版 (Snapdragon X / Copilot+)：完整 Windows 套件，零转译损耗 (`2.7 MB`) |
| **Linux x86_64 (`amd64`)** · Debian/Ubuntu/Fedora/Arch | [**.deb**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox_1.4.7_amd64.deb) · [**.rpm**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox-1.4.7-1.x86_64.rpm) · [**.pkg.tar.zst**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox-1.4.7-1-x86_64.pkg.tar.zst) · [**.tar.gz**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox-1.4.7-linux-x86_64.tar.gz) | Linux x86_64 (Debian/Ubuntu, Fedora/openSUSE, Arch, Portable): GTK4 + Static Rust, Capture + Callouts + OCR, NidoDrop LAN, NidoImage, NidoArchive, 1-click NTFS Repair |
| **Linux ARM64 (`aarch64`)** · Ubuntu-Nido/RPi/ARM | [**.deb**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox_1.4.7_arm64.deb) · [**.rpm**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox-1.4.7-1.aarch64.rpm) · [**.pkg.tar.zst**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox-1.4.7-1-aarch64.pkg.tar.zst) · [**.tar.gz**](https://github.com/stevedat/nidobox-releases/releases/latest/download/nidobox-1.4.7-linux-aarch64.tar.gz) | Linux ARM64 (Apple VM, Raspberry Pi, ARM Laptops): Native aarch64 static Rust + GTK4 suite |

### Linux APT Repository (Debian 12+ / Ubuntu 22.04+ / 24.04+ · `amd64` & `arm64`)

```bash
sudo install -d -m 0755 /etc/apt/keyrings
curl -fsSL https://ubuntu-nido-apt.pages.dev/ubuntu-nido.asc | sudo tee /etc/apt/keyrings/ubuntu-nido.asc >/dev/null
echo "deb [signed-by=/etc/apt/keyrings/ubuntu-nido.asc] https://ubuntu-nido-apt.pages.dev noble main" | sudo tee /etc/apt/sources.list.d/nidobox.list >/dev/null
sudo apt update && sudo apt install -y nidobox
```

## 核心能力

- **免内核扩展 NTFS 读写 (`macOS arm64 & x86_64`)：** 无需关闭 SIP 挂载至 `/Volumes`，支持 S.M.A.R.T. 与休眠安全同步。
- **高速 NidoDrop 局域网快传 (`macOS & Windows`)：** 扫码 + 4 位 PIN 码跨设备高速传输大文件与剪贴板。
- **Mac Studio 套件 (`macOS arm64`)：** 归档解压、磁盘清理、批量媒体转换、智能截图美化 + 按需本地 OCR、录屏剪辑、窗口分屏与暂存架。
- **Windows 原生套件 (`win-x64 & win-arm64`)：** ~3 MB 轻量级 Rust + WebGPU 架构，内置截图美化、曲线引线批注、敏感信息自动遮挡、按需 OCR、多线程图像转换与系统托盘自启。

## 界面预览

| NTFS Read/Write & Drop Shelf HUD | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write & Drop Shelf" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Smart Screenshot Markup & Auto-Shield** | **Quick Record Studio & Video Trimmer** |
| <img src="../assets/screenshots/05_smart_capture_markup.png" width="100%" alt="NidoBox Smart Capture Markup" /> | <img src="../assets/screenshots/06_quick_record_studio.png" width="100%" alt="NidoBox Quick Record Studio" /> |
| **Auto-Updater & System Settings** | **Batch Media, Archive & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## 系统架构

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## SHA-256 校验

```bash
# macOS / Linux
shasum -a 256 -c SHA256SUMS.txt
# Windows PowerShell
Get-FileHash .\NidoBox-win-*.exe -Algorithm SHA256
```

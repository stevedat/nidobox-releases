<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Mac Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <strong>简体中文</strong> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — macOS 原生 NTFS 读写、NidoDrop 局域网快传与系统工具箱

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Homebrew](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidobox-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Apple Silicon](https://img.shields.io/badge/Apple_Silicon-arm64_Full-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Intel Mac](https://img.shields.io/badge/Intel-x86__64_Core-64748b?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(原名 NidoNTFS)* 是面向 **macOS 13.0+** 的原生 SwiftUI 工具，按芯片架构提供独立单架构安装包。

## 下载安装包

| Mac 架构 | 当前版本 (`v1.3.1`) | 包含功能 |
| :--- | :--- | :--- |
| **Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | 完整套件：NTFS 读写、NidoDrop、解压、清理、媒体转换、截图 + OCR、分屏 (`9.6 MB`) |
| **Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | 核心版：NTFS 读写、S.M.A.R.T. 检测、NidoDrop 局域网传输 (`9.0 MB`) |

### Homebrew 安装

```bash
brew install --cask stevedat/tap/nidobox
# Upgrade: brew update && brew upgrade --cask nidobox
```

## 核心能力

- **免内核扩展 NTFS 读写 (`arm64` & `x86_64`)：** 无需关闭 SIP 挂载至 `/Volumes`，支持 S.M.A.R.T. 与休眠安全同步。
- **NidoDrop 局域网快传 (`arm64` & `x86_64`)：** 扫码 + 4 位 PIN 码高速传输大文件与剪贴板至外接硬盘。
- **Studio 工具套件 (`arm64` 专属)：** 归档解压、磁盘清理、批量媒体转换、截图美化 + 本地 OCR、窗口分屏与暂存架。
- **无缝就地升级：** 从旧版 `NidoNTFS` 平滑升级并保留系统授权。

## 界面预览

| NTFS Read/Write & S.M.A.R.T. | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Auto-Updater & System Settings** | **Studio Tools & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## 系统架构

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## SHA-256 校验

```bash
shasum -a 256 -c SHA256SUMS.txt
```

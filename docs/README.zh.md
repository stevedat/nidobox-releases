<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

<p align="center">
  [🇺🇸 English](../README.md) · [🇻🇳 Tiếng Việt](README.vi.md) · [🇹🇭 ภาษาไทย](README.th.md) · [🇯🇵 日本語](README.ja.md) · [🇰🇷 한국어](README.ko.md) · **[🇨🇳 简体中文](README.zh.md)** · [🇮🇩 Bahasa Indonesia](README.id.md) · [🇩🇪 Deutsch](README.de.md) · [🇮🇹 Italiano](README.it.md) · [🇪🇸 Español](README.es.md) · [🇵🇹 Português](README.pt.md)
</p>

# NidoNTFS — macOS 原生 NTFS 读写、S.M.A.R.T. 磁盘健康检测、自适应 USB/SSD I/O 与 NidoDrop 局域网快传

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Native_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** 是一款专为 **macOS 13.0+** 打造的原生 SwiftUI Universal 2 (`arm64` + `x86_64`) 系统工具，集成免内核扩展 **NTFS 读写 (`NTFS-3G` + `FUSE-T`)**、**S.M.A.R.T. 磁盘健康监测**、**`NidoArchive`** 流式解压以及 **`NidoDrop LAN`** 局域网传输。

---

## 📦 直接下载安装包

以下链接始终指向经 Apple 公证的最新正式版本 (`v1.2.2`)：

| 平台 | 架构 | 直接下载 | 说明 |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | 标准拖拽安装包 `.dmg` (`16.1 MB`) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | Apple Silicon M1–M4 专用 (`16.1 MB`) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | Intel Mac 专用 (`16.1 MB`) |
| **macOS Universal 2 (`v1.2.2` DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.2-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.2/NidoNTFS-1.2.2-universal.dmg) | 标准拖拽安装包 `.dmg` (`16.1 MB`) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | 便携版 `.zip` 压缩包 (`14.9 MB`) |

---

## ⚡ 通过 Homebrew 安装与升级

```bash
brew install --cask stevedat/tap/nidontfs
```

```bash
brew update && brew upgrade --cask nidontfs
```

---

## ✨ 核心亮点

- **免内核扩展 NTFS 读写与休眠唤醒保护：** 采用非阻塞 `MNT_NOWAIT` 挂载表检测与休眠前自动刷盘 (`sync`)，彻底杜绝拔出 U 盘或合盖休眠导致的 Finder 卡死与重启。
- **实时 S.M.A.R.T. 与磁盘健康面板：** 直观显示 S.M.A.R.T. 状态、SSD 剩余寿命 (`%`)、温度 (`°C`)、累计读写量 (`TBW/TBR`) 及物理 USB 速率（自动提醒 `USB 2.0` 线材瓶颈）。
- **自适应存储介质 I/O 引擎：** 针对 SSD (`4 MB`)、HDD (`2 MB`) 与 U 盘/SD 卡 (`512 KB`) 自动调整传输窗口，彻底消除 Finder `Error -36`。
- **NidoArchive 流式解压与 NidoDrop 局域网快传：** 支持 `.zip` / `.7z` / `.rar` / `.iso` 直解外置硬盘，并通过二维码在 Mac、手机与 PC 间高速互传文件与剪贴板。

---

## 🖥️ macOS 原生界面预览

| 1. NTFS, USB & SD Read/Write + S.M.A.R.T. Health | 2. NidoDrop LAN File & Clipboard Station |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. NidoUpdater & 11-Language Engine** | **4. Companion Apps Ecosystem** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ 系统架构

<p align="center">
  <img src="../assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## 🔐 SHA-256 校验和验证

```bash
shasum -a 256 -c SHA256SUMS.txt
```

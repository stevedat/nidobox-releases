<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

<p align="center">
  [🇺🇸 English](../README.md) · [🇻🇳 Tiếng Việt](README.vi.md) · [🇹🇭 ภาษาไทย](README.th.md) · **[🇯🇵 日本語](README.ja.md)** · [🇰🇷 한국어](README.ko.md) · [🇨🇳 简体中文](README.zh.md) · [🇮🇩 Bahasa Indonesia](README.id.md) · [🇩🇪 Deutsch](README.de.md) · [🇮🇹 Italiano](README.it.md) · [🇪🇸 Español](README.es.md) · [🇵🇹 Português](README.pt.md)
</p>

# NidoNTFS — macOS向けネイティブNTFS読み書き・S.M.A.R.T.健康診断・USB/SSD高速I/O & NidoDrop LAN

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Native_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** は **macOS 13.0+** 対応のネイティブ SwiftUI Universal 2 (`arm64` + `x86_64`) システムユーティリティです。カーネル拡張不要の **NTFS 読み書き (`NTFS-3G` + `FUSE-T`)**、**S.M.A.R.T. ドライブ健康診断**、直接展開エンジン **`NidoArchive`**、LANファイル共有 **`NidoDrop`** を統合しています。

---

## 📦 ダイレクトダウンロード

Apple公証済みの最新リリース (`v1.2.2`) への直リンク:

| プラットフォーム | アーキテクチャ | インストーラ | 備考 |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | 標準 `.dmg` インストーラ (`16.1 MB`) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | Apple Silicon M1–M4 用 (`16.1 MB`) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | Intel Mac 用 (`16.1 MB`) |
| **macOS Universal 2 (`v1.2.2` DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.2-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.2/NidoNTFS-1.2.2-universal.dmg) | 標準 `.dmg` インストーラ (`16.1 MB`) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | ポータブル `.zip` (`14.9 MB`) |

---

## ⚡ Homebrew でのインストール

```bash
brew install --cask stevedat/tap/nidontfs
```

```bash
brew update && brew upgrade --cask nidontfs
```

---

## ✨ 主な機能

- **カーネル拡張不要のNTFS読み書き & スリープ復帰保護:** 非ブロッキング `MNT_NOWAIT` 監視とスリープ前の自動フラッシュにより、Finderのフリーズを完全に防止します。
- **リアルタイム S.M.A.R.T. & ドライブ健康状態表示:** S.M.A.R.T. 検証状態、SSD残寿命 (`%`)、温度 (`°C`)、総書込量 (`TBW`)、USBリンク速度 (`SuperSpeed` vs `USB 2.0` 警告) を表示。
- **メディア適応型 I/O エンジン:** SSD (`4 MB`)、HDD (`2 MB`)、USBメモリ/SDカード (`512 KB`) に合わせて転送フレームを自動最適化。
- **NidoArchive & NidoDrop LAN:** `.zip` / `.7z` / `.rar` / `.iso` の直接ストリーム展開と、QRコードによる高速LANファイル＆クリップボード共有。

---

## 🖥️ スクリーンショット

| 1. NTFS, USB & SD Read/Write + S.M.A.R.T. Health | 2. NidoDrop LAN File & Clipboard Station |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. NidoUpdater & 11-Language Engine** | **4. Companion Apps Ecosystem** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ システムアーキテクチャ

<p align="center">
  <img src="../assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## 🔐 SHA-256 チェックサム検証

```bash
shasum -a 256 -c SHA256SUMS.txt
```

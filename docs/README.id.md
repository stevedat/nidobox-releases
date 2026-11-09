<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

<p align="center">
  [🇺🇸 English](../README.md) · [🇻🇳 Tiếng Việt](README.vi.md) · [🇹🇭 ภาษาไทย](README.th.md) · [🇯🇵 日本語](README.ja.md) · [🇰🇷 한국어](README.ko.md) · [🇨🇳 简体中文](README.zh.md) · **[🇮🇩 Bahasa Indonesia](README.id.md)** · [🇩🇪 Deutsch](README.de.md) · [🇮🇹 Italiano](README.it.md) · [🇪🇸 Español](README.es.md) · [🇵🇹 Português](README.pt.md)
</p>

# NidoNTFS — Baca/Tulis NTFS Native, Kesehatan Disk S.M.A.R.T., I/O Adaptif USB/SSD & NidoDrop LAN untuk macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Native_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** adalah utilitas sistem SwiftUI Universal 2 (`arm64` + `x86_64`) native untuk **macOS 13.0+**, menggabungkan **Baca/Tulis NTFS tanpa kext (`NTFS-3G` + `FUSE-T`)**, pemantauan **Kesehatan Disk S.M.A.R.T.**, ekstraksi arsip **`NidoArchive`**, dan berbagi file **`NidoDrop LAN`**.

---

## 📦 Unduhan Langsung

Tautan langsung ke rilis resmi terbaru yang telah dinotariskan Apple (`v1.2.2`):

| Platform | Arsitektur | Penginstal Langsung | Format |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | Penginstal `.dmg` Standar (`16.1 MB`) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | Untuk Apple Silicon M1–M4 (`16.1 MB`) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | Untuk Intel Mac (`16.1 MB`) |
| **macOS Universal 2 (`v1.2.2` DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.2-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.2/NidoNTFS-1.2.2-universal.dmg) | Penginstal `.dmg` Standar (`16.1 MB`) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | Paket Portabel `.zip` (`14.9 MB`) |

---

## ⚡ Instal melalui Homebrew

```bash
brew install --cask stevedat/tap/nidontfs
```

```bash
brew update && brew upgrade --cask nidontfs
```

---

## ✨ Fitur Utama

- **Baca/Tulis NTFS Stabil & Tahan Sleep/Wake:** Menggunakan pemeriksaan mount non-blocking `MNT_NOWAIT` dan flush otomatis sebelum sleep agar Finder tidak pernah macet.
- **Diagnostik Kesehatan Disk & S.M.A.R.T.:** Menampilkan status S.M.A.R.T., sisa umur SSD (`%`), suhu (`°C`), total baca/tulis (`TBW/TBR`), serta kecepatan port USB.
- **Mesin I/O Adaptif:** Mengatur jendela transfer otomatis (`4 MB` SSD, `2 MB` HDD, `512 KB` USB Flash / SD Card) bebas `Error -36`.
- **NidoArchive & NidoDrop LAN:** Ekstrak `.zip`, `.7z`, `.rar`, `.iso` langsung ke drive eksternal dan kirim file via Wi-Fi LAN dengan QR Code.

---

## 🖥️ Antarmuka macOS Native

| 1. NTFS, USB & SD Read/Write + S.M.A.R.T. Health | 2. NidoDrop LAN File & Clipboard Station |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. NidoUpdater & 11-Language Engine** | **4. Companion Apps Ecosystem** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ Arsitektur Sistem

<p align="center">
  <img src="../assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## 🔐 Verifikasi Checksum SHA-256

```bash
shasum -a 256 -c SHA256SUMS.txt
```

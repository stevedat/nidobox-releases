<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

<p align="center">
  [🇺🇸 English](../README.md) · [🇻🇳 Tiếng Việt](README.vi.md) · [🇹🇭 ภาษาไทย](README.th.md) · [🇯🇵 日本語](README.ja.md) · [🇰🇷 한국어](README.ko.md) · [🇨🇳 简体中文](README.zh.md) · [🇮🇩 Bahasa Indonesia](README.id.md) · [🇩🇪 Deutsch](README.de.md) · [🇮🇹 Italiano](README.it.md) · [🇪🇸 Español](README.es.md) · **[🇵🇹 Português](README.pt.md)**
</p>

# NidoNTFS — Leitura/Gravação NTFS Nativa, Saúde do Disco S.M.A.R.T., I/O Adaptativo USB/SSD e NidoDrop LAN para macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Native_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS** é um utilitário nativo SwiftUI Universal 2 (`arm64` + `x86_64`) para **macOS 13.0+** que reúne **Leitura/Gravação NTFS sem kext (`NTFS-3G` + `FUSE-T`)**, diagnóstico **S.M.A.R.T.**, extração direta **`NidoArchive`** e transferência **`NidoDrop LAN`**.

---

## 📦 Downloads Diretos

Links diretos para a versão oficial mais recente notarizada pela Apple (`v1.2.2`):

| Plataforma | Arquitetura | Instalador Direto | Formato |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | Instalador `.dmg` padrão (`16.1 MB`) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | Para Apple Silicon M1–M4 (`16.1 MB`) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | Para Mac Intel (`16.1 MB`) |
| **macOS Universal 2 (`v1.2.2` DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.2-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.2/NidoNTFS-1.2.2-universal.dmg) | Instalador `.dmg` padrão (`16.1 MB`) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | Pacote portátil `.zip` (`14.9 MB`) |

---

## ⚡ Instalação via Homebrew

```bash
brew install --cask stevedat/tap/nidontfs
```

```bash
brew update && brew upgrade --cask nidontfs
```

---

## ✨ Destaques Principais

- **Leitura/Gravação NTFS Estável e Proteção Sleep/Wake:** Verificação `MNT_NOWAIT` não bloqueante e descarga automática de buffer antes de dormir para evitar travamentos no Finder.
- **Saúde do Disco & Telemetria S.M.A.R.T.:** Exibe status S.M.A.R.T., vida útil restante do SSD (`%`), temperatura (`°C`), `TBW/TBR` e velocidade da porta USB.
- **Motor de I/O Adaptativo:** Configura automaticamente janelas de `4 MB` (SSD), `2 MB` (HDD) e `512 KB` (Pen Drive USB / Cartão SD) sem `Error -36`.
- **NidoArchive & NidoDrop LAN:** Extraia `.zip`, `.7z`, `.rar`, `.iso` direto no disco externo e transfira arquivos via Wi-Fi LAN com QR Code.

---

## 🖥️ Interface Nativa do macOS

| 1. NTFS, USB & SD Read/Write + S.M.A.R.T. Health | 2. NidoDrop LAN File & Clipboard Station |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. NidoUpdater & 11-Language Engine** | **4. Companion Apps Ecosystem** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ Arquitetura do Sistema

<p align="center">
  <img src="../assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## 🔐 Verificação SHA-256

```bash
shasum -a 256 -c SHA256SUMS.txt
```

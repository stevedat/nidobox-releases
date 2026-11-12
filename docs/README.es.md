<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Mac Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">简体中文</a> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <strong>Español</strong> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — Lectura/Escritura NTFS, NidoDrop LAN y Utilidades para macOS

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Homebrew](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidobox-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Apple Silicon](https://img.shields.io/badge/Apple_Silicon-arm64_Full-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Intel Mac](https://img.shields.io/badge/Intel-x86__64_Core-64748b?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(antes NidoNTFS)* es una utilidad SwiftUI nativa para **macOS 13.0+** distribuida en paquetes dedicados por arquitectura.

## Descargas

| Arquitectura Mac | Instalador (`v1.3.0`) | Enlace Siempre Actual | Funciones Incluidas |
| :--- | :--- | :--- | :--- |
| **Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-1.3.0-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/download/v1.3.0/NidoBox-1.3.0-arm64.dmg) | [`NidoBox-mac-arm64.dmg`](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Suite Completa: NTFS L/E, NidoDrop LAN, Archivos, Limpiador, Media, Captura + OCR, Snap (`9.2 MB`) |
| **Intel (`x86_64`)** | [**NidoBox-1.3.0-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/download/v1.3.0/NidoBox-1.3.0-x64.dmg) | [`NidoBox-mac-x64.dmg`](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Edición Base: NTFS L/E, S.M.A.R.T., NidoDrop LAN (`9.0 MB`) |

### Homebrew

```bash
brew install --cask stevedat/tap/nidobox
# Upgrade: brew update && brew upgrade --cask nidobox
```

## Capacidades Clave

- **NTFS Lectura/Escritura sin Kext (`arm64` & `x86_64`):** Montaje en `/Volumes` sin desactivar SIP y estado S.M.A.R.T.
- **NidoDrop LAN (`arm64` & `x86_64`):** Transferencia Wi-Fi local de archivos y portapapeles con QR + PIN de 4 dígitos.
- **Suite Studio (`arm64` Apple Silicon):** Compresión, Limpiador, Conversor Multimedia, Captura + OCR local, Window Snap y Drop Shelf.
- **Actualización Directa:** Transición automática desde `NidoNTFS` conservando permisos de macOS.

## Interfaz

| NTFS Read/Write & S.M.A.R.T. | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Auto-Updater & System Settings** | **Studio Tools & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## Arquitectura

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## Verificación SHA-256

```bash
shasum -a 256 -c SHA256SUMS.txt
```

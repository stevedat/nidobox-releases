<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Native Desktop Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">简体中文</a> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <strong>Português</strong>
</p>

# NidoBox — Leitura/Gravação NTFS, NidoDrop LAN e Suíte Nativa (macOS & Windows)

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Homebrew](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidobox-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![macOS arm64 & x64](https://img.shields.io/badge/macOS_13%2B-arm64_%26_x64-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Windows x64 & ARM64](https://img.shields.io/badge/Windows_10%2F11-x64_%26_ARM64-0078D4?style=flat-square&logo=windows)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(antigo NidoNTFS)* é uma suíte nativa para **macOS 13.0+** (SwiftUI) e **Windows 10/11** (Rust + Tauri 2.0 + WebGPU) com instaladores dedicados por arquitetura.

## Downloads

| Plataforma e Arquitetura | Instalador (`v1.4.0`) | Recursos Incluídos |
| :--- | :--- | :--- |
| **macOS Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Mac Suíte Completa: NTFS L/G, NidoDrop LAN, Arquivos, Limpeza, Mídia, Captura + OCR, Snap (`9.7 MB`) |
| **macOS Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Mac Edição Core: NTFS L/G, S.M.A.R.T., NidoDrop LAN (`9.0 MB`) |
| **Windows 10/11 x64 (`x86_64`)** · Intel & AMD | [**NidoBox-win-x64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-x64.exe) | Windows x64 Nativo: Capture Studio (WebGPU + OCR), NidoDrop LAN, Conversor em Lote, Arquivos, Inicialização Automática (`2.9 MB`) |
| **Windows 11 ARM64 (`aarch64`)** · Snapdragon X | [**NidoBox-win-arm64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-arm64.exe) | Windows ARM64 Nativo (Snapdragon X / Copilot+): Suíte Windows completa sem emulação (`2.6 MB`) |

### Homebrew (macOS)

```bash
brew install --cask stevedat/tap/nidobox
# Upgrade: brew update && brew upgrade --cask nidobox
```

## Recursos Principais

- **NTFS Leitura/Gravação sem Kext (`macOS arm64 & x86_64`):** Montagem em `/Volumes` sem desativar o SIP e saúde S.M.A.R.T.
- **NidoDrop LAN Rápido (`macOS & Windows`):** Transferência Wi-Fi local de arquivos e área de transferência via QR + PIN de 4 dígitos.
- **Mac Suíte Studio (`macOS arm64`):** Arquivos, Limpeza, Conversor de Mídia, Captura + OCR sob demanda, Quick Record Studio e Window Snap.
- **Edição Windows Nativa (`win-x64 & win-arm64`):** Instalador leve (~3 MB) em Rust + WebGPU com Capture Studio, notas Callout em curva, Auto-Shield, OCR sob demanda, conversão paralela e bandeja do sistema.

## Interface

| NTFS Read/Write & Drop Shelf HUD | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write & Drop Shelf" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Smart Screenshot Markup & Auto-Shield** | **Quick Record Studio & Video Trimmer** |
| <img src="../assets/screenshots/05_smart_capture_markup.png" width="100%" alt="NidoBox Smart Capture Markup" /> | <img src="../assets/screenshots/06_quick_record_studio.png" width="100%" alt="NidoBox Quick Record Studio" /> |
| **Auto-Updater & System Settings** | **Batch Media, Archive & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## Arquitetura

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## Verificação SHA-256

```bash
# macOS / Linux
shasum -a 256 -c SHA256SUMS.txt
# Windows PowerShell
Get-FileHash .\NidoBox-win-*.exe -Algorithm SHA256
```

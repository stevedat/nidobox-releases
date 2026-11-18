<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Native Desktop Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <strong>한국어</strong> · <a href="README.zh.md">简体中文</a> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — NTFS 읽기/쓰기, NidoDrop LAN 및 네이티브 데스크톱 유틸리티 (macOS & Windows)

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![macOS arm64 & x64](https://img.shields.io/badge/macOS_13%2B-arm64_%26_x64-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Windows x64 & ARM64](https://img.shields.io/badge/Windows_10%2F11-x64_%26_ARM64-0078D4?style=flat-square&logo=windows)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** 는 **macOS 13.0+** (SwiftUI) 및 **Windows 10/11** (Rust + Tauri 2.0 + WebGPU) 용 네이티브 유틸리티 스위트로, 아키텍처별 전용 빌드로 제공됩니다。

## 다운로드

| 플랫폼 및 아키텍처 | 설치 파일 (`v1.4.0`) | 포함 기능 |
| :--- | :--- | :--- |
| **macOS Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | Mac 전체 기능: NTFS R/W, NidoDrop LAN, 압축, 클리너, 미디어, 캡처 + OCR, 스냅 (`9.7 MB`) |
| **macOS Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | Mac 코어 에디션: NTFS R/W, S.M.A.R.T., NidoDrop LAN (`9.0 MB`) |
| **Windows 10/11 x64 (`x86_64`)** · Intel & AMD | [**NidoBox-win-x64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-x64.exe) | Windows x64 네이티브: Capture Studio (WebGPU + OCR), NidoDrop LAN, 일괄 이미지 변환, 압축, 자동 실행 (`2.9 MB`) |
| **Windows 11 ARM64 (`aarch64`)** · Snapdragon X | [**NidoBox-win-arm64.exe**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-win-arm64.exe) | Windows ARM64 네이티브 (Snapdragon X / Copilot+): 전체 Windows 기능 (`2.6 MB`) |

## 핵심 기능

- **무커널 확장 NTFS 읽기/쓰기 (`macOS arm64 & x86_64`):** SIP 해제 없이 `/Volumes` 마운트 및 S.M.A.R.T. 상태 확인.
- **초고속 NidoDrop LAN (`macOS & Windows`):** QR + 4자리 PIN으로 로컬 Wi-Fi 파일 및 클립보드 전송.
- **Mac Studio 스위트 (`macOS arm64`):** 아카이브, 디스크 클리너, 미디어 변환, 캡처 + 온디맨드 OCR, 화면 녹화 편집, 윈도우 스냅.
- **Windows 네이티브 에디션 (`win-x64 & win-arm64`):** 약 3 MB 경량 Rust + WebGPU 기반 캡처 스튜디오, 곡선 콜아웃 메모, 민감정보 자동 가림, 온디맨드 OCR, 병렬 이미지 변환 및 트레이 자동 시작.

## 인터페이스

| NTFS Read/Write & Drop Shelf HUD | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write & Drop Shelf" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Smart Screenshot Markup & Auto-Shield** | **Quick Record Studio & Video Trimmer** |
| <img src="../assets/screenshots/05_smart_capture_markup.png" width="100%" alt="NidoBox Smart Capture Markup" /> | <img src="../assets/screenshots/06_quick_record_studio.png" width="100%" alt="NidoBox Quick Record Studio" /> |
| **Auto-Updater & System Settings** | **Batch Media, Archive & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## 아키テク처

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## SHA-256 검증

```bash
# macOS / Linux
shasum -a 256 -c SHA256SUMS.txt
# Windows PowerShell
Get-FileHash .\NidoBox-win-*.exe -Algorithm SHA256
```

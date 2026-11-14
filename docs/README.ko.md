<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoBox — NTFS Read/Write, NidoDrop LAN & Mac Utility Suite" width="100%" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ja.md">日本語</a> · <strong>한국어</strong> · <a href="README.zh.md">简体中文</a> · <a href="README.th.md">ไทย</a> · <a href="README.id.md">Indonesia</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.it.md">Italiano</a> · <a href="README.pt.md">Português</a>
</p>

# NidoBox — macOS 네이티브 NTFS 읽기/쓰기, NidoDrop LAN 및 유틸리티 스위트

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidobox-releases?style=flat-square&label=Release&color=10b981)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Homebrew](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidobox-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Apple Silicon](https://img.shields.io/badge/Apple_Silicon-arm64_Full-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Intel Mac](https://img.shields.io/badge/Intel-x86__64_Core-64748b?style=flat-square&logo=apple)](https://github.com/stevedat/nidobox-releases/releases/latest)
[![Website](https://img.shields.io/badge/Website-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoBox** *(구 NidoNTFS)* 는 **macOS 13.0+** 용 네이티브 SwiftUI 앱으로, 아키텍처별 전용 단일 빌드로 제공됩니다.

## 다운로드

| Mac 아키텍처 | 설치 파일 (`v1.3.1`) | 포함 기능 |
| :--- | :--- | :--- |
| **Apple Silicon (`arm64`)** · M1–M4 | [**NidoBox-mac-arm64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-arm64.dmg) | 전체 기능: NTFS R/W, NidoDrop LAN, 압축, 클리너, 미디어, 캡처 + OCR, 스냅 (`9.6 MB`) |
| **Intel (`x86_64`)** | [**NidoBox-mac-x64.dmg**](https://github.com/stevedat/nidobox-releases/releases/latest/download/NidoBox-mac-x64.dmg) | 코어 에디션: NTFS R/W, S.M.A.R.T., NidoDrop LAN (`9.0 MB`) |

### Homebrew

```bash
brew install --cask stevedat/tap/nidobox
# Upgrade: brew update && brew upgrade --cask nidobox
```

## 핵심 기능

- **무커널 확장 NTFS 읽기/쓰기 (`arm64` & `x86_64`):** SIP 해제 없이 `/Volumes` 마운트 및 S.M.A.R.T. 상태 확인.
- **NidoDrop LAN (`arm64` & `x86_64`):** QR + 4자리 PIN으로 로컬 Wi-Fi 파일 및 클립보드 전송.
- **Studio 스위트 (`arm64` 전용):** 아카이브, 디스크 클리너, 미디어 변환, 캡처 + 온디바이스 OCR, 윈도우 스냅, 드롭 셸프.
- **자동 인플레이스 업그레이드:** 기존 `NidoNTFS` 권한을 유지한 채 `NidoBox` 로 전환.

## 인터페이스

| NTFS Read/Write & S.M.A.R.T. | NidoDrop LAN QR Transfer |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoBox NTFS Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN Transfer" /> |
| **Auto-Updater & System Settings** | **Studio Tools & Companion Apps** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="NidoBox Settings & Updater" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="NidoBox Studio & Ecosystem" /> |

## 아키텍처

<p align="center">
  <img src="../assets/nidobox-architecture.svg" alt="NidoBox Architecture" width="100%" />
</p>

## SHA-256 검증

```bash
shasum -a 256 -c SHA256SUMS.txt
```

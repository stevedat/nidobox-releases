<p align="center">
  <img src="../assets/OG-Banner-1200x630.png" alt="NidoNTFS — Native NTFS Read/Write & NidoDrop LAN for macOS" width="100%" />
</p>

<p align="center">
  [🇺🇸 English](../README.md) · [🇻🇳 Tiếng Việt](README.vi.md) · [🇹🇭 ภาษาไทย](README.th.md) · [🇯🇵 日本語](README.ja.md) · **[🇰🇷 한국어](README.ko.md)** · [🇨🇳 简体中文](README.zh.md) · [🇮🇩 Bahasa Indonesia](README.id.md) · [🇩🇪 Deutsch](README.de.md) · [🇮🇹 Italiano](README.it.md) · [🇪🇸 Español](README.es.md) · [🇵🇹 Português](README.pt.md)
</p>

# NidoNTFS — macOS용 네이티브 NTFS 읽기/쓰기, S.M.A.R.T. 디스크 건강 상태, 적응형 USB/SSD I/O 및 NidoDrop LAN

[![Latest Release](https://img.shields.io/github/v/release/stevedat/nidontfs-releases?style=flat-square&label=Latest%20Release&color=10b981)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Homebrew Cask](https://img.shields.io/badge/Homebrew-stevedat%2Ftap%2Fnidontfs-FBB040?style=flat-square&logo=homebrew)](https://github.com/stevedat/homebrew-tap)
[![Architecture](https://img.shields.io/badge/macOS-Universal_2_(arm64_%2B_x86__64)-38bdf8?style=flat-square&logo=apple)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Languages](https://img.shields.io/badge/Languages-11_Native_Locales-a855f7?style=flat-square)](https://github.com/stevedat/nidontfs-releases/releases/latest)
[![Official Portal](https://img.shields.io/badge/Portal-tools.nido--holdings.com-6366f1?style=flat-square)](https://tools.nido-holdings.com)

**NidoNTFS**는 **macOS 13.0+**용 네이티브 SwiftUI Universal 2 (`arm64` + `x86_64`) 유틸리티입니다. 커널 확장 없는 **NTFS 읽기/쓰기 (`NTFS-3G` + `FUSE-T`)**, 실시간 **S.M.A.R.T. 디스크 건강 진단**, **`NidoArchive`** 스트림 압축 해제 및 **`NidoDrop LAN`** 파일 전송을 제공합니다.

---

## 📦 직접 다운로드

Apple 공증이 완료된 최신 버전 (`v1.2.2`) 다운로드 링크:

| 플랫폼 | 아키텍처 | 설치 파일 | 비고 |
| :--- | :--- | :--- | :--- |
| **macOS Universal 2 (Evergreen DMG)** | `arm64` (M1–M4) & `x86_64` (Intel) | [**NidoNTFS-mac-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.dmg) | 표준 `.dmg` 설치 프로그램 (`16.1 MB`) |
| **macOS Apple Silicon (`arm64`)** | `arm64` (M1 / M2 / M3 / M4) | [**NidoNTFS-mac-arm64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-arm64.dmg) | Apple Silicon M1–M4 전용 (`16.1 MB`) |
| **macOS Intel (`x86_64`)** | `x86_64` (Intel Mac) | [**NidoNTFS-mac-x64.dmg**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-x64.dmg) | Intel Mac 전용 (`16.1 MB`) |
| **macOS Universal 2 (`v1.2.2` DMG)** | `arm64` & `x86_64` | [**NidoNTFS-1.2.2-universal.dmg**](https://github.com/stevedat/nidontfs-releases/releases/download/v1.2.2/NidoNTFS-1.2.2-universal.dmg) | 표준 `.dmg` 설치 프로그램 (`16.1 MB`) |
| **macOS Universal 2 (Portable ZIP)** | `arm64` & `x86_64` | [**NidoNTFS-mac-universal.zip**](https://github.com/stevedat/nidontfs-releases/releases/latest/download/NidoNTFS-mac-universal.zip) | 포터블 `.zip` 아카이브 (`14.9 MB`) |

---

## ⚡ Homebrew로 설치 및 업데이트

```bash
brew install --cask stevedat/tap/nidontfs
```

```bash
brew update && brew upgrade --cask nidontfs
```

---

## ✨ 핵심 기능

- **안전한 NTFS 읽기/쓰기 및 잠자기/깨우기 연속성:** 비차단 `MNT_NOWAIT` 마운트 검사 및 절전 전 자동 버퍼 플러시(`sync`)로 Finder 멈춤 현상을 원천 방지합니다.
- **실시간 S.M.A.R.T. 및 드라이브 건강 상태:** S.M.A.R.T. 상태, SSD 잔여 수명(`%`), 온도(`°C`), 총 쓰기/읽기 용량(`TBW/TBR`), USB 연결 속도(`5–10 Gbps` vs `USB 2.0` 병목 경고) 표시.
- **적응형 I/O 엔진:** SSD(`4 MB`), HDD(`2 MB`), USB 플래시/SD 카드(`512 KB`)별 최적의 전송 블록 크기를 자동 적용하여 Finder `Error -36` 방지.
- **NidoArchive & NidoDrop LAN:** 외장 드라이브 직접 압축 해제 및 QR 코드 기반 로컬 Wi-Fi/LAN 고속 파일·클립보드 공유.

---

## 🖥️ macOS 인터페이스

| 1. NTFS, USB & SD Read/Write + S.M.A.R.T. Health | 2. NidoDrop LAN File & Clipboard Station |
| :---: | :---: |
| <img src="../assets/screenshots/01_ntfs_drives_rw.png" width="100%" alt="NidoNTFS Drives Read/Write" /> | <img src="../assets/screenshots/02_nidodrop_lan_qr.png" width="100%" alt="NidoDrop LAN QR Transfer" /> |
| **3. NidoUpdater & 11-Language Engine** | **4. Companion Apps Ecosystem** |
| <img src="../assets/screenshots/03_settings_updater_helper.png" width="100%" alt="Settings, NidoUpdater & Helper" /> | <img src="../assets/screenshots/04_vielotus_ecosystem.png" width="100%" alt="Nido Holdings Ecosystem" /> |

---

## 🏛️ 시스템 아키텍처

<p align="center">
  <img src="../assets/nidontfs-architecture.svg" alt="NidoNTFS Architecture" width="100%" />
</p>

---

## 🔐 SHA-256 무결성 검증

```bash
shasum -a 256 -c SHA256SUMS.txt
```

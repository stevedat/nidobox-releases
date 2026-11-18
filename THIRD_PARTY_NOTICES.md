# Open-Source & Third-Party Notices — NidoBox

**Web version:** https://stevedat.github.io/nidobox-releases/third-party-notices.html

---

## 1. Apple Mac App Store Edition (`com.nido.box.mas`)

Compiled in native Swift 6 against official Apple macOS system frameworks (`SwiftUI`, `AppKit`, `ScreenCaptureKit`, `Vision`, `Speech`, `AVFoundation`, `Network`, `DiskArbitration`) and dynamically linked to macOS system `libarchive` (BSD 2-Clause License, Copyright © Tim Kientzle and contributors). No GPL or FUSE binaries are bundled.

## 2. Windows 10/11 Edition (`com.nido.box`)

- **Tauri v2, wry, tao** — MIT OR Apache-2.0 (`https://github.com/tauri-apps/tauri`)
- **React & React DOM** — MIT License (`https://github.com/facebook/react`)
- **Lucide Icons** — ISC License (`https://github.com/lucide-icons/lucide`)
- **Rust crates (`image`, `zip`, `sevenz-rust`, `tar`, `flate2`, `qrcode`, `rqrr`, `tiny_http`, `serde`, `windows-rs`)** — MIT / Apache-2.0 (`https://crates.io`)

## 3. Direct macOS Installer Edition Only (`.dmg` outside Mac App Store)

- **Tuxera NTFS-3G** (`ntfs-3g`, `ntfsfix`, `ntfslabel`, `mkntfs`, `libntfs-3g`) — GNU GPLv2 / LGPLv2, invoked as an unmodified separate user-space process (`https://github.com/tuxera/ntfs-3g`).
- **FUSE-T** (`libfuse-t.dylib`, `go-nfsv4`) — Distributed under FUSE-T license terms preserving copyright notices (`https://github.com/macos-fuse-t/fuse-t`).

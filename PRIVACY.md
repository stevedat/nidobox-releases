# Privacy Policy — NidoBox

**Effective date:** November 18, 2026  
**Last updated:** November 18, 2026  
**Data Controller:** NIDO HOLDINGS NEXT GENERATION COMPANY LIMITED (`support@nido-holdings.com`)  
**Web version:** https://stevedat.github.io/nidobox-releases/privacy.html

---

## 1. Summary

- **100% On-Device Processing:** Screenshots, screen recordings, speech `.srt` subtitles, OCR text, clipboard history, staged NidoShelf items, converted media, archives, and external drive metadata are processed locally on your device and never uploaded to our servers.
- **Zero Cloud Relays on LAN:** **NidoDrop LAN** transfers files and 2-way session clipboard data directly peer-to-peer over your local Wi-Fi or Ethernet subnet (`HTTP` with ephemeral session token and PIN).
- **Zero Automatic Background Network Calls on Store Editions:** Both the **Apple Mac App Store Edition** (`com.nido.box.mas`) and the **Microsoft Store Edition** disable standalone auto-updaters and remote sponsor manifests (`0` background network telemetry, `0` analytics SDKs, `0` advertising SDKs).
- **No Account Required:** NidoBox works offline immediately without sign-up or login.

## 2. Network Activity by Edition

| Edition | Automatic Background Network Calls | Update Delivery |
| :--- | :--- | :--- |
| **Apple Mac App Store** (`com.nido.box.mas`) | **None** | Apple Mac App Store |
| **Microsoft Store** (Windows 10/11 Store build) | **None** | Microsoft Store |
| **Direct Desktop Installers** (`.dmg`, `.exe`, `.deb`) | Zero-PII update manifest check (`latest-mac.json` / `latest-win.json`) via Cloudflare Edge / GitHub Releases (can be disabled in Settings) | Signed GitHub Releases |

On Direct Desktop Editions, update checks use a rotating daily/monthly one-way HMAC-SHA256 digest solely to resolve CPU architecture (`arm64` / `x86_64`) and count active versions. Raw IP addresses, hardware serial numbers, MAC addresses, and persistent cross-month IDs are never stored, and operational counters expire automatically within 90 days.

## 3. Voluntary User Feedback

NidoBox never transmits diagnostics or bug reports automatically. When you voluntarily submit the **Send Feedback** form:
- **Data sent:** Category, optional subject, message text you enter, optional reply email address, and non-identifying technical metadata (app version, OS version, CPU architecture, UI language) if kept checked.
- **Storage & deletion:** Stored in Cloudflare D1 solely to resolve bugs and respond to support inquiries. Email `support@nido-holdings.com` at any time to request permanent deletion within 7 business days.

## 4. System Permissions

- **Screen Recording (macOS / Windows):** Requested only when capturing regions/windows or recording video in Capture Studio.
- **Microphone & Speech Recognition (macOS / Windows):** Optional; requested only when recording voiceover audio or generating offline `.srt` subtitles.
- **Local Network (macOS / Windows):** Requested only when starting NidoDrop LAN.
- **User-Selected Files & Downloads:** Used to read files you select/drop and save exported outputs.
- **Accessibility & Disk Helper (Direct macOS `.dmg` only):** Used for `NidoWindow` snapping and external NTFS volume mounting. *Excluded from the Mac App Store edition.*

## 5. Children's Privacy & User Rights

NidoBox (`4+` / `IARC 3+`) does not knowingly collect personal information from children. Under GDPR, CCPA/CPRA, and Vietnam Personal Data Protection regulations (Decree 13/2023/ND-CP), you can clear local clipboard/shelf/preferences directly in NidoBox Settings or contact `support@nido-holdings.com` for any data access or deletion request.

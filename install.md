# Install Swiss QC Guru

> Install Swiss QC Guru – file-based QC before delivery to ARD, ZDF, ORF and SRF. One line on Windows or Mac, signed packages, automatic updates.

Install · version 0.2.3

# QC before delivery – in one window

Swiss QC Guru checks transmission masters against the delivery specs of ARD, ZDF, ORF and SRF (TPR 2025, EBU R 103 / R 128): container, codec, start timecode, levels and gamut, loudness and True Peak, interlace, black and freeze frames, flashes, pixel faults. Every finding has a timecode, a frame and its source in the spec.

![Swiss QC Guru player with frame-accurate timeline, findings list, safe areas, zebra and waveform scope](https://swissqcguru.com/img/app-player.jpg)

Windows · macOS

## Install

One line installs the app and the command line `qccheck` – no administrator rights. The package comes from GitHub and is only unpacked if its Ed25519 signature is valid.

1. Open **PowerShell**: Start menu, type “PowerShell”, press Enter.
2. Paste the line and press Enter. It takes about a minute.
3. Start **Swiss QC Guru** from the desktop or the Start menu.

Windows PowerShell

`irm https://swissqcguru.com/install.ps1 | iex`

1. Open **Terminal**: press ⌘ Space, type “Terminal”, press Return.
2. Paste the line and press Return. It takes about a minute.
3. Start **Swiss QC Guru** from Applications in your home folder, or with Spotlight.

Terminal — zsh

`curl -fsSL https://swissqcguru.com/install.sh | bash`

Apple Silicon and Intel – one package for both.

The download is the free trial. Enter your licence key in the app under Settings › Licence – [buy a licence](https://swissqcguru.com/index.html#price).

Updates arrive by themselves: the app shows them at the top right and installs them after checking the signature again.

### Beta channel and uninstalling

Beta (pre-releases, may be unfinished):

`irm https://swissqcguru.com/beta/install.ps1 | iex`

`curl -fsSL https://swissqcguru.com/beta/install.sh | bash`

The normal line switches back to the stable channel. To uninstall, delete the Swiss QC Guru shortcuts and the folder `%LOCALAPPDATA%\QCCheck` (Mac: `~/Applications/QCCheck.app`, `~/.local/bin/qccheck` and `~/Library/Application Support/QCCheck`).

Release notes

## What's new in 0.2

- **0.2.3: country packs and new repairs** – add-ons United Kingdom (AS-11 UK DPP), France, Nordics, Germany, Austria & Switzerland private and United States (captions, drop-frame); repair now creates AVC-Intra 100, XAVC and H.264 deliveries and turns 50p into real 1080i25; loudness on UK and Nordic files is measured from programme start
- **0.2.2: Online & Podcast add-on** (USD 49) – templates for YouTube, Spotify video, Apple Podcasts and Instagram / TikTok with checks for faststart, edit lists, variable frame rate, portrait format and keyframes; repair keeps AAC and moves the index to the front. Loudness repair of MP4 files fixed; only your own templates can be exported.
- **0.2.1: a better trial** – it now checks the whole file and shows half of the findings, the most serious one always; the others are listed as locked. Optional anonymous usage count (asked once, off under Settings › Privacy).
- **Swiss QC Guru** – new name, new icon and a stricter, precise interface: every measurement in a fixed-width figure, colour only where it means something.
- **Free trial and licence** – the trial checks the whole file and shows half of the findings – the most serious one always; the rest are listed as locked. A licence ($199 once) checks everything.
- **Add-ons** – a new tab for extra broadcaster templates and looks. Included: the client view Rec.709 → desktop. More broadcasters are in preparation.
- **Feedback from the app** – report a bug or a wish with an optional screenshot and an anonymised log; nothing is sent without your click.
- **Banding** is now a note for ARD/ZDF/ORF and EBU R 103 instead of a warning – the broadcasters accept far more than the measurement flags.
- Also: safer handling of files and reports, installers in English and German, timeline labels easier to read.

![Swiss QC Guru batch with verdicts and the key findings per file](https://swissqcguru.com/img/app-batch.jpg)

System

## Requirements

- Windows 10 or 11 (64-bit), or macOS 12 or later on Apple Silicon or Intel
- About 500 MB disk space; more cores check faster (UHD ProRes: roughly half real time on 20 cores)
- Internet for installing, updates and – only if you agree – an anonymous usage count; files are checked locally and never uploaded
- Nothing else: Swiss QC Guru brings its own ffmpeg (LGPL, source offer in the package)

Swiss QC Guru is a technical pre-check. It does not replace the broadcaster's acceptance, and the flash check is not a Harding test.

Swiss QC Guru by NuNu Soft · [Product](https://swissqcguru.com/index.html) · [PodcastMagic 360](https://podcastmagic360.com/) ARD, ZDF, ORF and SRF are trademarks of their owners. Swiss QC Guru is not affiliated with any broadcaster; the templates follow their published delivery specs.

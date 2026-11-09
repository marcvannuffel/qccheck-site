# Install Swiss QC Guru

> Install Swiss QC Guru – file-based QC before delivery to ARD, ZDF, ORF and SRF. One line on Windows or Mac, signed packages, automatic updates.

Install · version 0.2.13

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

### Uninstalling

To uninstall, delete the Swiss QC Guru shortcuts and the folder `%LOCALAPPDATA%\QCCheck` (Mac: `~/Applications/QCCheck.app`, `~/.local/bin/qccheck` and `~/Library/Application Support/QCCheck`).

Release notes

## What's new in 0.2

- **0.2.13: check level Practice or Spec** – next to the template you choose how strictly to check, saved per template. Practice (the default) applies only tolerances with a source: levels/gamut below 1 % of the picture count as info (EBU R 103), the chroma limit and advisory checks no spec requires are one step milder. Spec checks the template exactly as written. Loudness and true peak are strict in both. Report and PDF name the level.
- **0.2.12: clearer results** – the findings list shows errors first; warnings and info are collapsed, and the same finding at many places is one line you can expand to see each place. The flash check now counts luminance transitions per ITU-R BT.1702: cuts, single black frames and fades no longer flag, a strobe still does – with a note to show an epilepsy warning before the programme. Repair is marked as meant for emergencies: the clean fix belongs in the finishing project.
- **0.2.11** – title bar at normal window width: the template picker shrinks instead of slipping under the trial and update buttons.
- **0.2.10: a version for each broadcaster** – after checking against several broadcasters, build a repaired copy for every broadcaster that failed: the repair plan of that broadcaster, a new file <name>_<broadcaster>, re-checked automatically; what cannot be repaired is named with its reason. One at a time or for all failed broadcasters at once, also on the command line (--fix-for, --fix-failed). The original is never changed.
- **0.2.9: check against several broadcasters at once** – pick several templates or a saved group (e.g. “My broadcasters”) for a file: Swiss QC Guru measures once and judges per template, about 2.5× faster than checking one by one. The result is a matrix – broadcaster, verdict, main reasons – and every row opens the full report. Also on the command line (--profiles, --group). Part of the licence.
- **0.2.8: twelve new country packs, new checks, prices in EUR** – Spain & Portugal (RD 250/2025, CNMC commercials, Mediaset España HD/UHD, RTVE, Canal Sur, Televisión Canaria, Aragón TV; Portugal ERC and RTP commercials); Italy (AGCOM, RAI commercials, Mediaset / Publitalia ’80, Extreme Reach and Cape); Benelux (Screenforce commercials for Ster, Ad Alliance and Talpa, DigitalDeli, NPO / AVROTROS, VRT, Slingshot, IP Luxembourg); Czech Republic, Slovakia, Poland (ČT, TV Nova, Prima, Barrandov, JOJ, TVP, Polsat, TVN); Hungary and Lithuania (MTVA, RTL Magyarország, LNK); Balkans & Greece (HRT, RTV Slovenija, TV Pink, RTCG, ERT); Canada (CBC/Radio-Canada, Bell Media, Corus / Global, Télé-Québec, AMI-télé, CRTC); Latin America (Brazil, Argentina, Chile, Colombia, Mexico, Uruguay); Australia and New Zealand (Free TV OP-59/OP-29/OP-52, Network 10, TVNZ); Japan (JBA CM standard 2023 and T035); Asia-Pacific (Doordarshan, Indian commercials, TVB, ViuTV, Mediacorp, loudness law South Korea and China); Middle East, Turkey & Africa (SABC, SBC Seychelles, RTÜK, commercials for MENA and South Africa). The UK pack now covers Ireland too: RTÉ, Virgin Media Television, TG4. New checks: momentary loudness limit, sample peak in dBFS for specs without LUFS, an asymmetric loudness window, programme start on a whole hour, required silence at the programme edges. Prices now in EUR with CHF and USD: licence EUR 199 (CHF 179 · USD 239), packs EUR 99 or 149, Cinema EUR 199, Online & Podcast EUR 49. Company licences on request.
- **0.2.7: Netflix originals, Dolby, language versions** – Netflix IMF packages (App 2E) are checked as one package: JPEG 2000 profile and level of every frame, colour, full range, 5.1 and stereo, Dolby Vision L1 in every frame; tested on Netflix's own Sol Levante package. Dolby Vision sidecar XML for Apple HDR. Sound mixes as BWAV ADM (5.1 or Atmos) with Netflix's group labels; Dolby Digital dialnorm against measured loudness; 5.1 loudness over the whole mix. Language versions: track languages, IMF language CPLs, versions in a batch compared. Cinema: JPEG 2000 of every frame (profile, Bv2.1, size). New repairs: missing colour tag, stereo downmix from 5.1.
- **0.2.6: cinema** – new add-on Cinema (DCP): drop a Digital Cinema Package folder and it is checked as one package – SMPTE or Interop, hashes, ISDCF name, encryption, picture and sound across all reels, Leq(m) for trailers and cinema ads, festival specs (Berlinale, Cannes, Venice, Visions du Réel, Sundance); the player plays the whole DCP with reel marks.
- **0.2.5: social ads** – the Online & Podcast pack now checks ads for Meta (Facebook/Instagram feed, Stories, Reels), TikTok, YouTube (skippable, non-skippable 15–60 s, bumper 5–6 s) and LinkedIn. Every pack shows the date its templates were last updated.
- **0.2.4: streaming packs** – add-ons Amazon MGM Studios (production masters HD/UHD SDR and UHD HDR), Netflix (ProRes masters, MP4, Netflix Ads) and Apple TV (store masters HD, 4K, HDR source file); every template is checked regularly against its published source. A checked file now opens with Details or a click on its row; request a missing template under Feedback.
- **0.2.3: country packs and new repairs** – add-ons United Kingdom (AS-11 UK DPP), France, Nordics, Germany, Austria & Switzerland private and United States (captions, drop-frame), each with commercials (frame-accurate spot length, black frames, short-form loudness); repair now creates AVC-Intra 100, XAVC and H.264 deliveries and turns 50p into real 1080i25; loudness on UK and Nordic files is measured from programme start
- **0.2.2: Online & Podcast add-on** (EUR 49) – templates for YouTube, Spotify video, Apple Podcasts and Instagram / TikTok with checks for faststart, edit lists, variable frame rate, portrait format and keyframes; repair keeps AAC and moves the index to the front. Loudness repair of MP4 files fixed; only your own templates can be exported.
- **0.2.1: a better trial** – it now checks the whole file and shows half of the findings, the most serious one always; the others are listed as locked. Optional anonymous usage count (asked once, off under Settings › Privacy).
- **Swiss QC Guru** – new name, new icon and a stricter, precise interface: every measurement in a fixed-width figure, colour only where it means something.
- **Free trial and licence** – the trial checks the whole file and shows half of the findings – the most serious one always; the rest are listed as locked. A licence (EUR 199 once) checks everything.
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
- Nothing else: Swiss QC Guru brings its own ffmpeg (GPL, source offer in the package)

Swiss QC Guru is a technical pre-check. It does not replace the broadcaster's acceptance, and the flash check is not a Harding test.

Swiss QC Guru by NuNu Soft · [Product](https://swissqcguru.com/index.html) · [Broadcasters, checks, repairs](https://swissqcguru.com/broadcasters.html) · [PodcastMagic 360](https://podcastmagic360.com/) ARD, ZDF, ORF and SRF are trademarks of their owners. Swiss QC Guru is not affiliated with any broadcaster; the templates follow their published delivery specs.

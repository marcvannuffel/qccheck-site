# Swiss QC Guru – broadcast QC before delivery to the broadcaster

> Swiss QC Guru checks your transmission master or commercial against the broadcaster's delivery spec before you deliver – ARD, ZDF, ORF, SRF built in; packs for the UK (AS-11 DPP), France, the Nordics, private broadcasters in Germany, Austria and Switzerland, and the United States. Every finding with timecode, frame and the line of the spec. Windows and Mac, $199 once.

ARD · ZDF · ORF · SRF · EBU R 103 · R 128

# Pass the broadcaster's QC the first time.

Swiss QC Guru checks your finished master against the delivery spec before it leaves the house: container, codec, timecode, levels, gamut, loudness and true peak. Every finding comes with timecode, frame and the line of the spec it breaks – so you fix it in the edit, not after a rejection.

[Download the free trial](https://swissqcguru.com/install.html) $199 once · licence

The trial installs with one line on Windows 10/11 or macOS 12+, needs no account and no key, and checks the whole file – you see half of the findings, the most serious one always.

![The player with all findings of a file: the open finding with its timecode range on the right, every finding listed by time below it, and the timeline with markers per lane for picture, audio and timecode, loudness and waveform](https://swissqcguru.com/img/app-player.jpg)

Every finding on the timeline, one lane per area – a click jumps to the exact frame. Picture content blurred for legal reasons.

What it checks

## The checks the broadcaster runs – before you deliver

Every frame is analysed, every threshold carries its source. What the spec does not state is marked “unconfirmed” – no invented limits.

### Container and metadata

MXF OP1a, header “Closed and Complete”, codec and bit rate, colour tag 1-1-1, track layout, start timecode.

SMPTE 377M · TPR 2025

### Levels and gamut

Luma, RGB and chroma per frame, small areas reported separately; illegal codes and TRS.

EBU R 103 v3.0

### Loudness and audio

Integrated loudness, true peak and LRA per track pair, clipping, phase, silence, missing audio, Dolby E.

EBU R 128

### Black, freeze, cadence

Black inside the programme, freeze frames, repeated frames and stutter, single-frame hits.

TPR 2025

### Picture

Interlace against flag and format, bars and borders, pixel defects, banding, a hint on possible flashes (not a certified Harding test).

ITU-R BT.709

### Timecode and line-up

Continuity and jumps, drop frame, colour bars and line-up tone at the head.

SMPTE 12M

Player and timeline

## See the frame, not just the error code

Click a marker and the player jumps to the exact frame. Overlays show what the check saw.

- ** Scopes** Waveform, vectorscope, RGB parade on the exact frame
- ** Overlays** Safe areas, zebra and false colour at the template's limits, pixel defects, fields
- **J K L** Shuttle as in Resolve, frame by frame, finding to finding
- ** Accept** Accept an intentional finding with a note – it is listed in the report

![Player with safe areas, zebra and waveform scope over the picture, a photosensitive-flash finding on the right and the timeline with markers per lane below](https://swissqcguru.com/img/app-scopes.jpg)

Safe areas, zebra at the template's limits and the waveform on the exact frame; findings on the right, markers per lane below. Picture content blurred for legal reasons.

![Findings in the QC report, each with severity, timecode range, check, frame number, the measured value and the frame it happened on; one flash accepted with the director's note](https://swissqcguru.com/img/app-findings.jpg)

Each finding with the frame it happened on; an accepted one keeps its note. Picture content blurred for legal reasons.

Findings and report

## Every finding says why – with the line from the spec

Measured value, limit, timecode range and frame, and the quote from the delivery spec in its original wording. Filter by error, warning and info; the report prints as a PDF for the client or the broadcaster.

- ** Verdict** Passed, passed with warnings or failed – at a glance, per file and per batch
- ** Sources** What a spec does not state is marked “unconfirmed” – no invented limits
- ** Languages** App, report and package in English or German

Broadcaster templates

## The delivery specs, built in

Pick the broadcaster, or let auto-select choose by folder or file name. Duplicate a template to build your house standard – it inherits and stores only what you change. Every country pack also covers commercials: frame-accurate spot length, black frames at start and end, short-form loudness.

| Template | Source | Format | Loudness |
| --- | --- | --- | --- |
| ARD / ZDF / ORF | Joint technical production guidelines (TPR 2025) | XDCAM HD422 · MXF | −23 LUFS · ≤ −1 dBTP |
| ZDF | ZDF delivery spec 3.0 | AVC-Intra 100 · MXF | −23 LUFS · ≤ −1 dBTP |
| ZDF ProRes | Alternative format for acquired programmes | ProRes 422 HQ · MOV | −23 LUFS · ≤ −1 dBTP |
| ORF | ORF technical spec 05.005a | XDCAM HD422 · MXF | −23 LUFS · ≤ −1 dBTP |
| SRF | SRF technical guidelines 2026 | XDCAM HD422 · MXF | −23 LUFS · ≤ −1 dBTP |
| EBU generic | EBU R 103 / R 128 – for pre-checks without a broadcaster | HD · UHD | −23 LUFS · ≤ −1 dBTP |
| Commercials included | ARD Media, ZDF Werbefernsehen, ORF-Enterprise, admeira (SRG) – frame-accurate spot length, black frames at start and end, short-form loudness | XDCAM · AVC-Intra · XAVC · MXF | −23 LUFS · ST ≤ −18 |
| United Kingdom add-on | AS-11 UK DPP – BBC, ITV, Channel 4, Channel 5, Sky (HD and UHD), STV, TG4; line-up before 10:00:00:00 excluded from loudness; commercials per DPP012 / AS-11 X6 and ITV | AVC-Intra 100 · MXF | −23 LUFS ±0.5 · ≤ −1 dBTP |
| France add-on | PAD per CST-RT-040 – France Télévisions, TF1, CANAL+, ARTE (France and Germany); commercials for TF1 Pub, France TV Publicité and via Extreme Reach | XDCAM HD422 · XAVC · MXF | −23 LUFS · ≤ −3 dBTP |
| Nordics add-on | SVT, NRK, DR, Yle, TV 2 Danmark, TV 2 Norway; commercials for TV 2 Danmark, MTV Finland and TV4 / TV 2 Norway / Viaplay via Extreme Reach | XDCAM · XAVC · AVC-Intra · ProRes | −23 LUFS · ≤ −1 dBTP |
| Germany, Austria & Switzerland private add-on | ProSiebenSat.1 / Seven.One, PULS 4 / ATV, RTL Deutschland, ServusTV; commercials for Seven.One Media, RTL AdAlliance, Sky Deutschland, CH Media (national and regional) and the Swiss ad windows via Goldbach | XDCAM HD422 · MXF | −23 LUFS · ≤ −1/−2 dBTP |
| Online & Podcast add-on | YouTube, Spotify video, Apple Podcasts, Instagram / TikTok – faststart, variable frame rate, portrait, keyframes | H.264 · AAC · MP4 | −14 / −16 LUFS · ≤ −1 dBTP |
| United States add-on | ATSC A/85 base, FOX, PBS, A+E, Warner Bros. Discovery, Paramount, Hallmark, Hulu – with checks for closed captions (608/708, SCC), drop-frame timecode, black between acts and AFD; commercials for ABC, FOX, FX, NBCUniversal and Extreme Reach | XDCAM · ProRes · DNxHD · MXF/MOV | −24 LKFS ±2 · ≤ −2 dBTP |

Your own templates: duplicate a broadcaster, change thresholds and severities, export and share them with your team. Every value shows its source in the reference. [All broadcasters, checks and repairs →](https://swissqcguru.com/broadcasters.html)

![Add-ons in the app: base templates included, country packs for the United Kingdom, France, Nordics, Germany, Austria and Switzerland, the United States and the online and podcast pack, each with its broadcasters](https://swissqcguru.com/img/app-addons.jpg)

Add-ons in the app: what every licence includes and the country packs with their broadcasters and commercials – unlocked with a key, delivered with the updates.

Repair

## From failed to deliverable – with a plan

- ** Plan first** What gets fixed, before → after, and what can't – with the reason
- ** Delivery formats** Re-encode to AVC-Intra 100, XAVC, XDCAM HD422 or H.264 – 50p becomes real 1080i25
- ** Sound and timecode** Loudness to the target, mono tracks as required, start timecode, MXF rewrap
- ** Checked again** A new file, checked again right away – the original stays untouched

![Repair plan: audio, timecode and loudness are fixed; options to re-encode to XDCAM HD422 or AVC-Intra 100; what cannot be fixed, with the reason](https://swissqcguru.com/img/app-repair.jpg)

Features

## Built for the last step before delivery

### Shuttle like Resolve

J K L up to 8×, slow motion, frame by frame, ↑ ↓ from finding to finding.

### Scopes and overlays

Waveform, vectorscope, RGB parade; safe areas 4:3 · 16:9 · 9:16, zebra and false colour at the template's limits, fields.

### Accept with a note

An intentional black frame or a creative look: accept it, write why – it stays visible in the report.

### Markers for your edit

Every finding as a marker for DaVinci Resolve, Premiere Pro and Final Cut Pro, or as CSV.

### Repair with a plan

Loudness, start timecode, levels, rewrap, or a re-encode to AVC-Intra 100, XAVC, XDCAM HD422 or H.264 – as a new file; the plan says what changes and what can't.

### Timecode in the picture

The burnt-in timecode is read and compared with the container's, frame by frame – any offset or jump is a finding.

### Scrub the batch

Hover over a file to scrub through its thumbnails; a click opens the player at that frame.

### Reference and export

All 35 checks with their limits and spec sources in one reference. Export all templates and settings for a new computer or your team.

### Watch folder

Checks every file that arrives in a folder, picks the template by rule and delivers the package if you want.

### Command line

`qccheck film.mxf --profile zdf` – for scripts and render farms, same checks as the app.

### Your master formats

XDCAM HD422, AVC-Intra, ProRes, DNxHD/HR, JPEG 2000, H.264/HEVC, uncompressed – in MXF, MOV, MP4 or MKV, HD and UHD; audio as PCM, AAC or AC-3, Dolby E is recognised.

### Local and signed

Your files never leave the computer. Updates are signed and checked before they install.

![QC report inside the app: verdict, counts, loudness and true peak, the timeline of findings](https://swissqcguru.com/img/app-report.jpg)

Report and delivery

## From finding to delivery package

- ** Report** HTML and PDF, every finding with frame, timecode and the quote from the spec
- ** Package** Report, PDF, checksums and a summary in one folder, ready to send – a failing file says so on every page
- ** Client view** An MP4 for approval that looks on a desktop screen like it will on air (Rec.709 → desktop, gamma 2.4 → 2.2); more looks as add-ons
- ** Accepted** Intentional findings stay in the report with your note – the broadcaster sees why

Your workflow

## Your templates, your rules, your folders

The built-in specs are the start. Adapt them to a client, let the app pick the right one, and let files check themselves when they land.

![Template editor: a copy of a broadcaster template with formats, loudness, levels and spot lengths, each value with its source](https://swissqcguru.com/img/app-editor.jpg)

** Template editor** – copy a built-in spec and change formats, loudness, limits or spot lengths; every value keeps its source.

![Rules that pick the template by file name, folder or format, with a test against a real file](https://swissqcguru.com/img/app-rules.jpg)

** Rules** – the template is chosen by file name, folder or format; test a rule against a real file before you rely on it.

![Watch folder: a spot that arrived in the folder was checked automatically](https://swissqcguru.com/img/app-watch.jpg)

** Watch folders** – every file that lands in a folder is checked by rule, and the delivery package is written if you want.

![Delivery package dialog: client, project, editor and broadcaster, with report, PDF, checksums, markers and the client view](https://swissqcguru.com/img/app-package.jpg)

** Delivery package** – report, PDF, checksums, markers and the client view in one folder; a re-encode for another broadcaster comes from the repair plan.

Batch

## A whole delivery in one go

Drop files or folders, choose a template per batch or per file, see the verdict and the key findings at a glance. Ten minutes of XDCAM take about 76 seconds on a 20-core PC.

![Batch with six files: one passed, five failed, with the key findings, repair and delivery per file](https://swissqcguru.com/img/app-batch.jpg)

Picture content blurred for legal reasons.

Price

## Try it on your own files. Buy once.

The trial checks the whole file and shows half of the findings, the most serious one always – the others are listed as locked. The licence covers every 1.x version on one computer; you can move it to another one any time.

### Trial

$0 no key needed

- Whole file checked, half of the findings shown
- Player, overlays and scopes on the whole file
- Delivery package, PDF, markers, client view
- Repair and watch folder

[Install the trial](https://swissqcguru.com/install.html)

### Licence, version 1

$199 once · all 1.x updates

- Every frame of every file
- Report, PDF, markers, delivery package
- Repair, watch folder, client view
- One computer at a time, move it any time

[Buy licence](https://buy.polar.sh/polar_cl_XA8YTzTnj9Zp6nyFRM60pPS3jcnzJm0ZEHHl921ZFtC)

FAQ

## Questions before you buy

### Does it replace the broadcaster's acceptance?

No. Swiss QC Guru is a technical pre-check: it finds what the broadcaster's QC would reject, before you deliver. The acceptance stays with the broadcaster.

### Do my files leave my computer?

Never. Every check runs locally. The internet is used for updates, to confirm the licence now and then and – only if you agree – for an anonymous usage count once a day.

### Does it work offline?

Yes. A licence keeps working for up to 30 days without a connection; then it needs to confirm once.

### How do I move the licence to another computer?

In the app under Settings › Licence, release this computer, then enter the same key on the new one – Windows or Mac.

### Is the flash check a Harding test?

No. It gives a hint on possible flashes. Where a broadcaster requires a certified Harding test, that test is still needed.

### What does the trial do exactly?

It checks the whole file with all checks and shows half of the findings, the most serious one always; the others appear as locked rows with their severity only. Delivery package, PDF, markers, repair and watch folder need the licence.

Also from NuNu Soft

![PodcastMagic 360: a video podcast cut from one 360° camera](https://swissqcguru.com/img/pm360.jpg)

### PodcastMagic 360

Multicam video podcast from one 360° camera: finds who is speaking and directs the cut automatically – as an app, or as a plugin for DaVinci Resolve Studio.

[podcastmagic360.com](https://podcastmagic360.com/)

Swiss QC Guru by NuNu Soft · [Broadcasters, checks, repairs](https://swissqcguru.com/broadcasters.html) · [Install](https://swissqcguru.com/install.html) · [PodcastMagic 360](https://podcastmagic360.com/) ARD, ZDF, ORF, SRF and all other broadcaster and platform names are trademarks of their owners. Swiss QC Guru is not affiliated with any broadcaster; the templates follow their published delivery specs.

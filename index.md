# Swiss QC Guru – QC before delivery to ARD, ZDF, ORF and SRF

> Swiss QC Guru checks your transmission master against the delivery specs of ARD, ZDF, ORF and SRF (EBU R 103, R 128) before you deliver: every finding with timecode, frame and the line of the spec. Windows and Mac, $199 once.

ARD · ZDF · ORF · SRF · EBU R 103 · R 128

# Pass the broadcaster's QC the first time.

Swiss QC Guru checks your finished master against the delivery spec before it leaves the house: container, codec, timecode, levels, gamut, loudness and true peak. Every finding comes with timecode, frame and the line of the spec it breaks – so you fix it in the edit, not after a rejection.

[Download the free trial](https://swissqcguru.com/install.html) $199 once · licence

The trial installs with one line on Windows 10/11 or macOS 12+, needs no account and no key, and checks the whole file – you see half of the findings, the most serious one always.

Folge_07_Sendemaster.mxf ARD/ZDF/ORF · TPR 2025

Loudness, programme EBU R 128 −23.2 LUFS −23 ±0.5 PASS

True peak EBU R 128 −1.8 dBTP ≤ −1.0 PASS

Luma, maximum EBU R 103 · 10:00:12:03 104.6 % ≤ 103 % FAIL

Freeze frame 10:21:40:11 2.0 s ≥ 2 s WARN

Start timecode TPR 4.3.1.3 01:00:00:00 10:00:00:00 WARN

1 error · 2 warnings analysis 9.4 s

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

![Player with a colour bar test pattern, waveform scope on the picture, findings list on the right and the timeline with markers below](https://swissqcguru.com/img/app-scopes.jpg)

Test pattern with an out-of-gamut patch: waveform on the exact frame, findings on the right, markers per lane below.

![Findings in the QC report: each with severity, check, timecode range, the measured value and the quote from the delivery spec](https://swissqcguru.com/img/app-findings.jpg)

Findings and report

## Every finding says why – with the line from the spec

Measured value, limit, timecode range and frame, and the quote from the delivery spec in its original wording. Filter by error, warning and info; the report prints as a PDF for the client or the broadcaster.

- ** Verdict** Passed, passed with warnings or failed – at a glance, per file and per batch
- ** Sources** What a spec does not state is marked “unconfirmed” – no invented limits
- ** Languages** App, report and package in English or German

Broadcaster templates

## The delivery specs, built in

Pick the broadcaster, or let auto-select choose by folder or file name. Duplicate a template to build your house standard – it inherits and stores only what you change.

| Template | Source | Format | Loudness |
| --- | --- | --- | --- |
| ARD / ZDF / ORF | Joint technical production guidelines (TPR 2025) | XDCAM HD422 · MXF | −23 LUFS · ≤ −1 dBTP |
| ZDF | ZDF delivery spec 3.0 | AVC-Intra 100 · MXF | −23 LUFS · ≤ −1 dBTP |
| ZDF ProRes | Alternative format for acquired programmes | ProRes 422 HQ · MOV | −23 LUFS · ≤ −1 dBTP |
| ORF | ORF technical spec 05.005a | XDCAM HD422 · MXF | −23 LUFS · ≤ −1 dBTP |
| SRF | SRF technical guidelines 2026 | XDCAM HD422 · MXF | −23 LUFS · ≤ −1 dBTP |
| EBU generic | EBU R 103 / R 128 – for pre-checks without a broadcaster | HD · UHD | −23 LUFS · ≤ −1 dBTP |
| United Kingdom add-on | AS-11 UK DPP – BBC, ITV, Channel 4, Channel 5, Sky (HD and UHD), STV, TG4; line-up before 10:00:00:00 excluded from loudness | AVC-Intra 100 · MXF | −23 LUFS ±0.5 · ≤ −1 dBTP |
| France add-on | PAD per CST-RT-040 – France Télévisions, TF1, CANAL+, ARTE (France and Germany) | XDCAM HD422 · XAVC · MXF | −23 LUFS · ≤ −3 dBTP |
| Nordics add-on | SVT, NRK, DR, Yle, TV 2 Danmark, TV 2 Norway | XDCAM · XAVC · AVC-Intra · ProRes | −23 LUFS · ≤ −1 dBTP |
| Germany, Austria & Switzerland private add-on | ProSiebenSat.1 / Seven.One, PULS 4 / ATV, RTL Deutschland, ServusTV; commercials for Sky Deutschland, CH Media (national and regional) and the Swiss ad windows via Goldbach | XDCAM HD422 · MXF | −23 LUFS · ≤ −1/−2 dBTP |
| Online & Podcast add-on | YouTube, Spotify video, Apple Podcasts, Instagram / TikTok – faststart, variable frame rate, portrait, keyframes | H.264 · AAC · MP4 | −14 / −16 LUFS · ≤ −1 dBTP |
| United States add-on | ATSC A/85 base, FOX, PBS, A+E, Warner Bros. Discovery, Paramount, Hallmark, Hulu – with checks for closed captions (608/708, SCC), drop-frame timecode, black between acts and AFD | XDCAM · ProRes · DNxHD · MXF/MOV | −24 LKFS ±2 · ≤ −2 dBTP |

Your own templates: duplicate a broadcaster, change thresholds and severities, export and share them with your team. Every value shows its source in the reference.

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

Loudness, start timecode, levels, rewrap, or XDCAM HD422 – as a new file; the plan says what changes and what can't.

### Timecode in the picture

The burnt-in timecode is read and compared with the container's, frame by frame – any offset or jump is a finding.

### Scrub the batch

Hover over a file to scrub through its thumbnails; a click opens the player at that frame.

### Reference and export

All 23 checks with their limits and spec sources in one reference. Export all templates and settings for a new computer or your team.

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

Batch

## A whole delivery in one go

Drop files or folders, choose a template per batch or per file, see the verdict and the key findings at a glance. Ten minutes of XDCAM take about 76 seconds on a 20-core PC.

![Batch with four files: one passed, three failed, with the key findings per file](https://swissqcguru.com/img/app-batch.jpg)

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

Swiss QC Guru by NuNu Soft · [Install](https://swissqcguru.com/install.html) · [PodcastMagic 360](https://podcastmagic360.com/) ARD, ZDF, ORF, SRF and all other broadcaster and platform names are trademarks of their owners. Swiss QC Guru is not affiliated with any broadcaster; the templates follow their published delivery specs.

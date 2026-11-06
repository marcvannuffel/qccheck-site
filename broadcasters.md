# Broadcasters, checks and repairs – Swiss QC Guru

> Every broadcaster template in Swiss QC Guru (59 delivery specs across Germany, Austria, Switzerland, the UK, France, the Nordics and the United States, plus commercials and online platforms), all 35 checks and what the repair plan can fix.

Coverage

# Broadcasters, checks and repairs

Which delivery specs Swiss QC Guru knows, what it checks in every file, and what the repair plan can fix. The limits of every template are in the app's reference.

Broadcasters and platforms

## The delivery specs, by country

The base templates come with every licence; country packs are add-ons to the licence. Every pack also covers commercials: frame-accurate spot length, black frames at start and end, short-form loudness.

### Base templates Included

In every licence: the templates for ARD, ZDF, ORF and SRF per their delivery specs, the EBU pre-check – and the commercials of these broadcasters.

- ARD / ZDF / ORF (TPR 2025)
- ZDF (AVC-Intra 100)
- ZDF ProRes
- ORF
- SRF
- EBU R 103 / R 128
- Commercials: ARD Media, ZDF Werbefernsehen, ORF-Enterprise, admeira (SRG)

### United Kingdom: DPP / AS-11 Add-on

The common delivery spec of the UK broadcasters (AS-11 UK DPP HD): AVC-Intra 100 1080i25, 4 or 16 audio tracks, −23 LUFS ±0.5 LU, true peak −1 dBTP, layout from 09:59:30:00 – plus the deviations of Channel 4, Channel 5 and Sky (HD and UHD). Also commercials per DPP012 / AS-11 X6 and ITV: clock from 09:59:50:00, spot from 10:00:00:00 frame-accurate to the second, −23 LUFS ±0.2 LU, short-term ≤ −18 LUFS.

- BBC, ITV, STV, TG4 (DPP base profile)
- Channel 4
- Channel 5
- Sky HD
- Sky UHD
- ITV, Channel 4, Channel 5, Sky (commercials, DPP012 / AS-11 X6)
- ITV (commercials, DPP 1.3.2)

### France and ARTE Add-on

PAD (prêt à diffuser) delivery per CST-RT-040: XDCAM HD422 1080i25 in AS-10, −23 LUFS, true peak −3 dBTP, short-form rule – with the deviations of TF1, France Télévisions and CANAL+, plus ARTE (XAVC Intra, −1 dBTP). Plus commercials: TF1 Publicité, France Télévisions Publicité (length in whole seconds) and delivery via XR to all French broadcasters. M6 on request only (no public spec).

- CST-RT-040 (base profile)
- Groupe TF1
- France Télévisions
- Groupe CANAL+
- ARTE
- TF1 Publicité (commercials/spots)
- France Télévisions Publicité (commercials/spots)
- France via XR (commercials/spots)

### Germany, Austria and Switzerland, private broadcasters Add-on

The delivery guidelines of the private broadcasters in Germany and Austria (HD) and the commercials specs of the Swiss private broadcasters: start TC 00:00:00:00, true peak and loudness tolerance per broadcaster, no technical leader. For commercials: frame-accurate length (Switzerland: whole seconds) and the black frames at the end (RTL 4, Sky 5) counted exactly.

- ProSiebenSat.1 / Seven.One
- PULS 4 / ATV
- RTL Deutschland
- ServusTV
- ProSiebenSat.1 / Seven.One Media (commercials/spots)
- RTL Deutschland / RTL AdAlliance (commercials/spots)
- Sky Deutschland (commercials/spots)
- CH Media TV National, 3+ (commercials/spots)
- CH Media TV Regional: TeleZüri, Tele M1, Tele 1, TVO (commercials/spots)
- Goldbach: Swiss advertising windows (commercials/spots)

### Nordic countries Add-on

The delivery specs of the major broadcasters in Sweden, Norway, Denmark and Finland: formats, start timecode, loudness per R 128 with each broadcaster's tolerances. Plus commercials: TV 2 Danmark and MTV Finland (length in 5 s steps, frame-accurate) and delivery via XR to TV4, TV 2 Norway and Viaplay/TV3.

- SVT
- NRK
- DR
- Yle
- TV 2 Danmark
- TV 2 Norway
- TV 2 Danmark (commercials/spots)
- MTV Finland via Spotgate (commercials/spots)
- TV4, TV 2 Norway, Viaplay via XR (commercials/spots)

### Online and podcast Add-on

Templates for platforms instead of broadcasters: loudness −14/−16 LUFS, H.264/AAC, vertical video – also for video podcasts from PodcastMagic 360.

- YouTube
- Spotify video
- Apple Podcasts
- Instagram / TikTok

### United States Add-on

The public delivery specs of US networks and platforms: ATSC A/85 (−24 LKFS ±2, true peak −2 dBTP), drop-frame at 29.97/59.94, CEA-608/708 captions embedded or as .scc, black breaks between acts, AFD – plus each network's formats. Commercials for ABC, FOX, FX, NBCUniversal and Extreme Reach: frame-accurate spot length, peaks −6 dBFS, AFD, slate. Programmes of NBCUniversal, CBS and Disney/ABC only via the base profile (no public programme spec).

- ATSC A/85 (base profile)
- FOX
- PBS (broadcast)
- PBS Distribution
- A+E Networks
- Warner Bros. Discovery
- Paramount
- Hallmark Media
- Hulu
- ABC (commercials)
- FOX (commercials)
- FX (commercials)
- NBCUniversal (commercials)
- Extreme Reach North America (commercials)

35 checks

## What every file is checked for

Each check runs on the whole file. The template decides the limits and whether a finding is an error, a warning or only information.

### Container and metadata

** MXF header

**

Reads the header partition of an MXF file and reports a header that is not “Closed and Complete” (e.g. an aborted or still running recording).

** Colour tag

**

Compares the colour tagging (primaries, transfer, matrix) from container and bitstream with the required 1-1-1 (BT.709); a wrong tag and a missing tag are reported separately.

** Track layout

**

Counts the audio tracks and checks that each track is mono, against the layouts the profile allows. Meant for checking against the delivery sheet.

** Video format

**

Compares codec, profile, resolution, frame rate, scan type and pixel format with the closest allowed format of the template; portrait instead of landscape (or the other way round) is reported separately.

** Sample rate

**

Compares the sample rate of every audio stream with the values the template allows.

** Duration

**

Compares the duration of the file with the shortest and longest duration the template allows.

** Commercial/spot

**

For commercials: length frame-accurate in the required grid (e.g. whole seconds, not one frame more), allowed spot length and the number of black frames at the start and at the end – counted from programme start.

** MP4 structure

**

Reads the structure of an MP4/MOV: the index (moov) after the data (no faststart), or a track with an edit list that shifts picture or sound – online platforms dislike both.

### Picture: interlace

** Interlace

**

Detects with idet whether the picture is progressive or interlaced (TFF/BFF) and compares it with the container flag and the profile's format – also section by section in progressive material.

### Levels and gamut (EBU R 103)

** Levels and gamut

**

Measures luma, RGB and chroma of every analysed frame per EBU R 103 and reports sections where more than the set picture area is out of range; smaller areas get their own, milder severity.

** Forbidden codes (TRS)

**

Looks for code values reserved for timing reference signals (8 bit 0/255, 10 bit 0–3/1020–1023) in the active picture. They are forbidden in any amount.

### Audio (EBU R 128)

** Loudness (R 128)

**

Measures programme loudness, true peak and loudness range per EBU R 128 / ITU-R BS.1770 on program audio and the other track pairs.

** Clipping

**

Finds runs of samples at full scale (clipping) per track.

**Phase

**

Measures the left/right correlation of program audio; sustained out-of-phase audio cancels out in mono.

** Silence

**

Finds silence in program audio (below the noise level) from the set duration on.

** Missing audio

**

Finds sections where program audio is digital zero (audio missing entirely), with its own limit for an error.

**Dolby E

**

Detects Dolby E / SMPTE 337 data streams in PCM tracks; broadcasters require PCM stereo in program audio 1/2.

** Dual mono

**

Reports programme audio whose left and right channels are identical (mono packed as stereo).

### Pixel defects and banding

** Pixel defects

**

Looks for bright (stuck) and dark (dead) single pixels and pixel clusters that stay in the same place for the set duration.

**Banding

**

Reports steps in smooth gradients (banding/posterisation) using a histogram measure.

### Temporal: black, freeze frame, judder, flashes

** Black

**

Finds black frames: within the programme and as technical head or tail at the start and end.

** Black breaks (acts)

**

Counts black runs inside the programme from the set length on as breaks between the acts (commercial breaks), reports each with its timecode and checks count and length against the profile. The leader and the edges do not count.

** Freeze frame

**

Finds frozen pictures (freeze frames) from the set duration on.

** Cadence

**

Finds repeated or missing frames in the frame sequence (cadence errors, judder).

** Single-frame hits

**

Finds single frames that differ clearly from their neighbours (corrupt, blocky or foreign frame).

** Flashes

**

Gives a note on light flashes (photosensitivity, ffmpeg photosensitivity filter). Not a Harding test.

** Colour bars / line-up tone

**

Detects colour bars and line-up tone at the start of the file, which should not be in a transmission master.

** Variable frame rate

**

Measures the spacing of the frame timestamps: if it varies (variable frame rate, typical of phone and screen recordings) or the first frame does not start at 0, the platform may shift sound against picture.

** Keyframes

**

Reads only the keyframes of the video stream and reports the largest interval when it exceeds the limit (Spotify: at least one every 60 s).

### Framing

** Bars / border

**

Finds black bars top/bottom or left/right (letterbox, pillarbox) and borders from the set width and duration on.

### Timecode

** Start timecode

**

Compares the timecode of the first frame with the profile's required start timecode.

** Timecode continuity

**

Finds jumps in the running timecode and an offset between the timecode in the picture and the container timecode.

** Drop-frame

**

Checks the timecode's drop-frame flag against the profile: at 29.97 and 59.94 fps US broadcasters usually require drop-frame (01:00:00;00), at 23.976 non-drop-frame.

### Closed captions and AFD

** Closed captions (CEA-608/708)

**

Looks for embedded captions (QuickTime caption track c608, MXF ANC data track per SMPTE ST 436, ATSC A/53 in the picture) and a caption file with the same name alongside; an .scc is checked for its header line and ascending timecodes. Caption content and quality are not checked.

**AFD

**

Reads the Active Format Description (AFD) from the picture at sample points and compares it with the profile's allowed values (FOX: constant 1010 or 1111).

Repair plan

## What can be fixed – as a new file

The plan says what changes, before and after, and what cannot be fixed with the reason. The new file is checked again right away; the original stays untouched.

- ** Loudness** Programme audio to the template's target (linear; a limiter only if the true peak needs it)
- ** Audio tracks** One mono track per channel, PCM 24 bit / 48 kHz, padded with silent tracks to the required count
- ** Start timecode** Rewritten to the required start, continuous
- ** Levels** Luma and chroma clamped to the legal video range
- ** Black leader** Black at the start or end trimmed
- **MXF** Rewritten as OP1a with a closed and complete header; MOV rewrapped into MXF without re-encoding
- ** Re-encode** AVC-Intra 100, XAVC, XDCAM HD422 or H.264 – for the template's format or another broadcaster's; 50p becomes real 1080i25
- **Online** MP4 rewrapped losslessly with faststart; AAC kept
- ** Client view** An MP4 for approval that looks on a desktop screen like it will on air (Rec.709 → desktop, gamma 2.4 → 2.2)

[Try it on your own files →](https://swissqcguru.com/index.html#price)

Swiss QC Guru by NuNu Soft · [Broadcasters, checks, repairs](https://swissqcguru.com/broadcasters.html) · [Install](https://swissqcguru.com/install.html) · [PodcastMagic 360](https://podcastmagic360.com/) ARD, ZDF, ORF, SRF and all other broadcaster and platform names are trademarks of their owners. Swiss QC Guru is not affiliated with any broadcaster; the templates follow their published delivery specs.

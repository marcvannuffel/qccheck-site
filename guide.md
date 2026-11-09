# Swiss QC Guru guide

> How to use Swiss QC Guru: check files against a broadcaster template, read the findings in the player, repair, deliver, check against several templates at once, watch folders and add-ons.

Guide

# Swiss QC Guru in ten minutes

Drop the master in, pick the broadcaster, start. Everything else on this page is for the moment you need it.

- First check
- Templates and strictness
- Several templates at once
- Results and player
- Repair
- Deliver
- Watch folder
- Own templates and rules
- Reference
- Licence and add-ons
- Settings
- Command line
- Help and feedback

Batch

## First check

1. **Add files.** Drag files or folders onto the window, or click it to choose. MXF, MOV, MP4, WAV, IMF and DCP folders. “include subfolders” takes everything below a folder.
2. **Pick the template.** At the top for the whole batch, or per file in its row. “Automatic (rules)” picks one by your rules.
3. **Start check.** Progress per stage on the right. Each row then shows its verdict and the most important findings.

![Batch with verdict and most important findings per file](https://swissqcguru.com/img/app-batch.jpg)

- **Verdicts:** Passed, Passed with warnings, Failed. Incomplete (a check could not run) counts as failed.
- **Reports** are written next to the file in a folder `QC-Reports`: HTML (prints as PDF) and JSON.
- **Last batch:** after a restart the empty window offers “Open last batch”. Files already checked come back with their result, as long as the reports are still there and the file has not changed.
- **Compact** makes the rows smaller for long batches.

Templates

## Templates and strictness

A template is a broadcaster's or platform's delivery spec: format, codec, start timecode, levels, loudness and so on, each value with its source. The list of templates is on [Broadcasters](https://swissqcguru.com/broadcasters.html).

- **Practice** (default, next to the template at the top) keeps only tolerances that have a source, e.g. EBU R 103 counts gamut errors only above 1 % of the picture.
- **Spec (strict)** checks the template exactly as written.
- Loudness, True Peak, format, colour tags, black and freeze frames and flashes are strict in both.

Full version

## Several templates at once

For distribution, co-productions and campaigns: one file against several broadcasters. The file is measured once and judged per template, about 2.5 times faster than one by one.

1. In the row's template list, right below “Automatic”: **Choose several …**
2. Tick the templates. Save them as a **group** (e.g. “My broadcasters”) to pick them again with one click. “For all waiting files” applies the choice to the whole batch.
3. Start. The row shows ✓ ▲ ■ per template with the main reason. Click a template for its player and report, **Matrix** for the overview.

**Build version:** for a template that fails, the wrench builds a repaired copy for exactly that broadcaster (e.g. `film_uk-dpp.mxf`) and checks it again. The original stays untouched.

Player

## Results and player

Click a row (or **Details**) to open the player. The **Report** tab next to it is the full report.

![Player with timeline, findings list and picture tools](https://swissqcguru.com/img/app-player.jpg)

- **Findings list:** errors first, then warnings and info (folded). The same check at several places is one line (“· 12 places”); click to unfold and jump.
- **Timeline:** every finding as a marker per lane, loudness and waveform below. Keys: ← → frame, Shift 1 s, J K L, ↑ ↓ next finding.
- **Picture tools** (view only): safe areas 4:3 / 16:9 / 9:16, zebra, false colour, pixels, edges, single fields, scopes.
- **Accept** a finding with a note when it is intended (e.g. a black opener). It stays in the report, marked as accepted.
- **Markers …** saves every finding for the edit: Resolve EDL, Premiere XML, FCPXML, CSV.

Full version

## Repair

For emergencies, when there is no time to go back to the edit: **Repair** shows a plan (what gets fixed, what cannot be and why), writes a new file next to the original (`…_QC-fixed`) and checks it again. It fixes loudness, start timecode, pre- and post-roll, levels and the container. The clean way remains the correction in the edit or finishing project; the markers show you every place.

![Repair plan with what gets fixed and what cannot be](https://swissqcguru.com/img/app-repair.jpg)

Full version

## Deliver

**Deliver** (per file) or **Deliver all …** builds a folder for the customer: report (prints as PDF), JSON, markers, checksums and a short summary. Optionally a **client view** (MP4 with gamma 2.4 → 2.2, so it looks right on an office screen).

![Delivery package with report, markers and client view](https://swissqcguru.com/img/app-package.jpg)

Full version

## Watch folder

In the **Watch** tab on the right: choose a folder and switch it on. Every new file is checked as soon as it has been copied completely, with the template from your rules; optionally with a delivery package per file. Results appear in the batch.

Templates · Auto-select

## Own templates and rules

- **Templates** tab: an own template starts from a broadcaster template and stores only what you change: each check on or off, its level and thresholds. Export it as a file to hand your house standard to freelancers. Broadcaster templates stay read-only and come with updates.
- **Auto-select** tab: rules like “folder contains ZDF and codec is ProRes → template X”. The first rule that matches wins; “Automatic (rules)” uses them.

![Template editor with checks, levels and thresholds](https://swissqcguru.com/img/app-editor.jpg)

Reference

## What each check does

The **Reference** tab lists every check with what it measures and the values of each broadcaster template; quotes from the specs stay word for word. From a finding in the player, “Open in reference” jumps there.

Licence

## Licence and add-ons

- **Demo:** checks the whole file and shows half of the findings. Deliver, repair, markers, PDF, client view, several templates and the watch folder need the full version.
- **Licence:** one key per computer, no time limit. Enter it under Settings › Licence. “Release this computer” frees it for another one.
- **Add-ons** tab: more broadcaster and platform packs, looks for the client view and Complete (all packs, also future ones). What you have comes first under “Your add-ons”. A pack's key goes into the field at the top of the tab.

![Add-ons with your packs first, then popular, streaming and by continent](https://swissqcguru.com/img/app-addons.jpg)

Settings

## Settings and updates

- **Language:** English or German for the window, findings, reports and delivery packages.
- **Privacy:** an anonymous usage count once a day (version, Windows or Mac, demo or licence, language, a random ID of this installation) – only if you agree. Files are checked locally and never uploaded.
- **Back up settings:** export and import templates, rules and settings, for a second computer or as a backup.
- **Updates:** when a new version is out, a blue “Update” button appears in the title bar. One click installs it; every package is checked against its signature.

Terminal

## Command line

The installer also sets up `qccheck`, for scripts and render farms. Exit code: 0 passed, 1 failed, 2 incomplete.

qccheck

`qccheck film.mxf --profile zdf
qccheck film.mxf --profiles ard-zdf-orf,srf,uk-dpp
qccheck fix film.mxf --profile zdf
qccheck deliver film.mxf --profile zdf --customer "…"
qccheck watch D:\Abgabe --recursive --deliver`

Support

## Help and feedback

The speech bubble in the title bar sends feedback straight to us, with a screenshot if you like. Or write to [support@vannuffel.ch](mailto:support@vannuffel.ch). A broadcaster missing? Send us its delivery spec.

Swiss QC Guru is a technical pre-check. It does not replace the broadcaster's acceptance, and the flash check is not a Harding test.

Swiss QC Guru by NuNu Soft · [Product](https://swissqcguru.com/index.html) · [Broadcasters, checks, repairs](https://swissqcguru.com/broadcasters.html) · [Install](https://swissqcguru.com/install.html) · [PodcastMagic 360](https://podcastmagic360.com/) ARD, ZDF, ORF and SRF are trademarks of their owners. Swiss QC Guru is not affiliated with any broadcaster; the templates follow their published delivery specs.

# Sifra website — notes for Claude

## Dev server
Do not stop or restart the user's dev server. They keep `npm run dev` running across sessions on port 3000; HMR picks up file edits automatically. When a task is done, leave the running process alone — never kill it, never run `npm run dev` and then shut it down on exit.

## Image resizing
Source JPEGs from Adobe Stock are huge (5000–6500px, 4–7 MB each). Decoding them blocks the compositor commit and causes ~200ms scroll hitches when they enter the viewport. Any new image added under `public/` must be resized before commit.

Resize target = ~2× the largest CSS pixel size it will render at. Current targets:

| Folder | Use | Long-edge max |
|---|---|---|
| `public/images/values/` | 120px circle thumbnails | 480px |
| `public/images/cards/` | 120px circle thumbnails | 480px |
| `public/images/about/` | half-grid photo | 1600px |
| `public/images/hero/` | full-viewport hero bg | 2400px |
| `public/og/` | 1200×630 social share image | 1200px |
| any new full-bleed hero | full viewport | 2400px |
| any new card thumbnail | <300px rendered | 480–600px |
| any new mid-size content image | half/third column | 1200–1600px |

All image paths are kebab-case with no spaces (`public/images/<section>/<descriptive-name>.webp`); name any new image the same way. (`public/_originals/` still uses the pre-rename folder names — that's fine, it's just the backup archive.)

Use macOS `sips` for JPEG/PNG (no extra deps). Always back up first to `public/_originals/` (gitignored) before overwriting in place.

```bash
# back up once if not already done
cd "/Users/ahm-macbook-pro/Desktop/Sifra-site/public"
mkdir -p _originals && cp -n "<folder>/<file>" "_originals/<folder>/" 2>/dev/null

# resize in place — replace 480 with the target from the table above
sips --resampleHeightWidthMax 480 -s formatOptions 80 "<path>" --out "<path>"
```

### WebP

`sips` on this machine can **read** webp but **cannot write** it (`Error: Can't write format: org.webmproject.webp`). Use `cwebp` (libwebp 1.5.0, installed at `~/.local/bin/cwebp` — call by full path, it is not on `PATH`). It does not resize, so resize first by piping through a PNG, then encode:

```bash
# back up the original webp first (see above), then:
sips -s format png --resampleHeightWidthMax 1600 "<src>.webp" --out /tmp/_r.png
~/.local/bin/cwebp -q 80 /tmp/_r.png -o "<dest>.webp" && rm /tmp/_r.png
```

`cwebp -q 80` matches the `sips` quality used for JPEGs. Reference webp images from JSX exactly like JPEGs (`src="/.../name.webp"`).

After resizing, verify file sizes are reasonable (thumbnails <100 KB, hero <500 KB) and that the image still looks crisp on a Retina display. Originals in `_originals/` are the safety net — never delete without asking the user.

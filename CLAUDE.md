# Sifra website — notes for Claude

## Dev server
Do not stop or restart the user's dev server. They keep `npm run dev` running across sessions on port 3000; HMR picks up file edits automatically. When a task is done, leave the running process alone — never kill it, never run `npm run dev` and then shut it down on exit.

## Image resizing
Source JPEGs from Adobe Stock are huge (5000–6500px, 4–7 MB each). Decoding them blocks the compositor commit and causes ~200ms scroll hitches when they enter the viewport. Any new image added under `public/` must be resized before commit.

Resize target = ~2× the largest CSS pixel size it will render at. Current targets:

| Folder | Use | Long-edge max |
|---|---|---|
| `public/Our Values images/` | 120px circle thumbnails | 480px |
| `public/Landing card images/` | 120px circle thumbnails | 480px |
| `public/About us hero image/` | half-grid photo | 1600px |
| `public/Landing hero image/` | full-viewport hero bg | 2400px |
| any new full-bleed hero | full viewport | 2400px |
| any new card thumbnail | <300px rendered | 480–600px |
| any new mid-size content image | half/third column | 1200–1600px |

Use macOS `sips` (no extra deps). Always back up first to `public/_originals/` (gitignored) before overwriting in place.

```bash
# back up once if not already done
cd "/Users/hudson_gomez/Desktop/Sifra website/public"
mkdir -p _originals && cp -n "<folder>/<file>" "_originals/<folder>/" 2>/dev/null

# resize in place — replace 480 with the target from the table above
sips --resampleHeightWidthMax 480 -s formatOptions 80 "<path>" --out "<path>"
```

After resizing, verify file sizes are reasonable (thumbnails <100 KB, hero <500 KB) and that the image still looks crisp on a Retina display. Originals in `_originals/` are the safety net — never delete without asking the user.

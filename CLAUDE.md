# Sifra website — notes for Claude

## Dev server
Do not stop or restart the user's dev server. They keep `npm run dev` running across sessions on port 3000; HMR picks up file edits automatically. When a task is done, leave the running process alone — never kill it, never run `npm run dev` and then shut it down on exit.

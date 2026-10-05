# Vite stale JSX-runtime reproduction

```sh
npm ci
npm start
```

Two examples, using an excluded, tsdown-built React library:

| Example | URL | Action |
|---|---|---|
| Realistic: lazy app route uses a library component that imports the popover normally | http://127.0.0.1:5081/ | Open board |
| Minimized: library function imports the popover directly on demand | http://127.0.0.1:5081/minimal.html | Load popover |

**Restart the server before each example.** They share the optimization cache. `npm start` clears it with `--force`.

Both fail with missing JSX-runtime export `t`. Remove `exclude: ['internal-ui']` from `vite.config.mjs` and restart to see them work.

Verified with Vite 8.3.2 and Rolldown 1.2.12 in Chromium and Firefox. Normal dependency scanning is enabled.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

Never run `git commit` or `git push` without explicit permission from the user. Instead, show the commands and tell the user to run them.

Never deploy (e.g. `firebase deploy`) without explicit permission from the user.

When writing copy or UI text: never use em-dashes (—) or hyphens (-) as sentence connectors. Rewrite sentences to flow naturally without them. Use an interpunct (·) as a separator in page titles only. Avoid badges, pills, and chip elements. Avoid alert/toast-style boxes around success or error messages — use plain styled text instead.

## Hosting

The site is hosted on Firebase Hosting (`waka-financial` site, `waka-dev` project) and served at `waka-financial.web.app`. The production domain will be `wakafinancial.co.nz`.

## Routing

Firebase Hosting rewrites in `firebase.json` proxy requests to the `api` Cloud Function (waka-backend). The rewrite `source` must match the **full Express path** including the router mount prefix — e.g. a route registered as `router.get("/verify")` mounted at `/waitlist` in `app.ts` must have source `/waitlist/verify`, not `/verify`.

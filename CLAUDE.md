# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

Never run `git commit` or `git push` without explicit permission from the user. Instead, show the commands and tell the user to run them.

Never deploy (e.g. `firebase deploy`) without explicit permission from the user.

## Hosting

The site is hosted on Firebase Hosting (`waka-financial` site, `waka-dev` project) and served at `waka-financial.web.app`. The production domain will be `wakafinancial.co.nz`.

## Routing

Firebase Hosting rewrites in `firebase.json` proxy requests to the `api` Cloud Function (waka-backend). The rewrite `source` must match the **full Express path** including the router mount prefix — e.g. a route registered as `router.get("/verify")` mounted at `/waitlist` in `app.ts` must have source `/waitlist/verify`, not `/verify`.

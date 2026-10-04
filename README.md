# Comic World

A Vue 3 app for browsing comics and tracking your collection and wishlist, built with [Vite](https://vite.dev/) and [Vue Router](https://router.vuejs.org/).

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (required by Vite 8)
- npm (comes with Node)

## Setup

Install dependencies:

```sh
npm install
```

## Commands

| Command           | What it does                                                              |
| ----------------- | ------------------------------------------------------------------------- |
| `npm run dev`     | Starts the dev server with hot module replacement at http://localhost:5173 |
| `npm run build`   | Builds an optimized production bundle into `dist/`                        |
| `npm run preview` | Serves the built `dist/` folder locally at http://localhost:4173          |

### Development

```sh
npm run dev
```

Edits to files in `src/` show up in the browser immediately. Useful flags (pass them after `--`):

```sh
npm run dev -- --open          # open the browser automatically
npm run dev -- --port 3000     # use a different port
npm run dev -- --host          # expose the server on your local network (e.g. to test on a phone)
```

### Production build

```sh
npm run build
```

The output goes to `dist/`, which is what you deploy. Run `npm run preview` afterwards to check the build locally before deploying; it isn't meant to serve the app in production.

The router uses HTML5 history mode (`createWebHistory`), so the host must send `index.html` for unknown paths. Otherwise refreshing on a page like `/collection` returns a 404.

## Project structure

```
index.html          # HTML entry point; loads src/main.js
public/             # Static files copied as-is to the build (e.g. favicon.svg)
src/
  main.js           # Creates the Vue app and installs the router
  App.vue           # Root component
  router/index.js   # Route definitions
  views/            # Page components (Home, Collection, Wishlist)
  components/       # Reusable components (ComicCard)
  store.js          # Shared app state
  style.css         # Global styles
vite.config.js      # Vite configuration
```

# WorldWise

WorldWise is a React map-based travel tracker where users can save cities they visited, attach trip notes and dates, and browse trips by city or country.

## Demo Features

- Interactive map with click-to-add city flow (Leaflet + React Leaflet)
- Reverse geocoding to auto-fill city and country from map coordinates
- City list and country summary views
- City details page with trip date and notes
- Fake auth flow with protected app routes
- Local mock backend using `json-server`

## Tech Stack

- React 19
- React Router DOM
- Vite
- Leaflet + React Leaflet
- React Datepicker
- json-server
- CSS Modules

## Project Structure

```text
src/
  Components/      # UI building blocks (map, lists, form, city details)
  context/         # Auth and cities state management
  hooks/           # Geolocation and URL position hooks
  pages/           # Top-level pages and route layouts
data/
  cities.json      # json-server database
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the API server

```bash
npm run server
```

This starts `json-server` at:

`http://localhost:9000`

### 3. Start the frontend

In another terminal:

```bash
npm run dev
```

Vite runs at:

`http://localhost:5173`

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint
- `npm run server` - run local JSON API on port 9000

## Demo Login

Use these credentials on the login page:

- Email: `jack@example.com`
- Password: `qwerty`

## API Notes

The app expects a `cities` collection in `data/cities.json` with fields like:

- `cityName`
- `country`
- `emoji`
- `date`
- `notes`
- `position.lat`
- `position.lng`

## GitHub Pages Deployment Note

This app currently uses `BrowserRouter`. For GitHub Pages, deep-link refreshes can return 404 unless you:

- switch to `HashRouter`, or
- add an SPA fallback strategy (`404.html` redirect).

Also set the Vite `base` path in `vite.config.js` to match your repository name.

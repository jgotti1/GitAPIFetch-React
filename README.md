# GitHub User Lookup

A small React app that looks up a GitHub account by username using the public GitHub REST API and displays the account's avatar, username, public repo count, and a link to their profile.

## Features

- Search for any GitHub username
- Displays avatar, login name, and public repository count
- Links directly to the user's GitHub profile
- Shows a "not found" message for usernames that don't exist
- Clear button to reset the form and results

## Tech Stack

- React 19 (Create React App)
- React Bootstrap / Bootstrap 5 for UI components and styling
- [GitHub REST API](https://docs.github.com/en/rest/users/users) (`GET /users/{username}`)

### Dependency versions

| Package | Version |
|---|---|
| react / react-dom | 19.3.1 |
| react-bootstrap | 2.10.10 |
| bootstrap | 5.3.8 |
| react-scripts | 5.0.1 |
| @testing-library/react | 16.3.3 |
| @testing-library/jest-dom | 6.9.1 |
| @testing-library/user-event | 14.6.8 |
| web-vitals | 6.2.3 |

`@testing-library/jest-dom` is pinned to 6.9.1 rather than the latest 7.x, since 7.x requires Node 22+ while this project currently targets Node 20.

`react-scripts` (Create React App) is no longer actively maintained, so `npm audit` will report a number of vulnerabilities in its own dependency tree. These are longstanding upstream issues, not introduced by app code, and `npm audit fix --force` would downgrade/break `react-scripts` — leave it as-is unless migrating off CRA.

## Project Structure

```
src/
├── App.js                       # Top-level state and layout
├── components/
│   ├── UserForm.js              # Username input, fetches GitHub user data
│   ├── FetchResponse.js         # Status messages (found / not found)
│   └── FetchedDIsplay.js        # Result card (avatar, repo count, profile link)
```

## Getting Started

In the project directory, you can run:

### `npm install`

Installs project dependencies.

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Usage

1. Enter a GitHub username in the search field.
2. Click **Submit** to fetch that user's public data.
3. View their avatar, repo count, and a link to their profile, or a "not found" message if the username doesn't exist.
4. Click **-Clear-** to reset the form.

## Portfolio card

The block below is machine-readable project info for a portfolio site (invisible on GitHub). Keep it in sync when the project, URL or tech changes. To build a card: read this JSON and use `title`, `tagline`/`description`, `thumbnail`, `tech`, and link to `liveUrl` and `repoUrl`.

<!-- portfolio-card:start
{
  "title": "GitHub User Lookup",
  "category": "web app",
  "tagline": "A React app that looks up any GitHub account and displays their public profile data.",
  "description": "Built as a teaching tool for a coding bootcamp, this app demonstrates core JavaScript fetch/API concepts: making a request, handling loading and error states, and rendering the response. Users search a GitHub username to see their avatar, public repo count, recently updated repositories, and a link to their profile, with live/debounced search, search history, and a light/dark theme toggle.",
  "liveUrl": "https://githubfetch.margotticode.com",
  "repoUrl": "https://github.com/jgotti1/GitAPIFetch-React",
  "thumbnail": "https://raw.githubusercontent.com/jgotti1/GitAPIFetch-React/main/docs/preview.jpg",
  "tech": ["React", "React Bootstrap", "Bootstrap", "GitHub REST API", "JavaScript Fetch API"],
  "features": [
    "Search any GitHub username via the GitHub REST API",
    "Displays avatar, repo count, and recently updated repositories",
    "Debounced live search as you type, plus manual submit",
    "Distinguishes rate-limit vs. not-found vs. network errors",
    "Persisted recent-search history with a clear option",
    "Light/dark mode toggle"
  ],
  "platforms": ["desktop", "tablet", "mobile"],
  "status": "live",
  "origin": "Built as an instructional example for a coding bootcamp, teaching students JavaScript fetch/API fundamentals."
}
portfolio-card:end -->

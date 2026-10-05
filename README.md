# Token

A responsive static project website for XCat Studio. The site is implemented as a single HTML file and does not require a build step or third-party dependencies.

## Features

- Responsive layouts for desktop, tablet, and mobile screens
- Single-page navigation with project overview and principles sections
- CSS-generated artwork and animation
- Reduced-motion support based on the visitor's system preference
- Semantic HTML and accessible navigation labels
- Automatic current year in the footer

## Project structure

```text
.
├── index.html  # Website markup, styles, and script
└── README.md   # Project documentation
```

## Getting started

Open `index.html` directly in a web browser, or serve the repository with a local static web server.

For example, using Python:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Development

All page markup, styling, and client-side behavior are contained in `index.html`:

- HTML defines the page content and structure.
- The inline CSS controls the visual design and responsive breakpoints.
- The inline JavaScript updates the footer year.

Changes can be made directly in `index.html` and checked by refreshing the browser.

## Deployment

Because the project contains only static files, it can be served by any static web host. The published site should use `index.html` as its entry page.

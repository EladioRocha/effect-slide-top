# Full-Screen Slide-Up Effect

A minimal **HTML, CSS, and JavaScript animation** that cycles full-screen panels upward. It uses CSS transitions and a small DOM queue rather than a slideshow framework.

## Run locally

From the repository root, use Python 3 to start a static server:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000` in a browser. No npm installation or build step is required to view the checked-in example. Stop the server with `Ctrl+C`.

## How it works

1. `index.js` starts a timer with `SLIDE_TIME = 2000` milliseconds.
2. The first and second panels receive transition classes.
3. A new numbered panel is appended when the queue needs one.
4. The `transitionend` handler removes the outgoing panel and resets the next panel's classes.

The animation starts automatically; the example does not expose manual navigation or pause controls.

## Customize

- [index.html](index.html): initial panels and page structure.
- [style.css](style.css): panel appearance, transforms, and transition duration.
- [index.js](index.js): timer interval, generated panel text, and queue lifecycle.

Keep the CSS transition duration compatible with the JavaScript timer. The selectors target generic `div` elements, so adding unrelated divs can affect slide selection and queue counting.

## Verification

There is no build system or automated test suite. `node --check index.js` checks JavaScript syntax. When changing the effect, observe several cycles, check browser errors, and confirm outgoing panels are removed rather than accumulating. A production component would also need pause and reduced-motion handling.

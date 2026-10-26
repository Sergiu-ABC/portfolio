import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

async function start() {
  // Dev only: stress-test data and its toggle (src/dev). The build drops this
  // branch, so none of it ships.
  if (import.meta.env.DEV) {
    const [{ applyFixture, currentFixture }, { mountToggle }] = await Promise.all([
      import('./dev/fixtures'),
      import('./dev/DataToggle'),
    ]);
    applyFixture(currentFixture());
    mountToggle();
  }

  const root = document.getElementById('root')!;
  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  // The production build ships prerendered HTML (scripts/prerender.mjs), which
  // React takes over; the dev server starts from an empty root.
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}

void start();

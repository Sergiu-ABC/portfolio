import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Used only by scripts/prerender.mjs at build time.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

// Dev only: the Demo / Worst case / Empty / One switch for the break-ui pass.
// Plain on purpose: it's tooling, not part of the design under test.
import { createRoot } from 'react-dom/client';
import { currentFixture, FIXTURES, type FixtureName } from './fixtures';

function choose(id: FixtureName) {
  const url = new URL(window.location.href);
  if (id === 'demo') url.searchParams.delete('data');
  else url.searchParams.set('data', id);
  window.location.href = url.toString();
}

function DataToggle() {
  const active = currentFixture();
  return (
    <div
      role="group"
      aria-label="Data set (dev only)"
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: 2,
        padding: 3,
        borderRadius: 999,
        background: '#d4d4d8',
        boxShadow: '0 2px 10px rgb(0 0 0 / 0.25)',
        font: '500 12px/1 system-ui, sans-serif',
      }}
    >
      {FIXTURES.map((f) => (
        <button
          key={f.id}
          type="button"
          aria-pressed={f.id === active}
          onClick={() => choose(f.id)}
          style={{
            padding: '7px 11px',
            border: 0,
            borderRadius: 999,
            background: f.id === active ? '#ffffff' : 'transparent',
            color: '#18181b',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export function mountToggle() {
  const host = document.createElement('div');
  document.body.appendChild(host);
  createRoot(host).render(<DataToggle />);
}

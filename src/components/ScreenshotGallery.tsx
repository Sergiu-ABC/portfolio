import { useEffect, useRef, useState } from 'react';
import type { Screen } from '../content';
import { Stagger, staggerIndex } from './motion';

export function ScreenshotGallery({ screens }: { screens: Screen[] }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (!modal || !open) return;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [open]);

  if (!screens.length) return null;
  const screen = screens[selected];

  function close() {
    setOpen(false);
  }

  return (
    <>
      <p className="gallery-hint">Select a screen to enlarge it.</p>
      <Stagger className="screens" aria-label="Direction screenshots">
        {screens.map((s, i) => (
          <li key={s.src} className="screen" style={staggerIndex(i)}>
            <button type="button" className="screen-zoom" aria-label={`Enlarge screenshot ${i + 1}: ${s.alt}`} aria-haspopup="dialog"
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setSelected(i);
                setOpen(true);
              }}>
              <img src={`/images/direction/${s.src}-360.webp`}
                srcSet={`/images/direction/${s.src}-360.webp 360w, /images/direction/${s.src}-720.webp 720w`}
                sizes="(min-width: 1024px) 200px, 46vw" width={360} height={640}
                alt={s.alt} loading="lazy" decoding="async" />
              <span className="screen-zoom-label" aria-hidden="true">Enlarge ↗</span>
            </button>
          </li>
        ))}
      </Stagger>
      <dialog ref={dialog} className="image-dialog" aria-label="Direction screenshot viewer"
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') { event.preventDefault(); setSelected((i) => (i + 1) % screens.length); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); setSelected((i) => (i - 1 + screens.length) % screens.length); }
        }}>
        {open && <div className="image-dialog-content">
          <div className="image-dialog-toolbar">
            <span className="mono" aria-live="polite">Screen {selected + 1} of {screens.length}</span>
            <button type="button" className="gallery-control" onClick={close}>Close <span aria-hidden="true">×</span></button>
          </div>
          <figure>
            <img src={`/images/direction/${screen.src}-720.webp`} width={720} height={1280} alt={screen.alt} />
            <figcaption>{screen.alt}</figcaption>
          </figure>
          <div className="image-dialog-nav">
            <button type="button" className="gallery-control" onClick={() => setSelected((i) => (i - 1 + screens.length) % screens.length)}>← Previous</button>
            <button type="button" className="gallery-control" onClick={() => setSelected((i) => (i + 1) % screens.length)}>Next →</button>
          </div>
        </div>}
      </dialog>
    </>
  );
}

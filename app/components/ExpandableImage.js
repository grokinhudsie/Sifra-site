'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getLenis } from './lenisInstance';

export default function ExpandableImage({ src, alt, className, lightboxExtra }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      lenis?.start();
    };
  }, [open]);

  return (
    <>
      <img
        className={`${className ?? ''} img-expandable`.trim()}
        src={src}
        alt={alt}
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />
      {open &&
        createPortal(
          <div
            className="img-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              className="img-lightbox-close"
              aria-label="Close enlarged image"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <div className="img-lightbox-body">
              <img className="img-lightbox-img" src={src} alt={alt} />
              {lightboxExtra && (
                <div
                  className="img-lightbox-extra"
                  onClick={(e) => e.stopPropagation()}
                >
                  {lightboxExtra}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

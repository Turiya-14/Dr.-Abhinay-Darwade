import { X } from 'lucide-react';
import { useEffect, useId, useRef, type KeyboardEvent, type MouseEvent } from 'react';
import type { GalleryItem } from '../content/siteContent';

type GalleryDialogProps = {
  item: GalleryItem | null;
  /** Called after the viewer closes (Escape, close button or backdrop). */
  onClose: () => void;
};

/**
 * Accessible image viewer built on the native modal <dialog>:
 * the page behind becomes inert, Escape closes it, Tab stays inside,
 * and the caller returns focus to the thumbnail that opened it.
 */
export function GalleryDialog({ item, onClose }: GalleryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const captionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    } else if (!item && dialog.open) {
      dialog.close();
    }
  }, [item]);

  const requestClose = () => dialogRef.current?.close();

  const keepFocusInside = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) requestClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby={item ? captionId : undefined}
      aria-label={item ? undefined : 'Image viewer'}
      onClose={onClose}
      onKeyDown={keepFocusInside}
      onClick={closeOnBackdrop}
    >
      {item ? (
        <div className="lightbox-inner" onClick={closeOnBackdrop}>
          <button ref={closeRef} type="button" className="lightbox-close" onClick={requestClose}>
            <X aria-hidden="true" strokeWidth={1.75} />
            <span>Close</span>
          </button>
          <figure className="lightbox-figure">
            <img src={item.src} width={item.width} height={item.height} alt={item.alt} />
            <figcaption id={captionId}>{item.caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </dialog>
  );
}

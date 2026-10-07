import { useRef, useState } from 'react';
import { GalleryDialog } from '../components/GalleryDialog';
import { Section } from '../components/Section';
import { Eyebrow } from '../components/ui';
import { gallery, type GalleryItem } from '../content/siteContent';

const ratio = (item: GalleryItem) => item.width / item.height;

// Two images per row; each row is "justified" — widths follow the photos' own
// aspect ratios so every row shares one height and no photo is cropped.
const rows: GalleryItem[][] = [];
for (let i = 0; i < gallery.items.length; i += 2) rows.push(gallery.items.slice(i, i + 2));

function sizesFor(item: GalleryItem, row: GalleryItem[]) {
  const share = ratio(item) / row.reduce((sum, current) => sum + ratio(current), 0);
  return `(min-width: 1224px) ${Math.round(1136 * share)}px, (min-width: 768px) ${Math.round(94 * share)}vw, 100vw`;
}

export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setActive(null);
    lastTrigger.current?.focus();
  };

  return (
    <Section id="gallery" titleId="gallery-title">
      <div className="max-w-3xl">
        <Eyebrow>{gallery.eyebrow}</Eyebrow>
        <h2 id="gallery-title" className="h2 mt-5">
          {gallery.title}
        </h2>
      </div>

      <div className="mt-10 space-y-8 md:mt-12">
        {rows.map((row) => (
          <div key={row[0].id} className="flex flex-col gap-8 md:flex-row md:gap-6">
            {row.map((item) => (
              <figure key={item.id} className="min-w-0 md:basis-0" style={{ flexGrow: ratio(item) }}>
                <button
                  type="button"
                  className="gallery-trigger group block w-full overflow-hidden rounded-md bg-sand"
                  onClick={(event) => {
                    lastTrigger.current = event.currentTarget;
                    setActive(item);
                  }}
                >
                  <img
                    src={item.src}
                    srcSet={item.srcSet}
                    sizes={sizesFor(item, row)}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
                  />
                  <span className="sr-only">Open larger image</span>
                </button>
                <figcaption className="mt-3 text-[0.875rem] leading-snug text-muted">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>

      <GalleryDialog item={active} onClose={handleClose} />
    </Section>
  );
}

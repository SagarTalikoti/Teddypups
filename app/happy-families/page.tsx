'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { HAPPY_FAMILIES } from '@/lib/data';
import { RevealScope } from '@/components/RevealScope';

const TILTS = [-2.2, 1.6, -0.9, 2.4, -1.5, 0.8, -2.6, 1.2];
const TAPE_POSITIONS = ['center', 'left', 'right', 'corners', 'center', 'right', 'left', 'center'] as const;
const TAPES = ['#f6d79a', '#f9cdbf', '#cfe5f6', '#f6d79a', '#e9dcc4'];

export default function HappyFamiliesPage() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const total = HAPPY_FAMILIES.length;

  const navigatePhoto = useCallback(
    (nextIdx: number) => {
      setActivePhoto((nextIdx % total + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (activePhoto === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigatePhoto(activePhoto + 1);
      } else if (e.key === 'ArrowLeft') {
        navigatePhoto(activePhoto - 1);
      } else if (e.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activePhoto, navigatePhoto]);

  return (
    <div data-page="families" className="tp-page">
      <section aria-labelledby="families-title" className="tp-memories">
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <div className="tp-memories__head">
            <div>
              <p className="font-scrawl text-lg text-toffee-ink" data-reveal="true">
                our wall of happy endings
              </p>
              <h1 id="families-title" className="font-plush text-giant tp-memories__title" data-reveal="true">
                Happy families
                <svg viewBox="0 0 48 44" className="tp-memories__heart" aria-hidden="true">
                  <path
                    d="M24 40C10 30 4 22 4 14.5 4 8.7 8.6 4 14.3 4c4.1 0 7.6 2.4 9.7 6 2.1-3.6 5.6-6 9.7-6C39.4 4 44 8.7 44 14.5 44 22 38 30 24 40z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h1>
              <p className="text-lede mt-6 max-w-[50ch] text-cocoa-soft" data-reveal="true">
                Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.
              </p>
              <p className="font-scrawl mt-5 text-lg text-toffee-ink" data-reveal="true">
                {HAPPY_FAMILIES.length} moments and counting
              </p>
            </div>

            <figure className="tp-memories__note" data-reveal="true">
              <span
                aria-hidden="true"
                className="tp-tape tp-tape--center"
                style={{ '--tape': '#cfe5f6' } as React.CSSProperties}
              />
              <blockquote className="font-plush-text">
                “TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”
              </blockquote>
              <figcaption className="font-scrawl">Sarah M., Dubai, UAE</figcaption>
            </figure>
          </div>

          <div className="mt-16 md:mt-20">
            <RevealScope>
              <ul className="tp-wall" aria-label="Photos from TeddyPups families">
                {HAPPY_FAMILIES.map((photo, idx) => {
                  const tilt = TILTS[idx % TILTS.length];
                  const tapeColor = TAPES[idx % TAPES.length];
                  const tapePos = TAPE_POSITIONS[idx % TAPE_POSITIONS.length];

                  return (
                    <li
                      key={photo.id}
                      className="tp-wall__item"
                      data-reveal="true"
                      style={{ '--d': `${(idx % 4) * 60}ms` } as React.CSSProperties}
                    >
                      <button
                        type="button"
                        className="tp-wall__print"
                        aria-label={`Open photo ${idx + 1} of ${HAPPY_FAMILIES.length}${photo.caption ? `: ${photo.caption}` : ''}`}
                        onClick={() => setActivePhoto(idx)}
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            '--tilt': `${tilt}deg`,
                            '--tape': tapeColor,
                            '--i': idx,
                          } as React.CSSProperties}
                        >
                          {tapePos === 'corners' ? (
                            <>
                              <span aria-hidden="true" className="tp-tape tp-tape--tl" />
                              <span aria-hidden="true" className="tp-tape tp-tape--tr" />
                            </>
                          ) : (
                            <span aria-hidden="true" className={`tp-tape tp-tape--${tapePos}`} />
                          )}

                          <span className="tp-polaroid__photo">
                            <Image
                              alt={photo.alt || 'A happy TeddyPups family with their new puppy'}
                              width={photo.width || 600}
                              height={photo.height || 600}
                              sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw"
                              src={photo.url}
                              priority={idx < 4}
                              style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                              }}
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            {photo.caption || 'happy family'}
                          </span>
                        </span>

                        <svg
                          viewBox="0 0 64 64"
                          className="tp-wall__paw"
                          aria-hidden="true"
                          fill="currentColor"
                        >
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </RevealScope>
          </div>
        </div>
      </section>

      {/* Modal Dialog Viewer matching authentic dialog */}
      {activePhoto !== null && (
        <dialog
          open
          aria-label="Photo viewer"
          className="tp-modal-dialog"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActivePhoto(null);
          }}
        >
          <div className="tp-modal-top">
            <p className="tp-modal-counter">
              {activePhoto + 1} / {total}
            </p>
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="tp-modal-close"
            >
              Close
            </button>
          </div>

          <div className="relative flex-1 overflow-hidden px-4">
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                alt={
                  HAPPY_FAMILIES[activePhoto].alt ||
                  'A happy TeddyPups family with their new puppy'
                }
                src={HAPPY_FAMILIES[activePhoto].url}
                fill
                quality={85}
                sizes="(min-width: 1024px) 70vw, 95vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="tp-modal-nav">
            <button
              type="button"
              onClick={() => navigatePhoto(activePhoto - 1)}
              className="tp-modal-btn tp-modal-btn--prev"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => navigatePhoto(activePhoto + 1)}
              className="tp-modal-btn tp-modal-btn--next"
            >
              Next
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PupBuddy } from '@/components/PupBuddy';

interface PolaroidItem {
  index: number;
  url: string;
  caption: string;
  tilt: string;
  tape: string;
  tapePos: 'center' | 'left' | 'right' | 'both';
  delay: string;
}

const HOME_POLAROIDS: PolaroidItem[] = [
  {
    index: 1,
    url: '/media/dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg',
    caption: 'Lulu 🧸 with her new mummy ❤️',
    tilt: '-2.2deg',
    tape: '#f6d79a',
    tapePos: 'center',
    delay: '330ms',
  },
  {
    index: 2,
    url: '/media/TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg',
    caption: 'Adorable Maltipoo baby 🧸❤️',
    tilt: '1.6deg',
    tape: '#f9cdbf',
    tapePos: 'left',
    delay: '0ms',
  },
  {
    index: 3,
    url: '/media/j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg',
    caption: 'My new teddy puppy 🥰🧸',
    tilt: '-0.9deg',
    tape: '#cfe5f6',
    tapePos: 'right',
    delay: '550ms',
  },
  {
    index: 4,
    url: '/media/HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg',
    caption: 'Our new puppies 🧸🥰🤗',
    tilt: '2.4deg',
    tape: '#f6d79a',
    tapePos: 'both',
    delay: '110ms',
  },
  {
    index: 5,
    url: '/media/uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg',
    caption: 'New puppy 🧸😍',
    tilt: '-1.5deg',
    tape: '#e9dcc4',
    tapePos: 'center',
    delay: '660ms',
  },
  {
    index: 6,
    url: '/media/pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg',
    caption: 'Gang of 3 😍🧸',
    tilt: '0.8deg',
    tape: '#f6d79a',
    tapePos: 'right',
    delay: '220ms',
  },
  {
    index: 7,
    url: '/media/4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg',
    caption: 'So happy 😍😍',
    tilt: '-2.6deg',
    tape: '#f9cdbf',
    tapePos: 'left',
    delay: '770ms',
  },
  {
    index: 8,
    url: '/media/3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg',
    caption: 'New pup 🤗💫',
    tilt: '1.2deg',
    tape: '#cfe5f6',
    tapePos: 'center',
    delay: '440ms',
  },
];

export function DuskSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidItem | null>(null);

  return (
    <section
      data-pup-scene="true"
      data-tone="dark"
      className="tp-scene tp-dusk"
      style={{ '--sky-top': '#a65a30', '--sky-bottom': '#4d2b19' } as React.CSSProperties}
      aria-labelledby="dusk-title"
    >
      <div className="tp-dusk__sky gutter">
        <div className="tp-dusk__head">
          <h2 id="dusk-title" className="font-plush text-huge">
            Happy families &amp; puppies
          </h2>
          <p className="text-lede mt-5 max-w-[50ch] text-[var(--ink-soft)]">
            We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.
          </p>
        </div>

        <figure className="tp-dusk__note">
          <blockquote className="font-plush-text">
            “TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”
          </blockquote>
          <figcaption className="font-scrawl">Sarah M., Dubai, UAE</figcaption>
        </figure>
      </div>

      <div className="tp-photowall">
        <div className="tp-photowall__wall">
          <ul className="tp-photowall__prints" aria-label="Photos from TeddyPups families">
            {HOME_POLAROIDS.map((p, idx) => (
              <li
                key={p.url}
                data-reveal="true"
                data-pup-look={idx === 1 || idx === 4 ? '' : undefined}
                style={{ '--d': p.delay } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="tp-photowall__print"
                  aria-label={`Open photo ${p.index} of 64: ${p.caption}`}
                  onClick={() => setSelectedPhoto(p)}
                >
                  <span
                    className="tp-polaroid"
                    style={{ '--tilt': p.tilt, '--tape': p.tape, '--i': idx } as React.CSSProperties}
                  >
                    {p.tapePos === 'center' && (
                      <span aria-hidden="true" className="tp-tape tp-tape--center" />
                    )}
                    {p.tapePos === 'left' && (
                      <span aria-hidden="true" className="tp-tape tp-tape--left" />
                    )}
                    {p.tapePos === 'right' && (
                      <span aria-hidden="true" className="tp-tape tp-tape--right" />
                    )}
                    {p.tapePos === 'both' && (
                      <>
                        <span aria-hidden="true" className="tp-tape tp-tape--tl" />
                        <span aria-hidden="true" className="tp-tape tp-tape--tr" />
                      </>
                    )}

                    <span className="tp-polaroid__photo">
                      <Image
                        alt="A happy TeddyPups family with their new puppy"
                        width={433}
                        height={433}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                        src={p.url}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </span>
                    <span className="tp-polaroid__caption font-scrawl">{p.caption}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="tp-facade__ground">
            <span aria-hidden="true" className="tp-facade__door" />
            <span aria-hidden="true" className="tp-lamp">
              <span className="tp-lamp__light" />
            </span>
            <Link className="btn btn-primary tp-facade__cta" href="/happy-families">
              See every happy family
            </Link>

            <div
              data-pup-stop="true"
              data-pose="sit"
              data-facing="right"
              className="pup-stop tp-dusk__teddy"
            >
              <PupBuddy pose="sit" facing="right" />
            </div>
          </div>

          <div aria-hidden="true" className="tp-street__pavement" />
        </div>
      </div>

      {/* Photo viewer modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-lg rounded-2xl bg-milk p-6 text-cocoa shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full p-2 text-cocoa hover:bg-black/10"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                alt={selectedPhoto.caption}
                src={selectedPhoto.url}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="mt-4 text-center font-scrawl text-xl text-cocoa">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

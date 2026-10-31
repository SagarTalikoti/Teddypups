'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AVAILABLE_PUPPIES, SITE_CONFIG } from '@/lib/data';
import { PupBuddy } from '@/components/PupBuddy';
import { RevealScope } from '@/components/RevealScope';
import { GoneHomeStrip } from '@/components/puppies/GoneHomeStrip';
import { computeSketchShape, createSvgMaskUrl, DoodleItem } from '@/lib/sketch';

const BREEDS = [
  { slug: 'all', label: 'All' },
  { slug: 'maltipoo', label: 'Maltipoo' },
  { slug: 'pomeranian', label: 'Pomeranian' },
  { slug: 'poodle', label: 'Poodle' },
  { slug: 'cavapoo', label: 'Cavapoo' },
  { slug: 'shih-tzu', label: 'Shih Tzu' },
];

const ORIGINS = [
  { slug: 'all', label: 'Everywhere' },
  { slug: 'local', label: 'In Dubai' },
  { slug: 'imported', label: 'Imported' },
];

const GENDERS = [
  { slug: 'all', label: 'All' },
  { slug: 'male', label: 'Boys' },
  { slug: 'female', label: 'Girls' },
];

function DoodleIcon({ d }: { d: DoodleItem }) {
  const transform = `translate(${d.x.toFixed(1)} ${d.y.toFixed(1)}) rotate(${d.rot.toFixed(0)}) scale(${d.size.toFixed(2)})`;
  const strokeProps = {
    fill: 'none',
    stroke: d.ink,
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <g transform={transform}>
      <g className="tp-sketch__doodle">
        {d.kind === 'sparkle' && (
          <path
            d="M0 -6c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6z"
            fill={d.ink}
          />
        )}
        {d.kind === 'heart' && (
          <path
            d="M0 5C-4.6 1.8-6.4-.8-6.4-3.2c0-1.9 1.5-3.3 3.3-3.3 1.3 0 2.4.7 3.1 1.9.7-1.2 1.8-1.9 3.1-1.9 1.8 0 3.3 1.4 3.3 3.3C6.4-.8 4.6 1.8 0 5z"
            {...strokeProps}
          />
        )}
        {d.kind === 'dashes' && (
          <path d="M-5 -5l4 2M-6 0h5M-5 5l4 -2" {...strokeProps} />
        )}
        {d.kind === 'swirl' && (
          <path
            d="M0 0c1.6-.6 2.4 1.4.8 2.6-2 1.4-4.6-.4-4-3 .7-3 4.8-3.8 6.8-1.2 2.4 3-0.2 7.4-3.8 7.2"
            {...strokeProps}
          />
        )}
        {d.kind === 'dots' && (
          <g fill={d.ink}>
            <circle cx="-4" cy="1" r="1.2" />
            <circle cx="0" cy="-2" r="1.2" />
            <circle cx="4" cy="1" r="1.2" />
          </g>
        )}
        {d.kind === 'paw' && (
          <path
            d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"
            transform="scale(.17) translate(-32 -34)"
            fill={d.ink}
            opacity={0.85}
          />
        )}
      </g>
    </g>
  );
}

export default function PuppiesPage() {
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');

  const filteredPuppies = useMemo(() => {
    return AVAILABLE_PUPPIES.filter((pup) => {
      // Breed match
      if (selectedBreed !== 'all') {
        const matchesBreed =
          pup.breed.toLowerCase().includes(selectedBreed) ||
          pup.breeds.some((b) => b.slug.toLowerCase().includes(selectedBreed));
        if (!matchesBreed) return false;
      }
      // Origin match
      if (selectedOrigin !== 'all') {
        if (selectedOrigin === 'local' && pup.origin.slug !== 'local') return false;
        if (selectedOrigin === 'imported' && pup.origin.slug !== 'imported') return false;
      }
      // Gender match
      if (selectedGender !== 'all') {
        if (selectedGender === 'male' && pup.gender !== 'male') return false;
        if (selectedGender === 'female' && pup.gender !== 'female') return false;
      }
      return true;
    });
  }, [selectedBreed, selectedOrigin, selectedGender]);

  const hasFilters = selectedBreed !== 'all' || selectedOrigin !== 'all' || selectedGender !== 'all';

  // Precompute shapes for filtered puppies
  const shapes = useMemo(() => {
    const map = new Map<string, ReturnType<typeof computeSketchShape>>();
    for (const pup of AVAILABLE_PUPPIES) {
      map.set(pup.slug, computeSketchShape(pup.slug));
    }
    return map;
  }, []);

  return (
    <div data-page="pups" className="tp-page">
      <section aria-labelledby="pups-title" className="tp-sketchbook">
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <div className="tp-sketchbook__head">
            <div className="tp-sketchbook__words">
              <p className="font-scrawl text-lg text-toffee-ink" data-reveal="true">
                from Teddy&apos;s sketchbook
              </p>
              <h1 id="pups-title" className="font-plush text-giant tp-sketchbook__title" data-reveal="true">
                Available puppies
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 24"
                  preserveAspectRatio="none"
                  className="tp-sketchbook__underline"
                >
                  <path
                    d="M4 15c40-9 70 5 112-2s70-9 112 0 74 8 116-1 38-4 52 1"
                    pathLength="1"
                  />
                </svg>
              </h1>
              <p className="tp-sketchbook__lede text-lede mt-6 max-w-[46ch] text-cocoa-soft" data-reveal="true">
                Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.
              </p>
            </div>

            <div className="tp-sketchbook__self" data-reveal="true">
              <PupBuddy pose="sit" facing="left" label="Teddy, self-portrait in sketchbook" />
              <span className="font-scrawl tp-sketchbook__caption">self-portrait</span>
            </div>
          </div>

          {/* Filters Pad */}
          <div
            role="group"
            aria-label="Filter puppies"
            className="tp-sketchpad mt-12 flex flex-col gap-4"
          >
            {/* Origin */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-scrawl mr-1 w-full shrink-0 text-cocoa-soft sm:w-28">where</span>
              {ORIGINS.map((o) => (
                <button
                  key={o.slug}
                  type="button"
                  aria-pressed={selectedOrigin === o.slug}
                  onClick={() => setSelectedOrigin(o.slug)}
                  className="tp-sticker-chip"
                >
                  {o.label}
                </button>
              ))}
            </div>

            {/* Breed */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-scrawl mr-1 w-full shrink-0 text-cocoa-soft sm:w-28">breed</span>
              {BREEDS.map((b) => (
                <button
                  key={b.slug}
                  type="button"
                  aria-pressed={selectedBreed === b.slug}
                  onClick={() => setSelectedBreed(b.slug)}
                  className="tp-sticker-chip"
                >
                  {b.label}
                </button>
              ))}
            </div>

            {/* Gender */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-scrawl mr-1 w-full shrink-0 text-cocoa-soft sm:w-28">boy or girl</span>
              {GENDERS.map((g) => (
                <button
                  key={g.slug}
                  type="button"
                  aria-pressed={selectedGender === g.slug}
                  onClick={() => setSelectedGender(g.slug)}
                  className="tp-sticker-chip"
                >
                  {g.label}
                </button>
              ))}
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBreed('all');
                    setSelectedOrigin('all');
                    setSelectedGender('all');
                  }}
                  className="link-ink ml-auto text-[0.95rem] font-semibold"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Results count indicator */}
          <p className="font-scrawl mt-10 text-lg text-[var(--ink-soft)]" aria-live="polite">
            {filteredPuppies.length === 1 ? '1 puppy' : `${filteredPuppies.length} puppies`}{' '}
            {hasFilters ? 'match' : 'looking for a home'}
          </p>

          {/* Puppies Grid with RevealScope */}
          <RevealScope>
            <ul className="tp-sketches mt-8">
              {filteredPuppies.map((pup, idx) => {
                const hasVideo = pup.media.some((m) => m.kind === 'video');
                const shape = shapes.get(pup.slug) || computeSketchShape(pup.slug);

                return (
                  <li key={pup.id}>
                    <Link
                      className="tp-sketch"
                      data-reveal="true"
                      style={{
                        '--tilt': `${shape.tilt.toFixed(2)}deg`,
                        '--d': `${(idx % 8) * 70}ms`,
                        '--wash': shape.wash.color,
                      } as React.CSSProperties}
                      aria-label={`${pup.name}, ${pup.breed}, ${pup.genderLabel.toLowerCase()}, ${pup.age}, available`}
                      href={`/puppies/${pup.slug}`}
                    >
                      <span className="tp-sketch__frame">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 100 100"
                          className="tp-sketch__wash"
                          style={{
                            translate: `${shape.wash.dx.toFixed(1)}% ${shape.wash.dy.toFixed(1)}%`,
                          }}
                        >
                          <path d={shape.wash.d} />
                        </svg>

                        <span
                          className="tp-sketch__photo"
                          style={{
                            maskImage: createSvgMaskUrl(shape.mask),
                            WebkitMaskImage: createSvgMaskUrl(shape.mask),
                          }}
                        >
                          <Image
                            alt={pup.cover.alt}
                            fill
                            priority={idx < 4}
                            sizes="(min-width: 1536px) 17rem, (min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
                            src={pup.cover.url}
                            style={{
                              objectFit: 'cover',
                              objectPosition: `${(pup.cover.focalX || 0.5) * 100}% ${(pup.cover.focalY || 0.5) * 100}%`,
                            }}
                          />
                        </span>

                        <svg aria-hidden="true" viewBox="0 0 100 100" className="tp-sketch__ink">
                          <path d={shape.outline} pathLength={1} className="tp-sketch__line" />
                          <path
                            d={shape.retrace}
                            pathLength={1}
                            className="tp-sketch__line tp-sketch__line--retrace"
                          />
                          {shape.doodles.map((doodle, di) => (
                            <DoodleIcon key={di} d={doodle} />
                          ))}
                        </svg>

                        <span className="tp-sketch__sticker font-scrawl">Available</span>
                        {hasVideo && (
                          <span className="tp-sketch__video" aria-label="Has video">
                            ▶ video
                          </span>
                        )}
                      </span>

                      <span className="tp-sketch__name font-plush">{pup.name}</span>
                      <span className="tp-sketch__meta">
                        {pup.breed} · {pup.genderLabel.toLowerCase()} · {pup.age}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </RevealScope>

          {filteredPuppies.length === 0 && (
            <div className="tp-sketchpad mt-10 grid items-center gap-6 md:grid-cols-[auto_1fr] md:gap-10">
              <PupBuddy
                pose="sit"
                act="tilt"
                className="mx-auto w-44 md:w-52"
                label="Teddy, tilting his head"
              />
              <div>
                <p className="font-plush text-big">No puppies match just now.</p>
                <p className="mt-3 max-w-[48ch] text-cocoa-soft">
                  Tell us what you&apos;re hoping for and we&apos;ll let you know what&apos;s in our showroom or what we can bring in for you.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Hi%20TeddyPups!%20I'm%20looking%20for%20a%20puppy%3A`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    Ask on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedBreed('all');
                      setSelectedOrigin('all');
                      setSelectedGender('all');
                    }}
                    className="btn btn-ghost"
                  >
                    Show all puppies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <GoneHomeStrip />
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PupBuddy } from '../PupBuddy';
import { SITE_CONFIG, AVAILABLE_PUPPIES } from '@/lib/data';

const HERO_SLUGS = [
  'maltipoo-max-male',
  'korean-teacup-maltipoo-female',
  'korean-teacup-poodle-female',
  'maltipoo-cavapoo-male',
  'toy-poodle-male-female',
  'maltipoo-female-2',
];

const HERO_PUPPIES = HERO_SLUGS.map(
  (slug) => AVAILABLE_PUPPIES.find((p) => p.slug === slug) || AVAILABLE_PUPPIES[0]
);

const SEAT_STYLES = [
  { x: '9%', w: '8.6rem', peek: 0.62, tilt: '-5deg' },
  { x: '22.5%', w: '10.4rem', peek: 0.8, tilt: '3deg' },
  { x: '35%', w: '9.2rem', peek: 0.7, tilt: '-2deg' },
  { x: '65%', w: '9.4rem', peek: 0.74, tilt: '3deg' },
  { x: '77.5%', w: '10.6rem', peek: 0.82, tilt: '-3deg' },
  { x: '91%', w: '8.4rem', peek: 0.6, tilt: '4deg' },
];

export function HeroSection() {
  const [activeTag, setActiveTag] = useState<number | null>(4);

  // Auto pop-up sequence matching HeroLineup behavior
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTag((prev) => {
        if (prev === null) return 4;
        return (prev + 1) % 6;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      className="tp-scene tp-hero"
      style={
        {
          '--sky-top': '#fffdf8',
          '--sky-bottom': '#fff1d8',
          '--quilt': '#fff1d8',
        } as React.CSSProperties
      }
      aria-labelledby="hero-title"
    >
      <span aria-hidden="true" className="tp-hero__sun" />

      <div className="tp-hero__copy gutter">
        <p className="tp-hero__note font-scrawl">
          every puppy is family
          <svg
            viewBox="0 0 220 24"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-3 w-full text-toffee"
            aria-hidden="true"
          >
            <path
              d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>

        <h1 id="hero-title" className="tp-hero__title font-plush relative">
          <span className="tp-hero__line">Premium teacup</span>
          <span className="tp-hero__line tp-hero__line--2">puppies in Dubai</span>
        </h1>

        <p className="tp-hero__lede relative">
          Meet your new best friend in our Dubai showroom, or order a rare miniature
          breed from trusted breeders worldwide.
        </p>

        <div className="tp-hero__actions">
          <Link className="btn btn-primary" href="/puppies">
            View available puppies
          </Link>
          <a
            href={SITE_CONFIG.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      <div className="tp-hero__stage">
        {/* Puppy lineup seats */}
        <ul className="tp-lineup" aria-label="Some of the puppies in our showroom">
          {HERO_PUPPIES.map((pup, i) => {
            const seat = SEAT_STYLES[i] || SEAT_STYLES[0];
            return (
              <li
                key={pup.slug}
                className="tp-lineup__seat"
                onMouseEnter={() => setActiveTag(i)}
                onMouseLeave={() => setActiveTag(null)}
                style={
                  {
                    '--x': seat.x,
                    '--w': seat.w,
                    '--peek': seat.peek,
                    '--tilt': seat.tilt,
                    '--i': i,
                  } as React.CSSProperties
                }
              >
                <Link
                  className="tp-lineup__pup"
                  data-pup-friend="true"
                  aria-label={`Meet ${pup.name || pup.displayName || pup.breed}, ${pup.breed}`}
                  href={`/puppies/${pup.slug}`}
                >
                  <span className="tp-lineup__photo">
                    <img
                      src={pup.cover.url}
                      alt={pup.cover.alt || `${pup.name}, ${pup.breed}`}
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: 'cover',
                        objectPosition: `${(pup.cover.focalX || 0.5) * 100}% ${(pup.cover.focalY || 0.45) * 100}%`,
                        backgroundColor: pup.cover.color || '#785838',
                      }}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Tag labels */}
        <ul aria-hidden="true" className="tp-lineup tp-lineup--tags">
          {HERO_PUPPIES.map((pup, i) => {
            const seat = SEAT_STYLES[i] || SEAT_STYLES[0];
            const isTagVisible = activeTag === i;
            return (
              <li
                key={pup.slug}
                className="tp-lineup__seat"
                style={
                  {
                    '--x': seat.x,
                    '--w': seat.w,
                    '--peek': seat.peek,
                    '--tilt': seat.tilt,
                    '--i': i,
                  } as React.CSSProperties
                }
              >
                <span
                  className="tp-lineup__ghost"
                  data-tag={isTagVisible ? 'show' : undefined}
                >
                  <span className="tp-lineup__name font-scrawl">
                    {pup.name || pup.displayName || pup.breed}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        {/* Teddy peeking over quilt */}
        <div
          data-pup-stop="true"
          data-pose="peek"
          data-facing="right"
          data-act="peekaboo"
          data-behind="true"
          data-lane="true"
          className="pup-stop tp-hero__teddy"
        >
          <PupBuddy
            pose="peek"
            facing="right"
            label="Teddy, the TeddyPups puppy, peeking over the quilt"
          />
        </div>

        {/* Quilt scalloped pattern border */}
        <div aria-hidden="true" className="tp-quilt">
          <svg
            className="tp-quilt__edge"
            width="100%"
            height="40"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="tp-scallop"
                width="76"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 40V27A38 25 0 0 1 76 27V40Z"
                  style={{ fill: 'var(--quilt)' }}
                />
                <path
                  d="M0 27A38 25 0 0 1 76 27"
                  fill="none"
                  stroke="#2a170e"
                  strokeWidth="3"
                />
                <path
                  d="M11 33A27 19 0 0 1 65 33"
                  fill="none"
                  stroke="#2a170e"
                  strokeWidth="1.6"
                  strokeDasharray="3.5 5.5"
                  strokeLinecap="round"
                  opacity=".42"
                />
              </pattern>
            </defs>
            <rect width="100%" height="40" fill="url(#tp-scallop)" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

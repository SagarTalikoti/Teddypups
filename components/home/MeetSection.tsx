'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PupBuddy } from '../PupBuddy';
import { AVAILABLE_PUPPIES } from '@/lib/data';

const DOOR_COLORS = [
  '#a24a1a',
  '#5a3a28',
  '#d4893f',
  '#b8644a',
  '#7a4a2e',
  '#a24a1a',
  '#5a3a28',
  '#d4893f',
  '#b8644a',
  '#7a4a2e',
];

export function MeetSection() {
  const [isPinned, setIsPinned] = useState(true);
  const [totalScrollWidth, setTotalScrollWidth] = useState(2800);
  const pinRangeRef = useRef<HTMLDivElement>(null);
  const hallRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  const displayPuppies = AVAILABLE_PUPPIES;

  useEffect(() => {
    const updateDimensions = () => {
      const desktop = window.matchMedia('(min-width: 1024px)').matches;
      setIsPinned(desktop);

      if (desktop && trackRef.current && hallRef.current) {
        const stage = hallRef.current.parentElement;
        const head = stage?.querySelector('.tp-meet__head') as HTMLElement | null;
        const plates = Array.from(trackRef.current.querySelectorAll('.tp-door__plate')) as HTMLElement[];
        const maxPlateH = plates.length ? Math.max(64, ...plates.map((p) => p.offsetHeight)) : 64;
        const floorEl = hallRef.current.querySelector('.tp-meet__floor') as HTMLElement | null;
        const floorH = floorEl?.offsetHeight || 80;
        const stageH = stage?.clientHeight || window.innerHeight;
        const headBottom = head ? head.offsetTop + head.offsetHeight : 120;
        const availH = stageH - headBottom - floorH - maxPlateH - 40;
        const doorW = Math.max(128, Math.min(256, 0.15 * window.innerWidth, availH / 1.3));
        hallRef.current.style.setProperty('--door-w', `${doorW.toFixed(0)}px`);

        // Compute scroll distance so Teddy covers ALL doors before exiting
        const doors = Array.from(trackRef.current.children) as HTMLElement[];
        const lastPuppyDoor = doors[doors.length - 2] || doors[doors.length - 1];
        const requiredX = lastPuppyDoor
          ? Math.max(
              trackRef.current.scrollWidth - window.innerWidth,
              lastPuppyDoor.offsetLeft + lastPuppyDoor.offsetWidth - 0.28 * window.innerWidth
            )
          : Math.max(0, trackRef.current.scrollWidth - window.innerWidth);

        setTotalScrollWidth(Math.round(requiredX));
      } else if (hallRef.current) {
        hallRef.current.style.removeProperty('--door-w');
        setTotalScrollWidth(0);
      }
    };

    updateDimensions();

    const ro = new ResizeObserver(() => {
      updateDimensions();
    });

    if (trackRef.current) ro.observe(trackRef.current);
    if (hallRef.current?.parentElement) ro.observe(hallRef.current.parentElement);
    window.addEventListener('resize', updateDimensions);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!isPinned) return;

    let targetX = 0;
    let currentX = 0;
    let rafId: number;

    const render = () => {
      if (!pinRangeRef.current || !trackRef.current) return;

      // Exponential spring easing for butter-smooth movement
      currentX += (targetX - currentX) * 0.14;

      trackRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;

      if (hallRef.current) {
        hallRef.current.style.setProperty('--floor-x', `${currentX.toFixed(1)}px`);
      }

      // Open doors as they pass near Teddy at 0.36 * innerWidth
      const threshold = 0.36 * window.innerWidth;
      const doors = Array.from(trackRef.current.children) as HTMLElement[];
      for (const door of doors) {
        if (door.classList.contains('tp-door--all')) {
          door.dataset.open = 'true';
          continue;
        }
        const isOpen = door.offsetLeft + currentX < threshold;
        if (door.dataset.open !== String(isOpen)) {
          door.dataset.open = String(isOpen);
          if (isOpen) {
            window.dispatchEvent(
              new CustomEvent('pup:cue', {
                detail: { look: door, secs: 0.9 },
              })
            );
          }
        }
      }

      rafId = requestAnimationFrame(render);
    };

    const handleScroll = () => {
      if (!pinRangeRef.current || !trackRef.current) return;
      const effectiveScrollDist = totalScrollWidth > 0 ? totalScrollWidth : 2800;
      const rect = pinRangeRef.current.getBoundingClientRect();
      const pinDistance = rect.height - window.innerHeight;

      if (pinDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / pinDistance));
      targetX = -progress * effectiveScrollDist;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    currentX = targetX;
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isPinned, totalScrollWidth]);

  const effectiveDistance = totalScrollWidth > 0 ? totalScrollWidth : 2800;

  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      className="tp-scene tp-meet"
      data-pinned={isPinned ? 'true' : undefined}
      style={
        {
          '--sky-top': '#fff1d8',
          '--sky-bottom': '#fbe3b4',
        } as React.CSSProperties
      }
      aria-labelledby="meet-title"
    >
      <div
        ref={pinRangeRef}
        data-pin-range="true"
        style={
          {
            height: isPinned ? `calc(100vh + ${Math.round(0.8 * effectiveDistance)}px)` : undefined,
            '--pinned': isPinned ? 1 : 0,
          } as React.CSSProperties
        }
      >
        <div className="tp-meet__stage">
          <header className="tp-meet__head gutter">
            <div>
              <h2 id="meet-title" className="font-plush text-huge">
                Meet the pups
              </h2>
              <p className="text-lede mt-3 max-w-[44ch] text-[var(--ink-soft)]">
                Real puppies, real photos, looking for their families right now.
              </p>
            </div>
            <Link className="btn btn-primary shrink-0" href="/puppies">
              See all available puppies
            </Link>
          </header>

          <div ref={hallRef} className="tp-meet__hall">

            <ol
              ref={trackRef}
              className="tp-meet__track"
              data-treadmill="true"
              aria-label="Puppies looking for a family"
            >
              {displayPuppies.map((pup, i) => {
                const doorColor = DOOR_COLORS[i % DOOR_COLORS.length];
                const metaParts = [];
                if (pup.genderLabel) metaParts.push(pup.genderLabel.toLowerCase());
                if (pup.age) metaParts.push(pup.age);
                if (pup.media.some((m) => m.kind === 'video')) {
                  metaParts.push('with video');
                }

                return (
                  <li
                    key={pup.slug}
                    className="tp-door"
                    data-open={isPinned ? 'false' : 'true'}
                  >
                    <Link
                      className="tp-door__link"
                      style={{ '--door': doorColor } as React.CSSProperties}
                      href={`/puppies/${pup.slug}`}
                    >
                      <span className="tp-door__plate">
                        <span className="font-plush tp-door__name">
                          {pup.name || pup.displayName || pup.breed}
                        </span>
                        <span className="tp-door__meta">
                          {metaParts.join(', ')}
                        </span>
                      </span>

                      <span className="tp-door__frame">
                        <span className="tp-door__room">
                          <img
                            src={pup.cover.url}
                            alt={pup.cover.alt || `${pup.name}, ${pup.breed}`}
                            loading="lazy"
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

                        <span aria-hidden="true" className="tp-door__way">
                          <span className="tp-door__leaf">
                            <svg
                              viewBox="0 0 64 64"
                              className="tp-door__peephole"
                              aria-hidden="true"
                              fill="currentColor"
                            >
                              <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                            </svg>
                            <span className="tp-door__knob" />
                          </span>
                        </span>

                        <span className="tp-door__tag font-scrawl">
                          Available
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Meet them all card */}
              <li className="tp-door tp-door--all" data-open="true">
                <Link href="/puppies" className="tp-door__link">
                  <span className="tp-door__frame tp-door__frame--all">
                    <span className="tp-door__all font-plush">
                      Meet them all
                    </span>
                  </span>
                </Link>
              </li>
            </ol>

            {/* Treadmill Wooden Floor */}
            <div aria-hidden="true" className="tp-meet__floor" />

            {/* Treadmill Teddy Stop */}
            <div
              data-pup-stop="true"
              data-pose={isPinned ? 'walk' : 'sit'}
              data-facing="right"
              data-act={isPinned ? 'treadmill' : undefined}
              className="pup-stop tp-meet__teddy"
            >
              <PupBuddy
                pose={isPinned ? 'walk' : 'sit'}
                facing="right"
                act={isPinned ? 'treadmill' : undefined}
                label="Teddy, walking on the treadmill"
                asStop
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetSection;

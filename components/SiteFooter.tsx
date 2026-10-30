'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PupBuddy } from './PupBuddy';
import { SITE_CONFIG } from '@/lib/data';

const STARS = [
  { left: '6%', top: '18%', width: '12.6px', delay: '0.00s' },
  { left: '14%', top: '42%', width: '8.4px', delay: '0.40s' },
  { left: '23%', top: '12%', width: '9.8px', delay: '0.80s' },
  { left: '31%', top: '30%', width: '7px', delay: '1.20s' },
  { left: '44%', top: '9%', width: '11.2px', delay: '1.60s' },
  { left: '52%', top: '36%', width: '7.7px', delay: '2.00s' },
  { left: '63%', top: '15%', width: '10.5px', delay: '2.40s' },
  { left: '71%', top: '40%', width: '7px', delay: '2.80s' },
  { left: '92%', top: '33%', width: '8.4px', delay: '3.20s' },
];

const STAR_PATH =
  'M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z';

export function SiteFooter() {
  return (
    <footer className="tp-footer relative pb-[calc(var(--bar-h)+2rem)] text-milk md:pb-10">
      {/* Rolling hill curve */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="tp-footer__hill"
      >
        <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
      </svg>

      {/* Sky with stars and moon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 h-64 overflow-hidden"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {STARS.map((star, i) => (
            <svg
              key={i}
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: star.left,
                top: star.top,
                width: star.width,
                animationDelay: star.delay,
              }}
              aria-hidden="true"
            >
              <path d={STAR_PATH} fill="currentColor" />
            </svg>
          ))}
        </div>
        <span className="tp-moon" />
      </div>

      <div className="gutter relative mx-auto grid max-w-[110rem] gap-12 pt-20 md:grid-cols-12 md:gap-x-12 md:gap-y-6 md:pt-28">
        {/* Brand statement */}
        <div className="md:col-span-5">
          <p className="font-plush text-big text-honey-soft">Home, at last.</p>
          <p className="mt-5 max-w-md text-milk/80">
            TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies,
            offering premium services and worldwide shipping.
          </p>
        </div>

        {/* Wicker basket with sleeping Teddy */}
        <div className="order-last md:order-none md:col-span-5 md:col-start-1 md:row-start-2">
          <div className="tp-basket">
            <svg
              aria-hidden="true"
              viewBox="0 0 300 240"
              className="tp-basket__back"
            >
              <ellipse
                cx={212}
                cy={145}
                rx={96}
                ry={12}
                className="tp-basket__hollow"
              />
              <path
                d="M116 145 A96 12 0 0 1 308 145"
                className="tp-basket__rim-line"
              />
              <path
                d="M116 145 A96 12 0 0 1 308 145"
                className="tp-basket__rim"
              />
            </svg>

            <div
              data-pup-stop="true"
              data-pose="snug"
              data-facing="right"
              data-act="basket"
              data-behind="true"
              data-lane="true"
              className="pup-stop tp-basket__pup"
            >
              <PupBuddy
                pose="snug"
                facing="right"
                label="Teddy, sitting snug in his basket"
                asStop={true}
              />
            </div>

            <svg
              aria-hidden="true"
              viewBox="0 0 300 240"
              className="tp-basket__front"
            >
              <path
                d="M116 145 C118 180 126 214 138 232 L286 232 C298 214 306 180 308 145 A96 12 0 0 1 116 145 Z"
                className="tp-basket__body"
              />
              <path
                d="M121 178 Q212 197 303 178 M127 206 Q212 223 297 206"
                className="tp-basket__weave"
              />
              <path
                d="M150 164 L158 230 M182 168 L185 232 M212 169 V232 M242 168 L239 232 M274 164 L266 230"
                className="tp-basket__weave tp-basket__weave--stakes"
              />
              <path
                d="M116 145 A96 12 0 0 0 308 145"
                className="tp-basket__rim-line"
              />
              <path
                d="M116 145 A96 12 0 0 0 308 145"
                className="tp-basket__rim"
              />
            </svg>
          </div>
        </div>

        {/* Explore Links */}
        <nav
          aria-label="Footer"
          className="md:col-span-3 md:col-start-7 md:row-span-2 md:row-start-1"
        >
          <h2 className="font-scrawl text-lg text-honey">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/puppies"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
              >
                Available puppies
              </Link>
            </li>
            <li>
              <Link
                href="/gone-home"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
              >
                Gone home
              </Link>
            </li>
            <li>
              <Link
                href="/happy-families"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
              >
                Happy families
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works#delivery"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
              >
                Delivery & collection
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
              >
                Visit & contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Say hello */}
        <div className="md:col-span-3 md:row-span-2 md:row-start-1">
          <h2 className="font-scrawl text-lg text-honey">Say hello</h2>
          <ul className="mt-4 space-y-2.5 text-milk/90">
            <li>
              <a
                className="font-semibold hover:text-honey"
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {SITE_CONFIG.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="break-all hover:text-honey"
                href={`mailto:${SITE_CONFIG.email}`}
              >
                {SITE_CONFIG.email}
              </a>
            </li>
            <li>{SITE_CONFIG.address}</li>
          </ul>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Social media">
            {SITE_CONFIG.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="gutter relative mx-auto mt-16 flex max-w-[110rem] flex-col items-start justify-between gap-4 border-t border-milk/15 pt-6 text-sm text-milk/60 md:flex-row md:items-center">
        <span className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt=""
            width={36}
            height={36}
            className="size-9"
          />
          © 2026 {SITE_CONFIG.name}
        </span>
        <span className="font-scrawl text-base text-honey/80">
          every puppy is family
        </span>
      </div>
    </footer>
  );
}

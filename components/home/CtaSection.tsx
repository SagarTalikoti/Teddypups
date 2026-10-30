'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PupBuddy } from '@/components/PupBuddy';
import { SITE_CONFIG } from '@/lib/data';

export function CtaSection() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-pup-scene="true"
      data-tone="dark"
      data-here={isOpen ? 'true' : 'false'}
      className="tp-scene tp-home"
      style={{ '--sky-top': '#2f1a10', '--sky-bottom': '#24130b' } as React.CSSProperties}
      aria-labelledby="cta-title"
    >
      <div className="tp-home__copy gutter">
        <h2 id="cta-title" className="font-plush text-huge">
          Ready to meet your new best friend?
        </h2>
        <p className="tp-home__lede">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
        </p>
      </div>

      <div className="tp-house">
        <span aria-hidden="true" className="tp-house__plant tp-house__plant--left" />
        <span aria-hidden="true" className="tp-house__lamp" />

        <div className="tp-house__doorway">
          <span className="tp-house__inside">
            <Image
              alt="Max, waiting inside"
              fill
              style={{ objectFit: 'cover', objectPosition: '53.8% 44.3%' }}
              sizes="16rem"
              src="/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp"
            />
          </span>
          <span aria-hidden="true" className="tp-house__door">
            <span className="tp-house__peep" />
            <span className="tp-house__knob" />
          </span>
        </div>

        <span aria-hidden="true" className="tp-house__plant tp-house__plant--right" />
        <span aria-hidden="true" className="tp-house__mat font-scrawl">
          welcome home
        </span>

        <div
          data-pup-stop="true"
          data-pose="bow"
          data-facing="right"
          className="pup-stop tp-house__teddy"
        >
          <PupBuddy pose="bow" facing="right" label="Teddy, bowing welcome at the front door" />
        </div>
      </div>

      <div className="tp-home__actions gutter">
        <a
          href={SITE_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          Enquire on WhatsApp
        </a>
        <Link className="btn btn-ghost tp-home__ghost" href="/contact">
          Visit &amp; contact
        </Link>
      </div>
    </section>
  );
}

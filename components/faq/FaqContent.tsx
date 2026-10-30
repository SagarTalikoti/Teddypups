'use client';

import React, { useState, useMemo, useId } from 'react';
import PupBuddy from '@/components/PupBuddy';
import { RevealScope } from '@/components/RevealScope';
import { FAQS, SITE_CONFIG } from '@/lib/data';

const PIN_COLORS = [
  'var(--color-toffee)',
  'var(--color-sky-deep)',
  '#d9a13c',
  '#c45a6a',
];

const TILTS = [
  '-1.6deg',
  '1.2deg',
  '-0.8deg',
  '1.8deg',
  '-1.2deg',
  '0.7deg',
  '-1.9deg',
  '1.4deg',
];

function HighlightText({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="bg-honey/50 text-inherit rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export default function FaqContent() {
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);
  const searchInputId = useId();

  const trimmedQuery = search.trim().toLowerCase();

  const filteredFaqs = useMemo(() => {
    if (!trimmedQuery) return FAQS;
    return FAQS.filter((item) =>
      `${item.question} ${item.answer}`.toLowerCase().includes(trimmedQuery)
    );
  }, [trimmedQuery]);

  const whatsappHref = `https://wa.me/${SITE_CONFIG.phoneClean}?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A`;

  return (
    <div data-page="faq" className="tp-page">
      <section
        data-pup-scene="true"
        data-tone="dark"
        className="tp-scene tp-faqroom overflow-hidden"
        style={
          {
            '--sky-top': '#a95e32',
            '--sky-bottom': '#331c11',
          } as React.CSSProperties
        }
        aria-labelledby="faq-title"
      >
        <div className="gutter relative mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <header className="max-w-4xl">
            <h1 id="faq-title" className="font-plush text-giant">
              Questions &amp; answers
            </h1>
            <p className="text-lede mt-6 max-w-[52ch] text-[var(--ink-soft)]">
              Can&apos;t find what you&apos;re looking for? Message us on WhatsApp — our team is available 24/7.
            </p>
          </header>

          <div className="mt-12 md:mt-16">
            <div className="tp-notes" data-open={openId || trimmedQuery ? '' : undefined}>
              {/* Sidebar Search & Teddy */}
              <aside className="tp-notes__side" aria-label="Find a question">
                <label htmlFor={searchInputId} className="font-scrawl tp-notes__label">
                  sniff out a question
                </label>
                <div className="tp-notes__search">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="tp-notes__lens"
                  >
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="m15.5 15.5 5 5" />
                  </svg>
                  <input
                    id={searchInputId}
                    type="search"
                    placeholder="delivery, Korea, vaccinated…"
                    autoComplete="off"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <p className="tp-notes__count" aria-live="polite">
                  {trimmedQuery
                    ? `${filteredFaqs.length} ${filteredFaqs.length === 1 ? 'note' : 'notes'} found`
                    : `${FAQS.length} notes on the board`}
                </p>

                <div className="tp-notes__teddy">
                  <span aria-hidden="true" className="tp-notes__bubble font-plush">
                    <span className="tp-notes__q">?</span>
                    <span className="tp-notes__a">!</span>
                  </span>
                  <PupBuddy
                    pose="sit"
                    act="tilt"
                    label="Teddy, reading the notes"
                  />
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp tp-notes__ask"
                >
                  Ask your own question
                </a>
              </aside>

              {/* Corkboard with pinned notes & RevealScope */}
              <RevealScope className="tp-notes__board">
                <ul className="tp-notes__list">
                  {filteredFaqs.map((faq, idx) => {
                    const isUnfolded =
                      openId === faq.id ||
                      (Boolean(trimmedQuery) &&
                        faq.answer.toLowerCase().includes(trimmedQuery));
                    const tilt = TILTS[idx % TILTS.length];
                    const pinColor = PIN_COLORS[idx % PIN_COLORS.length];

                    return (
                      <li
                        key={faq.id}
                        className="tp-note"
                        data-reveal="true"
                        data-unfolded={isUnfolded || undefined}
                        style={
                          {
                            '--tilt': tilt,
                            '--pin': pinColor,
                            '--i': idx,
                          } as React.CSSProperties
                        }
                      >
                        <span aria-hidden="true" className="tp-note__pin" />
                        <h2 className="tp-note__q">
                          <button
                            type="button"
                            id={`q-${faq.id}`}
                            aria-expanded={isUnfolded}
                            aria-controls={`a-${faq.id}`}
                            onClick={() =>
                              setOpenId(openId === faq.id ? null : faq.id)
                            }
                          >
                            <span className="font-plush-text">
                              <HighlightText text={faq.question} query={search} />
                            </span>
                            <span
                              aria-hidden="true"
                              className="tp-note__chevron"
                            />
                          </button>
                        </h2>
                        <div
                          id={`a-${faq.id}`}
                          role="region"
                          aria-labelledby={`q-${faq.id}`}
                          className="tp-note__answer"
                          inert={!isUnfolded ? true : undefined}
                        >
                          <div className="tp-note__flap">
                            <p>
                              <HighlightText text={faq.answer} query={search} />
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {filteredFaqs.length === 0 && (
                  <div className="tp-note tp-note--empty">
                    <span aria-hidden="true" className="tp-note__pin" />
                    <p className="font-plush-text text-[1.2rem] font-bold">
                      No note about “{trimmedQuery}” yet.
                    </p>
                    <p className="mt-2">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-ink"
                      >
                        Ask us on WhatsApp
                      </a>{' '}
                      and we&apos;ll answer.
                    </p>
                  </div>
                )}
              </RevealScope>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

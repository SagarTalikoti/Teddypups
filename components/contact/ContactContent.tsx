"use client";

import React, { useState } from "react";
import Image from "next/image";
import PupBuddy from "@/components/PupBuddy";
import { AVAILABLE_PUPPIES, SITE_CONFIG } from "@/lib/data";

export default function ContactContent() {
  const [phase, setPhase] = useState<"writing" | "sealing" | "posting" | "sent">("writing");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    puppyId: "",
    message: "",
    website: "", // honeypot
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) {
      return;
    }
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Sequence through authentic 3D folding and mailbox posting
    setPhase("sealing");
    setTimeout(() => {
      setPhase("posting");
    }, 750);
    setTimeout(() => {
      setPhase("sent");
    }, 1750);
  };

  return (
    <div data-page="contact" className="tp-page">
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene"
        style={
          {
            "--sky-top": "#fff9ee",
            "--sky-bottom": "#f9dca4",
          } as React.CSSProperties
        }
        aria-labelledby="contact-title"
      >
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h1
              id="contact-title"
              className="font-plush text-giant max-w-[12ch] lg:col-span-7"
            >
              Get in touch with us
            </h1>
            <p className="text-lede text-[var(--ink-soft)] lg:col-span-5 lg:pb-3">
              Have questions about our puppies or adoption process? Fill out the
              form, and our team will get back to you promptly. Whether ready
              to adopt or just seeking info, we'd love to hear from you!
            </p>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Form Column */}
            <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
              <div className="tp-post" data-phase={phase}>
                {phase !== "sent" && (
                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="tp-letterform"
                    inert={phase !== "writing" ? true : undefined}
                  >
                    <span aria-hidden="true" className="tp-letter__stamp">
                      <svg
                        viewBox="0 0 64 64"
                        className="size-9"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                      </svg>
                    </span>

                    <p className="font-scrawl tp-letterform__greeting">
                      Dear TeddyPups,
                    </p>

                    <p className="tp-letterform__line">
                      my name is{" "}
                      <span className="tp-blank" style={{ "--size": "16ch" } as React.CSSProperties}>
                        <input
                          aria-label="Your name (required)"
                          autoComplete="name"
                          required
                          minLength={2}
                          maxLength={80}
                          name="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </span>
                      , and you can reach me on{" "}
                      <span className="tp-blank" style={{ "--size": "15ch" } as React.CSSProperties}>
                        <input
                          aria-label="Phone or WhatsApp number with country code (required)"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          required
                          placeholder="+971 50 123 4567"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </span>{" "}
                      or by email at{" "}
                      <span className="tp-blank" style={{ "--size": "20ch" } as React.CSSProperties}>
                        <input
                          aria-label="Email (optional)"
                          type="email"
                          autoComplete="email"
                          placeholder="optional"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </span>
                      .
                    </p>

                    <p className="tp-letterform__line">
                      I live in{" "}
                      <span className="tp-blank" style={{ "--size": "13ch" } as React.CSSProperties}>
                        <input
                          aria-label="Your area (optional)"
                          autoComplete="address-level2"
                          maxLength={80}
                          placeholder="e.g. Dubai Marina"
                          name="area"
                          value={formData.area}
                          onChange={(e) =>
                            setFormData({ ...formData, area: e.target.value })
                          }
                        />
                      </span>
                      , and I'm curious about{" "}
                      <span className="tp-blank tp-blank--select">
                        <label htmlFor="contact-puppy-select" className="sr-only">
                          Puppy you're interested in (optional)
                        </label>
                        <select
                          id="contact-puppy-select"
                          name="puppyId"
                          value={formData.puppyId}
                          onChange={(e) =>
                            setFormData({ ...formData, puppyId: e.target.value })
                          }
                        >
                          <option value="">any puppy (not sure yet)</option>
                          {AVAILABLE_PUPPIES.map((pup) => (
                            <option key={pup.id} value={pup.id}>
                              {pup.name} ({pup.breed}, {pup.gender})
                            </option>
                          ))}
                        </select>
                      </span>
                      .
                    </p>

                    <label htmlFor="contact-message" className="sr-only">
                      Your message (optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      maxLength={2000}
                      placeholder="Anything else you'd like to tell us…"
                      className="tp-letterform__note"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>

                    {/* Honeypot field for spam prevention */}
                    <div
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                    >
                      <label>
                        Website
                        <input
                          tabIndex={-1}
                          autoComplete="off"
                          name="website"
                          value={formData.website}
                          onChange={(e) =>
                            setFormData({ ...formData, website: e.target.value })
                          }
                        />
                      </label>
                    </div>

                    <div className="tp-letterform__sign">
                      <p className="font-scrawl">
                        with love, a future puppy parent
                      </p>
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        {phase === "writing" ? "Post my letter" : "Posting letter…"}
                      </button>
                    </div>
                  </form>
                )}

                {(phase === "sealing" || phase === "posting") && (
                  <div aria-hidden="true" className="tp-post__scene">
                    <svg viewBox="0 0 160 112" className="tp-post__envelope">
                      <rect x="4" y="18" width="152" height="90" rx="6" fill="#fffdf8" stroke="#2a170e" strokeWidth="4" />
                      <path d="M6 104 64 62M154 104 96 62" fill="none" stroke="#2a170e" strokeWidth="3" strokeLinecap="round" />
                      <path className="tp-post__flap" d="M6 22 80 74 154 22" fill="#fbe3b4" stroke="#2a170e" strokeWidth="4" strokeLinejoin="round" />
                      <circle cx="80" cy="72" r="11" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" />
                    </svg>
                    <svg viewBox="0 0 200 260" className="tp-post__box">
                      <rect x="86" y="170" width="28" height="86" fill="#5a3a28" stroke="#2a170e" strokeWidth="4" />
                      <path d="M30 70a70 54 0 0 1 140 0v104H30z" fill="#c2622b" stroke="#2a170e" strokeWidth="5" strokeLinejoin="round" />
                      <rect x="58" y="86" width="84" height="14" rx="7" fill="#2a170e" />
                      <path d="M44 128h112" stroke="#2a170e" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
                      <g className="tp-post__flag">
                        <path d="M170 120V64" stroke="#2a170e" strokeWidth="5" strokeLinecap="round" />
                        <path d="M170 64h24v20h-24" fill="#f2be6b" stroke="#2a170e" strokeWidth="4" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                )}

                {phase === "sent" && (
                  <div className="tp-post__sent">
                    <span aria-hidden="true" className="tp-letter__stamp">
                      <svg
                        viewBox="0 0 64 64"
                        className="mx-auto size-9"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                      </svg>
                    </span>
                    <h2 className="font-plush text-big mt-3 text-cocoa">
                      Your letter is posted!
                    </h2>
                    <p className="mt-4 max-w-[42ch] mx-auto text-cocoa">
                      Thank you{formData.name ? `, ${formData.name}` : ''}! Teddy and our team have received your note. We will reach back out to you promptly.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <a
                        href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                      >
                        Open WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            area: "",
                            puppyId: "",
                            message: "",
                            website: "",
                          });
                          setPhase("writing");
                        }}
                        className="btn btn-ghost"
                      >
                        Write another letter
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <PupBuddy
                pose="sit"
                facing="left"
                className="ml-auto mr-6 -mt-3 w-36 md:w-40"
                label="Teddy, waiting for your letter"
              />
            </div>

            {/* Contact Details Column */}
            <div className="lg:col-span-5 lg:row-start-1">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto"
              >
                WhatsApp {SITE_CONFIG.phone}
              </a>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="font-scrawl text-[var(--ink-soft)]">
                    call us
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">
                    <a className="link-ink" href={`tel:${SITE_CONFIG.phoneClean}`}>
                      {SITE_CONFIG.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-scrawl text-[var(--ink-soft)]">email</dt>
                  <dd className="mt-1 break-all text-lg font-semibold">
                    <a className="link-ink" href={`mailto:${SITE_CONFIG.email}`}>
                      {SITE_CONFIG.email}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Showroom Visit Box */}
              <section aria-labelledby="visit-title" className="tp-shopfront mt-12">
                <svg
                  viewBox="0 0 300 120"
                  className="absolute -bottom-1 right-0 w-3/4 text-toffee/30"
                  aria-hidden="true"
                >
                  <path
                    d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>

                <div className="tp-visit relative p-7 pt-6">
                  <div>
                    <h2
                      id="visit-title"
                      className="font-plush text-[2rem] leading-tight"
                    >
                      Visit us in Downtown Dubai
                    </h2>
                    <p className="mt-3 max-w-[38ch] text-cocoa-soft">
                      Step into our Downtown Dubai showroom and experience the
                      joy of choosing your puppy face-to-face.
                    </p>
                    <p className="mt-4 flex items-center gap-2 font-semibold">
                      <svg
                        viewBox="0 0 64 64"
                        className="size-5 shrink-0 text-toffee-deep"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                      </svg>
                      {SITE_CONFIG.showroomAddress}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost mt-6 !bg-milk"
                    >
                      Open in Google Maps
                    </a>
                  </div>

                  <figure className="tp-visit__photo">
                    <Image
                      alt="The apricot teddy bear puppy from our showroom, held up to say hello"
                      fill
                      sizes="(min-width: 640px) 11rem, 90vw"
                      style={{ objectFit: "cover", objectPosition: "45.3% 44.4%" }}
                      src="/media/skvodl2NZiKq/cefab5eee9/27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg"
                    />
                  </figure>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

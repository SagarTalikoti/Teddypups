"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PupBuddy from "@/components/PupBuddy";
import { FlightAnimation } from "./FlightAnimation";
import { SITE_CONFIG } from "@/lib/data";

export default function HowItWorksContent() {
  const [activeTab, setActiveTab] = useState<"local" | "imported">("local");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      history.pushState(null, "", `#${id}`);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div data-page="how" className="tp-page">
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene"
        style={
          {
            "--sky-top": "#fffbf3",
            "--sky-bottom": "#f6cc85",
          } as React.CSSProperties
        }
        aria-labelledby="how-title"
      >
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <header className="grid gap-8 md:grid-cols-12 md:items-end">
            <h1 id="how-title" className="font-plush text-giant md:col-span-7">
              How it works
            </h1>
            <p className="text-lede text-[var(--ink-soft)] md:col-span-5 md:pb-4">
              Whether you choose to visit us locally or order a premium breed
              from overseas, TeddyPups is here to make the experience
              unforgettable.
            </p>
          </header>

          <nav
            aria-label="On this page"
            className="mt-8 sm:mt-10 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none"
          >
            <a
              href="#two-ways"
              onClick={(e) => scrollToSection(e, "two-ways")}
              className="chip shrink-0 h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft transition-colors cursor-pointer"
            >
              <span className="font-plush text-toffee">1</span> Two ways home
            </a>
            <a
              href="#promise"
              onClick={(e) => scrollToSection(e, "promise")}
              className="chip shrink-0 h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft transition-colors cursor-pointer"
            >
              <span className="font-plush text-toffee">2</span> Our premium
              puppy promise
            </a>
            <a
              href="#delivery"
              onClick={(e) => scrollToSection(e, "delivery")}
              className="chip shrink-0 h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft transition-colors cursor-pointer"
            >
              <span className="font-plush text-toffee">3</span> Delivery &amp;
              collection
            </a>
            <a
              href="#why"
              onClick={(e) => scrollToSection(e, "why")}
              className="chip shrink-0 h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft transition-colors cursor-pointer"
            >
              <span className="font-plush text-toffee">4</span> Why choose us
            </a>
          </nav>

          <div id="two-ways" style={{ scrollMarginTop: "calc(var(--header-h) + 1.25rem)" }}>
            <section
              className="tp-journeys"
              aria-labelledby="two-ways-title"
              data-ready={ready || undefined}
            >
              <div className="tp-journeys__top">
                <div>
                  <p className="font-scrawl tp-journeys__kicker">
                    choose your way
                  </p>
                  <h2 id="two-ways-title" className="font-plush text-big">
                    Two ways home
                  </h2>
                </div>

                <div className="tp-journeys__pick">
                  <div
                    role="tablist"
                    aria-label="Ways to bring your puppy home"
                    className="tp-switch"
                    style={
                      {
                        "--at": activeTab === "local" ? 0 : 1,
                        "--n": 2,
                      } as React.CSSProperties
                    }
                  >
                    <span aria-hidden="true" className="tp-switch__thumb"></span>
                    <button
                      type="button"
                      role="tab"
                      id="tab-local"
                      aria-selected={activeTab === "local"}
                      aria-controls="panel-local"
                      tabIndex={activeTab === "local" ? 0 : -1}
                      className="tp-switch__tab"
                      onClick={() => setActiveTab("local")}
                    >
                      <span className="font-plush tp-switch__label">
                        In Dubai
                      </span>
                      <span className="tp-switch__hint">meet in person</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id="tab-imported"
                      aria-selected={activeTab === "imported"}
                      aria-controls="panel-imported"
                      tabIndex={activeTab === "imported" ? 0 : -1}
                      className="tp-switch__tab"
                      onClick={() => setActiveTab("imported")}
                    >
                      <span className="font-plush tp-switch__label">
                        Imported
                      </span>
                      <span className="tp-switch__hint">order upon request</span>
                    </button>
                  </div>

                  <PupBuddy
                    pose="sit"
                    act="tilt"
                    className="tp-journeys__teddy"
                    label="Teddy, waiting to see which way you pick"
                  />
                </div>
              </div>

              {/* In Dubai Panel */}
              <div
                role="tabpanel"
                id="panel-local"
                aria-labelledby="tab-local"
                hidden={ready && activeTab !== "local"}
                className="tp-journey"
              >
                <div className="tp-journey__head">
                  <div>
                    <h3 className="font-plush tp-journey__title">
                      Meet your puppy in person
                    </h3>
                    <p className="text-lede mt-4 text-[var(--ink-soft)]">
                      Step into our Downtown Dubai showroom and experience the
                      joy of choosing your puppy face-to-face. We source healthy,
                      well-socialized puppies from trusted local breeders,
                      ensuring they're raised with care, proper nutrition, and
                      veterinary checks.
                    </p>
                  </div>
                  <div aria-hidden="true" className="tp-postcard">
                    <span className="tp-postcard__sun"></span>
                    <svg
                      viewBox="0 0 300 120"
                      className="tp-postcard__city"
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
                    <span className="font-scrawl tp-postcard__to tp-postcard__to--left">
                      Downtown Dubai
                    </span>
                  </div>
                </div>

                <ol className="tp-steps">
                  <li
                    className="tp-step"
                    style={{ "--i": 0, "--tint": "#fbe3b4" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <circle
                          cx="21"
                          cy="21"
                          r="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                        <path
                          d="m30 30 10 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21 27c-3-2-4.4-3.6-4.4-5.2a2.2 2.2 0 0 1 4.4-.4 2.2 2.2 0 0 1 4.4.4c0 1.6-1.4 3.2-4.4 5.2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 1</span>
                    <h4 className="font-plush-text tp-step__title">
                      Explore our puppies
                    </h4>
                    <p className="tp-step__text">
                      Browse our website to view the available puppies. Each
                      listing includes photos, breed details, age, and health
                      information.
                    </p>
                  </li>

                  <li
                    className="tp-step"
                    style={{ "--i": 1, "--tint": "#fde6de" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <path
                          d="M24 40C11 31 6 24.5 6 17.8 6 12.4 10.2 8 15.4 8c3.7 0 6.8 2.1 8.6 5.3C25.8 10.1 28.9 8 32.6 8 37.8 8 42 12.4 42 17.8 42 24.5 37 31 24 40z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="m17 22 5 5 9-10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 2</span>
                    <h4 className="font-plush-text tp-step__title">
                      Choose your puppy
                    </h4>
                    <p className="tp-step__text">
                      Once you find a puppy you love, open their profile for
                      more information or to enquire further. You can also reach
                      out to us directly if you have any questions.
                    </p>
                  </li>

                  <li
                    className="tp-step"
                    style={{ "--i": 2, "--tint": "#e3f0fb" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <path
                          d="M14 18c-3-6-1-10 3-10s5 4 4 8M34 18c3-6 1-10-3-10s-5 4-4 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <ellipse
                          cx="24"
                          cy="27"
                          rx="13"
                          ry="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></ellipse>
                        <circle cx="19.5" cy="25" r="1.6" fill="currentColor"></circle>
                        <circle cx="28.5" cy="25" r="1.6" fill="currentColor"></circle>
                        <path
                          d="M22 31h4l-2 2z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 3</span>
                    <h4 className="font-plush-text tp-step__title">
                      Meet before you choose
                    </h4>
                    <p className="tp-step__text">
                      Spend time bonding before making your decision.
                    </p>
                  </li>

                  <li
                    className="tp-step"
                    style={{ "--i": 3, "--tint": "#e6f2df" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <path
                          d="M5 30V18h22v12M27 22h8l6 6v2H27"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 30h36"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <circle
                          cx="13"
                          cy="33"
                          r="3.4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                        <circle
                          cx="34"
                          cy="33"
                          r="3.4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                        <path
                          d="M16 26c-2.3-1.6-3.4-2.8-3.4-4a1.7 1.7 0 0 1 3.4-.4 1.7 1.7 0 0 1 3.4.4c0 1.2-1.1 2.4-3.4 4z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 4</span>
                    <h4 className="font-plush-text tp-step__title">
                      Pick-up or delivery
                    </h4>
                    <p className="tp-step__text">
                      Pick up your puppy from us or have them delivered to your
                      home within Dubai. Our delivery service is safe and
                      reliable, ensuring your puppy arrives comfortably.
                    </p>
                  </li>
                </ol>
              </div>

              {/* Imported Panel */}
              <div
                role="tabpanel"
                id="panel-imported"
                aria-labelledby="tab-imported"
                hidden={ready && activeTab !== "imported"}
                className="tp-journey"
              >
                <div className="tp-journey__head">
                  <div>
                    <h3 className="font-plush tp-journey__title">
                      Order upon request
                    </h3>
                    <p className="text-lede mt-4 text-[var(--ink-soft)]">
                      Looking for a truly exceptional companion? Our Order Upon
                      Request service gives you access to some of the world's
                      most sought-after teacup breeds — ethically sourced from
                      the most reputable, certified breeders across Europe,
                      Korea, and beyond.
                    </p>
                    <p className="font-scrawl mt-4 text-toffee-ink">
                      From Korean teacup poodles to rare Maltese, Pom, and Yorkie
                      lines, we bring the world's finest puppies to Dubai, just
                      for you.
                    </p>
                  </div>
                  <div
                    aria-hidden="true"
                    className="tp-postcard tp-postcard--sky"
                  >
                    <svg
                      viewBox="0 0 320 150"
                      className="tp-postcard__route"
                      preserveAspectRatio="none"
                    >
                      <path d="M28 128C90 20 230 20 292 118"></path>
                    </svg>
                    <svg
                      viewBox="0 0 64 40"
                      className="tp-postcard__plane"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 22l20-2 12-14h6l-6 14 14-1 6-7h4l-3 10 3 10h-4l-6-7-14-1 6 14h-6L24 24 4 22z"
                        fill="#fffdf8"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="font-scrawl tp-postcard__from">
                      Europe · Korea
                    </span>
                    <span className="font-scrawl tp-postcard__to">Dubai</span>
                  </div>
                </div>

                <ol className="tp-steps">
                  <li
                    className="tp-step"
                    style={{ "--i": 0, "--tint": "#fbe3b4" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <rect
                          x="7"
                          y="10"
                          width="34"
                          height="30"
                          rx="5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></rect>
                        <path
                          d="M7 19h34M16 6v8M32 6v8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="m17 29 5 5 9-9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 1</span>
                    <h4 className="font-plush-text tp-step__title">
                      Reserve your puppy
                    </h4>
                    <p className="tp-step__text">
                      Browse our selection of available breeds and place a
                      reservation for the teacup puppy that captures your heart.
                      Our reservation-only model ensures that each puppy is
                      specifically sourced to meet your preferences.
                    </p>
                  </li>

                  <li
                    className="tp-step"
                    style={{ "--i": 1, "--tint": "#fde6de" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <path
                          d="M6 12a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-9l-6 5v-5h-1a5 5 0 0 1-5-5z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M36 17h1a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-1v5l-6-5h-6a5 5 0 0 1-4-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 2</span>
                    <h4 className="font-plush-text tp-step__title">
                      Personalized consultation
                    </h4>
                    <p className="tp-step__text">
                      Once your reservation is confirmed, we will work closely
                      with you to finalize details and provide updates on your
                      puppy's journey.
                    </p>
                  </li>

                  <li
                    className="tp-step"
                    style={{ "--i": 2, "--tint": "#e3f0fb" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <path
                          transform="matrix(-1 0 0 1 48 0)"
                          d="M4 27l13-1.5 8-10h4l-4 9.5 9-.8 4-4.7h3l-2 6.6 2 6.6h-3l-4-4.7-9-.8 4 9.5h-4l-8-10L4 29z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 3</span>
                    <h4 className="font-plush-text tp-step__title">
                      Import and arrival
                    </h4>
                    <p className="tp-step__text">
                      We manage all aspects of the import process, including
                      health checks, travel arrangements, and necessary
                      documentation. Your puppy will be carefully transported
                      and will arrive ready to join your family.
                    </p>
                  </li>

                  <li
                    className="tp-step"
                    style={{ "--i": 3, "--tint": "#e6f2df" } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="tp-step__icon">
                      <svg viewBox="0 0 48 48">
                        <path
                          d="M6 23 24 8l18 15M11 19v21h26V19"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M24 35c-4.6-3.2-6.8-5.7-6.8-8.2a3.4 3.4 0 0 1 6.8-.8 3.4 3.4 0 0 1 6.8.8c0 2.5-2.2 5-6.8 8.2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="tp-step__num font-plush">Step 4</span>
                    <h4 className="font-plush-text tp-step__title">
                      Welcome home
                    </h4>
                    <p className="tp-step__text">
                      Upon arrival, we provide support to help your new puppy
                      acclimate to their new environment. Our team is available
                      for any additional assistance and to ensure a smooth
                      transition into your home.
                    </p>
                  </li>
                </ol>
              </div>
            </section>
          </div>

          {/* Promise Section */}
          <section
            id="promise"
            style={{ scrollMarginTop: "calc(var(--header-h) + 1.25rem)" }}
            aria-labelledby="promise-title"
            className="tp-paper mt-24 -rotate-[0.6deg]"
          >
            <p aria-hidden="true" className="font-scrawl text-lg text-toffee-ink">
              puppy passport
            </p>
            <h2
              id="promise-title"
              className="font-plush text-huge mt-1 max-w-[16ch]"
            >
              Our premium puppy promise
            </h2>
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <li
                className="tp-entry"
                style={
                  {
                    "--ink-stamp": "#a24a1a",
                    "--tilt": "-8deg",
                    "--i": 0,
                  } as React.CSSProperties
                }
              >
                <span className="tp-stamp tp-stamp--round">
                  <svg
                    viewBox="0 0 64 64"
                    className="tp-stamp__icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22 30h7l3-7 4 13 3-6h7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="tp-stamp__title font-plush">
                    Hand-selected breeders
                  </span>
                </span>
                <p className="tp-entry__text">
                  We work only with breeders who uphold the highest ethical and
                  health standards.
                </p>
              </li>

              <li
                className="tp-entry"
                style={
                  {
                    "--ink-stamp": "#1f6b45",
                    "--tilt": "5deg",
                    "--i": 1,
                  } as React.CSSProperties
                }
              >
                <span className="tp-stamp tp-stamp--ticket">
                  <svg
                    viewBox="0 0 64 64"
                    className="tp-stamp__icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 50c10 4 20 4 30 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 7"
                    ></path>
                  </svg>
                  <span className="tp-stamp__title font-plush">
                    Full transparency
                  </span>
                </span>
                <p className="tp-entry__text">
                  Photos, videos, and health certificates are shared before your
                  puppy travels.
                </p>
              </li>

              <li
                className="tp-entry"
                style={
                  {
                    "--ink-stamp": "#5a3a28",
                    "--tilt": "-4deg",
                    "--i": 2,
                  } as React.CSSProperties
                }
              >
                <span className="tp-stamp tp-stamp--oval">
                  <svg
                    viewBox="0 0 64 64"
                    className="tp-stamp__icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 14h44v28H30l-12 10v-10h-8z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22 28h0M32 28h0M42 28h0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="tp-stamp__title font-plush">
                    Safe, stress-free delivery
                  </span>
                </span>
                <p className="tp-entry__text">
                  We handle every detail of the import process, so your puppy
                  arrives happy, healthy, and ready to love you.
                </p>
              </li>
            </ul>
          </section>

          {/* Delivery & Collection Section */}
          <section
            id="delivery"
            style={{ scrollMarginTop: "calc(var(--header-h) + 1.25rem)" }}
            aria-labelledby="delivery-title"
            className="mt-24 grid items-center gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-6">
              <h2 id="delivery-title" className="font-plush text-huge">
                Delivery &amp; collection
              </h2>
              <p className="text-lede mt-5 text-[var(--ink-soft)]">
                From a same-day visit in Downtown Dubai to a flight from Korea,
                every puppy travels comfortably and arrives safely.
              </p>
              <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <li>
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Take your puppy home the same day
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    Local puppies are available immediately — visit, fall in
                    love, and go home together.
                  </p>
                </li>
                <li>
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Delivery within Dubai
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    Prefer to stay home? We deliver your puppy to your door
                    within Dubai, safely and comfortably.
                  </p>
                </li>
                <li>
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Safe international cargo
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    We handle all the paperwork and ensure comfortable travel
                    so your puppy arrives happy and stress-free.
                  </p>
                </li>
                <li>
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Worldwide delivery
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    We safely deliver puppies to loving homes all around the
                    world. Our trusted international cargo partners ensure your
                    new furry friend travels comfortably and arrives safely, no
                    matter the distance.
                  </p>
                </li>
              </ul>
            </div>

            <div
              className="relative h-[clamp(14rem,_30vw,_22rem)] lg:col-span-6"
              style={{ height: "clamp(14rem, 30vw, 22rem)", minHeight: "14rem" }}
            >
              <svg
                viewBox="0 0 300 120"
                className="absolute inset-x-0 bottom-0 w-full text-cocoa/25"
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

              <FlightAnimation />
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section
            id="why"
            style={{ scrollMarginTop: "calc(var(--header-h) + 1.25rem)" }}
            aria-labelledby="why-title"
            className="mt-24 grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <h2 id="why-title" className="font-plush text-huge">
                Why choose us
              </h2>
              <p className="text-lede mt-6 text-[var(--ink-soft)]">
                We're here to help you find a new family member. From the
                moment you visit our site to the joyful day your puppy arrives
                at your door, we're with you every step of the way. Our mission
                is to make the entire adoption process smooth, transparent, and
                full of love.
              </p>
            </div>

            <ul className="space-y-8 lg:col-span-6 lg:col-start-7">
              <li className="flex gap-5">
                <svg
                  viewBox="0 0 64 64"
                  className="size-14 shrink-0 text-toffee-deep"
                  aria-hidden="true"
                >
                  <path
                    d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8 50c10 4 20 4 30 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2 7"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-plush text-[1.7rem]">
                    International cargo
                  </h3>
                  <p className="mt-2 text-[var(--ink-soft)]">
                    We safely deliver puppies to loving homes all around the
                    world. Our trusted international cargo partners ensure your
                    new furry friend travels comfortably and arrives safely, no
                    matter the distance.
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <svg
                  viewBox="0 0 64 64"
                  className="size-14 shrink-0 text-toffee-deep"
                  aria-hidden="true"
                >
                  <path
                    d="M10 14h44v28H30l-12 10v-10h-8z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M22 28h0M32 28h0M42 28h0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-plush text-[1.7rem]">Support 24/7</h3>
                  <p className="mt-2 text-[var(--ink-soft)]">
                    Our team is available 24/7 to answer your questions and
                    assist you through every step of the adoption process. From
                    choosing your puppy to post-delivery support — we're just a
                    message away.
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <svg
                  viewBox="0 0 64 64"
                  className="size-14 shrink-0 text-toffee-deep"
                  aria-hidden="true"
                >
                  <path
                    d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M22 30h7l3-7 4 13 3-6h7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-plush text-[1.7rem]">
                    Health guarantee
                  </h3>
                  <p className="mt-2 text-[var(--ink-soft)]">
                    All our puppies come with a verified health certificate from
                    licensed vets. We ensure every puppy is vaccinated,
                    dewormed, and thoroughly checked before joining your family.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Care & Quality Board */}
          <section
            aria-labelledby="care-title"
            className="tp-board mt-16 sm:mt-24 grid items-center gap-8 md:grid-cols-[1fr_auto] p-6 sm:p-8 md:!p-12 pb-10 sm:pb-8"
          >
            <div>
              <h2 id="care-title" className="font-plush text-big">
                Unique and high quality puppies
              </h2>
              <p className="text-lede measure mt-5 text-cocoa-soft">
                When you choose TeddyPups, you can trust that you're getting a
                puppy of the highest quality. We also provide guidance and
                support to new pet owners, offering advice on training,
                nutrition, and general care to ensure a smooth transition for
                you and your new furry friend.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full sm:w-auto text-center"
                >
                  Ask us on WhatsApp
                </a>
                <Link className="btn btn-ghost w-full sm:w-auto text-center" href="/puppies">
                  See available puppies
                </Link>
              </div>
            </div>

            <PupBuddy
              pose="bow"
              facing="left"
              className="mx-auto w-40 sm:w-48 md:w-56 mt-2 sm:mt-0"
              label="Teddy, ready to play"
            />
          </section>
        </div>
      </section>
    </div>
  );
}

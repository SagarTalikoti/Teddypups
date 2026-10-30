"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PupBuddy from "@/components/PupBuddy";
import { Puppy, SITE_CONFIG } from "@/lib/data";

interface PuppyDetailContentProps {
  puppy: Puppy;
  prevPuppy: Puppy | null;
  nextPuppy: Puppy | null;
}

export default function PuppyDetailContent({
  puppy,
  prevPuppy,
  nextPuppy,
}: PuppyDetailContentProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ribbonProgress, setRibbonProgress] = useState(0);
  const storyRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: `Hi! I'd love to know more about ${puppy.name} (${puppy.breed}).`,
    website: "",
  });

  const mediaList = puppy.media && puppy.media.length > 0 ? puppy.media : [puppy.cover];
  const activeMedia = mediaList[activeIndex] || puppy.cover;

  const nextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % mediaList.length);
  };

  const prevPhoto = () => {
    setActiveIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  // Keyboard navigation for gallery & modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % mediaList.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
      } else if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mediaList.length, showModal]);

  // Scroll tracking for story ribbon band
  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.7;
      const end = vh * 0.1;
      const total = rect.height - (start - end);
      const scrolled = start - rect.top;
      const prog = Math.min(1, Math.max(0, scrolled / total));
      setRibbonProgress(prog);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // honeypot
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const isLocal = puppy.origin?.slug === "in-dubai" || puppy.origin?.name?.toLowerCase().includes("dubai");
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phoneClean}?text=Hi%20TeddyPups!%20I'm%20interested%20in%20${encodeURIComponent(
    puppy.name
  )}%2C%20the%20${encodeURIComponent(puppy.breed)}%3A%20https%3A%2F%2Fpuppy.instabizweb.com%2Fpuppies%2F${encodeURIComponent(
    puppy.slug
  )}`;

  return (
    <div data-page="pup" className="tp-page">
      <article
        ref={storyRef}
        className="tp-storybook"
        style={
          {
            background:
              "linear-gradient(180deg, color-mix(in oklab, #785838 24%, var(--color-milk)) 0, var(--color-milk) 85%)",
          } as React.CSSProperties
        }
      >
        <div aria-hidden="true" className="tp-ribbon">
          <div className="tp-ribbon__track">
            <span
              className="tp-ribbon__band"
              style={{ transform: `scaleY(${ribbonProgress})` }}
            ></span>
          </div>
        </div>

        <div className="gutter mx-auto max-w-[110rem] pb-20 pt-8 md:pt-12">
          {/* Breadcrumb Nav */}
          <nav
            aria-label="Breadcrumb"
            className="text-[0.95rem] font-semibold text-cocoa-soft"
          >
            <Link className="link-ink" href="/puppies">
              Available puppies
            </Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{puppy.name}</span>
          </nav>

          {/* Chapter 1 */}
          <p className="tp-chapter">
            <span aria-hidden="true" className="tp-chapter__n font-plush">
              1
            </span>
            <span className="font-scrawl">hello, it's me</span>
          </p>

          <div className="mt-4 grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Media Gallery (Left Column) */}
            <div className="min-w-0 lg:col-span-7">
              <div>
                <div className="tp-storypage relative aspect-[4/5] md:aspect-[5/6]">
                  {activeMedia.kind === "video" ? (
                    <div className="absolute inset-0 block size-full overflow-hidden rounded-[1.6rem] bg-black">
                      <video
                        src={activeMedia.url}
                        controls
                        poster={activeMedia.poster?.url}
                        className="size-full object-cover"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="absolute inset-0 block size-full cursor-zoom-in"
                      aria-label={`Open ${puppy.name}, photo ${activeIndex + 1} of ${mediaList.length} full screen`}
                      onClick={() => setShowModal(true)}
                    >
                      <Image
                        alt={activeMedia.alt || `${puppy.name}, ${puppy.breed}`}
                        fill
                        priority
                        className="object-cover"
                        style={{
                          objectPosition: `${activeMedia.focalX ?? 50}% ${activeMedia.focalY ?? 50}%`,
                        }}
                        sizes="(min-width: 1024px) 55vw, 92vw"
                        src={activeMedia.url}
                      />
                    </button>
                  )}

                  {mediaList.length > 1 && (
                    <>
                      {/* Left Slide Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          prevPhoto();
                        }}
                        className="tp-slider-btn-prev"
                        aria-label="Previous photo"
                      >
                        ‹
                      </button>

                      {/* Right Slide Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          nextPhoto();
                        }}
                        className="tp-slider-btn-next"
                        aria-label="Next photo"
                      >
                        ›
                      </button>

                      {/* Counter Badge */}
                      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center pointer-events-none">
                        <span className="rounded-full bg-cocoa/85 px-3.5 py-1 text-sm font-semibold text-milk shadow">
                          {activeIndex + 1} / {mediaList.length}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {mediaList.length > 1 && (
                  <ul
                    className="mt-3 flex gap-3 overflow-x-auto px-1 pb-2 pt-2 [scrollbar-width:thin]"
                    aria-label={`All photos of ${puppy.name}`}
                  >
                    {mediaList.map((item, idx) => {
                      const isActive = idx === activeIndex;
                      return (
                        <li key={item.id || idx} className="shrink-0">
                          <button
                            type="button"
                            aria-label={`${puppy.name}, ${item.kind} ${idx + 1} of ${mediaList.length}`}
                            aria-current={isActive}
                            onClick={() => setActiveIndex(idx)}
                            className={`relative block h-24 w-20 overflow-hidden rounded-[0.9rem] border-[3px] transition-transform duration-300 md:h-28 md:w-24 ${
                              isActive
                                ? "-rotate-3 -translate-y-1 border-toffee-deep"
                                : "border-cocoa/30 hover:-rotate-2 hover:border-cocoa"
                            }`}
                          >
                            <Image
                              alt=""
                              fill
                              sizes="96px"
                              className="object-cover"
                              src={item.poster?.url || item.url}
                            />
                            {item.kind === "video" && (
                              <span className="absolute inset-0 grid place-items-center bg-cocoa/30 text-lg text-milk">
                                ▶
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Full-Screen Modal Dialog */}
                {showModal && (
                  <dialog
                    open
                    aria-label={`${puppy.name} photos`}
                    className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-screen max-w-none flex-col items-center justify-center bg-cocoa/95 p-4 text-milk backdrop:bg-cocoa/70"
                  >
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="absolute right-6 top-6 h-11 rounded-full bg-milk px-5 font-semibold text-cocoa transition hover:bg-honey"
                    >
                      Close
                    </button>
                    <div className="relative max-h-[85vh] max-w-4xl aspect-[4/5] w-full">
                      <Image
                        alt={activeMedia.alt || puppy.name}
                        fill
                        className="object-contain"
                        src={activeMedia.url}
                      />
                    </div>
                    {mediaList.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevPhoto();
                          }}
                          className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 grid size-12 md:size-14 place-items-center rounded-full border-2 border-milk/40 bg-milk/20 text-milk hover:bg-milk hover:text-cocoa text-3xl font-bold transition shadow-2xl"
                          aria-label="Previous photo"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextPhoto();
                          }}
                          className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 grid size-12 md:size-14 place-items-center rounded-full border-2 border-milk/40 bg-milk/20 text-milk hover:bg-milk hover:text-cocoa text-3xl font-bold transition shadow-2xl"
                          aria-label="Next photo"
                        >
                          ›
                        </button>
                        <div className="mt-4 flex items-center gap-6">
                          <button
                            type="button"
                            onClick={prevPhoto}
                            className="grid size-12 place-items-center rounded-full border-2 border-milk bg-cocoa text-xl font-bold text-milk hover:bg-milk hover:text-cocoa"
                          >
                            ‹
                          </button>
                          <span className="text-sm font-semibold">
                            {activeIndex + 1} / {mediaList.length}
                          </span>
                          <button
                            type="button"
                            onClick={nextPhoto}
                            className="grid size-12 place-items-center rounded-full border-2 border-milk bg-cocoa text-xl font-bold text-milk hover:bg-milk hover:text-cocoa"
                          >
                            ›
                          </button>
                        </div>
                      </>
                    )}
                  </dialog>
                )}
              </div>
            </div>

            {/* Tag / Details (Right Column) */}
            <div className="min-w-0 lg:col-span-5">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+5.5rem)]">
                <div
                  className="tp-tag tp-board mt-16 !rounded-[2.2rem_2.2rem_2.2rem_0.6rem] !p-7 md:!p-9 lg:mt-20"
                  data-reveal="true"
                >
                  <span aria-hidden="true" className="tp-tag__ring"></span>
                  <PupBuddy
                    pose="stand"
                    facing="right"
                    className="absolute -top-[4.8rem] right-6 w-[9.5rem]"
                    label={`Teddy, peeking over ${puppy.name}'s tag`}
                  />

                  <span className="chip">
                    <svg
                      viewBox="0 0 64 64"
                      className="size-4 text-toffee"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                    </svg>
                    {puppy.status === "gone" ? "Gone home" : "Available"}
                  </span>

                  <h1 className="font-plush mt-4 text-[clamp(2.6rem,5vw,4.6rem)]">
                    {puppy.name}
                  </h1>
                  <p className="mt-2 text-lg font-semibold text-cocoa-soft">
                    {puppy.breed}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <dt className="font-scrawl text-sm text-cocoa-soft">
                        Breed
                      </dt>
                      <dd className="mt-0.5 text-[1.05rem] font-semibold">
                        {puppy.breed}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-scrawl text-sm text-cocoa-soft">
                        Boy or girl
                      </dt>
                      <dd className="mt-0.5 text-[1.05rem] font-semibold capitalize">
                        {puppy.genderLabel || puppy.gender}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-scrawl text-sm text-cocoa-soft">
                        Age
                      </dt>
                      <dd className="mt-0.5 text-[1.05rem] font-semibold">
                        {puppy.age}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-scrawl text-sm text-cocoa-soft">
                        Where
                      </dt>
                      <dd className="mt-0.5 text-[1.05rem] font-semibold">
                        {isLocal ? "In Dubai now" : "Imported for you"}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-col gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      Ask about {puppy.name} on WhatsApp
                    </a>
                    <a href={`#enquire-${puppy.slug}`} className="btn btn-ghost">
                      Send an enquiry
                    </a>
                  </div>
                </div>

                {/* Chapter 2: What comes with pup */}
                <div className="tp-paper mt-8 -rotate-1">
                  <p className="tp-chapter">
                    <span aria-hidden="true" className="tp-chapter__n font-plush">
                      2
                    </span>
                    <span className="font-scrawl">
                      what comes with {puppy.name}
                    </span>
                  </p>
                  <h2 className="font-plush mt-1 text-[1.9rem]">
                    Every Teddy Pup comes
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    <li className="flex items-start gap-3 font-semibold">
                      <svg
                        viewBox="0 0 32 32"
                        className="mt-0.5 size-6 shrink-0 text-toffee-deep"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 17l7 7L27 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      Vaccinated
                    </li>
                    <li className="flex items-start gap-3 font-semibold">
                      <svg
                        viewBox="0 0 32 32"
                        className="mt-0.5 size-6 shrink-0 text-toffee-deep"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 17l7 7L27 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      Dewormed
                    </li>
                    <li className="flex items-start gap-3 font-semibold">
                      <svg
                        viewBox="0 0 32 32"
                        className="mt-0.5 size-6 shrink-0 text-toffee-deep"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 17l7 7L27 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      Verified health certificate from licensed vets
                    </li>
                    <li className="flex items-start gap-3 font-semibold">
                      <svg
                        viewBox="0 0 32 32"
                        className="mt-0.5 size-6 shrink-0 text-toffee-deep"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 17l7 7L27 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      Thoroughly checked before joining your family
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3: The Way Home */}
          <section
            aria-labelledby={`home-steps-${puppy.slug}`}
            className="mt-20"
          >
            <p className="tp-chapter">
              <span aria-hidden="true" className="tp-chapter__n font-plush">
                3
              </span>
              <span className="font-scrawl">the way home</span>
            </p>
            <h2
              id={`home-steps-${puppy.slug}`}
              className="font-plush text-big mt-3"
            >
              {isLocal
                ? "Bringing your puppy home in Dubai"
                : "Coming home from abroad"}
            </h2>
            <ol className="tp-trail tp-trail--row tp-trail--paws mt-10">
              <li>
                <span aria-hidden="true" className="tp-trail__num font-plush">
                  1
                </span>
                <h3 className="font-plush-text text-xl font-bold leading-tight">
                  {isLocal ? "Explore our puppies" : "Reserve your puppy"}
                </h3>
                <p className="mt-2 max-w-[38ch] text-cocoa-soft">
                  {isLocal
                    ? "Browse our website or visit our showroom to view the puppies."
                    : "Tell us which puppy has captured your heart."}
                </p>
              </li>
              <li>
                <span aria-hidden="true" className="tp-trail__num font-plush">
                  2
                </span>
                <h3 className="font-plush-text text-xl font-bold leading-tight">
                  {isLocal ? "Choose your puppy" : "Personalized consultation"}
                </h3>
                <p className="mt-2 max-w-[38ch] text-cocoa-soft">
                  {isLocal
                    ? "Open their profile or reach out to us directly with any questions."
                    : "We finalize details with you and share updates on your puppy's journey."}
                </p>
              </li>
              <li>
                <span aria-hidden="true" className="tp-trail__num font-plush">
                  3
                </span>
                <h3 className="font-plush-text text-xl font-bold leading-tight">
                  {isLocal ? "Meet before you choose" : "Import and arrival"}
                </h3>
                <p className="mt-2 max-w-[38ch] text-cocoa-soft">
                  {isLocal
                    ? "Spend time bonding in our Downtown showroom before deciding."
                    : "We manage health checks, travel arrangements, and documentation."}
                </p>
              </li>
              <li>
                <span aria-hidden="true" className="tp-trail__num font-plush">
                  4
                </span>
                <h3 className="font-plush-text text-xl font-bold leading-tight">
                  {isLocal ? "Pick-up or delivery" : "Welcome home"}
                </h3>
                <p className="mt-2 max-w-[38ch] text-cocoa-soft">
                  {isLocal
                    ? "Pick up your puppy or have them delivered safely within Dubai."
                    : "We help your new puppy settle in and ensure a smooth transition into your home."}
                </p>
              </li>
            </ol>
          </section>

          {/* Chapter 4: Enquiry Letterform */}
          <section
            id={`enquire-${puppy.slug}`}
            aria-labelledby={`enquire-title-${puppy.slug}`}
            className="tp-letter mt-20 grid gap-10 lg:grid-cols-12"
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

            <div className="lg:col-span-4">
              <p className="tp-chapter">
                <span aria-hidden="true" className="tp-chapter__n font-plush">
                  4
                </span>
                <span className="font-scrawl">dear TeddyPups…</span>
              </p>
              <h2
                id={`enquire-title-${puppy.slug}`}
                className="font-plush text-big mt-2"
              >
                Ask about {puppy.name}
              </h2>
              <p className="mt-4 text-cocoa-soft">
                Leave your details and our team will get back to you promptly —
                or message us on WhatsApp for the quickest reply.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {formSubmitted ? (
                <div className="rounded-2xl border-2 border-cocoa/30 bg-milk p-8 text-center">
                  <h3 className="font-plush text-2xl">Enquiry received!</h3>
                  <p className="mt-2 text-cocoa-soft">
                    Thank you for your interest in {puppy.name}. Our team will
                    be in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-ghost mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  noValidate
                  onSubmit={handleEnquirySubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor={`pup-name-${puppy.slug}`}
                        className="block text-[0.95rem] font-semibold"
                      >
                        Your name<span className="text-toffee-ink"> *</span>
                      </label>
                      <input
                        id={`pup-name-${puppy.slug}`}
                        required
                        minLength={2}
                        maxLength={80}
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`pup-phone-${puppy.slug}`}
                        className="block text-[0.95rem] font-semibold"
                      >
                        Phone or WhatsApp
                        <span className="text-toffee-ink"> *</span>
                      </label>
                      <input
                        id={`pup-phone-${puppy.slug}`}
                        required
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                      />
                      <p className="mt-1 text-sm text-cocoa-soft">
                        With country code, e.g. +971 50 123 4567
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor={`pup-email-${puppy.slug}`}
                        className="block text-[0.95rem] font-semibold"
                      >
                        Email{" "}
                        <span className="font-normal text-cocoa-soft">
                          (optional)
                        </span>
                      </label>
                      <input
                        id={`pup-email-${puppy.slug}`}
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`pup-area-${puppy.slug}`}
                        className="block text-[0.95rem] font-semibold"
                      >
                        Your area{" "}
                        <span className="font-normal text-cocoa-soft">
                          (optional)
                        </span>
                      </label>
                      <input
                        id={`pup-area-${puppy.slug}`}
                        autoComplete="address-level2"
                        maxLength={80}
                        value={formData.area}
                        onChange={(e) =>
                          setFormData({ ...formData, area: e.target.value })
                        }
                        className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                      />
                      <p className="mt-1 text-sm text-cocoa-soft">
                        e.g. Dubai Marina
                      </p>
                    </div>
                  </div>

                  <input type="hidden" name="puppyId" value={puppy.id} />

                  <div>
                    <label
                      htmlFor={`pup-msg-${puppy.slug}`}
                      className="block text-[0.95rem] font-semibold"
                    >
                      Message{" "}
                      <span className="font-normal text-cocoa-soft">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id={`pup-msg-${puppy.slug}`}
                      rows={4}
                      maxLength={2000}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 py-3 text-base outline-none focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                    ></textarea>
                  </div>

                  {/* Honeypot */}
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting ? "Sending enquiry…" : "Send enquiry"}
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Previous / Next Pup Nav */}
          {(prevPuppy || nextPuppy) && (
            <nav
              aria-label="More puppies"
              className="mt-16 grid gap-4 sm:grid-cols-2"
            >
              {prevPuppy && (
                <Link
                  className="group flex items-center gap-5 rounded-[2rem] border-[3px] border-cocoa bg-milk p-4 transition-transform duration-500 hover:-rotate-1"
                  href={`/puppies/${prevPuppy.slug}`}
                >
                  <span className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[999px_999px_0.6rem_0.6rem] border-[3px] border-cocoa bg-honey-soft">
                    <Image
                      alt={prevPuppy.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                      src={prevPuppy.cover?.url || "/media/default.jpg"}
                    />
                  </span>
                  <span>
                    <span className="font-scrawl block text-sm text-cocoa-soft">
                      Previous pup
                    </span>
                    <span className="font-plush text-[1.6rem]">
                      {prevPuppy.name}
                    </span>
                  </span>
                </Link>
              )}

              {nextPuppy && (
                <Link
                  className="group flex items-center gap-5 rounded-[2rem] border-[3px] border-cocoa bg-milk p-4 transition-transform duration-500 hover:-rotate-1 sm:flex-row-reverse sm:text-right"
                  href={`/puppies/${nextPuppy.slug}`}
                >
                  <span className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[999px_999px_0.6rem_0.6rem] border-[3px] border-cocoa bg-honey-soft">
                    <Image
                      alt={nextPuppy.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                      src={nextPuppy.cover?.url || "/media/default.jpg"}
                    />
                  </span>
                  <span>
                    <span className="font-scrawl block text-sm text-cocoa-soft">
                      Next pup
                    </span>
                    <span className="font-plush text-[1.6rem]">
                      {nextPuppy.name}
                    </span>
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>
    </div>
  );
}

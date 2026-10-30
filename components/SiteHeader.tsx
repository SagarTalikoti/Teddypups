'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/data';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/puppies', label: 'Puppies' },
  { href: '/happy-families', label: 'Happy families' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Visit & contact' },
];

const PAW_PATH =
  'M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 16);

      if (currentScrollY > 120 && currentScrollY > lastScrollY.current + 6) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 6 || currentScrollY <= 120) {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = () => {
    dialogRef.current?.showModal();
  };

  const closeMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) return;
    dialog.dataset.closing = '';
    const onEnd = () => {
      delete dialog.dataset.closing;
      dialog.close();
      dialog.removeEventListener('animationend', onEnd);
    };
    dialog.addEventListener('animationend', onEnd);
  };

  useEffect(() => {
    const onNav = () => closeMenu();
    window.addEventListener('tp:navigate', onNav);
    return () => window.removeEventListener('tp:navigate', onNav);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <header
        id="site-header"
        data-scrolled={scrolled ? 'true' : 'false'}
        data-hidden={hidden ? 'true' : 'false'}
        data-home={pathname === '/' ? 'true' : undefined}
        className="tp-header fixed inset-x-0 top-0 z-50"
      >
        <div className="tp-header__bar gutter">
          <Link
            className="tp-header__brand"
            aria-label="TeddyPups U.A.E. — home"
            href="/"
          >
            <Image
              src="/brand/logo.png"
              alt=""
              width={56}
              height={56}
              className="tp-header__logo"
              priority
            />
            <span className="font-plush tp-header__name">TeddyPups</span>
          </Link>

          <nav aria-label="Main" className="tp-header__nav">
            <ul>
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-active={isActive ? 'true' : 'false'}
                      aria-current={isActive ? 'page' : undefined}
                      className="tp-nav-link"
                    >
                      <span>{link.label}</span>
                      <svg
                        viewBox="0 0 64 64"
                        className="tp-nav-link__paw"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d={PAW_PATH} />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="tp-header__end">
            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp tp-header__wa"
            >
              WhatsApp us
            </a>

            <button
              type="button"
              onClick={openMenu}
              className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold lg:hidden"
              aria-haspopup="dialog"
            >
              <svg
                viewBox="0 0 64 64"
                className="size-4"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d={PAW_PATH} />
              </svg>
              Menu
            </button>
          </div>
        </div>

        {/* Header hem scalloped border */}
        <svg
          aria-hidden="true"
          className="tp-header__hem"
          width="100%"
          height="14"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="tp-hem"
              width="44"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 0H44V2A22 11 0 0 1 0 2Z" className="tp-header__hem-fill" />
              <path d="M0 2A22 11 0 0 0 44 2" className="tp-header__hem-line" />
            </pattern>
          </defs>
          <rect width="100%" height="14" fill="url(#tp-hem)" />
        </svg>
      </header>

      {/* Mobile Dialog Menu using native showModal() in top layer */}
      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        className="tp-menu m-0 h-dvh max-h-none w-screen max-w-none bg-honey p-0 text-cocoa backdrop:bg-cocoa/40"
        onClick={(e) => e.target === dialogRef.current && closeMenu()}
        onCancel={(e) => {
          e.preventDefault();
          closeMenu();
        }}
        onClose={(e) => delete e.currentTarget.dataset.closing}
      >
        <div className="flex h-full flex-col gutter pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
          <div className="flex items-center justify-between">
            <span className="font-scrawl text-lg">where to, friend?</span>
            <button
              type="button"
              onClick={closeMenu}
              className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk"
            >
              Close
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex-1">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      data-active={isActive ? 'true' : 'false'}
                      aria-current={isActive ? 'page' : undefined}
                      className="tp-menu-link font-plush block py-2 text-[clamp(2.4rem,11vw,3.4rem)]"
                    >
                      <span>{link.label}</span>
                      <svg
                        viewBox="0 0 64 64"
                        className="tp-nav-link__paw"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d={PAW_PATH} />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-3">
            <a
              href={SITE_CONFIG.whatsappHref}
              className="btn btn-whatsapp w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
            <p className="text-center text-sm font-medium">
              {SITE_CONFIG.phoneDisplay}
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

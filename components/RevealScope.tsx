'use client';

import React, { useRef, useEffect } from 'react';

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isCurtainDown(): boolean {
  if (typeof document === 'undefined') return false;
  const doc = document.documentElement;
  const curtain = document.querySelector('.tp-curtain') as HTMLElement | null;
  const curtainState = curtain?.dataset?.state;
  return (
    (!!doc.dataset.curtain && doc.dataset.curtain !== 'idle') ||
    (curtainState !== undefined && curtainState !== 'idle' && curtainState !== 'intro')
  );
}

interface RevealScopeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function RevealScope({
  children,
  className,
  as: Component = 'div',
  ...props
}: RevealScopeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    const root = containerRef.current;
    if (!root) return;

    if (isReducedMotion()) {
      const revealAll = () => {
        root
          .querySelectorAll('[data-reveal]:not([data-revealed])')
          .forEach((el) => {
            (el as HTMLElement).dataset.revealed = 'true';
          });
      };
      revealAll();
      const mo = new MutationObserver(revealAll);
      mo.observe(root, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const pending = new Set<Element>();

    const reveal = (el: Element) => {
      (el as HTMLElement).dataset.revealed = 'true';
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target;
          if (isCurtainDown()) {
            pending.add(target);
          } else {
            reveal(target);
          }
        }
      },
      {
        rootMargin: '0px 0px -6% 0px',
        threshold: 0.08,
      }
    );

    const armOrObserve = (el: Element) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.dataset.armed) {
        return observer.observe(el);
      }
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !isCurtainDown()) {
        htmlEl.dataset.revealed = 'true';
        return;
      }
      htmlEl.dataset.armed = 'true';
      observer.observe(el);
    };

    root.querySelectorAll('[data-reveal]:not([data-revealed])').forEach(armOrObserve);

    const mutationObserver = new MutationObserver(() => {
      root.querySelectorAll('[data-reveal]:not([data-revealed])').forEach(armOrObserve);
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    const flushPending = () => {
      pending.forEach(reveal);
      pending.clear();
    };

    window.addEventListener('tp:arrived', flushPending);

    const checkCurtain = () => {
      if (isCurtainDown()) {
        timer = setTimeout(checkCurtain, 400);
      } else {
        flushPending();
      }
    };
    timer = setTimeout(checkCurtain, 1600);

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('tp:arrived', flushPending);
    };
  }, []);

  const Comp = Component as any;
  return (
    <Comp ref={containerRef} className={className} {...props}>
      {children}
    </Comp>
  );
}

export default RevealScope;

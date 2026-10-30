'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/data';

export function FloatingWhatsAppBar() {
  return (
    <div
      data-whatsapp-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-cocoa bg-milk px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 md:hidden"
    >
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={SITE_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp !min-h-12 flex-1 !shadow-none"
        >
          WhatsApp us
        </a>
        <a
          href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
          className="btn btn-ghost !min-h-12 !px-5"
        >
          Call
        </a>
      </div>
    </div>
  );
}

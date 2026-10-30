import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { MeetSection } from '@/components/home/MeetSection';
import { PathsSection } from '@/components/home/PathsSection';
import { JourneySection } from '@/components/home/JourneySection';
import { PassportSection } from '@/components/home/PassportSection';
import { DuskSection } from '@/components/home/DuskSection';
import { NightSection } from '@/components/home/NightSection';
import { CtaSection } from '@/components/home/CtaSection';
import PupJourney from '@/components/PupJourney';

export default function HomePage() {
  return (
    <div data-page="home" className="tp-page">
      <HeroSection />
      <MeetSection />
      <PathsSection />
      <JourneySection />
      <PassportSection />
      <DuskSection />
      <NightSection />
      <CtaSection />
      <PupJourney />
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SignupSection from './components/SignupSection';
import MissionInAction from './components/MissionInAction';
import SuccessStories from './components/SuccessStories';
import PodcastSection from './components/PodcastSection';
import ComingSoon from './components/ComingSoon';
import CivilianSignup from './components/CivilianSignup';
import About from './components/About';
import Shop from './components/Shop';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navigation />
      <Hero />
      <SignupSection />
      <MissionInAction />
      <SuccessStories />
      <PodcastSection />
      <ComingSoon />
      <CivilianSignup />
      <About />
      <Shop />
      <Footer />
    </div>
  );
}

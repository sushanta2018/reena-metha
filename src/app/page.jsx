"use client";

import AboutUs from './components/AboutUs';
import AestheticComponent from './components/AestheticComponent';
import CollaboratesGenres from './components/CollaboratesGenres';
import ConcertComponent from './components/ConcertComponent';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/HeaderComponent';
import HeroBanner from './components/HeroBanner';
import LatestNews from './components/LatestNews';
import MusicalUniverse from './components/MusicalUniverse';

export default function Home() {

  return (
    <>
      <HeaderComponent />
      <HeroBanner />
      <AboutUs />
      <MusicalUniverse />
      <CollaboratesGenres />
      <AestheticComponent />
      <ConcertComponent />
      <LatestNews />
      <FooterComponent />
    </>
  )
}

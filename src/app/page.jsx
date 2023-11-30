"use client";

import AboutUs from './components/about-us';
import CollaboratesGenres from './components/collaborates-genres';
import Header from './components/header';
import HeroBanner from './components/hero-banner';
import MusicalUniverse from './components/musical-universe';

export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    centerPadding: "50px",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 1.2,
          centerMode: false,
          centerPadding: "10px",
        }
      },
    ]
  };

  return (
    <>
      <Header />
      <HeroBanner />
      <AboutUs />
      <MusicalUniverse />
      <CollaboratesGenres />
    </>
  )
}

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

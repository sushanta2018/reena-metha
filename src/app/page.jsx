"use client";
import { useState } from 'react';
import Image from 'next/image';
import ItemImg from '../assets/images/item.png';
import PlayImg from '../assets/images/play.png';
import ProfileImg from '../assets/images/reena_mehta.png';
import LogoImg from '../assets/images/logo.svg';
import BarImg from '../assets/images/bar.svg';
import Slider from "react-slick";

export default function Home() {
  const [isMenu, setIsMenu] = useState(false);

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
      <header className='w-full fixed top-0 left-0 z-20'>
        <nav className="bg-white py-2.5">
          <div className="flex justify-between items-center mx-auto container px-4">
            <a href="#" className="flex items-center">
              <Image src={LogoImg} className="mr-3 logo" alt="Reena Mehta" />
            </a>
            <div className="flex items-center lg:order-2 ">
              <a href="#" onClick={() => setIsMenu(!isMenu)}><Image src={BarImg} alt="" /></a>
            </div>
            <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 navigation-menu ${isMenu && 'active'}`}>
              <div className='navigation-menu-inner'>
                <ul className="flex flex-col lg:flex-row m-0">
                  <li>
                    <a href="#" className="block active py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01">Songs</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01">Collaborating</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='banner-section'>
        <div className="container mx-auto px-4">
          <div className='banner-wrapper relative md:w-[726px] '>
            <div className='banner-content max-w-[536px] relative z-10'>
              <h1 className='font-workSans'>Hello I Am <span>Reena Mehta</span></h1>
              <p className='font-openSans'>When words leave off, music begins</p>
            </div>
          </div>
        </div>
        <div className='relative slider-profile'>
          <div className='profile z-10'>
            <Image src={ProfileImg} alt='' />
          </div>
          <div className='slider-wrapper'>
            <Slider {...settings}>
              <div>
                <div className='item relative z-10'>
                  <div className='item-img relative'>
                    <Image src={ItemImg} alt="" className='h-full w-full' />
                    <button type='button' className='btn btn-link w-35 h-35 absolute top-2/4 left-2/4'><Image src={PlayImg} alt="" className='h-full w-full' /></button>
                  </div>
                  <div className='item-content'>
                    <h2>Meri Ashiqui</h2>
                    <p>Reena Mehta</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='item relative z-10'>
                  <div className='item-img relative'>
                    <Image src={ItemImg} alt="" className='h-full w-full' />
                    <button type='button' className='btn btn-link w-35 h-35 absolute top-2/4 left-2/4'><Image src={PlayImg} alt="" className='h-full w-full' /></button>
                  </div>
                  <div className='item-content'>
                    <h2>Meri Ashiqui</h2>
                    <p>Reena Mehta</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='item relative z-10'>
                  <div className='item-img relative'>
                    <Image src={ItemImg} alt="" className='h-full w-full' />
                    <button type='button' className='btn btn-link w-35 h-35 absolute top-2/4 left-2/4'><Image src={PlayImg} alt="" className='h-full w-full' /></button>
                  </div>
                  <div className='item-content'>
                    <h2>Meri Ashiqui</h2>
                    <p>Reena Mehta</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='item relative z-10'>
                  <div className='item-img relative'>
                    <Image src={ItemImg} alt="" className='h-full w-full' />
                    <button type='button' className='btn btn-link w-35 h-35 absolute top-2/4 left-2/4'><Image src={PlayImg} alt="" className='h-full w-full' /></button>
                  </div>
                  <div className='item-content'>
                    <h2>Meri Ashiqui</h2>
                    <p>Reena Mehta</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='item relative z-10'>
                  <div className='item-img relative'>
                    <Image src={ItemImg} alt="" className='h-full w-full' />
                    <button type='button' className='btn btn-link w-35 h-35 absolute top-2/4 left-2/4'><Image src={PlayImg} alt="" className='h-full w-full' /></button>
                  </div>
                  <div className='item-content'>
                    <h2>Meri Ashiqui</h2>
                    <p>Reena Mehta</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

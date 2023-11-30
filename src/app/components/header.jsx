import { useState } from 'react';
import LogoImg from '../../assets/images/logo.svg';
import BarImg from '../../assets/images/bar.svg';
import Image from 'next/image';

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className='w-full fixed top-0 left-0 z-20'>
      <nav className="bg-white py-2.5">
        <div className="flex justify-between items-center mx-auto container px-4 2xl:max-w-[1140px]">
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
  )
}

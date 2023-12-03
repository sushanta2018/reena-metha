import Image from "next/image";
import FooterLogoImg from '../../assets/images/logo.svg';
import FooterAbstractImg from '../../assets/images/footer-abstract.png';

export default function FooterComponent() {
  return (
    <footer className="footer-wrapper md:pt-[150px] pt-[50px] relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px] relative z-10">
        <div className="footer-top md:mb-[90px] mb-[40px] relative">
          <Image src={FooterAbstractImg} alt="" className="md:w-[300px] absolute left-0 md:ml-[-15px] md:block hidden"/>
          <Image src={FooterAbstractImg} alt="" className="md:w-[300px] absolute right-0 md:mr-[-15px] md:block hidden"/>
          <Image src={FooterLogoImg} alt="" className="md:w-[360px] w-[280px] m-auto"/>
          <p className="text-black font-openSans text-[16px] leading-[22px] text-center opacity-[0.8] mt-[10px] mb-[20px]">Connect with the Melody</p>
          <ul className="m-[0px] flex flex-wrap items-center justify-center">
            <li className="mt-[15px]"><a href="#" className="px-[15px] hover:text-primary_01 text-black font-workSans font-medium text-[16px] leading-[22px]">Home</a></li>
            <li className="mt-[15px]"><a href="#" className="px-[15px] hover:text-primary_01 text-black font-workSans font-medium text-[16px] leading-[22px]">About Us</a></li>
            <li className="mt-[15px]"><a href="#" className="px-[15px] hover:text-primary_01 text-black font-workSans font-medium text-[16px] leading-[22px]">Songs</a></li>
            <li className="mt-[15px]"><a href="#" className="px-[15px] hover:text-primary_01 text-black font-workSans font-medium text-[16px] leading-[22px]">Collaborating</a></li>
            <li className="mt-[15px]"><a href="#" className="px-[15px] hover:text-primary_01 text-black font-workSans font-medium text-[16px] leading-[22px]">Gallery</a></li>
          </ul>
          <ul className="mt-[30px] flex items-center justify-center">
            <li className="p-[5px]"><a href="#" className="p-[15px] rounded-[100%] bg-[rgba(194,88,88,0.16)] flex items-center justify-center text-[22px] w-[42px] h-[42px] text-black font-workSans font-medium"><i className="icon-instagram text-primary_01"></i></a></li>
            <li className="p-[5px]"><a href="#" className="p-[15px] rounded-[100%] bg-[rgba(194,88,88,0.16)] flex items-center justify-center text-[22px] w-[42px] h-[42px] text-black font-workSans font-medium"><i className="icon-facebook text-primary_01"></i></a></li>
            <li className="p-[5px]"><a href="#" className="p-[15px] rounded-[100%] bg-[rgba(194,88,88,0.16)] flex items-center justify-center text-[22px] w-[42px] h-[42px] text-black font-workSans font-medium"><i className="icon-youtube text-primary_01"></i></a></li>
            
          </ul>
        </div>
        <div className="footer-bottom pt-[30px] pb-[24px] border-t-[1px] border-[rgba(193,87,87,0.3)]">
          <p className="text-black font-openSans text-[14px] leading-[21px] text-center opacity-[0.8]">©2023 Reena Mehta, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
import Image from "next/image";
import LaptopImg from '../../assets/images/laptop.svg';

export default function ConcertComponent() {
  return (
    <section className="concert-wrapper py-[80px] relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px] relative z-10">
        <h2 className='font-workSans text-[38px] md:text-[48px] leading-[48px] md:leading-[58px] font-bold text-center mb-[30px] md:mb-[50px]'>Reena mehta - Live Concert <br className="md:block hidden"/> <span className="text-primary_01">Chicago 2019</span></h2>
        <div className="concert-video xl:w-[1015px] lg:w-[980px] md:w-[724px] w-[330px] relative m-auto">
          <Image src={LaptopImg} alt="" />
          <div className="video-group absolute top-0 left-0 w-full h-full">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/njX2bu-_Vw4?si=uFmGLP0Cfj3PqrT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
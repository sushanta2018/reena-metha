import Image from 'next/image';
import Slider from "react-slick";
import NewsImg01 from '../../assets/images/news01.png';
import NewsImg02 from '../../assets/images/news02.png';
import NewsImg03 from '../../assets/images/news03.png';

export default function LatestNews() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
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
    <section className="latest-news-wrapper white-shade-bg bg-no-repeat bg-cover md:py-[80px] py-[50px] relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <h2 className='font-workSans text-[36px] md:text-[48px] leading-[40px] md:leading-[58px] font-bold text-center mb-[30px] md:mb-[50px]'>Latest <span className="text-primary_01">News</span></h2>

        <div className='slider-wrapper md:mx-[0px] mx-[-15px]'>
          <Slider {...settings}>
            <div className='news-item'>
              <div className='rounded-[20px] overflow-hidden relative'>
                <Image className="w-full" src={NewsImg01} alt="" />
                <div className='text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col'>
                  <h2 className='font-workSans text-[24px] leading-[32px] font-bold text-white'>Naniya </h2>
                  <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">Coming Soon</p>
                </div>
              </div>
              <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem </p>
            </div>
            <div className='news-item'>
              <div className='rounded-[20px] overflow-hidden relative'>
                <Image className="w-full" src={NewsImg02} alt="" />
                <div className='text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col'>
                  <h2 className='font-workSans text-[24px] leading-[32px] font-bold text-white'>Naniya </h2>
                  <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">Coming Soon</p>
                </div>
              </div>
              <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem </p>
            </div>
            <div className='news-item'>
              <div className='rounded-[20px] overflow-hidden relative'>
                <Image className="w-full" src={NewsImg03} alt="" />
                <div className='text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col'>
                  <h2 className='font-workSans text-[24px] leading-[32px] font-bold text-white'>Naniya </h2>
                  <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">Coming Soon</p>
                </div>
              </div>
              <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem </p>
            </div>
            
          </Slider>
        </div>

        {/* <div className="md:gap-[20px] md:columns-3">
          <div className='news-item'>
            <div className='rounded-[20px] overflow-hidden relative'>
              <Image className="w-full" src={NewsImg01} alt="" />
              <div className='text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col'>
                <h2 className='font-workSans text-[24px] leading-[32px] font-bold text-white'>Naniya </h2>
                <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">Coming Soon</p>
              </div>
            </div>
            <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem </p>
          </div>
          <div className='news-item'>
            <div className='rounded-[20px] overflow-hidden relative'>
              <Image className="w-full" src={NewsImg02} alt="" />
              <div className='text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col'>
                <h2 className='font-workSans text-[24px] leading-[32px] font-bold text-white'>Naniya </h2>
                <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">Coming Soon</p>
              </div>
            </div>
            <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem </p>
          </div>
          <div className='news-item'>
            <div className='rounded-[20px] overflow-hidden relative'>
              <Image className="w-full" src={NewsImg03} alt="" />
              <div className='text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col'>
                <h2 className='font-workSans text-[24px] leading-[32px] font-bold text-white'>Naniya </h2>
                <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">Coming Soon</p>
              </div>
            </div>
            <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
import Image from "next/image";
import ProfileImg from '../../assets/images/about-us-profile.svg';

export default function AboutUs() {
  return (
    <section className="about-section relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <div className="about-wrapper flex flex-wrap items-center max-w-[1200px] mx-auto relative py-[80px] z-10">
          <div className="about-img w-full md:w-[450px] lg:w-[530px] md:mx-auto">
            <Image src={ProfileImg} alt="" />
          </div>
          <div className="about-content">
            <h2 className='font-workSans text-[38px] mb-[16px] md:text-[48px] font-extrabold leading-[48px] md:leading-[58px] text-black'>Who Is <span className="text-primary_01">Reena Mehta</span></h2>
            <p className='font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black'>An Indian vocalist embarking on a profound musical odyssey. Raised in the heartland of India, I discovered my musical identity within the rich tapestry of classical Indian ragas. Yet, my artistic vision knows no bounds, as I delve into a multifarious array of musical genres, harmoniously weaving together melodies that narrate the intricate stories of life's myriad vicissitudes.</p>
            <button type="button" className="text-white bg-primary_01 rounded-[52px] p-[16px] font-openSans text-[18px] mt-[48px] min-w-[198px] hover:opacity-[0.8]">Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
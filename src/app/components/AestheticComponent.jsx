import Image from 'next/image';
import Image01 from '../../assets/images/aesthetic/image01.png';
import Image02 from '../../assets/images/aesthetic/image02.png';
import Image03 from '../../assets/images/aesthetic/image03.png';
import Image04 from '../../assets/images/aesthetic/image04.png';
import Image05 from '../../assets/images/aesthetic/image05.png';
import Image06 from '../../assets/images/aesthetic/image06.png';
import Image07 from '../../assets/images/aesthetic/image07.png';
import Image08 from '../../assets/images/aesthetic/image08.png';

export default function AestheticComponent() {
  return (
    <section className="aesthetic-world-wrapper white-shade-bg bg-no-repeat bg-cover py-[80px] relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <h2 className='font-workSans text-[38px] md:text-[48px] leading-[48px] md:leading-[58px] font-bold text-center mb-[30px] md:mb-[50px]'>The <span className="text-primary_01">Aesthetic World</span> of <br /> Reena Mehta</h2>

        <div className="md:gap-[24px] gap-[20px] md:columns-3">
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full" src={Image01} alt="" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]'>
              <Image className="w-full" src={Image02} alt="" />
            </div>
          </div>
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full" src={Image03} alt="" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full" src={Image04} alt="" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full" src={Image05} alt="" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]'>
              <Image className="w-full" src={Image06} alt="" />
            </div>
          </div>
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full" src={Image07} alt="" />
            </div>
            <div className='rounded-2xl overflow-hidden'>
              <Image className="w-full" src={Image08} alt="" />
            </div>
          </div>
          
          {/* <div className="md:gap-[24px] gap-[20px] columns-2">
            <div className='rounded-2xl overflow-hidden md:mb-[24px] mb-[20px]'><Image className="w-full" src={MusicUniverse02} alt="" /></div>
            <div className='rounded-2xl overflow-hidden'><Image className="w-full" src={MusicUniverse03} alt="" /></div>
            <div className='rounded-2xl overflow-hidden md:mb-[24px] mb-[20px]'><Image className="w-full" src={MusicUniverse04} alt="" /></div>
            <div className='rounded-2xl overflow-hidden'><Image className="w-full" src={MusicUniverse02} alt="" /></div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
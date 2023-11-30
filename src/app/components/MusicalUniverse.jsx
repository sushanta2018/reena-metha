import Image from 'next/image';
import MusicUniverse01 from '../../assets/images/musical-universe/music01.svg';
import MusicUniverse02 from '../../assets/images/musical-universe/music02.svg';
import MusicUniverse03 from '../../assets/images/musical-universe/music03.svg';
import MusicUniverse04 from '../../assets/images/musical-universe/music04.svg';

export default function MusicalUniverse() {
  return (
    <section className="musical-universe-wrapper white-shade-bg bg-no-repeat bg-cover mt-[45px] py-[80px] relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <h2 className='font-workSans text-[38px] md:text-[48px] font-bold text-center mb-[30px] md:mb-[50px]'>Musical <span className="text-primary_01">Universe</span></h2>
        <div className="md:gap-[24px] gap-[20px] md:columns-2">
          <div className='rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]'>
            <Image className="w-full" src={MusicUniverse01} alt="" />
          </div>
          <div className="md:gap-[24px] gap-[20px] columns-2">
            <div className='rounded-2xl overflow-hidden md:mb-[24px] mb-[20px]'><Image className="w-full" src={MusicUniverse02} alt="" /></div>
            <div className='rounded-2xl overflow-hidden'><Image className="w-full" src={MusicUniverse03} alt="" /></div>
            <div className='rounded-2xl overflow-hidden md:mb-[24px] mb-[20px]'><Image className="w-full" src={MusicUniverse04} alt="" /></div>
            <div className='rounded-2xl overflow-hidden'><Image className="w-full" src={MusicUniverse02} alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
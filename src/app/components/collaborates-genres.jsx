import Image from 'next/image';
import CollaborateImg from '../../assets/images/collaborate.svg';

export default function CollaboratesGenres() {
  return (
    <section className="collaborates-wrapper bg-no-repeat bg-cover py-[80px]">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <div class="md:flex">
          <h2 className='md:w-6/12 font-workSans text-[38px] md:mb-[52px] mb-[20px] md:text-[48px] font-extrabold leading-[48px] md:leading-[58px] text-black'><span className="text-primary_01">Collaborates</span> Across Genres</h2>
          <p className='md:w-6/12 font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black md:mb-[52px] mb-[30px]'> Yet, my artistic vision knows no bounds, as I delve into a multifarious array of musical genres, harmoniously weaving together melodies that narrate the intricate stories of life's myriad vicissitudes.</p>
        </div>
        <div className='rounded-2xl overflow-hidden'><Image class="w-full" src={CollaborateImg} alt="" /></div>
      </div>
    </section>
  )
}
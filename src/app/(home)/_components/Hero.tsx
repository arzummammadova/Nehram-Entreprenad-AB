import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'
import GalleryPreview from './GalleryPreview'

const Hero = () => {
  return (
    <div className="text-center">
      <Title />

      <div
        className="
    relative w-full
    h-[300px]          /* default (extra small) */
    sm:h-[400px]       /* small screens ≥640px */
    md:h-[600px]       /* medium ≥768px */
    lg:h-[700px]       /* large ≥1024px */
    xl:h-[800px]       /* extra large ≥1280px */
  "
      >
        <Image
          src='https://static.wixstatic.com/media/9c608a_30e7a1feae5c4d8a96f3cd1261fd4658.jpg'
          alt='Construction hero image'
          fill
          className='object-cover'
        />
      </div>



     <div className="w-full lg:w-[60%] mx-auto py-[100px] flex flex-col gap-8 items-center">
        <h3 className='text-[#555555] text-[28px] font-bold'>Vi levererar kvalitet hela vägen</h3>
        <p className='text-[#5A5555] text-[22px]'>
          Vi är en bygg- och renoveringsfirma som alltid levererar kvalitet hela vägen.
          Vi utför arbeten år alla – privatpersoner, företag och förvaltningsbolag och
          vi gör alltid jobbet till ett på förhand överenskommet pris med fulla garantier.
        </p>

        {/* Button */}
        <button className='bg-[#D1D1D1] text-white w-[169px] py-3 px-2 text-[18px] uppercase font-medium tracking-wider hover:bg-[#D1D1D4] duration-300'>
          Kontact oss
        </button>
      </div>

      <GalleryPreview />

      <div className="w-full lg:w-[60%] mx-auto py-[100px] flex flex-col gap-8 items-center">
        <h3 className='text-[#555555] text-[28px] font-bold'>ROT/RUT-AVDRAG</h3>
        <p className='text-[#5A5555] text-[22px]'>
          Vi har F-skattsedel och är ansvarsförsäkrade. ROT-avdraget på 50 procent och RUT-avdraget på 50 procent  gäller på alla våra hushållsnära tjänster – vi drar av direkt på fakturan.

        </p>
        {/* Button */}
        <button className='bg-[#D1D1D1] text-white w-[169px] py-3 px-2 text-[18px] uppercase font-medium tracking-wider hover:bg-[#D1D1D4] duration-300'>
          Kontact oss
        </button>
      </div>
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="https://static.wixstatic.com/media/529cf7_e99edd92931444bb82dfe03cc3dd5eab~mv2_d_2000_1328_s_2.jpg/v1/fill/w_1960,h_860,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/renovation%20rrr.jpg"
          alt="Renovation"
          fill
          className="object-cover"
        />
      </div>

      <div className="lg:w-[60%] w-full mx-auto py-[100px] flex flex-col gap-8 items-center">
        <h3 className='text-[#555555] text-[28px] font-bold'>Vi är lyhörda för kundens önskemål</h3>
        <p className='text-[#5A5555] text-[22px]'>Vi lyssnar alltid på kundens önskemål och viker inte för några utmaningar. Låt fantasin flöda, våra erfarna och välutbildade medarbetare kommer att göra sitt bästa för att bygga och renovera ditt drömhus eller drömlägenhet.
        </p>
        {/* Button */}
        <button className='bg-[#FF8C62] rounded-4xl text-white w-[250px] py-3 px-1 text-[18px] uppercase font-medium tracking-wider  duration-300 button-contact'>
          Kontact oss
        </button>
      </div>

    </div>
  )
}

export default Hero

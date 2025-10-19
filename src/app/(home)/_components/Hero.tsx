import Title from '@/components/Title'
import Image from 'next/image'
import Link from 'next/link'   // ✅ Bunu əlavə et
import React from 'react'
import GalleryPreview from './GalleryPreview'

const Hero = () => {
  return (
    <div className="text-center">
      <Title />

      <div
        className="
    relative w-full
    h-[300px]
    sm:h-[400px]
    md:h-[600px]
    lg:h-[700px]
    xl:h-[800px]
  "
      >
        <Image
          src='https://static.wixstatic.com/media/9c608a_30e7a1feae5c4d8a96f3cd1261fd4658.jpg'
          alt='Construction hero image'
          fill
          className='object-cover'
        />
      </div>

      {/* --- 1-ci Bölmə --- */}
      <div className="w-full lg:w-[60%] mx-auto py-[100px] flex flex-col gap-8 items-center">
        <h3 className='text-[#555555] text-[28px] font-bold'>Vi levererar kvalitet hela vägen</h3>
        <p className='text-[#5A5555] text-[22px]'>
          Vi är en bygg- och renoveringsfirma som alltid levererar kvalitet hela vägen.
        </p>

        {/* ✅ Link ilə yönləndir */}
        <Link href="/kontakt">
          <button className='bg-[#D1D1D1] text-white w-[169px] py-3 px-2 text-[18px] uppercase font-medium tracking-wider hover:bg-[#D1D1D4] duration-300'>
            Kontact oss
          </button>
        </Link>
      </div>

      <GalleryPreview />

      {/* --- 2-ci Bölmə --- */}
      <div className="w-full lg:w-[60%] mx-auto py-[100px] flex flex-col gap-8 items-center">
        <h3 className='text-[#555555] text-[28px] font-bold'>ROT/RUT-AVDRAG</h3>
        <p className='text-[#5A5555] text-[22px]'>
          Vi har F-skattsedel och är ansvarsförsäkrade...
        </p>

        <Link href="/kontakt">
          <button className='bg-[#D1D1D1] text-white w-[169px] py-3 px-2 text-[18px] uppercase font-medium tracking-wider hover:bg-[#D1D1D4] duration-300'>
            Kontact oss
          </button>
        </Link>
      </div>

      {/* --- 3-cü Bölmə --- */}
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="https://static.wixstatic.com/media/529cf7_e99edd92931444bb82dfe03cc3dd5eab~mv2_d_2000_1328_s_2.jpg"
          alt="Renovation"
          fill
          className="object-cover"
        />
      </div>

      <div className="lg:w-[60%] w-full mx-auto py-[100px] flex flex-col gap-8 items-center">
        <h3 className='text-[#555555] text-[28px] font-bold'>Vi är lyhörda...</h3>
        <p className='text-[#5A5555] text-[22px]'>
          Vi lyssnar alltid på kundens önskemål...
        </p>

        <Link href="/kontakt">
          <button className='bg-[#FF8C62] rounded-4xl text-white w-[250px] py-3 px-1 text-[18px] uppercase font-medium tracking-wider duration-300 button-contact'>
            Kontact oss
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero

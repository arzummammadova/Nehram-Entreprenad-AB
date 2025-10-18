import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Title />

      <div className="relative w-full h-[1300px] ">
        <Image
          src="https://static.wixstatic.com/media/529cf7_7a11fb9a4fe146218d9601bc29a7ba25~mv2_d_3264_3264_s_4_2.jpg/v1/fill/w_1736,h_1736,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/BeFunky-collage.jpg"
          alt="Gallery"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default Page

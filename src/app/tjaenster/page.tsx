import Title from '@/components/Title'
import Header from '@/components/Header'
import React from 'react'

const Page = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-left relative text-center sm:text-left"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/8d1ccaec74b74051ad21a2e5df34ce19.jpg/v1/fill/w_1470,h_1530,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1ccaec74b74051ad21a2e5df34ce19.jpg')",
      }}
    >
      {/* Header with transparent background */}
      <Header transparent />

      {/* Başlıq */}
      <div className="pt-[60px] sm:pt-[80px] md:pt-[100px]">
        <Title />
      </div>

      {/* Content bölməsi */}
      <div className="mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-[#88906A] bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-10 shadow-md mt-6 sm:mt-10">
        <h4 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-semibold mb-4 sm:mb-6">
          Våra Tjänster
        </h4>

        <ul className="list-disc mt-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] pl-6 text-left space-y-1 sm:space-y-2">
          <li>Renovering</li>
          <li>Ombyggnad</li>
          <li>Köksrenovering</li>
          <li>Restaurering</li>
          <li>Utearbete</li>
          <li>Snickeriarbete (golvspecialister)</li>
          <li>Badrumsrenovering</li>
          <li>VVS</li>
          <li>EL-arbete</li>
        </ul>

        <p className="mt-4 sm:mt-6 pb-10 text-[#8E0000] text-[14px] sm:text-[16px] md:text-[18px] italic">
          Vi har flera duktiga samarbetspartners som anammar vår känsla för kvalitet.
        </p>
      </div>
    </div>
  )
}

export default Page

import Title from '@/components/Title'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div
            className="w-full h-full bg-cover bg-left relative"
            style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/8d1ccaec74b74051ad21a2e5df34ce19.jpg/v1/fill/w_1470,h_1530,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1ccaec74b74051ad21a2e5df34ce19.jpg')",
            }}
        >
            {/* Header imported and used with transparent background */}
            <Header transparent />

            <Title />

            <div className="mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-[#88906A]">
                <h4 className="text-[30px] sm:text-[40px] md:text-[50px] font-semibold mt-6 sm:mt-8 md:mt-12">
                    Våra Tjänster
                </h4>
                <ul className="list-disc mt-2 text-[18px] sm:text-[22px] md:text-[30px] pl-5">
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
                <p className="mt-4 pb-16 text-[#8E0000] text-[14px] sm:text-[16px] md:text-[20px] italic">
                    Vi har flera duktiga samarbetspartners som anammar vår känsla för kvalitet.
                </p>
            </div>
        </div>
    )
}

export default page

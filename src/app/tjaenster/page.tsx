import Title from '@/components/Title'
import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className="w-full h-full bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://static.wixstatic.com/media/8d1ccaec74b74051ad21a2e5df34ce19.jpg/v1/fill/w_1470,h_1530,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1ccaec74b74051ad21a2e5df34ce19.jpg')"
            }} >

            <nav className='mx-auto px-2 py-3 w-[80%]'>
                <ul className='text-[#8B8B8B] text-[18px] leading-[36px] flex justify-center items-center gap-[70px]'>
                    <li><Link href="/">Hem</Link></li>
                    <li className='hover:text-black'><Link href="/tjaenster">Tjänster</Link></li>
                    <li className='hover:text-black'><Link href="/om-oss">Om oss</Link></li>
                    <li className='hover:text-black'><Link href="/galleri">Galleri</Link></li>
                    <li className='hover:text-black'><Link href="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>

            <Title />
            <div className="w-[80%] mx-auto text-[#88906A] text-[50px]">
                <h4>Våra Tjänster</h4>
                <ul className='list-disc  mt-4 text-[32px]  list'>
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
                <p className='pb-[140px] mt-4 text-[#8E0000] text-[24px]  italic ' >Vi har flera duktiga samarbetspartners som anammar vår känsla för kvalitet.
                </p>
            </div>

        </div>
    )
}

export default page

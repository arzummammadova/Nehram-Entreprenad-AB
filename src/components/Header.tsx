'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();

    // /tjaenster səhifəsində header görünməsin
    if (pathname === '/tjaenster') {
        return null;
    }

    return (
        <div className='w-full bg-[#F6F6F6] relative z-10'>
            <nav className='mx-auto px-2 py-3 w-[80%]'>
                <ul className='text-[#8B8B8B] text-[18px] leading-[36px] flex justify-center items-center gap-[70px]'>
                    <li><Link href="/">Hem</Link></li>
                    <li className='hover:text-black'><Link href="/tjaenster">Tjänster</Link></li>
                    <li className='hover:text-black'><Link href="/om-oss">Om oss</Link></li>
                    <li className='hover:text-black'><Link href="/galleri">Galleri</Link></li>
                    <li className='hover:text-black'><Link href="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

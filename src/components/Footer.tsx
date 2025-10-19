'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#555555]'>
            <div className='text-white flex flex-col md:flex-row justify-between w-[90%] md:w-[80%] mx-auto py-6 items-center gap-4 md:gap-0'>

                {/* NAV LINKS */}
                <div className="">
                    <nav className='px-3'>
                        <ul className='text-white text-sm md:text-[18px] leading-[32px] flex flex-col md:flex-row justify-center items-center gap-2 md:gap-[40px] text-center'>
                            <li><Link href="/">Hem</Link></li>
                            <li className='hover:text-black'><Link href="/tjaenster">Tjäenster</Link></li>
                            <li className='hover:text-black'><Link href="/om-oss">Om oss</Link></li>
                            <li className='hover:text-black'><Link href="/galleri">Galleri</Link></li>
                            <li className='hover:text-black'><Link href="/kontakt">Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* COPYRIGHT */}
                <div className="text-[14px] md:text-[18px] text-center">
                    © 2025 All rights are reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer

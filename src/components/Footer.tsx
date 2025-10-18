import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#555555]'>
            <div className=' text-white flex justify-between w-[80%] mx-auto py-5 items-center'>

                <div className="">
                    <nav className='mx-auto px-3 py-3'>
                        <ul className='text-white text-[18px] leading-[36px] flex justify-center items-center gap-[40px]'>
                            <li><Link href="/">Hem</Link></li>
                            <li className='hover:text-black'><Link href="/tjaenster">Tjäenster</Link></li>
                            <li className='hover:text-black'><Link href="/om-oss">Om oss</Link></li>
                            <li className='hover:text-black'><Link href="/galleri">Galleri</Link></li>
                            <li className='hover:text-black'><Link href="/kontakt">Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="text-[20px]">
                    © 2025 All rights are reserved
                </div>
            </div>
        </footer>

    )
}

export default Footer

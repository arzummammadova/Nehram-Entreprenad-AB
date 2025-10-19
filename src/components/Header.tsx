'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    transparent?: boolean
}

const Header = ({ transparent = false }: Props) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // əvvəlki: /tjaenster səhifəsində header görünməsin
    // if (pathname === '/tjaenster') return null;

    // dəyişdirildi: yalnız pathname '/tjaenster' və transparent false olduğu halda gizlət
    if (pathname === '/tjaenster' && !transparent) return null;

    const links = [
        { href: '/', label: 'Hem' },
        { href: '/tjaenster', label: 'Tjänster' },
        { href: '/omoss', label: 'Om oss' },
        { href: '/galleri', label: 'Galleri' },
        { href: '/kontakt', label: 'Kontakt' },
    ];

    return (
        // added subtle translucent bg + backdrop blur when transparent is true
        <header className={`w-full ${transparent ? 'bg-black/20 backdrop-blur-sm border-b border-white/5' : 'bg-[#F6F6F6]'}  z-100 `}>
            <nav className="mx-auto px-3 py-2 w-[80%] flex justify-between items-center">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo-n.png"
                        alt="logo"
                        width={120}
                        height={80}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex ${transparent ? 'text-white' : 'text-[#8B8B8B]'} text-[18px] gap-[60px] font-medium`}>
                    {links.map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${pathname === link.href
                                    ? (transparent ? 'text-white' : 'text-black')
                                    : (transparent ? 'hover:text-white transition-colors duration-300' : 'hover:text-black transition-colors duration-300')
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Burger Button */}
                <button
                    className={`md:hidden ${transparent ? 'bg-white/10' : 'bg-black'} p-2 rounded-md flex flex-col justify-center items-center gap-[5px]`}
                    onClick={() => setOpen(true)}
                >
                    <span className="w-6 h-0.5 bg-white rounded"></span>
                    <span className="w-6 h-0.5 bg-white rounded"></span>
                    <span className="w-6 h-0.5 bg-white rounded"></span>
                </button>
            </nav>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black flex flex-col justify-center items-center z-[100]"
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-4xl font-bold text-white hover:rotate-90 transition-transform duration-300"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Links */}
                        <ul className="flex flex-col items-center gap-6 text-[22px] font-semibold text-white">
                            {links.map(link => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`
                                            px-8 py-3 rounded-full text-lg tracking-wide 
                                            transition-all duration-300 
                                            ${pathname === link.href
                                                ? 'bg-white text-black shadow-lg scale-105'
                                                : 'text-white hover:bg-white hover:text-black'
                                            }
                                        `}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header

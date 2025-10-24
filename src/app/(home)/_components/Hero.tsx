'use client'
import Title from '@/components/Title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import GalleryPreview from './GalleryPreview'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const Hero = () => {
  return (
    <div className="text-center overflow-hidden">
      {/* --- Başlıq animasiyası --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Title />
      </motion.div>

      {/* --- Hero şəkli --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
      >
        <Image
          src="https://static.wixstatic.com/media/9c608a_30e7a1feae5c4d8a96f3cd1261fd4658.jpg"
          alt="Construction hero image"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* --- 1-ci Bölmə --- */}
      <motion.div
        className="w-full lg:w-[60%] mx-auto py-[60px] sm:py-[80px] md:py-[100px] flex flex-col gap-6 sm:gap-8 items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-[#555555] text-[20px] sm:text-[24px] md:text-[28px] font-bold">
          Vi levererar kvalitet hela vägen
        </h3>
        <p className="text-[#5A5555] text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed">
          Vi är en bygg- och renoveringsfirma som alltid levererar kvalitet hela vägen.
        </p>

        <Link href="/kontakt">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D1D1D1] text-white w-[140px] sm:w-[169px] py-2 sm:py-3 px-2 text-[14px] sm:text-[16px] md:text-[18px] uppercase font-medium tracking-wider hover:bg-[#D1D1D4] duration-300"
          >
            Kontact oss
          </motion.button>
        </Link>
      </motion.div>

      <GalleryPreview />

      {/* --- 2-ci Bölmə --- */}
      <motion.div
        className="w-full lg:w-[60%] mx-auto py-[60px] sm:py-[80px] md:py-[100px] flex flex-col gap-6 sm:gap-8 items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-[#555555] text-[20px] sm:text-[24px] md:text-[28px] font-bold">
          ROT/RUT-AVDRAG
        </h3>
        <p className="text-[#5A5555] text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed">
          Vi har F-skattsedel och är ansvarsförsäkrade...
        </p>

        <Link href="/kontakt">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D1D1D1] text-white w-[140px] sm:w-[169px] py-2 sm:py-3 px-2 text-[14px] sm:text-[16px] md:text-[18px] uppercase font-medium tracking-wider hover:bg-[#D1D1D4] duration-300"
          >
            Kontact oss
          </motion.button>
        </Link>
      </motion.div>

      {/* --- 3-cü Bölmə şəkil --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[600px]"
      >
        <Image
          src="https://static.wixstatic.com/media/529cf7_e99edd92931444bb82dfe03cc3dd5eab~mv2_d_2000_1328_s_2.jpg"
          alt="Renovation"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* --- 3-cü Bölmə məzmun --- */}
      <motion.div
        className="lg:w-[60%] w-full mx-auto py-[60px] sm:py-[80px] md:py-[100px] flex flex-col gap-6 sm:gap-8 items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-[#555555] text-[20px] sm:text-[24px] md:text-[28px] font-bold">
          Vi är lyhörda...
        </h3>
        <p className="text-[#5A5555] text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed">
          Vi lyssnar alltid på kundens önskemål...
        </p>

        <Link href="/kontakt">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF8C62] rounded-3xl text-white w-[180px] sm:w-[220px] md:w-[250px] py-2 sm:py-3 px-1 text-[14px] sm:text-[16px] md:text-[18px] uppercase font-medium tracking-wider duration-300"
          >
            Kontact oss
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero

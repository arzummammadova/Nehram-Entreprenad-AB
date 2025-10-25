"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "@/components/Title";

const slides = [
    {
        id: 1,
        image:
            "https://static.wixstatic.com/media/9c608a_30e7a1feae5c4d8a96f3cd1261fd4658.jpg/v1/fill/w_1000,h_537,al_c,q_85,enc_avif,quality_auto/9c608a_30e7a1feae5c4d8a96f3cd1261fd4658.jpg",
        label: "NEHRAM ENTREPRENAD AB",
        hoverText: "NEHRAM ENTREPRENAD AB",
    },
    {
        id: 2,
        image:
            "https://static.wixstatic.com/media/9c608a_27921a7a17bf4f9090f57eda4d7e336e.jpg/v1/fill/w_1000,h_537,al_c,q_85,enc_avif,quality_auto/9c608a_27921a7a17bf4f9090f57eda4d7e336e.jpg",
        label: "NEHREM ENTREPRENAD AB",
        hoverText: "NEHRAM ENTREPRENAD AB",
    },
    {
        id: 3,
        image:
            "https://static.wixstatic.com/media/9c608a_44cbfc1aa16143a9b1dd348258c904ef.jpg/v1/fill/w_1000,h_537,al_c,q_85,enc_avif,quality_auto/9c608a_44cbfc1aa16143a9b1dd348258c904ef.jpg",
        label: "NEHREM ENTREPRENAD AB",
        hoverText: "NEHRAM ENTREPRENAD AB",
    },
];

const Page = () => {
    const [current, setCurrent] = useState(0);
    const [open, setOpen] = useState(false);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    return (
        <div className="w-[90%] md:w-[60%] mx-auto mt-10 font-sans relative">
            {/* Carousel Container */}
            <Title />
            <div className="relative overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={slides[current].id}
                        src={slides[current].image}
                        alt={slides[current].label}
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover cursor-pointer"
                        onClick={() => setOpen(true)}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                    />
                </AnimatePresence>

                {/* Slide Counter */}
                <div className="absolute top-2 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                    {current + 1}/{length}
                </div>

                {/* Hover Description */}
                <div className="absolute bottom-0 left-0 w-full bg-[#000000cc] text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {slides[current].hoverText}
                </div>

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-[#00000080] hover:bg-[#000000a1] p-1 sm:p-2 rounded-full text-white"
                >
                    <ChevronLeft size={20}/>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-[#00000080] hover:bg-[#000000a1] p-1 sm:p-2 rounded-full text-white"
                >
                    <ChevronRight size={20}  />
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <div
                            className="relative max-w-[1000px] w-full px-4 sm:px-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={slides[current].image}
                                alt="Large view"
                                className="w-full max-h-[80vh] object-contain"
                            />

                            {/* Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80"
                            >
                                <X size={24} />
                            </button>

                            {/* Navigation */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                            >
                                <ChevronLeft size={24}  />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                            >
                                <ChevronRight size={24}  />
                            </button>

                            {/* Counter */}
                            <div className="absolute top-6 right-6 bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                                {current + 1}/{length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* About Section */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-6 px-4 py-8">
                <h2 className="text-[#555555] text-[24px] font-bold tracking-wide mb-3 w-full md:w-1/3 text-start">
                    OM OSS
                </h2>
                <p className="text-[#555] text-[18px] leading-relaxed w-full md:w-2/3 text-start">
                   Nehram  är bildad år 2025 och vi utför arbete i Stockholm. Vår företag har utfört mer än hundra projekt.

                    Vi på Nehram Entreprenad vill sätta kundens vision i fokus. Vi jobbar alltid för att överträffa kundens förväntningar och tummar aldrig på kvalitet. För oss är det viktigt att kunden ska känna sig trygg genom hela processen och få sin vision förverkligad. Vi vet vad som krävs och det ställer väldigt höga krav på oss själva. Vi nöjer oss aldrig med mindre än vi själva förväntar oss, och arbetar alltid efter att utvecklas. Utöver våra höga krav på oss själva, följer vi självklart rådande byggnormer. Några av våra jobb kan ni se här och vi lämnar även med stolthet ut referenser.

                    Vi på Nehram Entreprenad trivs med att lösa problem. Allting går inte alltid som man tänkt sig, då gäller det att vara alert och stå på tå. Kunna anpassa sig och utforma lösningar efter de olika situationer som presenterar sig. Vi skulle vilja slå oss på bröstet och säga att vi är riktigt bra på just detta.
                    Vi brukar säga att vanligt sunt förnuft ger ovanligt bra lösningar och snygga resultat.
                </p>
            </div>
        </div>
    );
};

export default Page;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalleryPreview = () => {
  const images = [
    "https://static.wixstatic.com/media/9c608a_660d65ca2daf419c8c8b7827e3bb005d.jpg/v1/fill/w_489,h_417,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c608a_660d65ca2daf419c8c8b7827e3bb005d.jpg",
    "https://static.wixstatic.com/media/9c608a_660d65ca2daf419c8c8b7827e3bb005d.jpg/v1/fill/w_489,h_417,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c608a_660d65ca2daf419c8c8b7827e3bb005d.jpg",
    "https://static.wixstatic.com/media/9c608a_227269e677284d978b5b9c8c2d20029d.jpg/v1/fill/w_489,h_417,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c608a_227269e677284d978b5b9c8c2d20029d.jpg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  h-auto">
      {images.map((src, idx) => (
        <Link
          href="/galleri"
          key={idx}
          className="relative w-full aspect-[4/3] group overflow-hidden"
        >
          <Image
            src={src}
            alt={`Gallery image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      ))}
    </div>
  );
};

export default GalleryPreview;

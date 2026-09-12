"use client";

import { useState, useEffect, useRef } from "react";

const backgroundVideos = [
  "/videos/hero-prep.mp4",
  "/videos/bulk-orders.mp4",
  "/videos/chicken-sandwich.mp4",
  "/videos/ordering-guide.mp4",
];

export default function HeroVideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % backgroundVideos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        key={backgroundVideos[currentIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity duration-1000"
        poster="/photos/delivery-rider.png"
      >
        <source src={backgroundVideos[currentIndex]} type="video/mp4" />
      </video>

      {/* Lighter gradient so the video reads clearly while hero text keeps enough contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c12]/60 via-[#0d1c12]/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c12]/65 via-transparent to-black/10" />

      {/* Slideshow Progress Indicators */}
      <div className="absolute bottom-4 left-6 z-10 hidden sm:flex items-center gap-2 pointer-events-auto">
        {backgroundVideos.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-zest shadow-lg"
                : "w-2.5 bg-bone/30 hover:bg-bone/60"
            }`}
            title={`Switch to video ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PlayIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

interface VideoItem {
  id: string;
  title: string;
  category: string;
  views: string;
  thumbnail: string;
  videoUrl?: string; // Direct MP4 path e.g. "/videos/prep.mp4"
  tiktokId?: string; // TikTok video ID e.g. "7670706239697702164"
  tiktokUrl: string;
}

const sampleVideos: VideoItem[] = [
  {
    id: "v1",
    title: "Watch Our Fresh Grilled Chicken Bowl Prepared Daily",
    category: "Kitchen Prep",
    views: "52.4K views",
    thumbnail: "/photos/hero-bowl.png",
    tiktokId: "7670706239697702164",
    tiktokUrl: "https://www.tiktok.com/@salad.treat.ug",
  },
  {
    id: "v2",
    title: "Kampala Dispatch: Safe & Timely Doorstep Delivery",
    category: "Rider Delivery",
    views: "22.8K views",
    thumbnail: "/photos/delivery-rider.png",
    tiktokUrl: "https://www.tiktok.com/@salad.treat.ug",
  },
  {
    id: "v3",
    title: "Unboxing Monthly Meal Plan Boxes — Fresh & Crispy",
    category: "Unboxing",
    views: "18.5K views",
    thumbnail: "/photos/kampala-crunch-bowl.png",
    tiktokUrl: "https://www.tiktok.com/@salad.treat.ug",
  },
];

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="bg-[#0b160e] py-16 sm:py-20 text-bone border-t border-bone/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zest/15 px-3.5 py-1 text-xs font-bold text-zest">
              <SparklesIcon className="h-4 w-4" />
              <span>@salad.treat.ug on TikTok &amp; IG</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-bone">
              Fresh from Our Kitchen
            </h2>
            <p className="text-xs sm:text-sm text-bone/70 mt-2 max-w-lg">
              Join over 10,000+ healthy food lovers in Kampala! Watch how we chop, grill, and deliver daily freshness.
            </p>
          </div>

          <a
            href="https://www.tiktok.com/@salad.treat.ug"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zest px-6 py-3 text-xs sm:text-sm font-bold text-basil transition-all hover:bg-zest-deep shadow-lg hover:-translate-y-0.5 cursor-pointer shrink-0"
          >
            <span>Follow on TikTok (10.2K)</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {sampleVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative overflow-hidden rounded-3xl border border-bone/15 bg-[#142519] transition-all duration-300 hover:-translate-y-1 hover:border-zest/50 hover:shadow-2xl hover:shadow-zest/10 cursor-pointer"
            >
              {/* Thumbnail Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-basil-deep">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142519] via-[#142519]/40 to-transparent" />

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-basil/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-zest">
                  {video.category}
                </span>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zest text-basil shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-zest-deep">
                    <PlayIcon className="h-7 w-7 text-basil translate-x-0.5 fill-basil" />
                  </div>
                </div>

                <span className="absolute right-4 bottom-4 text-[10px] font-bold text-bone/70 bg-black/50 px-2 py-0.5 rounded">
                  {video.views}
                </span>
              </div>

              {/* Card Footer info */}
              <div className="p-5">
                <h3 className="font-display text-base text-bone line-clamp-2 group-hover:text-zest transition-colors">
                  {video.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-xs text-bone/60">
                  <span className="flex items-center gap-1 font-semibold text-zest">
                    Watch Reel &rarr;
                  </span>
                  <span>TikTok / Reels</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-[#142519] p-6 text-bone border border-bone/20 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zest uppercase tracking-wider">
                {activeVideo.category}
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-bone/10 text-bone hover:bg-zest hover:text-basil transition-colors cursor-pointer"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <h3 className="font-display text-xl text-bone">
              {activeVideo.title}
            </h3>

            {/* Video Player Box (Local MP4 OR TikTok Embed) */}
            <div className="relative aspect-[9/16] sm:aspect-video w-full max-h-[70vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-bone/15 shadow-inner">
              {activeVideo.videoUrl ? (
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              ) : activeVideo.tiktokId ? (
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${activeVideo.tiktokId}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={activeVideo.title}
                />
              ) : (
                <div className="text-center p-6 space-y-3">
                  <PlayIcon className="h-12 w-12 text-zest mx-auto opacity-80" />
                  <p className="text-xs text-bone/70 max-w-xs mx-auto">
                    To watch full high-definition video clips, head over to our official TikTok channel!
                  </p>
                  <a
                    href={activeVideo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-zest px-5 py-2.5 text-xs font-bold text-basil hover:bg-zest-deep transition-colors cursor-pointer"
                  >
                    <span>Open in TikTok</span>
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            <p className="text-xs text-bone/50 text-center">
              💡 <b>Tip:</b> Place downloaded <code>.mp4</code> files in <code>public/videos/</code> or paste TikTok video links!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

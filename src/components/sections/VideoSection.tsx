"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiPlay, FiPause, FiMaximize2, FiVideo, FiZap } from "react-icons/fi";

export default function ProcessVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            // Video will load only when section is in view
            if (videoRef.current) {
              videoRef.current.load();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="border-y border-(--line) py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="My Process"
          title="Watch How I Transform Images Into Vector"
          description="See the magic happen - from blurry image to clean, scalable vector artwork."
          align="center"
        />

        {/* Video Container */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="relative mx-auto max-w-4xl">
            
            {/* Video Card */}
            <div className="relative overflow-hidden rounded-2xl border border-(--line) bg-(--surface-1) shadow-xl">
              
              {/* Video Player */}
              <div className="relative aspect-video bg-(--surface-2)">
                {isInView ? (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-contain"
                    poster="/videos/vector-process-poster.png"
                    onEnded={handleVideoEnd}
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/vector-process.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <FiVideo className="mx-auto text-4xl text-(--accent)/30" />
                      <p className="mt-2 text-sm text-(--muted)">Loading video...</p>
                    </div>
                  </div>
                )}

                {/* Play Button Overlay (only when not playing) */}
                {!isPlaying && isInView && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 hover:bg-black/40 group"
                  >
                    <div className="rounded-full bg-(--accent) p-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <FiPlay className="h-8 w-8 text-white" />
                    </div>
                  </button>
                )}

                {/* Video Controls Bar */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
                      >
                        <FiPause className="h-4 w-4" />
                      </button>
                      <span className="text-xs text-white">Vector Creation Process</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info Footer */}
              <div className="border-t border-(--line) p-4 sm:p-5">
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-(--muted)">Recording</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiZap className="text-(--accent) text-xs" />
                      <span className="text-xs text-(--muted)">Real-time Process</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMaximize2 className="text-(--accent) text-xs" />
                      <span className="text-xs text-(--muted)">Full HD</span>
                    </div>
                  </div>
                  <p className="text-center text-xs text-(--muted) sm:text-right">
                    Watch how I convert a blurry logo into a clean vector in minutes
                  </p>
                </div>
              </div>

            </div>

            {/* Step Indicators */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-(--accent)/10 text-(--accent)">
                  <span className="text-sm font-bold">1</span>
                </div>
                <p className="text-xs font-semibold text-(--heading)">Upload Image</p>
                <p className="text-[10px] text-(--muted)">Send your blurry or pixelated image</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-(--accent)/10 text-(--accent)">
                  <span className="text-sm font-bold">2</span>
                </div>
                <p className="text-xs font-semibold text-(--heading)">Vector Tracing</p>
                <p className="text-[10px] text-(--muted)">I manually trace and clean curves</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-(--accent)/10 text-(--accent)">
                  <span className="text-sm font-bold">3</span>
                </div>
                <p className="text-xs font-semibold text-(--heading)">Delivery</p>
                <p className="text-[10px] text-(--muted)">Get print-ready vector files</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  "/images/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
  "/images/040A3456-14EC-4B6F-BD2C-3FC46A1C332E.jpeg",
  "/images/06056E81-A14A-4983-931D-0BC651973615.jpeg",
  "/images/0649B081-AB34-4DE5-958E-C0243E5F4633.jpeg",
  "/images/0B48182F-6308-458F-88D7-0183F7A5B418.jpeg",
  "/images/0F123A3D-CFBB-4A8E-A6A1-5193CBC3BD01_1_102_o.jpeg",
  "/images/12128744-C109-46CF-8CD5-B470F787F6A0.jpeg",
  "/images/127E51BD-C43A-4F36-A8FC-517FE7FCA8E6.jpeg",
  "/images/1513AF11-753E-4A0B-84F1-A83E42A41A26_1_102_o.jpeg",
  "/images/1768AA66-6912-454E-9AFC-7B95D7BE624A.jpeg",
  "/images/19111607-E362-46E9-8C92-EAF6B6D3D351_4_5005_c.jpeg",
  "/images/197FEE18-93D0-449B-8EF0-25EFE8EDDC75.jpeg",
  "/images/1D9658AA-203F-419C-9D85-FAEC42314E4C.jpeg",
  "/images/22AEFDAA-D030-4C5B-9BB1-305F8E22383D.jpeg",
  "/images/33CF4C14-159D-4EBC-A0AD-7BAE5CF45105.jpeg",
  "/images/4448B8B5-9C2A-40BA-971C-57ED36054B6E.jpeg",
  "/images/4C875759-9BB1-43B3-A5BB-B835DAB1AC4E.jpeg",
  "/images/4E1B137A-C6D7-40BD-90D0-C960FA898F7B_1_102_o.jpeg",
  "/images/530E1A2A-986A-4C16-BB11-16AB77630BCD.jpeg",
  "/images/535F1347-D64A-4018-8935-A95340770D1C.jpeg",
  "/images/76C86D17-671C-4D86-9606-2E03A6D8D983.jpeg",
  "/images/7A3A9828-DCD6-47D4-A790-EFAFDB99C3ED.jpeg",
  "/images/861F4E00-475C-4509-8370-8A28CF83214A.jpeg",
  "/images/8765AF3E-E081-4369-8391-7ADF2BC43A6A.jpeg",
  "/images/8C297B51-7707-4AEF-8CBE-684532FA3F31.jpeg",
  "/images/9D8B4B54-4A07-4927-B368-FF4FE7F0D4C5.jpeg",
  "/images/9E9C3303-EDE6-4185-954A-3346688D469E.jpeg",
  "/images/9F7D6D97-1DC6-4A81-9058-367726573477.jpeg",
  "/images/A6ADAA65-C575-4A75-9141-EC3F330132F4_1_102_o.jpeg",
  "/images/A6E8B0AC-A0D8-43CE-B95A-A6B4AAEFF5E8.jpeg",
  "/images/A717C94D-724A-4CAD-B255-2297ACF4281C_1_102_o.jpeg",
  "/images/AA2FA054-575E-4264-B9F0-DA7B36A8715E.jpeg",
  "/images/AA72C2D0-779D-4EF5-98DB-ED0458F3A1F5_1_102_o.jpeg",
  "/images/AAFF2782-2937-4CD4-904D-69C12EB387F2.jpeg",
  "/images/AFA9C22F-50D2-444A-B67A-9E172715D4FD_1_102_o.jpeg",
  "/images/B1BFB231-C17F-4C93-B19B-5A141E81C31B.jpeg",
  "/images/B62E8CC6-1A8F-4EF9-BE89-E75D2BA6B50B.jpeg",
  "/images/BA6144DC-C240-45E5-A6AA-CAF38619C90F_1_102_o.jpeg",
  "/images/C2452FF7-BFAB-4021-BE43-A6F9D898527B.jpeg",
  "/images/CE054665-1C8D-4DED-B5DC-D7CFA060F674.jpeg",
  "/images/CF567FE2-7928-4C9D-8B64-EC17024F76A7.jpeg",
  "/images/D41B088C-D234-42FB-86F2-0486306FD222_1_102_o.jpeg",
  "/images/D83FA0F3-78BB-4C9F-AC97-0FE5229B8F37.jpeg",
  "/images/EABBC4CF-4E8A-428D-B550-AD0FD4C33AE9.jpeg",
  "/images/EDF233D9-2F3F-4318-AE83-AAB36404BDD7.jpeg",
];

const galleryVideos = [
  { src: "/videos/new1.mp4", title: "Glass Craftsmanship 1", views: "2.4k" },
  { src: "/videos/new2.mp4", title: "Glass Craftsmanship 2", views: "1.8k" },
  { src: "/videos/new3.mp4", title: "Glass Craftsmanship 3", views: "3.1k" },
  { src: "/videos/new4.mp4", title: "Glass Craftsmanship 4", views: "987" },
  { src: "/videos/new5.mp4", title: "Glass Craftsmanship 5", views: "2.2k" },
  { src: "/videos/new6.mp4", title: "Glass Craftsmanship 6", views: "1.5k" },
  { src: "/videos/new7.mp4", title: "Glass Craftsmanship 7", views: "4.0k" },
  { src: "/videos/new8.mp4", title: "Glass Craftsmanship 8", views: "763" },
  { src: "/videos/real.webm", title: "Studio Showcase", views: "6.7k" },
  { src: "/videos/video1.webm", title: "Luxury Living Room", views: "5.2k" },
  {
    src: "/videos/videos2.webm",
    title: "Modern Kitchen Design",
    views: "3.9k",
  },
  { src: "/videos/video3.webm", title: "Office Interior", views: "2.1k" },
  { src: "/videos/video4.webm", title: "Premium Bedroom Suite", views: "4.4k" },
  { src: "/videos/video5.webm", title: "Hospitality Design", views: "1.3k" },
];

type FilterType = "all" | "images" | "videos";
const FILTERS: FilterType[] = ["all", "images", "videos"];
const IMAGES_PER_PAGE = 12;

// ─── GalleryImage ─────────────────────────────────────────────────────────────
function GalleryImage({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.9,
        delay: (index % 8) * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="gallery-item group cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      {/* Image */}
      <div className="overflow-hidden bg-[#0d0d0d] relative">
        <img
          src={src}
          alt={`Interior design project ${index + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700" />

        {/* Gold corner brackets — top-left */}
        <span
          className="absolute top-3 left-3 w-5 h-5 pointer-events-none
                     border-t border-l border-transparent
                     group-hover:border-[#C9A961]/70
                     transition-all duration-500 ease-out"
        />
        {/* Gold corner brackets — top-right */}
        <span
          className="absolute top-3 right-3 w-5 h-5 pointer-events-none
                     border-t border-r border-transparent
                     group-hover:border-[#C9A961]/70
                     transition-all duration-500 ease-out"
        />
        {/* Gold corner brackets — bottom-left */}
        <span
          className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none
                     border-b border-l border-transparent
                     group-hover:border-[#C9A961]/70
                     transition-all duration-500 ease-out"
        />
        {/* Gold corner brackets — bottom-right */}
        <span
          className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none
                     border-b border-r border-transparent
                     group-hover:border-[#C9A961]/70
                     transition-all duration-500 ease-out"
        />

        {/* Centre + icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="opacity-0 group-hover:opacity-100 transition-all duration-500
                          translate-y-2 group-hover:translate-y-0"
          >
            <span className="text-white/80 text-3xl font-extralight leading-none select-none">
              +
            </span>
          </div>
        </div>

        {/* Bottom caption bar */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between
                        px-3.5 pb-3 pt-8
                        bg-gradient-to-t from-black/60 to-transparent
                        opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        >
          <span className="text-white/30 text-[9px] tracking-[0.35em] uppercase font-light">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[#C9A961]/60 text-[9px] tracking-[0.35em] uppercase font-light">
            View
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── GalleryVideo ─────────────────────────────────────────────────────────────
function GalleryVideo({
  video,
  index,
  onClick,
}: {
  video: (typeof galleryVideos)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const handleLoaded = () => {
      el.currentTime = 0.5;
    };
    el.addEventListener("loadedmetadata", handleLoaded);
    return () => el.removeEventListener("loadedmetadata", handleLoaded);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0.5;
      }
    }
  }, [isHovered]);

  // GSAP clip-path reveal on hover
  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      gsap.to(videoRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(videoRef.current, {
        clipPath: "inset(4% 4% 4% 4%)",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.9,
        delay: (index % 6) * 0.09,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="gallery-item group cursor-pointer relative"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated top gold border */}
      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9A961]/0
                       group-hover:bg-[#C9A961]/60
                       transition-all duration-500 z-10"
        />

        <div className="bg-[#0d0d0d] aspect-video overflow-hidden relative">
          {/* Preview video */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            style={{ clipPath: "inset(4% 4% 4% 4%)" }}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-[1.05]" : "scale-100"
            }`}
          >
            <source
              src={video.src}
              type={video.src.endsWith(".webm") ? "video/webm" : "video/mp4"}
            />
          </video>

          {/* Dark scrim */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-700" />

          {/* HD badge — top right */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-[9px] tracking-[0.25em] uppercase font-light
                           text-[#C9A961]/70 border border-[#C9A961]/25
                           px-1.5 py-0.5 leading-none"
            >
              HD
            </span>
          </div>

          {/* Index — top left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-white/20 text-[9px] tracking-[0.3em] font-light">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Play button — minimal circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                isHovered
                  ? "border border-[#C9A961] scale-105"
                  : "border border-white/30 scale-100"
              }`}
            >
              <svg
                className={`w-4 h-4 ml-0.5 transition-colors duration-500 ${
                  isHovered ? "text-[#C9A961]" : "text-white/60"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Bottom title bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h4 className="font-serif text-lg font-light text-white leading-snug">
              {video.title}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase font-light">
                {video.views} views
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Load More — editorial rule + text style ──────────────────────────────────
function LoadMoreButton({
  remaining,
  progress,
  onClick,
}: {
  remaining: number;
  progress: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-20"
    >
      {/* Full-width gold rule with centred button */}
      <div className="relative flex items-center gap-0">
        {/* Left rule */}
        <div
          className={`flex-1 h-[1px] transition-colors duration-500 ${
            hovered ? "bg-[#C9A961]/30" : "bg-white/[0.06]"
          }`}
        />

        {/* Centre text button */}
        <button
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative px-10 flex items-center gap-4 group focus:outline-none"
          aria-label="Load more images"
        >
          <span
            className={`text-[11px] tracking-[0.35em] uppercase font-light transition-colors duration-400 ${
              hovered ? "text-[#C9A961]" : "text-white/40"
            }`}
          >
            — Load More —
          </span>
        </button>

        {/* Right rule */}
        <div
          className={`flex-1 h-[1px] transition-colors duration-500 ${
            hovered ? "bg-[#C9A961]/30" : "bg-white/[0.06]"
          }`}
        />
      </div>

      {/* Progress sub-line */}
      <div className="flex items-center justify-center gap-6 mt-5">
        <div className="w-32 h-[1px] bg-white/[0.04] relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C9A961]/30 via-[#C9A961]/50 to-[#C9A961]/30 transition-all duration-700"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-white/20 text-[9px] tracking-[0.35em] uppercase font-light">
          {Math.round(progress * 100)}% shown · {remaining} remaining
        </span>
        <div className="w-32 h-[1px] bg-white/[0.04] relative overflow-hidden">
          <div
            className="absolute inset-y-0 right-0 bg-gradient-to-l from-[#C9A961]/30 via-[#C9A961]/50 to-[#C9A961]/30 transition-all duration-700"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  isOpen,
  onClose,
  type,
  imageSrc,
  videoSrc,
  images,
  currentIndex,
  onNext,
  onPrev,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: "image" | "video";
  imageSrc?: string;
  videoSrc?: string;
  images?: string[];
  currentIndex?: number;
  onNext?: () => void;
  onPrev?: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.98)" }}
          onClick={onClose}
        >
          {/* Close — thin X top right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-7 md:top-8 md:right-10 z-20
                       text-white/40 hover:text-[#C9A961] transition-colors duration-300
                       focus:outline-none group"
            aria-label="Close lightbox"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>

          {/* Counter */}
          {type === "image" && images && currentIndex !== undefined && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
              <span className="text-white/25 text-[10px] tracking-[0.4em] font-light">
                {String(currentIndex + 1).padStart(2, "0")}
                <span className="text-white/15 mx-2">/</span>
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          )}

          {/* Content */}
          <div
            className="relative w-full h-full flex items-center justify-center p-6 md:p-14"
            onClick={(e) => e.stopPropagation()}
          >
            {type === "image" && imageSrc && (
              <motion.div
                key={imageSrc}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center"
              >
                <img
                  src={imageSrc}
                  alt="Gallery view"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            )}

            {type === "video" && videoSrc && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="max-w-5xl w-full"
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <video
                    autoPlay
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source
                      src={videoSrc}
                      type={
                        videoSrc.endsWith(".webm") ? "video/webm" : "video/mp4"
                      }
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation arrows — minimal serif chevrons */}
          {type === "image" && images && images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev?.();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
                           text-white/25 hover:text-[#C9A961]
                           transition-colors duration-300 focus:outline-none
                           select-none leading-none"
                aria-label="Previous image"
              >
                <span className="font-serif text-[3.5rem] md:text-[5rem] font-thin leading-none">
                  &#8249;
                </span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext?.();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
                           text-white/25 hover:text-[#C9A961]
                           transition-colors duration-300 focus:outline-none
                           select-none leading-none"
                aria-label="Next image"
              >
                <span className="font-serif text-[3.5rem] md:text-[5rem] font-thin leading-none">
                  &#8250;
                </span>
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Gallery Section ─────────────────────────────────────────────────────
export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const [filter, setFilter] = useState<FilterType>("all");
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxType, setLightboxType] = useState<"image" | "video">("image");
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [lightboxVideoSrc, setLightboxVideoSrc] = useState("");

  // Pill underline indicator position
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Register GSAP ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // GSAP ScrollTrigger marquee reveal on eyebrow label
  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.fromTo(
      marqueeRef.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 85%",
          end: "top 55%",
          scrub: 0.5,
        },
      },
    );
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    const activeIdx = FILTERS.indexOf(filter);
    const btn = tabRefs.current[activeIdx];
    const container = tabsRef.current;
    if (btn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    }
  }, [filter]);

  // Init pill on mount
  useEffect(() => {
    const btn = tabRefs.current[0];
    const container = tabsRef.current;
    if (btn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    }
  }, []);

  const displayedImages = galleryImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < galleryImages.length;

  // GSAP stagger reveal on grid items when filter or displayed images change
  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll(".gallery-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "all",
      },
    );
  }, [displayedImages, filter]);

  const handleImageClick = useCallback((index: number) => {
    setLightboxType("image");
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleVideoClick = useCallback((videoSrc: string) => {
    setLightboxType("video");
    setLightboxVideoSrc(videoSrc);
    setLightboxOpen(true);
  }, []);

  const handlePrevImage = useCallback(() => {
    setLightboxImageIndex((prev) =>
      prev > 0 ? prev - 1 : galleryImages.length - 1,
    );
  }, []);

  const handleNextImage = useCallback(() => {
    setLightboxImageIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : 0,
    );
  }, []);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + IMAGES_PER_PAGE, galleryImages.length),
    );
  }, []);

  const loadedProgress = visibleCount / galleryImages.length;

  return (
    <section id="gallery" className="relative bg-[#080808] overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-20" />

      {/* ── Editorial Section Header ─────────────────────────────── */}
      <div
        ref={headerRef}
        className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20"
      >
        {/* Giant decorative section number */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-8 font-serif text-[8rem] md:text-[10rem] lg:text-[13rem]
                     text-white leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.03)" }}
        >
          03
        </span>

        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          {/* Eyebrow */}
          <div ref={marqueeRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[10px] tracking-[0.5em] uppercase mb-6 md:mb-8"
              style={{ color: "rgba(201,169,97,0.50)" }}
            >
              Our Work
            </motion.p>
          </div>

          {/* Centered heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-serif font-light text-white tracking-tight leading-[0.9]
                       text-[4rem] md:text-[6rem] lg:text-[8rem] mb-8 md:mb-10"
          >
            CURATED
            <br />
            <span className="text-white/80">GALLERY</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-white/30 text-sm font-light leading-relaxed tracking-wide max-w-xl mx-auto mb-10 md:mb-12"
          >
            A curated selection of our finest glass and interior installations —
            each project a testament to precision craftsmanship and elevated
            living.
          </motion.p>

          {/* Minimal text filter tabs — centered */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <div ref={tabsRef} className="relative flex items-center gap-7">
              {/* Sliding underline indicator */}
              <motion.div
                className="absolute bottom-0 h-[1px] pointer-events-none"
                style={{ backgroundColor: "#C9A961" }}
                animate={{ left: pillStyle.left, width: pillStyle.width }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />

              {FILTERS.map((f, i) => {
                const countMap: Record<FilterType, number> = {
                  all: galleryImages.length + galleryVideos.length,
                  images: galleryImages.length,
                  videos: galleryVideos.length,
                };
                return (
                  <button
                    key={f}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    onClick={() => {
                      setFilter(f);
                      setVisibleCount(IMAGES_PER_PAGE);
                    }}
                    className={`relative pb-2 flex items-baseline gap-1 text-[11px] tracking-[0.3em] uppercase font-light
                                transition-colors duration-300 focus:outline-none ${
                                  filter === f
                                    ? "text-white"
                                    : "text-white/30 hover:text-white/60"
                                }`}
                  >
                    {f}
                    <span
                      className="text-[9px] ml-0.5 leading-none"
                      style={{ color: "rgba(201,169,97,0.40)" }}
                    >
                      {countMap[f]}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Divider rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1.6,
              delay: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-[1px] mt-14 md:mt-16 origin-left"
            style={{
              background:
                "linear-gradient(to right, rgba(201,169,97,0.25), rgba(255,255,255,0.04), transparent)",
            }}
          />
        </div>
      </div>

      {/* ── Videos + Images grid wrapper — GSAP stagger target ── */}
      <div ref={gridRef}>
        {/* ── Videos Section ──────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {(filter === "all" || filter === "videos") && (
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 mb-16 md:mb-24"
            >
              {/* Sub-label row */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-5 mb-8 md:mb-10"
              >
                <span className="text-white/20 text-[10px] tracking-[0.45em] uppercase font-light">
                  Video Walkthroughs
                </span>
                <div className="flex-1 h-[1px] bg-white/[0.04]" />
                <span className="text-white/15 text-[9px] tracking-[0.3em] font-light uppercase">
                  {galleryVideos.length} Films
                </span>
              </motion.div>

              {/* 3-col video grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {galleryVideos.map((video, index) => (
                  <GalleryVideo
                    key={video.src}
                    video={video}
                    index={index}
                    onClick={() => handleVideoClick(video.src)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Images Section ──────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {(filter === "all" || filter === "images") && (
            <motion.div
              key="images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12"
            >
              {/* Sub-label row */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-5 mb-8 md:mb-10"
              >
                <span className="text-white/20 text-[10px] tracking-[0.45em] uppercase font-light">
                  Project Photography
                </span>
                <div className="flex-1 h-[1px] bg-white/[0.04]" />
                <span className="text-white/15 text-[9px] tracking-[0.3em] font-light uppercase">
                  {galleryImages.length} Images
                </span>
              </motion.div>

              {/* CSS masonry columns */}
              <div className="columns-2 md:columns-3 gap-3 md:gap-4">
                {displayedImages.map((src, index) => (
                  <div key={src} className="mb-3 md:mb-4 break-inside-avoid">
                    <GalleryImage
                      src={src}
                      index={index}
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                ))}
              </div>

              {/* Load More */}
              {hasMoreImages && (
                <LoadMoreButton
                  remaining={galleryImages.length - visibleCount}
                  progress={loadedProgress}
                  onClick={loadMore}
                />
              )}

              {/* All loaded state */}
              {!hasMoreImages && visibleCount > IMAGES_PER_PAGE && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-16 flex items-center gap-0"
                >
                  <div className="flex-1 h-[1px] bg-white/[0.05]" />
                  <span
                    className="px-8 text-[10px] tracking-[0.4em] uppercase font-light"
                    style={{ color: "rgba(201,169,97,0.35)" }}
                  >
                    All {galleryImages.length} images displayed
                  </span>
                  <div className="flex-1 h-[1px] bg-white/[0.05]" />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* end gridRef wrapper */}

      {/* Bottom section rule */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 mt-24 md:mt-32 pb-24 md:pb-32">
        <div
          className="h-[1px]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)",
          }}
        />
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        type={lightboxType}
        imageSrc={
          lightboxType === "image"
            ? galleryImages[lightboxImageIndex]
            : undefined
        }
        videoSrc={lightboxType === "video" ? lightboxVideoSrc : undefined}
        images={lightboxType === "image" ? galleryImages : undefined}
        currentIndex={lightboxType === "image" ? lightboxImageIndex : undefined}
        onNext={lightboxType === "image" ? handleNextImage : undefined}
        onPrev={lightboxType === "image" ? handlePrevImage : undefined}
      />
    </section>
  );
}

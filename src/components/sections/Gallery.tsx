"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
  {
    src: "/videos/real.webm",
    poster: "/images/BA6144DC-C240-45E5-A6AA-CAF38619C90F_1_102_o.jpeg",
    title: "Studio Showcase — Behind the Craft",
  },
  {
    src: "/videos/video1.webm",
    poster: "/videos/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
    title: "Luxury Living Room",
  },
  {
    src: "/videos/videos2.webm",
    poster: "/videos/1513AF11-753E-4A0B-84F1-A83E42A41A26_1_102_o.jpeg",
    title: "Modern Kitchen Design",
  },
  {
    src: "/videos/video3.webm",
    poster: "/videos/4E1B137A-C6D7-40BD-90D0-C960FA898F7B_1_102_o.jpeg",
    title: "Office Interior",
  },
  {
    src: "/videos/video4.webm",
    poster: "/videos/AA72C2D0-779D-4EF5-98DB-ED0458F3A1F5_1_102_o.jpeg",
    title: "Premium Bedroom Suite",
  },
  {
    src: "/videos/video5.webm",
    poster: "/videos/BA6144DC-C240-45E5-A6AA-CAF38619C90F_1_102_o.jpeg",
    title: "Hospitality Design",
  },
];

type FilterType = "all" | "images" | "videos";

const IMAGES_PER_PAGE = 12;

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

  // Vary aspect ratios for masonry feel
  const aspectClasses = [
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[5/4]",
    "aspect-[3/2]",
    "aspect-[2/3]",
    "aspect-[16/10]",
  ];
  const aspectClass = aspectClasses[index % aspectClasses.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: (index % 6) * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div className={`${aspectClass} overflow-hidden bg-brand-dark`}>
        <img
          src={src}
          alt={`Interior design project ${index + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/5">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Gold corner accents on hover */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-brand-gold/0 group-hover:border-brand-gold/50 transition-all duration-500" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-brand-gold/0 group-hover:border-brand-gold/50 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

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
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group cursor-pointer relative overflow-hidden"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden bg-brand-dark relative">
        {/* Poster image */}
        <img
          src={video.poster}
          alt={video.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Preview video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={video.poster}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <source src={video.src} type="video/webm" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-700" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
              isHovered
                ? "border-brand-gold bg-brand-gold/20 scale-110"
                : "border-white/40 bg-white/5"
            }`}
            style={{ backdropFilter: "blur(8px)" }}
          >
            <svg
              className={`w-6 h-6 md:w-8 md:h-8 ml-1 transition-colors duration-500 ${
                isHovered ? "text-brand-gold" : "text-white"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Video title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-light">
              Video
            </span>
          </div>
          <h4 className="font-serif text-base md:text-lg text-white font-light">
            {video.title}
          </h4>
        </div>

        {/* Gold corner accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-brand-gold/0 group-hover:border-brand-gold/50 transition-all duration-500" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-brand-gold/0 group-hover:border-brand-gold/50 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

// Lightbox component
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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
          className="fixed inset-0 z-[200] bg-black/97 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 md:top-8 md:right-8 z-10 w-12 h-12 flex items-center justify-center group"
            aria-label="Close lightbox"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white/60 group-hover:bg-brand-gold transition-colors duration-300 rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white/60 group-hover:bg-brand-gold transition-colors duration-300 -rotate-45" />
            </div>
          </button>

          {/* Counter */}
          {type === "image" && images && currentIndex !== undefined && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <span className="text-white/40 text-xs tracking-[0.3em] font-light">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          )}

          {/* Content */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            {type === "image" && imageSrc && (
              <motion.div
                key={imageSrc}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl w-full"
              >
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    autoPlay
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src={videoSrc} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation Arrows for images */}
          {type === "image" && images && images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev?.();
                }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 hover:border-brand-gold/40 transition-all duration-300 group bg-black/20 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5 text-white/60 group-hover:text-brand-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext?.();
                }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 hover:border-brand-gold/40 transition-all duration-300 group bg-black/20 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5 text-white/60 group-hover:text-brand-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const [filter, setFilter] = useState<FilterType>("all");
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxType, setLightboxType] = useState<"image" | "video">("image");
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [lightboxVideoSrc, setLightboxVideoSrc] = useState("");

  const displayedImages = galleryImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < galleryImages.length;

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

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + IMAGES_PER_PAGE, galleryImages.length),
    );
  };

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 lg:py-40 bg-brand-black overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-30" />

      {/* Section Header */}
      <div
        ref={headerRef}
        className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 mb-16 md:mb-20"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-5"
            >
              <div className="w-10 h-[1px] bg-brand-gold/40" />
              <span className="text-brand-gold/60 text-[10px] md:text-xs font-light tracking-[0.5em] uppercase">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight"
            >
              Our
              <br />
              <span className="text-brand-gold/80">Gallery</span>
            </motion.h2>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-1 md:gap-2"
          >
            {(["all", "images", "videos"] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setVisibleCount(IMAGES_PER_PAGE);
                }}
                className={`px-5 md:px-7 py-2.5 text-[10px] md:text-xs font-light uppercase tracking-[0.25em] transition-all duration-500 ${
                  filter === f
                    ? "bg-brand-gold/10 text-brand-gold border border-brand-gold/30"
                    : "text-white/30 border border-white/5 hover:text-white/60 hover:border-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-[1px] bg-gradient-to-r from-brand-gold/20 via-white/[0.06] to-transparent mt-10 md:mt-14 origin-left"
        />
      </div>

      {/* Videos Section */}
      {(filter === "all" || filter === "videos") && (
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 mb-16 md:mb-24">
          {/* Videos label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500/80 rounded-full" />
              <span className="text-white/30 text-[10px] md:text-xs font-light tracking-[0.3em] uppercase">
                Video Walkthroughs
              </span>
            </div>
            <div className="flex-1 h-[1px] bg-white/[0.04]" />
            <span className="text-white/20 text-[10px] font-light tracking-wider">
              {galleryVideos.length} Videos
            </span>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {galleryVideos.map((video, index) => (
              <GalleryVideo
                key={video.src}
                video={video}
                index={index}
                onClick={() => handleVideoClick(video.src)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Images Section */}
      {(filter === "all" || filter === "images") && (
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Images label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-3 h-3 text-brand-gold/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white/30 text-[10px] md:text-xs font-light tracking-[0.3em] uppercase">
                Project Photography
              </span>
            </div>
            <div className="flex-1 h-[1px] bg-white/[0.04]" />
            <span className="text-white/20 text-[10px] font-light tracking-wider">
              {galleryImages.length} Images
            </span>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4">
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-14 md:mt-20"
            >
              <button
                onClick={loadMore}
                className="group relative inline-flex items-center gap-4 px-10 py-4 border border-white/10 hover:border-brand-gold/30 transition-all duration-700"
              >
                <span className="text-white/40 text-xs font-light uppercase tracking-[0.25em] group-hover:text-brand-gold transition-colors duration-500">
                  Load More
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-white/20 text-[10px] font-light">
                    {galleryImages.length - visibleCount} remaining
                  </span>
                </div>
                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-brand-gold/20">
                  <div
                    className="h-full bg-brand-gold/50 transition-all duration-500"
                    style={{
                      width: `${(visibleCount / galleryImages.length) * 100}%`,
                    }}
                  />
                </div>
              </button>
            </motion.div>
          )}

          {/* Show all loaded message */}
          {!hasMoreImages && visibleCount > IMAGES_PER_PAGE && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-14"
            >
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-[1px] bg-brand-gold/20" />
                <span className="text-brand-gold/40 text-[10px] tracking-[0.3em] uppercase font-light">
                  All {galleryImages.length} images loaded
                </span>
                <div className="w-8 h-[1px] bg-brand-gold/20" />
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Bottom decorative element */}
      <div className="max-w-4xl mx-auto mt-20 md:mt-28 px-5">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
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

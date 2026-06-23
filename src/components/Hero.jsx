import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../assets/videos/Evershine.mp4";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    const content = contentRef.current;

    if (!hero || !video || !content) return;

    const ctx = gsap.context(() => {
      gsap.to(video, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(content, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-10">

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[4px] md:tracking-[6px] text-yellow-400 text-xs md:text-sm mb-4 md:mb-6"
          >
            WATER • LIGHT • LEGACY
          </motion.p>

          {/* Main Heading */}
         <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="
    font-bold
    leading-[0.9]
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    max-w-5xl

    bg-gradient-to-r
    from-white
    via-yellow-200
    to-yellow-500

    bg-[length:200%_auto]
    bg-clip-text
    text-transparent

    drop-shadow-[0_0_20px_rgba(255,215,0,0.20)]
    animate-gradient
  "
>
  Stable
  <br />
  Evershine
</motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="
              text-gray-300
              text-base
              md:text-lg
              lg:text-xl
              mt-6
              md:mt-8
              max-w-2xl
            "
          >
            Landmark residences shaped around calm waterfront cues,
            rising sunlight and the quiet confidence of enduring luxury.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
          >
            <button
              className="
                w-full
                sm:w-auto
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
              "
            >
              Explore Projects
            </button>

            <button
              className="
                w-full
                sm:w-auto
                border
                border-white
                text-white
                px-8
                py-4
                rounded-full
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Enquire Now
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-20
        "
      >
        <div className="w-[2px] h-16 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
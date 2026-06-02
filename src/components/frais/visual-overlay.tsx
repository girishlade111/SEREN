"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisualOverlay() {
  return (
    <section className="bg-frais-cream relative">
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]"
        >
          <Image
            src="/images/terracotta-bg.jpg"
            alt="Textured terracotta dried clay surface"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </motion.div>

        {/* Foreground Image - Centered, overlapping bottom */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] z-10 w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px]"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/candle-hands.jpg"
              alt="Hands holding a lit candle in warm golden light"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
            />
          </div>
        </motion.div>
      </div>

      {/* Spacer for the overlapping image */}
      <div className="h-[120px] sm:h-[160px] md:h-[180px]" />
    </section>
  );
}

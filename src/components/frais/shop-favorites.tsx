"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const placeholderText =
  "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.";

export function ShopFavorites() {
  return (
    <section className="bg-frais-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-frais-dark leading-tight mb-6">
              Nature&apos;s Essence
              <br />
              Scented Candles
            </h2>
            <p className="text-frais-gray text-base leading-relaxed mb-8 max-w-md">
              {placeholderText}
            </p>
            <a
              href="#"
              className="inline-block border-2 border-frais-dark text-frais-dark px-8 py-3 rounded-full text-sm tracking-[0.15em] hover:bg-frais-dark hover:text-frais-white transition-colors duration-300"
            >
              SHOP CANDLES
            </a>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/candles-crafting.jpg"
                alt="Hands crafting scented candles with essential oils on a wooden tray"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

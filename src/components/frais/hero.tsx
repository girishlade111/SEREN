"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-frais-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-frais-dark leading-[1.05] tracking-tight">
              Just Like
              <br />
              Nature
              <br />
              Intended
            </h1>
          </motion.div>

          {/* Right Column: Image + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <p className="text-frais-dark/70 text-sm sm:text-base tracking-wider mb-6">
                Handcrafted Organic Soap & Candles
              </p>
              <a
                href="#most-popular"
                className="inline-block bg-frais-dark text-frais-white px-8 py-3.5 rounded-full text-sm tracking-[0.15em] hover:bg-frais-olive transition-colors duration-300"
              >
                SHOP NOW
              </a>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src="/images/hero-soap.jpg"
                alt="Stacked natural handmade soap bars with herbs and grains"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

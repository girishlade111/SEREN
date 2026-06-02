"use client";

import { motion } from "framer-motion";

const placeholderText =
  "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.";

export function NaturallySimple() {
  return (
    <section className="bg-frais-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-frais-dark mb-6">
            Naturally Simple
          </h2>
          <p className="text-frais-gray text-base leading-relaxed max-w-xl mx-auto mb-10">
            {placeholderText}
          </p>
          <a
            href="#"
            className="inline-block border-2 border-frais-dark text-frais-dark px-8 py-3 rounded-full text-sm tracking-[0.15em] hover:bg-frais-dark hover:text-frais-white transition-colors duration-300"
          >
            OUR STORY
          </a>
        </motion.div>
      </div>
    </section>
  );
}

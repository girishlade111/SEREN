"use client";

import { User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["SHOP", "ABOUT", "CONTACT"];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-frais-white border-b border-frais-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <div className="border-2 border-frais-dark px-4 py-1.5 sm:px-6 sm:py-2">
              <span className="font-serif text-xl sm:text-2xl tracking-widest text-frais-dark">
                FRAIS
              </span>
            </div>
          </div>

          {/* Center: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-frais-gray text-sm tracking-[0.2em] hover:text-frais-dark transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right: Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-1.5 text-frais-gray hover:text-frais-dark transition-colors duration-200">
              <User className="w-5 h-5" />
              <span className="text-xs tracking-wider">Account</span>
            </button>
            <button className="flex items-center gap-1.5 text-frais-gray hover:text-frais-dark transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-xs tracking-wider">Cart</span>
              <span className="absolute -top-1.5 -right-2.5 bg-frais-dark text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-frais-white border-t border-frais-beige overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-frais-gray text-sm tracking-[0.2em] hover:text-frais-dark transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-frais-beige">
                <button className="flex items-center gap-1.5 text-frais-gray hover:text-frais-dark transition-colors">
                  <User className="w-5 h-5" />
                  <span className="text-xs tracking-wider">Account</span>
                </button>
                <button className="flex items-center gap-1.5 text-frais-gray hover:text-frais-dark transition-colors relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-xs tracking-wider">Cart</span>
                  <span className="absolute -top-1.5 -right-2.5 bg-frais-dark text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

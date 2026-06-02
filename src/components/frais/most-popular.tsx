"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "PLANT PEELER",
    price: "$15.00",
    image: "/images/product-plant-peeler.jpg",
  },
  {
    id: 2,
    name: "LAVENDER",
    price: "$65.00",
    originalPrice: "$75.00",
    image: "/images/product-lavender.jpg",
  },
  {
    id: 3,
    name: "AROMATIC BASED",
    price: "$45.00",
    originalPrice: "$50.00",
    image: "/images/product-aromatic.jpg",
  },
  {
    id: 4,
    name: "ORGANIC BEESWAX",
    price: "$40.00",
    originalPrice: "$3.00",
    image: "/images/product-beeswax.jpg",
  },
];

export function MostPopular() {
  const [addingToCart, setAddingToCart] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    setAddingToCart(product.id);
    setTimeout(() => {
      setAddingToCart(null);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }, 500);
  };

  return (
    <section id="most-popular" className="bg-frais-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-frais-dark text-center mb-12 sm:mb-16"
        >
          Most Popular
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-frais-dark text-xs sm:text-sm font-bold tracking-[0.15em] mb-1">
                {product.name}
              </h3>
              <p className="text-frais-gray text-xs sm:text-sm mb-3">
                {product.originalPrice && (
                  <span className="line-through mr-2">
                    {product.originalPrice}
                  </span>
                )}
                {product.price}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={addingToCart === product.id}
                className="w-full bg-frais-olive text-frais-white py-2.5 sm:py-3 rounded-full text-xs tracking-[0.15em] hover:bg-frais-dark transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {addingToCart === product.id ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="w-3.5 h-3.5" />
                    ADD TO CART
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

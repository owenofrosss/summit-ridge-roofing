"use client";

import { motion } from "framer-motion";
import FallbackImage from "@/components/FallbackImage";

export default function AnimatedGallery() {
  const images = [
    "https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg",
    "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/31763537/pexels-photo-31763537/free-photo-of-roof-construction-with-wooden-framework-and-workers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  return (
    <div className="container">
      <motion.h2 
        className="text-3xl font-bold tracking-tight text-[#1e2a38] sm:text-4xl mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <FallbackImage
              src={src}
              alt={`Gallery ${i + 1}`}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-64 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 
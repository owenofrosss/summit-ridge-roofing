"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AnimatedCTA() {
  return (
    <div className="container text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Ready to Protect Your Home?
        </motion.h2>
        <motion.p
          className="text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Don't wait until it's too late. Contact Summit Ridge Roofing today for a free inspection and estimate.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-[#1e2a38] font-bold shadow-lg hover:bg-[#f3f4f6] hover:scale-105 transition-all duration-200"
          >
            <Link href="#contact">Get a Free Estimate</Link>
          </Button>
          <a
            href="tel:8285558822"
            className="inline-flex items-center text-white text-lg font-semibold hover:underline focus:outline-none focus:underline transition-all duration-150"
          >
            (828) 555-8822
          </a>
        </motion.div>
      </div>
    </div>
  );
} 
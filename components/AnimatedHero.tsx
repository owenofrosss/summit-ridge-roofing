"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AnimatedHero() {
  return (
    <div className="max-w-3xl space-y-5">
      <motion.h1
        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Protecting Homes.
        <br />
        Restoring Peace of Mind.
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-white/90 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Asheville's trusted roofing experts for repairs, replacements, and storm damage restoration since 2007.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Button
          asChild
          size="lg"
          className="bg-white text-[#1e2a38] font-bold shadow-lg hover:bg-[#f3f4f6] hover:scale-105 transition-all duration-200"
        >
          <Link href="#contact">Get a Free Estimate</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white/20 font-medium shadow-lg hover:scale-105 transition-all duration-200"
          style={{ color: '#fff', borderColor: '#fff' }}
        >
          <a href="tel:8285558822">Call (828) 555-8822</a>
        </Button>
      </motion.div>
      <motion.div 
        className="flex flex-wrap gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
          <Check className="h-5 w-5 text-white" />
          <span className="text-sm font-medium">Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
          <Check className="h-5 w-5 text-white" />
          <span className="text-sm font-medium">A+ BBB Rating</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
          <Check className="h-5 w-5 text-white" />
          <span className="text-sm font-medium">Emergency Service</span>
        </div>
      </motion.div>
    </div>
  );
} 
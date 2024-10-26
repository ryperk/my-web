"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Welcome from './home';

export default function Home() {
  return (
    <> 
      <p className="font-bold text-7xl pb-1">Hello.</p>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Welcome />

      </motion.div>
    </>
  )
}

"use client";
import { motion } from "framer-motion";
import Welcome from './welcome_content.mdx';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 , x: -20}}
      animate={{ opacity: 1 , x: 0}}
      transition={{ duration: 0.5 }}
    >
      <Welcome />
    </motion.div>
  )
}

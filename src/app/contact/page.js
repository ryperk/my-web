"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Contact() {
  return (

    <motion.div className="flex flex-row gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" border-l-2 border-l border-x-fuchsia-400 px-4">
        <p>Email</p>
        <Link href='mailto:ryperk@gmail.com' target='_blank' className=" cursor-pointer">ryperk@gmail.com</Link>
      </div>

      <div className=" border-l-2 border-l border-x-fuchsia-400 px-4">
        <p>Whatsapp</p>
        <Link href='https://wa.me/087875027766' target='_blank' className=" cursor-pointer">Click here</Link>
      </div>
    </motion.div>

  )
}

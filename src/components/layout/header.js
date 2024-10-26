"use client";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import DarkModeToggle from "../button/DarkModeToggle";

export default function Header() {
  
  const pathname = usePathname()
  
  console.log("pathname", pathname);

  return (
    <div className="max-w-4xl mx-auto w-full py-10 px-4">

      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row gap-10">
            <Link href="/" className={(pathname === "/") ? "dark:text-gray-100 font-bold" : "dark:text-gray-200 text-gray-600 dark:hover:text-gray-100"}>home</Link>
            <Link href="/blog" className={(pathname === "/blog") ? "dark:text-gray-100 font-bold" : "dark:text-gray-200 text-gray-600 dark:hover:text-gray-100"}>blog</Link>
            <Link href="/contact" className={(pathname === "/contact") ? "dark:text-gray-100 font-bold" : "dark:text-gray-200 text-gray-600 dark:hover:text-gray-100"}>contact</Link>
          </div>
        </motion.div>
        <DarkModeToggle/>
      </div>

    </div>


  )
}

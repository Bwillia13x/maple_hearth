"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function Promo() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"])

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-cream"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="/images/custom-cake-showcase.jpg"
            fill
            alt="Custom cake showcase"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 z-10">
        <div className="text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent-label text-chocolate"
          >
            Custom Creations
          </motion.span>
        </div>

        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-chocolate mb-8 text-balance drop-shadow-md"
          >
            Celebrate your moments with a cake as unique as you are.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/custom-cakes" className="inline-block">
              <button className="btn-secondary">Request a Quote</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

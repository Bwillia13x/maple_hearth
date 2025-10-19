"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Header from "./header"

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div ref={container} className="relative h-screen overflow-hidden">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/hero-bakery.jpg"
          fill
          alt="Artisanal bakery with fresh baked goods"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="text-left max-w-2xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-cream drop-shadow-lg">Baked with Love, Made Fresh Daily</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-subtitle text-cream/95 drop-shadow-md max-w-xl mb-8">
                Artisanal breads, pastries, and custom cakes crafted from the finest ingredients. Order your weekly
                favorites or request a custom creation for your special moments.
              </p>
            </motion.div>
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/menu">
                <button className="btn-primary">Order This Week</button>
              </Link>
              <Link href="/custom-cakes">
                <button className="btn-outline">Custom Cakes</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

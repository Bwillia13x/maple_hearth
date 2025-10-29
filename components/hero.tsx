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
          src="/warm-inviting-artisan-bakery-interior-with-fresh-b.jpg"
          fill
          alt="Artisanal bakery with fresh baked goods"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="text-left max-w-2xl px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-cream drop-shadow-2xl text-balance">Baked with Love, Made Fresh Daily</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-subtitle text-cream/95 drop-shadow-lg max-w-xl mb-10 text-pretty">
                Artisanal breads, pastries, and custom cakes crafted from the finest ingredients. Order your weekly
                favorites or request a custom creation for your special moments.
              </p>
            </motion.div>
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/menu">
                <button className="btn-primary shadow-xl">Order This Week</button>
              </Link>
              <Link href="/custom-cakes">
                <button className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-chocolate shadow-xl">
                  Custom Cakes
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

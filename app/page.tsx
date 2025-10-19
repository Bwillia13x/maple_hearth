"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Featured from "@/components/featured"
import Promo from "@/components/promo"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Footer />
    </main>
  )
}

import Link from "next/link"

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-chocolate py-6 sm:py-8 lg:py-12 px-6 sm:px-8 lg:px-12 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-12 sm:gap-16 lg:gap-24">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="mb-2 sm:mb-3 uppercase text-butter text-xs sm:text-sm font-semibold tracking-wider">
                  Shop
                </h3>
                <Link
                  href="/menu"
                  className="text-cream hover:text-butter transition-colors duration-300 text-sm sm:text-base font-light"
                >
                  Weekly Menu
                </Link>
                <Link
                  href="/custom-cakes"
                  className="text-cream hover:text-butter transition-colors duration-300 text-sm sm:text-base font-light"
                >
                  Custom Cakes
                </Link>
                <Link
                  href="/schedule"
                  className="text-cream hover:text-butter transition-colors duration-300 text-sm sm:text-base font-light"
                >
                  Hours & Locations
                </Link>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="mb-2 sm:mb-3 uppercase text-butter text-xs sm:text-sm font-semibold tracking-wider">
                  About
                </h3>
                <Link
                  href="/about"
                  className="text-cream hover:text-butter transition-colors duration-300 text-sm sm:text-base font-light"
                >
                  Our Story
                </Link>
                <Link
                  href="/contact"
                  className="text-cream hover:text-butter transition-colors duration-300 text-sm sm:text-base font-light"
                >
                  Contact
                </Link>
                <a
                  href="mailto:hello@maplehearth.com"
                  className="text-cream hover:text-butter transition-colors duration-300 text-sm sm:text-base font-light"
                >
                  Email
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 pt-4 sm:pt-6 lg:pt-8 border-t border-cream/20">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] text-butter font-bold tracking-tight font-fraunces">
                MAPLE HEARTH
              </h1>
              <p className="text-cream/80 text-xs sm:text-sm font-light">
                © 2025 Maple Hearth Bakery. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

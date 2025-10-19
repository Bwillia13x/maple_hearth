import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-background border-b border-butter py-4 px-6 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-chocolate font-fraunces text-2xl font-bold hover:text-cinnamon transition-colors"
        >
          Maple Hearth
        </Link>
        <div className="flex gap-6 md:gap-8">
          <Link
            href="/menu"
            className="text-chocolate hover:text-cinnamon transition-colors duration-300 text-sm md:text-base font-medium"
          >
            Weekly Menu
          </Link>
          <Link
            href="/custom-cakes"
            className="text-chocolate hover:text-cinnamon transition-colors duration-300 text-sm md:text-base font-medium"
          >
            Custom Cakes
          </Link>
          <Link
            href="/about"
            className="text-chocolate hover:text-cinnamon transition-colors duration-300 text-sm md:text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-chocolate hover:text-cinnamon transition-colors duration-300 text-sm md:text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

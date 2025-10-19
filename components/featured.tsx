import Image from "next/image"
import Link from "next/link"

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-background">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2 group">
        <div className="relative h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:shadow-3xl">
          <Image
            src="/images/sourdough-bread.jpg"
            alt="Fresh baked artisanal breads"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <span className="text-accent-label text-cinnamon mb-6">Weekly Favorites</span>
        <h2 className="text-chocolate mb-10 text-balance">
          Fresh-baked goodness delivered to your door every week. From sourdough to croissants, our rotating menu
          celebrates seasonal ingredients and time-honored techniques.
        </h2>
        <Link href="/menu" className="inline-block">
          <button className="btn-primary">Browse This Week's Menu</button>
        </Link>
      </div>
    </div>
  )
}

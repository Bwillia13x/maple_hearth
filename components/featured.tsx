import Image from "next/image"
import Link from "next/link"

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-warm-beige">
      <div className="flex-1 h-[400px] lg:h-[700px] mb-12 lg:mb-0 lg:order-2 group">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-3xl">
          <Image
            src="/rustic-artisan-sourdough-bread-with-golden-crust-o.jpg"
            alt="Fresh baked artisanal breads"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[700px] flex flex-col justify-center lg:mr-20 lg:order-1">
        <span className="text-accent-label text-cinnamon mb-6 tracking-wider">Weekly Favorites</span>
        <h2 className="text-chocolate mb-8 text-balance leading-tight">
          Fresh-baked goodness delivered to your door every week
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl text-pretty">
          From sourdough to croissants, our rotating menu celebrates seasonal ingredients and time-honored techniques.
          Each item is crafted with care and baked fresh daily.
        </p>
        <Link href="/menu" className="inline-block">
          <button className="btn-primary">Browse This Week's Menu</button>
        </Link>
      </div>
    </div>
  )
}

import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-chocolate to-cinnamon text-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-cream mb-4">Our Story</h1>
          <p className="text-subtitle text-cream/90 max-w-2xl">
            From a small home kitchen to a beloved neighborhood bakery, Maple Hearth has been crafting artisanal baked
            goods with love and intention since 2018.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-chocolate mb-6">How It All Started</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Maple Hearth was born from a simple love of baking and a desire to share that joy with our community.
                What began as weekend sourdough experiments in a home kitchen has blossomed into a thriving neighborhood
                bakery.
              </p>
              <p>
                We believe in the power of slow fermentation, quality ingredients, and time-honored techniques. Every
                loaf, pastry, and cake that leaves our ovens carries the care and attention we pour into our craft.
              </p>
              <p>
                Today, we're proud to serve families, event planners, and food lovers throughout Portland. Whether
                you're grabbing a fresh croissant for breakfast or ordering a custom cake for a milestone, we're honored
                to be part of your moments.
              </p>
            </div>
          </div>
          <div className="h-96 lg:h-full">
            <Image
              src="/images/bakery-interior.jpg"
              alt="Maple Hearth bakery interior"
              width={500}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-chocolate mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream border-2 border-butter rounded-lg p-8">
              <h3 className="text-chocolate mb-4">Quality Ingredients</h3>
              <p className="text-muted-foreground">
                We source the finest flours, butters, and seasonal produce from local suppliers whenever possible. No
                shortcuts, no compromises.
              </p>
            </div>
            <div className="bg-cream border-2 border-butter rounded-lg p-8">
              <h3 className="text-chocolate mb-4">Time-Honored Craft</h3>
              <p className="text-muted-foreground">
                Traditional techniques like long fermentation and hand-lamination take time, but they create flavors and
                textures that can't be rushed.
              </p>
            </div>
            <div className="bg-cream border-2 border-butter rounded-lg p-8">
              <h3 className="text-chocolate mb-4">Community First</h3>
              <p className="text-muted-foreground">
                We're more than a bakery—we're a gathering place. We support local causes and celebrate the people who
                make our neighborhood special.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-chocolate mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-butter rounded-lg h-64 mb-6 overflow-hidden">
                <Image
                  src="/images/baker-at-work.jpg"
                  alt="Sarah Chen, Founder & Head Baker"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-chocolate mb-2">Sarah Chen</h3>
              <p className="text-accent-label text-cinnamon mb-3">Founder & Head Baker</p>
              <p className="text-muted-foreground">
                Sarah's passion for sourdough and pastry arts drives everything we do. She's been perfecting her craft
                for over a decade.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-butter rounded-lg h-64 mb-6 overflow-hidden">
                <Image
                  src="/images/ingredients.jpg"
                  alt="Marcus Williams, Pastry Chef & Custom Cake Specialist"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-chocolate mb-2">Marcus Williams</h3>
              <p className="text-accent-label text-cinnamon mb-3">Pastry Chef & Custom Cake Specialist</p>
              <p className="text-muted-foreground">
                Marcus brings creativity and precision to every custom cake. His designs have graced celebrations
                throughout Portland.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="bg-butter rounded-lg p-12 mb-24">
          <h2 className="text-chocolate mb-6">Sustainability Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-chocolate mb-3">Eco-Friendly Practices</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-cinnamon mr-3">•</span>
                  <span>Compostable packaging for all takeout items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnamon mr-3">•</span>
                  <span>Minimal food waste through careful planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnamon mr-3">•</span>
                  <span>Local ingredient sourcing to reduce carbon footprint</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-chocolate mb-3">Community Giving</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-cinnamon mr-3">•</span>
                  <span>Weekly donations to local food banks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnamon mr-3">•</span>
                  <span>Baking workshops for youth programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnamon mr-3">•</span>
                  <span>Support for local farmers and suppliers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-chocolate mb-4">Join Our Community</h2>
          <p className="text-subtitle mb-8 max-w-2xl mx-auto">
            Experience the Maple Hearth difference. Visit us, order online, or reach out with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <button className="btn-primary">Order Now</button>
            </Link>
            <Link href="/contact">
              <button className="btn-secondary">Get in Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

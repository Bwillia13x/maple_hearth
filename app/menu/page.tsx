"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  servings?: string
  available: boolean
  image: string
}

const weeklyMenu: MenuItem[] = [
  {
    id: "sourdough",
    name: "Artisan Sourdough",
    description: "Classic sourdough with a crispy crust and tangy flavor. Perfect for sandwiches or toasting.",
    price: "$8.50",
    servings: "1 loaf",
    available: true,
    image: "/images/sourdough-bread.jpg",
  },
  {
    id: "croissants",
    name: "Butter Croissants",
    description: "Flaky, buttery croissants made with European butter. Best enjoyed fresh from the oven.",
    price: "$4.50",
    servings: "1 croissant",
    available: true,
    image: "/images/croissants.jpg",
  },
  {
    id: "chocolate-croissants",
    name: "Chocolate Croissants",
    description: "Our signature croissants filled with premium dark chocolate.",
    price: "$5.00",
    servings: "1 croissant",
    available: true,
    image: "/images/chocolate-cake.jpg",
  },
  {
    id: "focaccia",
    name: "Rosemary Focaccia",
    description: "Olive oil-rich focaccia topped with fresh rosemary and sea salt.",
    price: "$7.00",
    servings: "1 loaf",
    available: true,
    image: "/images/focaccia.jpg",
  },
  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    description: "Soft, pillowy rolls with a cinnamon-sugar filling and cream cheese frosting.",
    price: "$5.50",
    servings: "1 roll",
    available: true,
    image: "/images/cinnamon-rolls.jpg",
  },
  {
    id: "berry-tart",
    name: "Mixed Berry Tart",
    description: "Seasonal berries on a buttery pastry cream base with a crisp shell.",
    price: "$6.50",
    servings: "Serves 2-3",
    available: true,
    image: "/images/berry-tart.jpg",
  },
  {
    id: "macarons",
    name: "French Macarons",
    description: "Delicate almond meringue cookies in assorted flavors. Perfect for gifting.",
    price: "$12.00",
    servings: "Box of 6",
    available: true,
    image: "/images/macarons.jpg",
  },
]

export default function MenuPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-cinnamon text-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-cream hover:text-butter transition-colors mb-4 inline-block">
            ← Back Home
          </Link>
          <h1 className="text-cream mb-4">This Week's Menu</h1>
          <p className="text-subtitle text-cream/90">
            Fresh-baked items available for preorder. Pick up at our location or arrange delivery.
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {weeklyMenu.map((item) => (
            <button
              key={item.id}
              type="button"
              className="bg-cream border-2 border-butter rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-left w-full"
              onClick={() => toggleItem(item.id)}
              aria-pressed={selectedItems.includes(item.id) ? "true" : "false"}
              aria-label={`${selectedItems.includes(item.id) ? "Deselect" : "Select"} ${item.name}`}
            >
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-chocolate flex-1">{item.name}</h3>
                  <span
                    className={`w-6 h-6 rounded border-2 border-cinnamon flex items-center justify-center transition-all duration-200 ${selectedItems.includes(item.id) ? "bg-cinnamon" : "bg-white"
                      }`}
                    aria-hidden="true"
                  >
                    {selectedItems.includes(item.id) && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </span>
                </div>
                <p className="text-caption mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-cinnamon font-semibold">{item.price}</p>
                    {item.servings && <p className="text-caption">{item.servings}</p>}
                  </div>
                  <span className="text-xs bg-butter text-chocolate px-3 py-1 rounded-full font-medium">
                    {item.available ? "Available" : "Sold Out"}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Order Summary */}
        {selectedItems.length > 0 && (
          <div className="bg-butter rounded-lg p-8 mb-8 shadow-lg">
            <h2 className="text-chocolate mb-4">Your Order</h2>
            <div className="mb-6">
              {selectedItems.map((id) => {
                const item = weeklyMenu.find((m) => m.id === id)
                return (
                  <div key={id} className="flex justify-between py-2 border-b border-cinnamon/20">
                    <span className="text-chocolate">{item?.name}</span>
                    <span className="font-semibold text-chocolate">{item?.price}</span>
                  </div>
                )
              })}
            </div>
            <Link href="/contact">
              <button className="btn-primary w-full">Proceed to Checkout</button>
            </Link>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-subtitle mb-6">
            Don't see what you're looking for? Request a custom order or ask about next week's specials.
          </p>
          <Link href="/contact">
            <button className="btn-secondary">Get in Touch</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

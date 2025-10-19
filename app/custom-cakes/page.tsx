"use client"

import Link from "next/link"
import { useState } from "react"
import Navigation from "@/components/navigation"

interface CakeOption {
  id: string
  label: string
  options: string[]
}

const cakeOptions: CakeOption[] = [
  {
    id: "size",
    label: "Cake Size",
    options: ["6-inch (Serves 4-6)", "8-inch (Serves 8-12)", "10-inch (Serves 15-20)", "Sheet Cake (Serves 20-30)"],
  },
  {
    id: "flavor",
    label: "Cake Flavor",
    options: [
      "Vanilla Bean",
      "Chocolate Decadence",
      "Lemon Lavender",
      "Red Velvet",
      "Carrot Cake",
      "Custom (Tell us!)",
    ],
  },
  {
    id: "frosting",
    label: "Frosting",
    options: ["Cream Cheese", "Buttercream", "Chocolate Ganache", "Fondant", "Custom"],
  },
  {
    id: "filling",
    label: "Filling",
    options: ["Raspberry Jam", "Lemon Curd", "Chocolate Mousse", "Salted Caramel", "None"],
  },
]

export default function CustomCakesPage() {
  const [selections, setSelections] = useState<Record<string, string>>({})

  const handleSelection = (optionId: string, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  const isComplete = Object.keys(selections).length === cakeOptions.length

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cinnamon to-chocolate text-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-fraunces font-bold mb-4">Custom Cake Creations</h1>
          <p className="text-lg text-cream/90 max-w-2xl">
            Celebrate your special moments with a cake designed just for you. From intimate gatherings to grand
            celebrations, we'll bring your vision to life.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Configuration Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-fraunces font-bold text-chocolate mb-8">Design Your Cake</h2>

            <div className="space-y-8">
              {cakeOptions.map((option) => (
                <div key={option.id} className="bg-cream border-2 border-butter rounded-lg p-6">
                  <h3 className="text-lg font-fraunces font-semibold text-chocolate mb-4">{option.label}</h3>
                  <div className="space-y-3">
                    {option.options.map((opt) => (
                      <label key={opt} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name={option.id}
                          value={opt}
                          checked={selections[option.id] === opt}
                          onChange={(e) => handleSelection(option.id, e.target.value)}
                          className="w-4 h-4 accent-cinnamon"
                        />
                        <span className="ml-3 text-chocolate group-hover:text-cinnamon transition-colors">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {/* Special Requests */}
              <div className="bg-cream border-2 border-butter rounded-lg p-6">
                <h3 className="text-lg font-fraunces font-semibold text-chocolate mb-4">Special Requests</h3>
                <textarea
                  placeholder="Tell us about dietary restrictions, allergies, design ideas, or anything else we should know..."
                  className="w-full p-4 border border-butter rounded-lg text-chocolate placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cinnamon"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-butter rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-fraunces font-bold text-chocolate mb-6">Your Cake</h3>

              <div className="space-y-4 mb-8 pb-8 border-b border-cinnamon/30">
                {cakeOptions.map((option) => (
                  <div key={option.id}>
                    <p className="text-xs uppercase text-muted-foreground font-semibold mb-1">{option.label}</p>
                    <p className="text-chocolate font-medium">
                      {selections[option.id] || <span className="text-muted-foreground italic">Not selected</span>}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Estimated Lead Time</p>
                <p className="text-chocolate font-semibold">2-3 weeks</p>
              </div>

              <Link href="/contact">
                <button
                  disabled={!isComplete}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    isComplete
                      ? "bg-cinnamon text-cream hover:bg-chocolate cursor-pointer"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {isComplete ? "Request Quote" : "Complete Selection"}
                </button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We'll follow up within 24 hours with pricing and availability.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-butter">
          <h2 className="text-3xl font-fraunces font-bold text-chocolate mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-fraunces font-semibold text-chocolate mb-2">How far in advance should I order?</h4>
              <p className="text-muted-foreground">
                We recommend ordering at least 2-3 weeks in advance for custom cakes.
              </p>
            </div>
            <div>
              <h4 className="font-fraunces font-semibold text-chocolate mb-2">
                Do you accommodate dietary restrictions?
              </h4>
              <p className="text-muted-foreground">
                We can create vegan, gluten-free, and nut-free options. Let us know in your request.
              </p>
            </div>
            <div>
              <h4 className="font-fraunces font-semibold text-chocolate mb-2">Can you deliver?</h4>
              <p className="text-muted-foreground">
                Yes, we offer local delivery for orders within 10 miles. Delivery fees apply.
              </p>
            </div>
            <div>
              <h4 className="font-fraunces font-semibold text-chocolate mb-2">What if I need it sooner?</h4>
              <p className="text-muted-foreground">
                Contact us directly! We may be able to accommodate rush orders depending on availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

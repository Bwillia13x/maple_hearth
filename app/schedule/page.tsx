import Navigation from "@/components/navigation"
import Link from "next/link"

interface Location {
  id: string
  name: string
  address: string
  phone: string
  hours: {
    day: string
    open: string
    close: string
  }[]
  specialties: string[]
}

const locations: Location[] = [
  {
    id: "main",
    name: "Main Bakery & Café",
    address: "1247 Maple Street, Portland, OR 97214",
    phone: "(503) 555-0147",
    hours: [
      { day: "Monday", open: "7:00 AM", close: "6:00 PM" },
      { day: "Tuesday", open: "7:00 AM", close: "6:00 PM" },
      { day: "Wednesday", open: "7:00 AM", close: "6:00 PM" },
      { day: "Thursday", open: "7:00 AM", close: "6:00 PM" },
      { day: "Friday", open: "7:00 AM", close: "7:00 PM" },
      { day: "Saturday", open: "8:00 AM", close: "7:00 PM" },
      { day: "Sunday", open: "8:00 AM", close: "5:00 PM" },
    ],
    specialties: ["Fresh pastries", "Coffee & espresso", "Seating available"],
  },
  {
    id: "farmers-market",
    name: "Farmers Market Stand",
    address: "Pioneer Courthouse Square, Portland, OR 97204",
    phone: "(503) 555-0147",
    hours: [
      { day: "Wednesday", open: "3:00 PM", close: "7:00 PM" },
      { day: "Saturday", open: "9:00 AM", close: "2:00 PM" },
    ],
    specialties: ["Seasonal specials", "Preorder pickup", "Limited selection"],
  },
]

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-cinnamon text-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-fraunces font-bold mb-4">Hours & Locations</h1>
          <p className="text-lg text-cream/90">
            Visit us at our main bakery or catch us at the farmers market. We're here to serve you fresh-baked goodness.
          </p>
        </div>
      </div>

      {/* Locations */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {locations.map((location) => (
            <div key={location.id} className="bg-cream border-2 border-butter rounded-lg p-8">
              <h2 className="text-2xl font-fraunces font-bold text-chocolate mb-2">{location.name}</h2>
              <p className="text-muted-foreground mb-6">{location.address}</p>

              {/* Contact */}
              <div className="mb-8 pb-8 border-b border-butter">
                <a
                  href={`tel:${location.phone}`}
                  className="text-cinnamon hover:text-chocolate transition-colors font-medium"
                >
                  {location.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h3 className="font-fraunces font-semibold text-chocolate mb-4">Hours</h3>
                <div className="space-y-2">
                  {location.hours.map((hour) => (
                    <div key={hour.day} className="flex justify-between text-sm">
                      <span className="text-chocolate font-medium">{hour.day}</span>
                      <span className="text-muted-foreground">
                        {hour.open} – {hour.close}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="font-fraunces font-semibold text-chocolate mb-3">What to Expect</h3>
                <ul className="space-y-2">
                  {location.specialties.map((specialty) => (
                    <li key={specialty} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-cinnamon mr-2">•</span>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pickup & Delivery Info */}
        <div className="bg-butter rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-fraunces font-bold text-chocolate mb-6">Pickup & Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-fraunces font-semibold text-chocolate mb-2">Preorder Pickup</h3>
              <p className="text-muted-foreground text-sm">
                Place your order by Wednesday for Friday pickup, or by Friday for Monday pickup.
              </p>
            </div>
            <div>
              <h3 className="font-fraunces font-semibold text-chocolate mb-2">Local Delivery</h3>
              <p className="text-muted-foreground text-sm">
                We deliver within 10 miles of our main location. $5 delivery fee applies.
              </p>
            </div>
            <div>
              <h3 className="font-fraunces font-semibold text-chocolate mb-2">Custom Orders</h3>
              <p className="text-muted-foreground text-sm">
                Custom cakes require 2-3 weeks notice. Delivery available for orders over $50.
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-cream border-2 border-butter rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-fraunces font-bold text-chocolate mb-6">Find Us</h2>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Interactive map would be embedded here. Visit us at:</p>
              <p className="font-semibold text-chocolate">1247 Maple Street, Portland, OR 97214</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-fraunces font-bold text-chocolate mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our weekly menu, request a custom cake, or get in touch with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <button className="btn-primary">Weekly Menu</button>
            </Link>
            <Link href="/custom-cakes">
              <button className="btn-secondary">Custom Cakes</button>
            </Link>
            <Link href="/contact">
              <button className="btn-secondary">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

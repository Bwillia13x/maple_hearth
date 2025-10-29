import { Clock, MapPin, Truck, Calendar } from "lucide-react"
import Link from "next/link"

export default function OrderingInfo() {
    return (
        <section className="bg-chocolate py-16 md:py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-cream mb-4">How to Order</h2>
                    <p className="text-subtitle text-cream/90 max-w-2xl mx-auto">
                        Getting your favorite baked goods is easy. Here's everything you need to know about ordering and delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Lead Time */}
                    <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20">
                        <div className="w-12 h-12 bg-butter rounded-full flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-chocolate" />
                        </div>
                        <h3 className="text-cream text-xl font-fraunces font-semibold mb-3">Order Lead Time</h3>
                        <ul className="space-y-2 text-cream/90 text-sm">
                            <li>• Weekly menu: 24 hours</li>
                            <li>• Custom cakes: 5-7 days</li>
                            <li>• Special orders: 3-5 days</li>
                            <li>• Same-day: Limited items</li>
                        </ul>
                    </div>

                    {/* Pickup Locations */}
                    <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20">
                        <div className="w-12 h-12 bg-butter rounded-full flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-chocolate" />
                        </div>
                        <h3 className="text-cream text-xl font-fraunces font-semibold mb-3">Pickup Locations</h3>
                        <ul className="space-y-2 text-cream/90 text-sm">
                            <li>• Main Bakery: Mon-Sun</li>
                            <li>• Farmers Market: Wed & Sat</li>
                            <li>• Curbside available</li>
                            <li>
                                <Link href="/schedule" className="text-butter hover:text-cream transition-colors underline">
                                    View hours →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Delivery */}
                    <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20">
                        <div className="w-12 h-12 bg-butter rounded-full flex items-center justify-center mb-4">
                            <Truck className="w-6 h-6 text-chocolate" />
                        </div>
                        <h3 className="text-cream text-xl font-fraunces font-semibold mb-3">Delivery Options</h3>
                        <ul className="space-y-2 text-cream/90 text-sm">
                            <li>• Portland metro area</li>
                            <li>• Free delivery over $50</li>
                            <li>• $8 flat rate under $50</li>
                            <li>• Scheduled delivery times</li>
                        </ul>
                    </div>

                    {/* Pre-Orders */}
                    <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20">
                        <div className="w-12 h-12 bg-butter rounded-full flex items-center justify-center mb-4">
                            <Calendar className="w-6 h-6 text-chocolate" />
                        </div>
                        <h3 className="text-cream text-xl font-fraunces font-semibold mb-3">Pre-Order Benefits</h3>
                        <ul className="space-y-2 text-cream/90 text-sm">
                            <li>• Guaranteed availability</li>
                            <li>• Priority scheduling</li>
                            <li>• Special requests welcome</li>
                            <li>• Easy cancellation 24h+</li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center bg-butter rounded-xl p-8">
                    <h3 className="text-chocolate text-2xl font-fraunces font-bold mb-4">Ready to Place Your Order?</h3>
                    <p className="text-chocolate/80 mb-6 max-w-2xl mx-auto">
                        Browse our weekly menu or get in touch to discuss your custom cake needs. We're here to make your special
                        moments even sweeter.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/menu" className="btn-primary">
                            Browse Menu
                        </Link>
                        <Link href="/contact" className="btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

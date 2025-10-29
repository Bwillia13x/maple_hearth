"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
    id: number
    name: string
    location: string
    rating: number
    text: string
    occasion?: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Emily Rodriguez",
        location: "Portland, OR",
        rating: 5,
        text: "The custom wedding cake was absolutely stunning! Not only was it beautiful, but it tasted incredible. Our guests are still talking about it months later.",
        occasion: "Wedding Cake",
    },
    {
        id: 2,
        name: "Michael Chen",
        location: "Lake Oswego, OR",
        rating: 5,
        text: "I order their sourdough every week. The crust is perfect, and the flavor is unmatched. It's become a weekend tradition for my family.",
        occasion: "Weekly Orders",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        location: "Beaverton, OR",
        rating: 5,
        text: "Best croissants I've had outside of Paris! Flaky, buttery, and always fresh. The chocolate croissants are my absolute favorite.",
        occasion: "Regular Customer",
    },
    {
        id: 4,
        name: "David Park",
        location: "Portland, OR",
        rating: 5,
        text: "They made my daughter's birthday cake dreams come true. The design was exactly what she wanted, and it was delicious too!",
        occasion: "Birthday Cake",
    },
    {
        id: 5,
        name: "Jennifer Martinez",
        location: "Hillsboro, OR",
        rating: 5,
        text: "The quality and care that goes into every baked good is evident. You can taste the difference. Maple Hearth has become our go-to bakery.",
        occasion: "Regular Customer",
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="bg-gradient-to-b from-cream to-butter py-16 md:py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-accent-label text-cinnamon mb-4 block">What Our Customers Say</span>
                    <h2 className="text-chocolate mb-4">Loved by Our Community</h2>
                    <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
                        Join hundreds of happy customers who trust us for their special moments and everyday treats.
                    </p>
                </div>

                <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                            <Star key={`star-${currentTestimonial.id}-${i}`} className="w-6 h-6 fill-cinnamon text-cinnamon" />
                        ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-center mb-8">
                        <p className="text-lg md:text-xl text-chocolate leading-relaxed italic">"{currentTestimonial.text}"</p>
                    </blockquote>

                    {/* Author Info */}
                    <div className="text-center">
                        <p className="font-semibold text-chocolate text-lg">{currentTestimonial.name}</p>
                        <p className="text-muted-foreground text-sm">{currentTestimonial.location}</p>
                        {currentTestimonial.occasion && (
                            <p className="text-cinnamon text-sm font-medium mt-2">{currentTestimonial.occasion}</p>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-butter hover:bg-cinnamon hover:text-cream transition-all duration-300 text-chocolate"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-butter hover:bg-cinnamon hover:text-cream transition-all duration-300 text-chocolate"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-cinnamon w-8" : "bg-butter"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-chocolate mb-4">Ready to create your own special moment?</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/menu" className="btn-primary">
                            Browse Menu
                        </a>
                        <a href="/custom-cakes" className="btn-secondary">
                            Request Custom Cake
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

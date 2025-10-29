"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Link from "next/link"
import { useState } from "react"

type FormType = "general" | "preorder" | "custom-cake"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  orderType?: string
  eventDate?: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactPage() {
  const [formType, setFormType] = useState<FormType>("general")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.phone && !/^[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, this would send to a backend or email service
    console.log("Form submitted:", { formType, ...formData })
    setSubmitted(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setErrors({})
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-cinnamon text-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-fraunces font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-cream/90">
            Have questions? Want to place an order? We'd love to hear from you. Reach out and we'll get back to you
            within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <h3 className="font-fraunces font-semibold text-chocolate mb-2">Call Us</h3>
                <a href="tel:+15035550147" className="text-cinnamon hover:text-chocolate transition-colors font-medium">
                  (503) 555-0147
                </a>
                <p className="text-sm text-muted-foreground mt-1">Mon-Sun, 7 AM - 7 PM</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-fraunces font-semibold text-chocolate mb-2">Email</h3>
                <a
                  href="mailto:hello@maplehearth.com"
                  className="text-cinnamon hover:text-chocolate transition-colors font-medium"
                >
                  hello@maplehearth.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-fraunces font-semibold text-chocolate mb-2">Visit Us</h3>
                <p className="text-chocolate font-medium">1247 Maple Street</p>
                <p className="text-chocolate font-medium">Portland, OR 97214</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <Link href="/schedule" className="text-cinnamon hover:text-chocolate transition-colors">
                    View hours & locations
                  </Link>
                </p>
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-butter">
                <h3 className="font-fraunces font-semibold text-chocolate mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/menu" className="block text-cinnamon hover:text-chocolate transition-colors">
                    Weekly Menu
                  </Link>
                  <Link href="/custom-cakes" className="block text-cinnamon hover:text-chocolate transition-colors">
                    Custom Cakes
                  </Link>
                  <Link href="/schedule" className="block text-cinnamon hover:text-chocolate transition-colors">
                    Hours & Locations
                  </Link>
                  <Link href="/about" className="block text-cinnamon hover:text-chocolate transition-colors">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {/* Form Type Selector */}
            <div className="mb-8">
              <h2 className="text-2xl font-fraunces font-bold text-chocolate mb-4">How Can We Help?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: "general" as FormType, label: "General Inquiry" },
                  { value: "preorder" as FormType, label: "Preorder Question" },
                  { value: "custom-cake" as FormType, label: "Custom Cake Quote" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormType(option.value)}
                    className={`p-4 min-h-[44px] rounded-lg border-2 font-medium transition-all duration-200 ease-out ${formType === option.value
                        ? "bg-cinnamon text-cream border-cinnamon shadow-lg"
                        : "bg-cream text-chocolate border-butter hover:border-cinnamon hover:shadow-md hover:scale-105 active:scale-95"
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-cream border-2 border-butter rounded-lg p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chocolate mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg text-chocolate placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cinnamon ${errors.name ? "border-red-500" : "border-butter"
                      }`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-chocolate mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg text-chocolate placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cinnamon ${errors.email ? "border-red-500" : "border-butter"
                      }`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-chocolate mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg text-chocolate placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cinnamon ${errors.phone ? "border-red-500" : "border-butter"
                      }`}
                    placeholder="(503) 555-0000"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Conditional Fields */}
                {formType === "preorder" && (
                  <div>
                    <label htmlFor="orderType" className="block text-sm font-medium text-chocolate mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="orderType"
                      name="orderType"
                      value={formData.orderType || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-butter rounded-lg text-chocolate focus:outline-none focus:ring-2 focus:ring-cinnamon"
                    >
                      <option value="">Select an item</option>
                      <option value="sourdough">Artisan Sourdough</option>
                      <option value="croissants">Butter Croissants</option>
                      <option value="cinnamon-rolls">Cinnamon Rolls</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                {formType === "custom-cake" && (
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-chocolate mb-2">
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      name="eventDate"
                      value={formData.eventDate || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-butter rounded-lg text-chocolate focus:outline-none focus:ring-2 focus:ring-cinnamon"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-chocolate mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg text-chocolate placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cinnamon resize-none ${errors.message ? "border-red-500" : "border-butter"
                      }`}
                    placeholder="Tell us more about your inquiry..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting} className="w-full btn-primary disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="bg-butter border border-cinnamon rounded-lg p-4 text-center">
                    <p className="text-chocolate font-medium">Thank you! We'll be in touch soon.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

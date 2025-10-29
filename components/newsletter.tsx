"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const getButtonText = () => {
        if (status === "loading") return "Subscribing..."
        if (status === "success") return "Subscribed! ✓"
        return "Subscribe"
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage("Please enter a valid email address")
            setStatus("error")
            return
        }

        setStatus("loading")
        setErrorMessage("")

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // In a real app, this would send to your newsletter service
        console.log("Newsletter signup:", email)
        setStatus("success")
        setEmail("")

        // Reset after 3 seconds
        setTimeout(() => {
            setStatus("idle")
        }, 3000)
    }

    return (
        <div className="bg-cinnamon py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <Mail className="w-12 h-12 text-butter mx-auto mb-4" />
                    <h3 className="text-cream text-2xl md:text-3xl font-fraunces font-bold mb-3">
                        Join Our Baking Community
                    </h3>
                    <p className="text-cream/90 text-sm md:text-base max-w-2xl mx-auto">
                        Subscribe to get weekly menu updates, special offers, baking tips, and first access to seasonal specials.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="newsletter-email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (status === "error") {
                                        setStatus("idle")
                                        setErrorMessage("")
                                    }
                                }}
                                placeholder="Enter your email"
                                disabled={status === "loading" || status === "success"}
                                className={`w-full px-4 py-3 rounded-lg text-chocolate placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-butter ${status === "error" ? "border-2 border-red-500" : ""
                                    } disabled:opacity-50`}
                                aria-invalid={status === "error"}
                                aria-describedby={errorMessage ? "newsletter-error" : undefined}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="btn-secondary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {getButtonText()}
                        </button>
                    </div>

                    {status === "error" && errorMessage && (
                        <p id="newsletter-error" className="mt-2 text-sm text-red-200">
                            {errorMessage}
                        </p>
                    )}

                    {status === "success" && (
                        <p className="mt-2 text-sm text-butter font-medium">
                            Thanks for subscribing! Check your inbox for a welcome message.
                        </p>
                    )}
                </form>

                <p className="text-cream/70 text-xs mt-4">
                    We respect your privacy. Unsubscribe at any time. No spam, just delicious updates.
                </p>
            </div>
        </div>
    )
}

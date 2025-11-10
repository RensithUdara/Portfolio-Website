"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Settings, Gem, Clock, Mail } from "lucide-react"
import Link from "next/link"

interface UnderConstructionProps {
    title?: string
    message?: string
    showProgress?: boolean
    progressPercentage?: number
    estimatedCompletion?: string
    showNavigation?: boolean
    showFooter?: boolean
}

export function UnderConstruction({
    title = "Under Construction",
    message = "We're carefully curating this page to showcase our premium collection of Ceylon gemstones. Just like how we polish each precious stone to perfection, we're putting the finishing touches on this experience.",
    showProgress = true,
    progressPercentage = 75,
    estimatedCompletion = "Coming Soon",
    showNavigation = true,
    showFooter = true,
}: UnderConstructionProps = {}) {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#1a2557] via-[#243370] to-[#2d3f8f]">
            {showNavigation && <Navigation />}            <main className="flex min-h-screen items-center justify-center px-4 pt-20">
                <div className="w-full max-w-2xl text-center">
                    <Card className="border-amber-500/20 bg-white/10 backdrop-blur-md shadow-2xl">
                        <CardContent className="p-12">
                            {/* Animated Gemstone Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="relative">
                                    <div className="animate-pulse rounded-full bg-amber-500/20 p-6">
                                        <div className="animate-spin-slow rounded-full bg-linear-to-r from-amber-400 to-amber-600 p-4">
                                            <Gem className="h-16 w-16 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -inset-2 animate-pulse rounded-full border-2 border-amber-500/30"></div>
                                </div>
                            </div>

                            {/* Main Message */}
                            <h1 className="mb-4 bg-linear-to-r from-white to-amber-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                                {title}
                            </h1>                            <div className="mb-6 flex items-center justify-center gap-2 text-amber-400">
                                <Settings className="h-5 w-5 animate-spin" />
                                <span className="text-lg font-medium">Crafting Something Beautiful</span>
                            </div>

                            <p className="mb-8 text-lg leading-relaxed text-white/90">
                                We're carefully curating this page to showcase our premium collection of
                                <span className="font-semibold text-amber-300"> Ceylon gemstones</span>.
                                Just like how we polish each precious stone to perfection, we're putting the
                                finishing touches on this experience.
                            </p>

                            {/* Progress Indicator */}
                            <div className="mb-8">
                                <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                                    <span>Progress</span>
                                    <span>75%</span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-white/20">
                                    <div className="h-full w-3/4 animate-pulse bg-linear-to-r from-amber-500 to-amber-400 transition-all duration-1000"></div>
                                </div>
                            </div>

                            {/* Estimated Completion */}
                            <div className="mb-8 rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
                                <div className="flex items-center justify-center gap-2 text-amber-300">
                                    <Clock className="h-5 w-5" />
                                    <span className="font-medium">Expected Launch: Coming Soon</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Button
                                    className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:bg-amber-400 hover:scale-105"
                                    asChild
                                >
                                    <Link href="/">
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Return Home
                                    </Link>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:scale-105"
                                    asChild
                                >
                                    <Link href="/shop">
                                        <Gem className="mr-2 h-4 w-4" />
                                        Explore Collection
                                    </Link>
                                </Button>
                            </div>

                            {/* Contact Information */}
                            <div className="mt-8 border-t border-white/20 pt-6">
                                <p className="mb-3 text-sm text-white/70">
                                    Have questions about our gemstones?
                                </p>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-amber-300 hover:bg-amber-500/20 hover:text-amber-200"
                                    asChild
                                >
                                    <Link href="/contact">
                                        <Mail className="mr-2 h-4 w-4" />
                                        Get in Touch
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Background Elements */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute -left-4 top-1/4 h-32 w-32 animate-float rounded-full bg-amber-500/5"></div>
                        <div className="absolute -right-4 top-3/4 h-24 w-24 animate-bounce rounded-full bg-blue-500/5"></div>
                        <div className="absolute left-1/3 top-1/6 h-16 w-16 animate-pulse rounded-full bg-purple-500/5"></div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
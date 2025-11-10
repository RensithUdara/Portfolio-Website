"use client"

import { UnderConstruction } from "@/components/under-construction"
import { useEffect } from "react"

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({
    error,
    reset,
}: ErrorProps) {
    useEffect(() => {
        console.error('Route error:', error)
    }, [error])

    return (
        <UnderConstruction
            title="Temporary Issue"
            message="We're experiencing a small hiccup while showcasing our premium gemstones. Our team is working to restore this page to its full brilliance."
            showProgress={true}
            progressPercentage={95}
            estimatedCompletion="Almost Ready"
        />
    )
}
"use client"

import { UnderConstruction } from "@/components/under-construction"
import { useEffect } from "react"

interface GlobalErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function GlobalError({
    error,
    reset,
}: GlobalErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Global error:', error)
    }, [error])

    return (
        <html lang="en">
            <body>
                <UnderConstruction
                    title="Oops! Something Went Wrong"
                    message="Our gemstone experts are polishing this issue to perfection. While we fix this, why not explore our stunning collection of certified Ceylon sapphires and precious gems?"
                    showProgress={false}
                    estimatedCompletion="Being Fixed Now"
                />
            </body>
        </html>
    )
}
import { UnderConstruction } from "@/components/under-construction"

export default function UnderConstructionPage() {
  return (
    <UnderConstruction
      title="New Feature Coming Soon"
      message="We're crafting an exciting new experience that will revolutionize how you explore and purchase our premium Ceylon gemstones. Stay tuned for something spectacular!"
      progressPercentage={85}
      estimatedCompletion="December 2025"
    />
  )
}
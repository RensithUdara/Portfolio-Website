import { UnderConstruction } from "@/components/under-construction"

export default function Loading() {
  return (
    <UnderConstruction
      title="Loading Collection"
      message="We're gathering our finest Ceylon gemstones for you. Each precious stone is being carefully selected from our authenticated collection."
      progressPercentage={90}
      estimatedCompletion="Just a moment..."
      showNavigation={false}
      showFooter={false}
    />
  )
}

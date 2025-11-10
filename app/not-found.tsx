import { UnderConstruction } from "@/components/under-construction"

export default function NotFound() {
  return (
    <UnderConstruction
      title="Page Not Found"
      message="Looks like this page is still being polished to gemstone perfection! While we work on creating something beautiful here, explore our stunning collection of authenticated Ceylon sapphires and precious gems."
      showProgress={false}
      estimatedCompletion="Available Soon"
    />
  )
}
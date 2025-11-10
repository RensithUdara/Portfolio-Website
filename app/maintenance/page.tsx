import { UnderConstruction } from "@/components/under-construction"

export default function MaintenancePage() {
  return (
    <UnderConstruction
      title="Scheduled Maintenance"
      message="We're enhancing our gemstone showcase platform to serve you better. Like a master jeweler perfecting a precious stone setting, we're making important improvements to provide you with the finest Ceylon gemstone experience."
      progressPercentage={60}
      estimatedCompletion="Back Soon"
      showNavigation={false}
    />
  )
}
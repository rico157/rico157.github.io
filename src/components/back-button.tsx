import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="fixed top-6 left-6 z-50 gap-2"
    >
      <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
      Home
    </Button>
  )
}

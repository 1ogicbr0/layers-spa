import { Heart, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductActionsProps {
  isAvailable: boolean
  isWishlisted: boolean
  onWishlistToggle: () => void
  shipping: string
}

export default function ProductActions({
  isAvailable,
  isWishlisted,
  onWishlistToggle,
  shipping
}: ProductActionsProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <Button size="lg" className="flex-1 h-12 text-base font-medium rounded-xl" disabled={!isAvailable}>
          {isAvailable ? "Add to Cart" : "Out of Stock"}
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-12 px-4 rounded-xl"
          onClick={onWishlistToggle}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
        </Button>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Truck className="w-4 h-4" />
        <span>{shipping}</span>
      </div>
    </div>
  )
}
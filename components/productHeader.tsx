import { Badge } from "@/components/ui/badge"

interface ProductHeaderProps {
  brand: string
  name: string
  condition: string
  location: string
  price: number
  originalPrice: number
}

export default function ProductHeader({
  brand,
  name,
  condition,
  location,
  price,
  originalPrice
}: ProductHeaderProps) {
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Badge variant="outline" className="text-xs">
          {condition}
        </Badge>
        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
          {location}
        </Badge>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">{brand}</p>
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-gray-900">£{price}</span>
        <span className="text-lg text-gray-500 line-through">£{originalPrice}</span>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          {discountPercentage}% off RRP
        </Badge>
      </div>
    </div>
  )
}
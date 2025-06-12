import { Shield, Leaf } from "lucide-react"

interface SustainabilityData {
  co2Saved: string
  waterSaved: string
  wasteSaved: string
}

interface ProductTrustSectionProps {
  sustainability: SustainabilityData
}

export default function ProductTrustSection({ sustainability }: ProductTrustSectionProps) {
  return (
    <div className="space-y-8">
      {/* Sustainability Impact */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-medium text-gray-900">Your Impact</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-lg font-semibold text-green-800">{sustainability.co2Saved}</div>
            <div className="text-xs text-green-600">CO₂ saved</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-lg font-semibold text-blue-800">{sustainability.waterSaved}</div>
            <div className="text-xs text-blue-600">Water saved</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-lg font-semibold text-purple-800">{sustainability.wasteSaved}</div>
            <div className="text-xs text-purple-600">Waste saved</div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-medium text-gray-900">Trust & Quality</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Authenticated by our quality team</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>30-day return policy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Secure payment & buyer protection</span>
          </div>
        </div>
      </div>
    </div>
  )
}
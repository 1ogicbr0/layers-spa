interface ProductDescriptionProps {
  description: string
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Description</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
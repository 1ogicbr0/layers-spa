import Image from "next/image"

interface ProductImage {
  url: string
  color: string
  size: string
}

interface ProductImageGalleryProps {
  images: ProductImage[]
  selectedImageIndex: number
  onImageSelect: (index: number) => void
  productName: string
  selectedColor: string
}

export default function ProductImageGallery({
  images,
  selectedImageIndex,
  onImageSelect,
  productName,
  selectedColor
}: ProductImageGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-white rounded-2xl shadow-sm overflow-hidden">
        <Image
          src={images[selectedImageIndex]?.url || "/placeholder.svg?height=600&width=600"}
          alt={`${productName} - ${selectedColor}`}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={`aspect-square bg-white rounded-lg shadow-sm overflow-hidden border-2 transition-all ${
              selectedImageIndex === index
                ? "border-gray-900"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={image.url}
              alt={`${productName} - ${selectedColor} - View ${index + 1}`}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
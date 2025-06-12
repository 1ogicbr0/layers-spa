"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import dummyData from "./dummyData"
import ProductImageGallery from "./components/productImageGallery"
import ProductHeader from "./components/productHeader"
import ProductSelectors from "./components/productSelectors"
import ProductActions from "./components/productActions"
import ProductDescription from "./components/productDescription"
import ProductTrustSection from "./components/productTrustSection"

export default function Component() {
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("Yellow")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const product = dummyData.product

  const selectedColorData = product.colors.find((c) => c.name === selectedColor)
  const selectedSizeData = product.sizes.find((s) => s.size === selectedSize)
  const isAvailable = !!(selectedColorData?.available && selectedSizeData?.available)

  // Get images for the selected color
  const currentColorImages = dummyData.productImages.filter(
    (img) => img.color.toLowerCase() === selectedColor.toLowerCase()
  )

  // Reset image index when color changes
  const handleColorChange = (colorName: string) => {
    const colorData = product.colors.find((c) => c.name === colorName)
    if (colorData?.available) {
      setSelectedColor(colorName)
      setSelectedImageIndex(0) // Reset to first image of new color
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ProductImageGallery
            images={currentColorImages}
            selectedImageIndex={selectedImageIndex}
            onImageSelect={setSelectedImageIndex}
            productName={product.name}
            selectedColor={selectedColor}
          />

          <div className="space-y-8">
            <ProductHeader
              brand={product.brand}
              name={product.name}
              condition={product.condition}
              location={product.location}
              price={product.price}
              originalPrice={product.originalPrice}
            />

            <Separator />

            <ProductSelectors
              colors={product.colors}
              sizes={product.sizes}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onColorChange={handleColorChange}
              onSizeChange={setSelectedSize}
            />

            <Separator />

            <ProductActions
              isAvailable={isAvailable}
              isWishlisted={isWishlisted}
              onWishlistToggle={() => setIsWishlisted(!isWishlisted)}
              shipping={product.shipping}
            />

            <Separator />

            <ProductDescription description={product.description} />

            <Separator />

            <ProductTrustSection sustainability={product.sustainability} />
          </div>
        </div>
      </div>
    </div>
  )
}
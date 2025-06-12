interface Color {
  name: string
  hex: string
  available: boolean
}

interface Size {
  size: string
  available: boolean
}

interface ProductSelectorsProps {
  colors: Color[]
  sizes: Size[]
  selectedColor: string
  selectedSize: string
  onColorChange: (colorName: string) => void
  onSizeChange: (size: string) => void
}

export default function ProductSelectors({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange
}: ProductSelectorsProps) {
  return (
    <div className="space-y-6">
      {/* Color Selector */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Color: {selectedColor}</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => color.available && onColorChange(color.name)}
              disabled={!color.available}
              className={`
                w-12 h-12 rounded-full border-2 transition-all
                ${
                  selectedColor === color.name
                    ? "border-gray-900 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }
                ${!color.available ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
              `}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Size: {selectedSize}</h3>
        <div className="grid grid-cols-5 gap-2">
          {sizes.map((size) => (
            <button
              key={size.size}
              onClick={() => size.available && onSizeChange(size.size)}
              disabled={!size.available}
              className={`
                py-3 px-4 text-sm font-medium rounded-lg border transition-all
                ${
                  selectedSize === size.size
                    ? "border-gray-900 bg-gray-900 text-white"
                    : size.available
                      ? "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                      : "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              {size.size}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
import productImageYellow1 from './public/productYellow1.webp';
import productImageYellow2 from './public/productYellow2.webp';
import productImageYellow3 from './public/productYellow3.webp';
import productImageYellow4 from './public/productYellow4.webp';
import productImageGreen1 from './public/productGreen1.webp';
import productImageGreen2 from './public/productGreen2.webp';
import productImageGreen3 from './public/productGreen3.webp';
import productImageGreen4 from './public/productGreen4.webp';
import productImageBlue1 from './public/productBlue1.webp';
import productImageBlue2 from './public/productBlue2.webp';
import productImageBlue3 from './public/productBlue3.webp';
import productImageBlue4 from './public/productBlue4.webp';
import { url } from 'inspector';
const dummyData={
  product: {
    name: "Vintage Cashmere Sweater",
    brand: "Brunello Cucinelli",
    condition: "Refined",
    price: 289,
    originalPrice: 1200,
    description:
      "Luxurious cashmere sweater in pristine condition. This timeless piece features a classic crew neck design with ribbed cuffs and hem. Perfect for layering or wearing alone.",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
    colors: [
      { name: "Yellow", hex: "#fbbf24", available: true },
      { name: "Blue", hex: "#1e3a8a", available: true },
      { name: "Green", hex: "#10b981", available: true },
    ],
    sustainability: {
      co2Saved: "12.5kg",
      waterSaved: "2,400L",
      wasteSaved: "0.8kg",
    },
    location: "Verified in London",
    shipping: "Free shipping • Arrives in 2-3 days",
  },
productImages: [
    {
        url: productImageYellow1.src,
        color: "yellow",
        size: "S"
    },
    {
        url: productImageYellow2.src,
        color: "yellow",
        size: "M"
    },
    {
        url: productImageYellow3.src,
        color: "yellow",
        size: "L"
    },
    {
        url: productImageYellow4.src,
        color: "yellow",
        size: "XL"
    },
    {
        url: productImageGreen1.src,
        color: "green",
        size: "S"
    },
    {
        url: productImageGreen2.src,
        color: "green",
        size: "M"
    },
    {
        url: productImageGreen3.src,
        color: "green",
        size: "L"
    },
    {
        url: productImageGreen4.src,
        color: "green",
        size: "XL"
    },
    {
        url: productImageBlue1.src,
        color: "blue",
        size: "S"
    },
    {
        url: productImageBlue2.src,
        color: "blue",
        size: "M"
    },
    {
        url: productImageBlue3.src,
        color: "blue",
        size: "L"
    },
    {
        url: productImageBlue4.src,
        color: "blue",
        size: "XL"
    }
]
}

export default dummyData;
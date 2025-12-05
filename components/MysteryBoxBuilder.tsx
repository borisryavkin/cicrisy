"use client"

import { useState, useEffect } from "react"
import { Product, generateMysteryBoxItems } from "@/lib/shopify"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProductCard } from "./ProductCard"
import { useStore } from "@/lib/store"

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"]
const STYLES = ["Skater", "Streetwear", "Mixed"] as const

export function MysteryBoxBuilder() {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedStyle, setSelectedStyle] = useState<"Skater" | "Streetwear" | "Mixed" | "">("")
  const [previewItems, setPreviewItems] = useState<Product[]>([])
  const { addToCart } = useStore()

  useEffect(() => {
    if (selectedSize) {
      const items = generateMysteryBoxItems(
        selectedSize,
        selectedStyle || undefined
      )
      setPreviewItems(items)
    }
  }, [selectedSize, selectedStyle])

  const handleAddMysteryBox = () => {
    if (!selectedSize || previewItems.length === 0) return

    previewItems.forEach((item) => {
      const variant = item.variants[0]
      if (variant) {
        addToCart({
          productId: item.id,
          variantId: variant.id,
          quantity: 1,
          name: item.title,
          price: variant.price,
          image: item.image,
        })
      }
    })
  }

  const totalPrice = previewItems.reduce(
    (sum, item) => sum + (item.variants[0]?.price || 0),
    0
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          Mystery Box Builder
        </h1>
        <p className="text-lg text-gray-600">
          Select your size and style preference to see your curated mystery box
        </p>
      </div>

      <div className="mb-12 flex flex-col gap-6 md:flex-row md:justify-center">
        <div className="space-y-2">
          <Label htmlFor="size">Size *</Label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger id="size" className="w-[200px]">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {SIZES.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="style">Style (Optional)</Label>
          <Select
            value={selectedStyle}
            onValueChange={(value) =>
              setSelectedStyle(value as "Skater" | "Streetwear" | "Mixed")
            }
          >
            <SelectTrigger id="style" className="w-[200px]">
              <SelectValue placeholder="Any style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any style</SelectItem>
              {STYLES.map((style) => (
                <SelectItem key={style} value={style}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {previewItems.length > 0 && (
        <>
          <div className="mb-8">
            <h2 className="mb-6 text-3xl font-bold">Your Mystery Box Preview</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {previewItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div>
              <p className="text-sm text-gray-600">Total Items: {previewItems.length}</p>
              <p className="text-2xl font-bold">${totalPrice}</p>
            </div>
            <Button size="lg" onClick={handleAddMysteryBox}>
              Add Mystery Box to Cart
            </Button>
          </div>
        </>
      )}

      {selectedSize && previewItems.length === 0 && (
        <div className="text-center text-gray-500">
          Generating your mystery box...
        </div>
      )}
    </div>
  )
}


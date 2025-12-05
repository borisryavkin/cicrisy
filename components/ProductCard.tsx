import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/shopify"
import { Button } from "@/components/ui/button"
import { useStore } from "@/lib/store"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore()
  const defaultVariant = product.variants[0]

  const handleAddToCart = () => {
    if (defaultVariant) {
      addToCart({
        productId: product.id,
        variantId: defaultVariant.id,
        quantity: 1,
        name: product.title,
        price: defaultVariant.price,
        image: product.image,
      })
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="mb-1 text-lg font-semibold hover:text-gray-600">
            {product.title}
          </h3>
        </Link>
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!defaultVariant?.available}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}


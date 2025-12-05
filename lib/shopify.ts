// Shopify API Service - Currently using mock data
// Replace with actual Shopify API calls when ready

export interface Product {
  id: string
  title: string
  description: string
  price: number
  image: string
  variants: ProductVariant[]
}

export interface ProductVariant {
  id: string
  title: string
  price: number
  available: boolean
}

export interface Cart {
  id: string
  items: CartItem[]
  total: number
}

export interface CartItem {
  id: string
  productId: string
  variantId: string
  quantity: number
  title: string
  price: number
}

// Mock data
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Classic Skate Tee",
    description: "Premium cotton tee with minimal design",
    price: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    variants: [
      { id: "1-1", title: "Black / S", price: 45, available: true },
      { id: "1-2", title: "Black / M", price: 45, available: true },
      { id: "1-3", title: "Black / L", price: 45, available: true },
      { id: "1-4", title: "White / S", price: 45, available: true },
      { id: "1-5", title: "White / M", price: 45, available: true },
    ],
  },
  {
    id: "2",
    title: "Streetwear Hoodie",
    description: "Oversized fit hoodie with bold graphics",
    price: 89,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    variants: [
      { id: "2-1", title: "Black / M", price: 89, available: true },
      { id: "2-2", title: "Black / L", price: 89, available: true },
      { id: "2-3", title: "Gray / M", price: 89, available: true },
      { id: "2-4", title: "Gray / L", price: 89, available: true },
    ],
  },
  {
    id: "3",
    title: "Skateboard Deck",
    description: "Premium 8.0\" deck with custom graphics",
    price: 65,
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=800&fit=crop",
    variants: [
      { id: "3-1", title: "Default", price: 65, available: true },
    ],
  },
  {
    id: "4",
    title: "Cargo Pants",
    description: "Utility cargo pants with multiple pockets",
    price: 95,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop",
    variants: [
      { id: "4-1", title: "Black / 30", price: 95, available: true },
      { id: "4-2", title: "Black / 32", price: 95, available: true },
      { id: "4-3", title: "Black / 34", price: 95, available: true },
      { id: "4-4", title: "Olive / 30", price: 95, available: true },
      { id: "4-5", title: "Olive / 32", price: 95, available: true },
    ],
  },
  {
    id: "5",
    title: "Snapback Cap",
    description: "Classic snapback with embroidered logo",
    price: 35,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop",
    variants: [
      { id: "5-1", title: "Black", price: 35, available: true },
      { id: "5-2", title: "White", price: 35, available: true },
      { id: "5-3", title: "Navy", price: 35, available: true },
    ],
  },
  {
    id: "6",
    title: "High-Top Sneakers",
    description: "Premium canvas high-tops",
    price: 120,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
    variants: [
      { id: "6-1", title: "Black / 8", price: 120, available: true },
      { id: "6-2", title: "Black / 9", price: 120, available: true },
      { id: "6-3", title: "Black / 10", price: 120, available: true },
      { id: "6-4", title: "White / 8", price: 120, available: true },
      { id: "6-5", title: "White / 9", price: 120, available: true },
    ],
  },
]

let mockCart: Cart | null = null

// API Functions
export async function getProducts(): Promise<Product[]> {
  // TODO: Replace with actual Shopify API call
  // const response = await fetch(`${SHOPIFY_STORE_URL}/api/2024-01/products.json`, {
  //   headers: {
  //     "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
  //   },
  // })
  // const data = await response.json()
  // return data.products.map(transformProduct)
  
  return Promise.resolve(mockProducts)
}

export async function getProduct(id: string): Promise<Product | null> {
  // TODO: Replace with actual Shopify API call
  // const response = await fetch(`${SHOPIFY_STORE_URL}/api/2024-01/products/${id}.json`, {
  //   headers: {
  //     "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
  //   },
  // })
  // const data = await response.json()
  // return transformProduct(data.product)
  
  return Promise.resolve(mockProducts.find((p) => p.id === id) || null)
}

export async function createCart(): Promise<Cart> {
  // TODO: Replace with actual Shopify API call
  // const response = await fetch(`${SHOPIFY_STORE_URL}/api/2024-01/cart.json`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
  //   },
  //   body: JSON.stringify({}),
  // })
  // const data = await response.json()
  // return transformCart(data.cart)
  
  const cart: Cart = {
    id: `cart-${Date.now()}`,
    items: [],
    total: 0,
  }
  mockCart = cart
  return Promise.resolve(cart)
}

export async function addToCart(
  productId: string,
  variantId: string,
  quantity: number
): Promise<Cart> {
  // TODO: Replace with actual Shopify API call
  // const response = await fetch(`${SHOPIFY_STORE_URL}/api/2024-01/cart/${cartId}/add.json`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
  //   },
  //   body: JSON.stringify({
  //     id: variantId,
  //     quantity,
  //   }),
  // })
  // const data = await response.json()
  // return transformCart(data.cart)
  
  if (!mockCart) {
    mockCart = await createCart()
  }
  
  const product = mockProducts.find((p) => p.id === productId)
  const variant = product?.variants.find((v) => v.id === variantId)
  
  if (!product || !variant) {
    throw new Error("Product or variant not found")
  }
  
  const existingItem = mockCart.items.find(
    (item) => item.variantId === variantId
  )
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    mockCart.items.push({
      id: `item-${Date.now()}`,
      productId,
      variantId,
      quantity,
      title: `${product.title} - ${variant.title}`,
      price: variant.price,
    })
  }
  
  mockCart.total = mockCart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  
  return Promise.resolve(mockCart)
}

export async function checkout(cartId: string): Promise<string> {
  // TODO: Replace with actual Shopify checkout
  // const response = await fetch(`${SHOPIFY_STORE_URL}/api/2024-01/checkouts.json`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
  //   },
  //   body: JSON.stringify({
  //     checkout: {
  //       line_items: cart.items.map(item => ({
  //         variant_id: item.variantId,
  //         quantity: item.quantity,
  //       })),
  //     },
  //   }),
  // })
  // const data = await response.json()
  // return data.checkout.checkout_url
  
  return Promise.resolve(`https://checkout.example.com/${cartId}`)
}

// Helper function to generate random mystery box items
export function generateMysteryBoxItems(
  size: string,
  style?: "Skater" | "Streetwear" | "Mixed"
): Product[] {
  const filtered = style
    ? mockProducts.filter((p) => {
        if (style === "Skater") {
          return p.title.toLowerCase().includes("skate") || p.id === "3"
        }
        if (style === "Streetwear") {
          return p.title.toLowerCase().includes("streetwear") || p.title.toLowerCase().includes("hoodie") || p.title.toLowerCase().includes("cargo")
        }
        return true
      })
    : mockProducts
  
  // Return 3-5 random items
  const shuffled = [...filtered].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 3)
}


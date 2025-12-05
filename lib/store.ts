import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface User {
  id: string
  email: string
  name?: string
}

export interface CartItem {
  productId: string
  variantId: string
  quantity: number
  name: string
  price: number
  image?: string
}

interface AppState {
  user: User | null
  cart: CartItem[]
  setUser: (user: User | null) => void
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string, variantId: string) => void
  updateCartItem: (productId: string, variantId: string, quantity: number) => void
  clearCart: () => void
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      cart: [],
      setUser: (user) => set({ user }),
      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find(
            (i) => i.productId === item.productId && i.variantId === item.variantId
          )
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.productId === item.productId && i.variantId === item.variantId
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }
          }
          return { cart: [...state.cart, item] }
        }),
      removeFromCart: (productId, variantId) =>
        set((state) => ({
          cart: state.cart.filter(
            (i) => !(i.productId === productId && i.variantId === variantId)
          ),
        })),
      updateCartItem: (productId, variantId, quantity) =>
        set((state) => ({
          cart: state.cart.map((i) =>
            i.productId === productId && i.variantId === variantId
              ? { ...i, quantity }
              : i
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "circrisy-store",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
      })),
      skipHydration: true,
    }
  )
)


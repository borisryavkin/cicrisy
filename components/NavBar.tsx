"use client"

import Link from "next/link"
import { useStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { ShoppingBag, User } from "lucide-react"

export function NavBar() {
  const { user, cart, setUser } = useStore()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          CIRCRISY
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/mystery-box" className="text-sm font-medium hover:text-gray-600">
            Mystery Box
          </Link>
          
          <Link href="/profile" className="text-sm font-medium hover:text-gray-600">
            {user ? user.name || user.email : "Account"}
          </Link>
          
          <Link href="/cart" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          
          {user && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setUser(null)}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}


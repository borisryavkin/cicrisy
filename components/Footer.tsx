import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">CIRCRISY</h3>
            <p className="text-sm text-gray-600">
              Curated skate and streetwear boutique
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/mystery-box" className="hover:text-gray-900">
                  Mystery Box
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">About</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">Account</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/profile" className="hover:text-gray-900">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/auth" className="hover:text-gray-900">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CIRCRISY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/shopify";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <Hero />
      
      <section id="featured" className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Featured Items</h2>
          <p className="text-lg text-gray-600">
            Curated selection of premium skate and streetwear
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-5xl font-bold text-white">Built for the Streets</h2>
          <p className="mx-auto max-w-2xl text-xl text-white/80">
            We curate the finest skate and streetwear pieces, bringing together
            quality, style, and authenticity in every collection.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="mb-2 text-3xl font-bold">Skate Culture</h3>
              <p className="text-lg">Authentic pieces from the heart of skateboarding</p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=800&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="mb-2 text-3xl font-bold">Street Style</h3>
              <p className="text-lg">Urban fashion that defines the streets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

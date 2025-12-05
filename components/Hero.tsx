import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop)",
        }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl">
            CIRCRISY
          </h1>
          <p className="mb-8 text-xl text-white/90 md:text-2xl">
            Curated Skate & Streetwear
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/mystery-box">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Build Mystery Box
              </Button>
            </Link>
            <Link href="/#featured">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


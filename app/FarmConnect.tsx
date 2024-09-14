import React from 'react'
import { Search, MessageCircle, Star, MapPin, ShoppingBag, Users, Milk } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function FarmConnect() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FarmConnect</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Login / Register
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Connect Directly with Farmers</h2>
          <div className="flex gap-4">
            <Input type="text" placeholder="Search for produce or farmers" className="flex-grow" />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/produce" className="block">
            <FeatureCard
              icon={<ShoppingBag className="h-8 w-8" />}
              title="List and Buy Produce"
              description="Farmers can list their produce, and consumers can browse and purchase directly."
            />
          </Link>
        
          <Link href="/community" className="block">
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Farmer Community"
              description="Join a community of farmers to share knowledge and experiences."
            />
          </Link>
          <Link href="/dairy" className="block">
            <FeatureCard
              icon={<Milk className="h-8 w-8" />}
              title="Dairy Products"
              description="Explore a wide range of fresh dairy products from local farmers."
            />
          </Link>
          <Link href="/nearby" className="block">
            <FeatureCard
              icon={<MapPin className="h-8 w-8" />}
              title="Find Nearby Farmers"
              description="Discover and connect with farmers in your local area."
            />
          </Link>
          <Link href="/rate" className="block">
            <FeatureCard
              icon={<Star className="h-8 w-8" />}
              title="Rate Farmers"
              description="Share your experience and help others by rating farmers."
            />
          </Link>
        </section>
      </main>

      <footer className="bg-blue-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
'use client'

import React from 'react'
import { Search, Tractor, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">FarmConnect</h1>
          <nav className="space-x-4 flex items-center">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-600">
              Log In
            </Button>
            <Button className="bg-white text-green-600 hover:bg-green-100">
              Sign Up
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section className="text-center py-20">
          <h2 className="text-5xl font-bold mb-6 text-green-800">Welcome to <span className="text-6xl font-extrabold text-green-600">FarmConnect</span></h2>
          <p className="text-xl text-gray-600 mb-12">Bridging the gap between farmers and consumers</p>
          
          <div className="flex justify-center gap-8 mb-12">
          <Link href="/produce" className="block">
            <UserTypeCard 
              icon={<ShoppingBag className="h-16 w-16 mb-4 text-green-600" />}
              title="I'm a Customer"
              description="Find fresh produce and connect with local farmers"
            />
            </Link>
            <Link href="/" className="block">
            <UserTypeCard 
              icon={<Tractor className="h-16 w-16 mb-4 text-green-600" />}
              title="I'm a Farmer"
              description="List your produce and reach more customers"
            />
            </Link>
          </div>

          <div className="max-w-2xl mx-auto">
            <Input type="text" placeholder="Search for produce or farmers" className="mb-4" />
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Search className="h-4 w-4 mr-2" />
              Start Exploring
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function UserTypeCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
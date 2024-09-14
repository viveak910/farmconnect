'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Search, ShoppingCart, Info, Star, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Updated mock data for products with farmer ratings
const products = [
  { id: 1, name: "Fresh Apples", price: 2.99, category: "Fruits", farmer: "Green Acres Farm", image: "/placeholder.svg?height=100&width=100", origin: "Washington State", description: "Crisp and juicy apples, perfect for snacking or baking.", unit: "per pound", farmerRating: 4.5 },
  { id: 2, name: "Organic Carrots", price: 1.99, category: "Vegetables", farmer: "Sunny Valley Organics", image: "/placeholder.svg?height=100&width=100", origin: "California", description: "Sweet and crunchy carrots, grown without pesticides.", unit: "per bunch", farmerRating: 4.8 },
  { id: 3, name: "Heirloom Tomatoes", price: 3.99, category: "Vegetables", farmer: "Red Barn Produce", image: "/placeholder.svg?height=100&width=100", origin: "Local", description: "Colorful and flavorful tomatoes, great for salads.", unit: "per pound", farmerRating: 4.2 },
  { id: 4, name: "Ripe Bananas", price: 1.49, category: "Fruits", farmer: "Tropical Delights Farm", image: "/placeholder.svg?height=100&width=100", origin: "Ecuador", description: "Sweet and creamy bananas, rich in potassium.", unit: "per bunch", farmerRating: 4.0 },
  { id: 5, name: "Fresh Spinach", price: 2.49, category: "Vegetables", farmer: "Green Leaf Growers", image: "/placeholder.svg?height=100&width=100", origin: "Local Greenhouse", description: "Nutrient-packed spinach, great for salads and cooking.", unit: "per bag (200g)", farmerRating: 4.7 },
  { id: 6, name: "Wildflower Honey", price: 7.99, category: "Other", farmer: "Busy Bee Apiaries", image: "/placeholder.svg?height=100&width=100", origin: "Local", description: "Raw, unfiltered honey with a rich floral flavor.", unit: "per jar (500g)", farmerRating: 4.9 },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.round(rating)
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}

function ProduceDetails({ product, onClose }: { product: any, onClose: any }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg w-full"
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <Badge className="mb-2">{product.category}</Badge>
        <p className="text-lg font-semibold mb-2">${product.price.toFixed(2)} ({product.unit})</p>
        <div className="flex items-center mb-2">
          <p className="mr-2">{product.farmer}</p>
          <StarRating rating={product.farmerRating} />
        </div>
        <p className="mb-2"><strong>Origin:</strong> {product.origin}</p>
        <p className="mb-4">{product.description}</p>
        <Button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white">
          Close Preview
        </Button>
      </div>
    </div>
  )
}

export default function ListAndBuyProduce() {
  const [cart, setCart] = useState<any[]>([])
  const [filter, setFilter] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const addToCart = (product: any) => {
    setCart([...cart, product])
  }

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(product => product.category === filter)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FarmConnect</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Customer Login
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Farmer Login
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-green-800">List and Buy Produce</h2>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4 flex-1 mr-4">
            <Input type="text" placeholder="Search for produce" className="max-w-sm" />
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          <Select onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Fruits">Fruits</SelectItem>
              <SelectItem value="Vegetables">Vegetables</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="ml-4">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart ({cart.length})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto font-semibold text-left">
                        <CardTitle>{product.name}</CardTitle>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Product Details</DialogTitle>
                        <DialogDescription>
                          <ProduceDetails product={product} onClose={() => {}} />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <Badge>{product.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600">{product.farmer}</p>
                  <StarRating rating={product.farmerRating} />
                </div>
                <p className="text-sm text-gray-600 mb-2">Origin: {product.origin}</p>
                <p className="text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-bold">${product.price.toFixed(2)} <span className="text-sm font-normal text-gray-600">({product.unit})</span></p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Product Info</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{product.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => addToCart(product)} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-green-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
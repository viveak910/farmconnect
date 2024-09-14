'use client'


import React, { useState } from 'react'
import { Search, Star, Phone, MapPin, Calendar, ShoppingBag, MessageCircle, Filter, X, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function BrowseProduce() {
  const [filters, setFilters] = useState({
    rating: '',
    locality: '',
    category: '',
    quantity: '',
    harvestDate: '',
    minPrice: '',
    maxPrice: ''
  })

  const [appliedFilters, setAppliedFilters] = useState<string[]>([])

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    const newAppliedFilters = Object.entries(filters)
      .filter(([_, value]) => value !== '')
      .map(([key, value]) => `${key}: ${value}`)
    setAppliedFilters(newAppliedFilters)
  }

  const clearFilters = () => {
    setFilters({
      rating: '',
      locality: '',
      category: '',
      quantity: '',
      harvestDate: '',
      minPrice: '',
      maxPrice: ''
    })
    setAppliedFilters([])
  }

  const produceList = [
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: {
        name: "John Doe",
        rating: 4.5,
        contact: "+1234567890"
      },
      farm: "Sunshine Farms",
      area: "California",
      cost: 2.99,
      quantity: 500,
      harvestDate: "2023-08-15",
      quality: "A-Grade",
      description: "Fresh, juicy organic tomatoes grown without pesticides.",
      image: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
      category: "Vegetable"
    },
    {
      id: 2,
      name: "Golden Apples",
      farmer: {
        name: "Jane Smith",
        rating: 4.8,
        contact: "+1987654321"
      },
      farm: "Orchard Haven",
      area: "Washington",
      cost: 1.99,
      quantity: 1000,
      harvestDate: "2023-09-01",
      quality: "Premium",
      description: "Crisp and sweet golden apples, perfect for snacking or baking.",
      image: "https://th.bing.com/th/id/OIP.HySrCJe7ATbkNjvwko8rwQHaIZ?rs=1&pid=ImgDetMain",
      category: "Fruit"
    },
    {
      id: 4,
      name: "Fresh Spinach",
      farmer: {
        name: "Emily Brown",
        rating: 4.6,
        contact: "+1567890123"
      },
      farm: "Green Leaf Farms",
      area: "Oregon",
      cost: 3.49,
      quantity: 200,
      harvestDate: "2023-08-10",
      quality: "Fresh",
      description: "Crisp and nutritious spinach leaves, great for salads and cooking.",
      image: "https://th.bing.com/th/id/OIP.MIhh6wGi3kXh6m0sAzOhhAHaIl?rs=1&pid=ImgDetMain",
      category: "Vegetable"
    },
    {
      id: 5,
      name: "Wildflower Honey",
      farmer: {
        name: "David Wilson",
        rating: 4.9,
        contact: "+1234567890"
      },
      farm: "Buzzing Meadows",
      area: "Vermont",
      cost: 8.99,
      quantity: 100,
      harvestDate: "2023-08-20",
      quality: "Raw",
      description: "Pure, unfiltered wildflower honey with a rich, complex flavor.",
      image: "https://th.bing.com/th/id/OIP.Nw2bkM_3UTgn6cjsSV4WsgHaIA?rs=1&pid=ImgDetMain",
      category: "Other"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FarmConnect</h1>
          <nav className="space-x-4">
            <Link href="#" className="hover:underline">Home</Link>
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Contact</Link>
            <Link href="#" className="hover:underline">
              <ShoppingCart className="inline-block mr-1" size={18} />
              Cart
            </Link>
            <Link href="#" className="hover:underline">Orders</Link>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Login / Register
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-green-800">Browse Produce</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <Input type="text" placeholder="Search for produce or farmers" className="flex-grow" />
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Filter Products</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="rating" className="text-right">
                      Rating
                    </Label>
                    <Select value={filters.rating} onValueChange={(value) => handleFilterChange('rating', value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4.5">4.5 and above</SelectItem>
                        <SelectItem value="4">4 and above</SelectItem>
                        <SelectItem value="3.5">3.5 and above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="locality" className="text-right">
                      Locality
                    </Label>
                    <Select value={filters.locality} onValueChange={(value) => handleFilterChange('locality', value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select locality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="california">California</SelectItem>
                        <SelectItem value="washington">Washington</SelectItem>
                        <SelectItem value="oregon">Oregon</SelectItem>
                        <SelectItem value="colorado">Colorado</SelectItem>
                        <SelectItem value="vermont">Vermont</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fruit">Fruit</SelectItem>
                        <SelectItem value="vegetable">Vegetable</SelectItem>
                        <SelectItem value="grain">Grain</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">
                      Quantity
                    </Label>
                    <Select value={filters.quantity} onValueChange={(value) => handleFilterChange('quantity', value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-100">0-100 kg</SelectItem>
                        <SelectItem value="101-500">101-500 kg</SelectItem>
                        <SelectItem value="501+">501+ kg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="harvestDate" className="text-right">
                      Harvest Date
                    </Label>
                    <Input
                      id="harvestDate"
                      type="date"
                      value={filters.harvestDate}
                      onChange={(e) => handleFilterChange('harvestDate', e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="minPrice" className="text-right">
                      Min Price
                    </Label>
                    <Input
                      id="minPrice"
                      type="number"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="maxPrice" className="text-right">
                      Max Price
                    </Label>
                    <Input
                      id="maxPrice"
                      type="number"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
                  <Button onClick={applyFilters}>Apply Filters</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          {appliedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {appliedFilters.map((filter, index) => (
                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                  {filter}
                  <button
                    className="ml-2 text-green-600 hover:text-green-800"
                    onClick={() => {
                      const [key, _] = filter.split(':')
                      handleFilterChange(key.trim(), '')
                      applyFilters()
                    }}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produceList.map((produce) => (
            <ProduceCard key={produce.id} produce={produce} />
          ))}
        </section>
      </main>

      <footer className="bg-green-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ProduceCard({ produce }: { produce: any }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{produce.name}</span>
          <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg">${produce.cost}/kg</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-square relative w-1/2 mx-auto">
          <img
            src={produce.image}
            alt={produce.name}
            className="object-cover rounded-md"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" alt={produce.farmer.name} />
              <AvatarFallback>{produce.farmer.name[0]}</AvatarFallback>
            </Avatar>
            <Button variant="link" className="p-0 h-auto font-semibold text-green-600 hover:text-green-800">
              <Link href={`/farmer/${produce.farmer.name.toLowerCase().replace(' ', '-')}`}>
                {produce.farmer.name}
              </Link>
            </Button>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400"  />
              <span className="ml-1">{produce.farmer.rating}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>{produce.farmer.contact}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{produce.farm}, {produce.area}</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-4 w-4" />
            <span>{produce.quantity} kg available</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Expected harvest: {produce.harvestDate}</span>
          </div>
          <Badge className="bg-green-100 text-green-800">{produce.quality}</Badge>
          <Badge className="bg-green-100 text-green-800">{produce.category}</Badge>
          <p className="text-sm text-gray-600">{produce.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-2">
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Add to Cart
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Buy Now
        </Button>
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
          <MessageCircle className="h-4 w-4 mr-2" />
          Chat with Farmer
        </Button>
      </CardFooter>
    </Card>
  )
}
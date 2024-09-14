'use client'


import React, { useState } from 'react'
import { MapPin, Search, Filter, Star, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function FindNearbyFarmers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('distance')
  const [filterDistance, setFilterDistance] = useState(50)
  type Farmer = {
    id: number;
    name: string;
    avatar: string;
    distance: number;
    rating: number;
    products: string[];
    phone: string;
    email: string;
  };
  
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);

  const farmers = [
    { id: 1, name: "John Doe", avatar: "/placeholder-avatar-1.jpg", distance: 2.5, rating: 4.5, products: ["Tomatoes", "Cucumbers"], phone: "123-456-7890", email: "john@example.com" },
    { id: 2, name: "Jane Smith", avatar: "/placeholder-avatar-2.jpg", distance: 3.8, rating: 4.8, products: ["Apples", "Peaches"], phone: "234-567-8901", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", avatar: "/placeholder-avatar-3.jpg", distance: 5.2, rating: 4.2, products: ["Corn", "Soybeans"], phone: "345-678-9012", email: "bob@example.com" },
    { id: 4, name: "Alice Brown", avatar: "/placeholder-avatar-4.jpg", distance: 1.7, rating: 4.9, products: ["Lettuce", "Carrots"], phone: "456-789-0123", email: "alice@example.com" },
  ]

  const filteredFarmers = farmers.filter(farmer => farmer.distance <= filterDistance)

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FarmConnect</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Login / Register
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-green-800">Find Nearby Farmers</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <Input
              type="text"
              placeholder="Search farmers by name or product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex-shrink-0">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="distance-filter" className="text-green-700">Filter by distance (km): {filterDistance}</Label>
          <Slider
            id="distance-filter"
            min={1}
            max={100}
            step={1}
            value={[filterDistance]}
            onValueChange={(value) => setFilterDistance(value[0])}
            className="mt-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFarmers.map((farmer) => (
            <Card key={farmer.id} className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={farmer.avatar} alt={farmer.name} />
                  <AvatarFallback>{farmer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold text-green-800">{farmer.name}</h2>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-green-500" />
                    <span className="text-sm text-green-600">{farmer.distance} km away</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= farmer.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-green-600">({farmer.rating})</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {farmer.products.map((product, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">{product}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setSelectedFarmer(farmer)}>Contact Farmer</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-green-800">Contact {selectedFarmer?.name}</DialogTitle>
                      <DialogDescription>
                        Reach out to this farmer to inquire about their products or arrange a visit.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center gap-4">
                        <Phone className="w-4 h-4 text-green-500" />
                        <span>{selectedFarmer?.phone}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="w-4 h-4 text-green-500" />
                        <span>{selectedFarmer?.email}</span>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" onClick={() => setSelectedFarmer(null)} className="bg-green-500 hover:bg-green-600 text-white">Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-green-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
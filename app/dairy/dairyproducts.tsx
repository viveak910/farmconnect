'use client'

import React, { useState } from 'react'
import { ShoppingCart, Minus, Plus, X, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast, useToast } from "@/hooks/use-toast"

// ProductCard Component
function ProductCard({ product, onAddToCart }: { product: any, onAddToCart: any }) {
  const { name, description, price, quantity, quality, availability, imageUrl, rating } = product
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute top-2 right-2" variant={availability === 'In stock' ? 'default' : 'secondary'}>
            {availability}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-sm text-gray-600 mb-2 h-12 overflow-hidden">{description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-green-600">${price.toFixed(2)}</span>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">{quality}</Badge>
        </div>
        <div className="flex items-center mb-2">
          {Array(5).fill(null).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-green-400 fill-current' : 'text-gray-300'}`} />
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-600">Quantity: {quantity} available</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Select quantity:</span>
          <div className="flex items-center">
            <Button size="icon" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50" onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="mx-2 w-8 text-center">{selectedQuantity}</span>
            <Button size="icon" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50" onClick={() => setSelectedQuantity(Math.min(quantity, selectedQuantity + 1))}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={() => onAddToCart({ ...product, selectedQuantity })}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

// CartItem Component
function CartItem({ item, onRemove, onIncrease, onDecrease }: { item: any, onRemove: any, onIncrease: any, onDecrease: any }) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
      <div className="flex items-center space-x-2">
        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button size="icon" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50" onClick={() => onDecrease(item)}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="mx-2 w-8 text-center">{item.selectedQuantity}</span>
        <Button size="icon" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50" onClick={() => onIncrease(item)}>
          <Plus className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="destructive" onClick={() => onRemove(item)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

// DairyProductsPage Component
export default function GreenDairyProductsPage() {
  const [cart, setCart] = useState<any[]>([])
  const { toast } = useToast()

  const handleAddToCart = (product: any) => {
    const existingItem = cart.find(item => item.name === product.name)
    if (existingItem) {
      setCart(cart.map(item => 
        item.name === product.name 
          ? { ...item, selectedQuantity: Math.min(item.quantity, item.selectedQuantity + product.selectedQuantity) } 
          : item
      ))
    } else {
      setCart([...cart, product])
    }
    toast({
      title: "Added to cart",
      description: `${product.selectedQuantity} ${product.name} added to your cart.`,
    })
  }

  const handleRemoveFromCart = (product: any) => {
    setCart(cart.filter(item => item.name !== product.name))
    toast({
      title: "Removed from cart",
      description: `${product.name} removed from your cart.`,
      variant: "destructive",
    })
  }

  const handleIncreaseQuantity = (product: any) => {
    setCart(cart.map(item => 
      item.name === product.name 
        ? { ...item, selectedQuantity: Math.min(item.quantity, item.selectedQuantity + 1) } 
        : item
    ))
  }

  const handleDecreaseQuantity = (product: any) => {
    setCart(cart.map(item => 
      item.name === product.name 
        ? { ...item, selectedQuantity: Math.max(1, item.selectedQuantity - 1) } 
        : item
    ))
  }

  const products = [
    {
      name: "Fresh Milk",
      description: "Rich and creamy milk from local grass-fed cows.",
      price: 3.99,
      quantity: 50,
      quality: "Premium",
      availability: "In stock",
      imageUrl: "https://c8.alamy.com/comp/RK8GPN/pouring-milk-from-jug-into-glass-isolated-on-white-background-RK8GPN.jpg",
      rating: 4.5
    },
    {
      name: "Aged Cheddar Cheese",
      description: "Sharp and tangy cheddar aged for 18 months.",
      price: 6.99,
      quantity: 30,
      quality: "Artisanal",
      availability: "Limited stock",
      imageUrl: "https://th.bing.com/th/id/OIP.rQKYey2Oih3SZc6MleVCkgHaE8?rs=1&pid=ImgDetMainAttachment",
      rating: 4.8
    },
    {
      name: "Greek Yogurt",
      description: "Thick and creamy probiotic-rich yogurt.",
      price: 4.49,
      quantity: 40,
      quality: "High",
      availability: "In stock",
      imageUrl: "https://www.womansworld.com/wp-content/uploads/2020/07/how-to-make-yogurt-1.jpg?resize=768",
      rating: 4.2
    },
    {
      name: "Organic Butter",
      description: "Smooth, golden butter from organic cream.",
      price: 5.49,
      quantity: 25,
      quality: "Organic",
      availability: "In stock",
      imageUrl: "https://img.bekiasalud.com/articulos/portada/101000/101209.jpg",
      rating: 4.6
    },
    {
      name: "Goat Cheese",
      description: "Creamy and tangy artisanal goat cheese.",
      price: 7.99,
      quantity: 20,
      quality: "Gourmet",
      availability: "Limited stock",
      imageUrl: "https://th.bing.com/th/id/OIP.fPwHkpo4SRixU15qfRW1kAHaFj?rs=1&pid=ImgDetMain",
      rating: 4.3
    },
    {
      name: "Probiotic Kefir",
      description: "Fermented milk drink rich in probiotics.",
      price: 4.99,
      quantity: 35,
      quality: "Probiotic",
      availability: "In stock",
      imageUrl: "https://healthjade.com/wp-content/uploads/2017/09/kefir.jpg",
      rating: 4.1
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-700">Dairy Delights</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our farm-fresh dairy products, sourced from local farmers committed to quality and sustainability.
          From creamy milk to artisanal cheeses, we offer a wide range of premium dairy delights.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Card className="mt-12 border-green-200">
        <CardHeader className="border-b border-green-100">
          <CardTitle className="flex items-center justify-between text-green-700">
            <span>Shopping Cart</span>
            <ShoppingCart className="h-6 w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemove={handleRemoveFromCart}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </CardContent>
        {cart.length > 0 && (
          <CardFooter className="flex flex-col items-end border-t border-green-100">
            <div className="flex justify-between w-full mb-4">
              <span className="font-semibold">Subtotal:</span>
              <span className="font-bold text-green-600">
                ${cart.reduce((total, item) => total + item.price * item.selectedQuantity, 0).toFixed(2)}
              </span>
            </div>
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">Proceed to Checkout</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
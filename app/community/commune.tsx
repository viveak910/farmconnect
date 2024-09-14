'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ThumbsUp, Share2, MapPin, Users, Newspaper, Calendar, Search } from 'lucide-react'

export default function AreaWiseFarmerCommunity() {
  const areas = [
    "California",
    "Texas",
    "Florida",
    "New York",
    "Illinois",
    "Iowa",
    "Nebraska",
    "Kansas",
    "Wisconsin",
    "Minnesota"
  ]

  const posts = [
    {
      id: 1,
      author: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      area: "California",
      content: "Anyone in Central Valley experiencing water shortages? Looking for advice on efficient irrigation methods.",
      likes: 15,
      comments: 7,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      area: "Iowa",
      content: "Corn yields are looking great this year! Here's a tip: I've been using a new organic fertilizer that's working wonders.",
      likes: 23,
      comments: 12,
      time: "5 hours ago"
    },
    {
      id: 3,
      author: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      area: "Florida",
      content: "Hurricane season is approaching. Let's share our preparation strategies for protecting our crops and livestock.",
      likes: 45,
      comments: 18,
      time: "1 day ago"
    }
  ]

  const events = [
    { id: 1, name: "California Organic Farmers' Conference", area: "California", date: "July 15, 2023" },
    { id: 2, name: "Midwest Soil Health Workshop", area: "Iowa", date: "August 5, 2023" },
    { id: 3, name: "Florida Citrus Growers' Meetup", area: "Florida", date: "September 20, 2023" }
  ]

  const news = [
    { id: 1, title: "New Drought-Resistant Crop Varieties Developed", area: "California", date: "June 10, 2023" },
    { id: 2, title: "USDA Announces Additional Support for Midwest Farmers", area: "Iowa", date: "June 15, 2023" },
    { id: 3, title: "Florida Agriculture Department Launches New Tech Initiative", area: "Florida", date: "June 20, 2023" }
  ]

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <header className="bg-green-600 text-white p-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold">FarmConnect Community</h1>
        <p className="mt-2">Connect with farmers in your area and across the country</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Share with your local community</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((area) => (
                      <SelectItem key={area} value={area.toLowerCase()}>{area}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="What's happening in your area?"
                ></textarea>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-500 hover:bg-green-600 text-white">Post</Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Areas</TabsTrigger>
              <TabsTrigger value="california">California</TabsTrigger>
              <TabsTrigger value="iowa">Iowa</TabsTrigger>
              <TabsTrigger value="florida">Florida</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                {posts.map((post) => (
                  <Card key={post.id} className="mb-4">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={post.avatar} alt={post.author} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{post.author}</CardTitle>
                            <p className="text-sm text-gray-500">{post.time}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <MapPin className="h-4 w-4 mr-1" />
                          {post.area}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{post.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="california">
              <Card>
                <CardHeader>
                  <CardTitle>California Farmers' Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Content specific to California farmers would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="iowa">
              <Card>
                <CardHeader>
                  <CardTitle>Iowa Farmers' Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Content specific to Iowa farmers would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="florida">
              <Card>
                <CardHeader>
                  <CardTitle>Florida Farmers' Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Content specific to Florida farmers would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Find Farmers in Your Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((area) => (
                      <SelectItem key={area} value={area.toLowerCase()}>{area}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="Search farmers" />
                  <Button type="submit">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Local Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {events.map((event) => (
                  <li key={event.id} className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-semibold">{event.name}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.area}
                      </Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {news.map((item) => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <Newspaper className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {item.area}
                      </Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
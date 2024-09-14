'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthPageComponent() {
  const [activeTab, setActiveTab] = useState("signup")

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <Card className="w-[350px] border-green-200">
        <CardHeader className="bg-green-100">
          <CardTitle className="text-green-800">Welcome to FarmConnect</CardTitle>
          <CardDescription className="text-green-600">Sign up or log in to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-green-100">
              <TabsTrigger value="signup" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Sign Up</TabsTrigger>
              <TabsTrigger value="login" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-green-700">Email</Label>
                  <Input id="signup-email" type="email" placeholder="Enter your email" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-phone" className="text-green-700">Phone Number</Label>
                  <Input id="signup-phone" type="tel" placeholder="Enter your phone number" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-username" className="text-green-700">Username/ID</Label>
                  <Input id="signup-username" placeholder="Choose a username or ID" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-green-700">Password</Label>
                  <Input id="signup-password" type="password" placeholder="Create a password" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm-password" className="text-green-700">Confirm Password</Label>
                  <Input id="signup-confirm-password" type="password" placeholder="Confirm your password" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Sign Up</Button>
              </form>
            </TabsContent>
            <TabsContent value="login">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-username" className="text-green-700">Username/ID</Label>
                  <Input id="login-username" placeholder="Enter your username or ID" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-green-700">Password</Label>
                  <Input id="login-password" type="password" placeholder="Enter your password" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Log In</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center bg-green-100">
          <p className="text-sm text-green-600">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
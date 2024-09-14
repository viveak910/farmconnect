'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Edit, Save, Plus } from 'lucide-react'

export default function FarmerProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [isAddingProduce, setIsAddingProduce] = useState(false)
  const [farmerData, setFarmerData] = useState({
    name: "John Doe",
    village: "Green Valley",
    soilType: "Loamy",
    presentCrops: "Wheat, Barley",
    futureCrops: "Corn, Soybeans",
    isOrganic: true,
    fertilizers: "Compost, Green Manure"
  })
  const [newProduce, setNewProduce] = useState({
    cropName: "",
    quantity: "",
    quality: "",
    expectedPrice: "",
    expectedHarvestTime: "",
    images: null as File[] | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFarmerData(prev => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFarmerData(prev => ({ ...prev, isOrganic: checked }))
  }

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving farmer data:", farmerData)
    setIsEditing(false)
  }

  const handleNewProduceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduce(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewProduce(prev => ({ ...prev, images: Array.from(e.target.files as FileList) }))
    }
  }

  const handleAddProduce = () => {
    // Here you would typically send the new produce data to your backend
    console.log("Adding new produce:", newProduce)
    setIsAddingProduce(false)
    // Reset the form
    setNewProduce({
      cropName: "",
      quantity: "",
      quality: "",
      expectedPrice: "",
      expectedHarvestTime: "",
      images: null
    })
  }

  const renderField = (label: string, name: string, value: string, type: 'input' | 'textarea' = 'input') => (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-green-700">{label}</Label>
      {isEditing ? (
        type === 'input' ? (
          <Input
            id={name}
            name={name}
            value={value}
            onChange={handleInputChange}
            className="border-green-300 focus:border-green-500 focus:ring-green-500"
          />
        ) : (
          <Textarea
            id={name}
            name={name}
            value={value}
            onChange={handleInputChange}
            className="border-green-300 focus:border-green-500 focus:ring-green-500"
          />
        )
      ) : (
        <div className="p-2 bg-green-50 rounded-md">{value}</div>
      )}
    </div>
  )

  return (
    <div className="container mx-auto p-4 bg-green-50">
      <Card className="w-full max-w-3xl mx-auto border-green-200">
        <CardHeader className="flex flex-row items-center justify-between bg-green-100">
          <CardTitle className="text-2xl text-green-800">Farmer Profile</CardTitle>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => isEditing ? handleSave() : setIsEditing(true)} className="bg-green-500 text-white hover:bg-green-600">
              {isEditing ? (
                <>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </>
              ) : (
                <>
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </>
              )}
            </Button>
            <Dialog open={isAddingProduce} onOpenChange={setIsAddingProduce}>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
                  <Plus className="mr-2 h-4 w-4" /> Add Produce
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Produce</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="cropName" className="text-right">
                      Crop Name
                    </Label>
                    <Input
                      id="cropName"
                      name="cropName"
                      value={newProduce.cropName}
                      onChange={handleNewProduceChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">
                      Quantity (kg)
                    </Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      value={newProduce.quantity}
                      onChange={handleNewProduceChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quality" className="text-right">
                      Quality
                    </Label>
                    <Input
                      id="quality"
                      name="quality"
                      value={newProduce.quality}
                      onChange={handleNewProduceChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="expectedPrice" className="text-right">
                      Expected Price (per kg)
                    </Label>
                    <Input
                      id="expectedPrice"
                      name="expectedPrice"
                      type="number"
                      value={newProduce.expectedPrice}
                      onChange={handleNewProduceChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="expectedHarvestTime" className="text-right">
                      Expected Harvest Time
                    </Label>
                    <Input
                      id="expectedHarvestTime"
                      name="expectedHarvestTime"
                      type="date"
                      value={newProduce.expectedHarvestTime}
                      onChange={handleNewProduceChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="images" className="text-right">
                      Upload Images
                    </Label>
                    <Input
                      id="images"
                      name="images"
                      type="file"
                      multiple
                      onChange={handleImageUpload}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <Button onClick={handleAddProduce} className="bg-green-500 text-white hover:bg-green-600">Add Produce</Button>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt={farmerData.name} />
              <AvatarFallback>{farmerData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              {renderField('Name', 'name', farmerData.name)}
              {renderField('Village', 'village', farmerData.village)}
            </div>
          </div>
          
          {renderField('Soil Type', 'soilType', farmerData.soilType)}
          
          {renderField('Present Crops', 'presentCrops', farmerData.presentCrops)}
          
          {renderField('Future Crops', 'futureCrops', farmerData.futureCrops)}
          
          <div className="space-y-2">
            <Label htmlFor="isOrganic" className="text-green-700">Farming Method</Label>
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <Switch
                  id="isOrganic"
                  checked={farmerData.isOrganic}
                  onCheckedChange={handleSwitchChange}
                />
                <span>{farmerData.isOrganic ? 'Organic' : 'Conventional'} Farming</span>
              </div>
            ) : (
              <div className="p-2 bg-green-50 rounded-md">
                <Badge variant="secondary" className="bg-green-100 text-green-800">{farmerData.isOrganic ? 'Organic' : 'Conventional'}</Badge>
              </div>
            )}
          </div>
          
          {renderField('Fertilizers', 'fertilizers', farmerData.fertilizers, 'textarea')}
          
          {!isEditing && (
            <div className="space-y-2">
              <h3 className="font-semibold text-green-700">Crops</h3>
              <div className="flex flex-wrap gap-2">
                {farmerData.presentCrops.split(',').map((crop, index) => (
                  <Badge key={`present-${index}`} variant="outline" className="border-green-500 text-green-700">{crop.trim()} (Present)</Badge>
                ))}
                {farmerData.futureCrops.split(',').map((crop, index) => (
                  <Badge key={`future-${index}`} variant="outline" className="border-green-500 text-green-700">{crop.trim()} (Future)</Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

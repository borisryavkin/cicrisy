"use client"

import { useEffect, useState } from "react"
import { useStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"]
const STYLES = ["Skater", "Streetwear", "Mixed"] as const

export default function ProfilePage() {
  const { user, setUser } = useStore()
  const router = useRouter()
  const [size, setSize] = useState<string>("")
  const [stylePreference, setStylePreference] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push("/auth")
      return
    }
    // Load user profile data (would fetch from API in production)
    setLoading(false)
  }, [user, router])

  if (loading || !user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Profile</h1>
        <p className="mt-2 text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Email</Label>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div>
              <Label>Name</Label>
              <p className="text-sm text-gray-600">{user.name || "Not set"}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Your saved size and style preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profile-size">Preferred Size</Label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger id="profile-size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {SIZES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-style">Style Preference</Label>
              <Select value={stylePreference} onValueChange={setStylePreference}>
                <SelectTrigger id="profile-style">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  {STYLES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button>Save Preferences</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mystery Box Preferences</CardTitle>
            <CardDescription>Your saved mystery box configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              No saved preferences yet. Build a mystery box to save your preferences.
            </p>
            <Link href="/mystery-box">
              <Button variant="outline">Build Mystery Box</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
            <CardDescription>Your recent orders</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">No orders yet.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


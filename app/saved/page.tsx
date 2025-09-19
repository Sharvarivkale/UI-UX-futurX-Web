"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Heart,
  Search,
  Filter,
  Star,
  MapPin,
  TrendingUp,
  DollarSign,
  ExternalLink,
  Trash2,
  Share2,
  ArrowLeft,
  SortAsc,
} from "lucide-react"
import Link from "next/link"

// Mock saved colleges data
const savedColleges = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi",
    state: "Delhi",
    course: "Computer Science",
    rating: 4.8,
    fees: "₹2.5L",
    placement: "95%",
    match: 95,
    savedDate: "2024-01-15",
    image: "/iit-delhi-campus.jpg",
    tags: ["Government", "Top Ranked", "High Placement"],
  },
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science",
    location: "Pilani",
    state: "Rajasthan",
    course: "Computer Science",
    rating: 4.6,
    fees: "₹4.5L",
    placement: "92%",
    match: 88,
    savedDate: "2024-01-12",
    image: "/bits-pilani-campus.jpg",
    tags: ["Private", "Research Focus", "Industry Connect"],
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    course: "Computer Science",
    rating: 4.5,
    fees: "₹2.0L",
    placement: "89%",
    match: 82,
    savedDate: "2024-01-10",
    image: "/nit-trichy-campus.jpg",
    tags: ["Government", "NIT", "Affordable"],
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology",
    location: "Vellore",
    state: "Tamil Nadu",
    course: "Computer Science",
    rating: 4.3,
    fees: "₹3.8L",
    placement: "85%",
    match: 78,
    savedDate: "2024-01-08",
    image: "/vit-vellore-campus.jpg",
    tags: ["Private", "International Programs", "Modern Campus"],
  },
  {
    id: "manipal-institute",
    name: "Manipal Institute of Technology",
    location: "Manipal",
    state: "Karnataka",
    course: "Computer Science",
    rating: 4.2,
    fees: "₹4.2L",
    placement: "83%",
    match: 75,
    savedDate: "2024-01-05",
    image: "/manipal-institute-campus.jpg",
    tags: ["Private", "Healthcare Focus", "Scenic Campus"],
  },
]

export default function SavedPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("saved-date")
  const [selectedColleges, setSelectedColleges] = useState<string[]>([])

  const filteredColleges = savedColleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.course.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleSelection = (collegeId: string) => {
    setSelectedColleges((prev) =>
      prev.includes(collegeId) ? prev.filter((id) => id !== collegeId) : [...prev, collegeId],
    )
  }

  const removeFromSaved = (collegeId: string) => {
    // In a real app, this would make an API call
    console.log("Removing college:", collegeId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold">FuturX</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Saved Colleges</h1>
              <p className="text-xl text-muted-foreground">Your favorite colleges and courses</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{savedColleges.length}</div>
                <div className="text-sm text-muted-foreground">Total Saved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">
                  {Math.round(savedColleges.reduce((acc, college) => acc + college.match, 0) / savedColleges.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Avg Match</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {savedColleges.filter((c) => c.tags.includes("Government")).length}
                </div>
                <div className="text-sm text-muted-foreground">Government</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {savedColleges.filter((c) => c.tags.includes("Private")).length}
                </div>
                <div className="text-sm text-muted-foreground">Private</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search saved colleges..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <SortAsc className="h-4 w-4" />
                  Sort by Date
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                {selectedColleges.length > 0 && <Button className="gap-2">Compare ({selectedColleges.length})</Button>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Saved Colleges Grid */}
        <div className="space-y-4">
          {filteredColleges.map((college) => (
            <Card
              key={college.id}
              className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                selectedColleges.includes(college.id) ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedColleges.includes(college.id)}
                        onChange={() => toggleSelection(college.id)}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-primary text-xl">{college.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{college.name}</h3>
                        <Badge className="bg-green-100 text-green-700 border-green-200">{college.match}% Match</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {college.location}, {college.state}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{college.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="outline" className="gap-1">
                          <DollarSign className="h-3 w-3" />
                          {college.fees}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {college.placement}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {college.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <Link href={`/college/${college.id}`}>
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                      onClick={() => removeFromSaved(college.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No saved colleges found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery ? "Try adjusting your search terms" : "Start exploring colleges to save your favorites"}
              </p>
              <Link href="/search">
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search Colleges
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        {savedColleges.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="bg-transparent">
                  Export List
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Share Collection
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Create Comparison
                </Button>
                <Link href="/search">
                  <Button variant="outline" className="bg-transparent">
                    Find More Colleges
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

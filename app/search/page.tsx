"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  GraduationCap,
  Star,
  X,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  ArrowUpDown,
} from "lucide-react"
import Link from "next/link"
import CollegeCard from "@/components/college-card"

const courseCategories = [
  { id: "engineering", label: "Engineering", count: 1250, color: "bg-blue-100 text-blue-700 border-blue-200" },
  { id: "medical", label: "Medical", count: 890, color: "bg-red-100 text-red-700 border-red-200" },
  { id: "business", label: "Business", count: 670, color: "bg-green-100 text-green-700 border-green-200" },
  { id: "arts", label: "Arts & Design", count: 450, color: "bg-purple-100 text-purple-700 border-purple-200" },
  { id: "science", label: "Science", count: 380, color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  { id: "law", label: "Law", count: 290, color: "bg-orange-100 text-orange-700 border-orange-200" },
]

const locations = [
  { id: "delhi", label: "Delhi NCR", count: 245 },
  { id: "mumbai", label: "Mumbai", count: 198 },
  { id: "bangalore", label: "Bangalore", count: 167 },
  { id: "pune", label: "Pune", count: 134 },
  { id: "hyderabad", label: "Hyderabad", count: 112 },
  { id: "chennai", label: "Chennai", count: 98 },
]

const feeRanges = [
  { id: "under1", label: "Under ₹1L", count: 450 },
  { id: "1to3", label: "₹1L - ₹3L", count: 680 },
  { id: "3to5", label: "₹3L - ₹5L", count: 520 },
  { id: "5to10", label: "₹5L - ₹10L", count: 340 },
  { id: "above10", label: "Above ₹10L", count: 180 },
]

const collegeTypes = [
  { id: "government", label: "Government", count: 890 },
  { id: "private", label: "Private", count: 1240 },
  { id: "deemed", label: "Deemed University", count: 340 },
  { id: "autonomous", label: "Autonomous", count: 280 },
]

const quickFilters = [
  { id: "top-ranked", label: "Top Ranked", icon: Star },
  { id: "high-placement", label: "High Placement", icon: TrendingUp },
  { id: "low-fees", label: "Low Fees", icon: DollarSign },
  { id: "near-me", label: "Near Me", icon: MapPin },
]

// Mock college data
const mockColleges = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "Government" as const,
    establishedYear: 1961,
    rating: 4.8,
    reviewCount: 2847,
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
    fees: { min: 200000, max: 250000 },
    placement: { percentage: 95, averagePackage: 1800000, highestPackage: 5500000 },
    ranking: { nirf: 2, category: "Engineering" },
    image: "/iit-delhi-campus-modern-architecture.jpg",
    highlights: [
      "Top-tier faculty with international recognition",
      "State-of-the-art research facilities and labs",
      "Strong industry partnerships and internship programs",
      "Excellent alumni network in tech and business",
    ],
    accreditation: ["NAAC A++", "NBA"],
    isRecommended: true,
    matchPercentage: 95,
  },
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science",
    location: "Pilani",
    state: "Rajasthan",
    type: "Private" as const,
    establishedYear: 1964,
    rating: 4.6,
    reviewCount: 1923,
    courses: ["Computer Science", "Electronics", "Mechanical", "Chemical Engineering"],
    fees: { min: 450000, max: 500000 },
    placement: { percentage: 92, averagePackage: 1600000, highestPackage: 4500000 },
    ranking: { nirf: 24, category: "Engineering" },
    image: "/bits-pilani-campus-beautiful-architecture.jpg",
    highlights: [
      "Flexible curriculum with dual degree options",
      "Strong emphasis on research and innovation",
      "Excellent placement record with top companies",
      "Beautiful campus with modern facilities",
    ],
    accreditation: ["NAAC A", "NBA"],
    matchPercentage: 88,
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "Government" as const,
    establishedYear: 1964,
    rating: 4.5,
    reviewCount: 1654,
    courses: ["Computer Science", "Electronics", "Mechanical", "Civil Engineering"],
    fees: { min: 150000, max: 200000 },
    placement: { percentage: 89, averagePackage: 1400000, highestPackage: 3800000 },
    ranking: { nirf: 9, category: "Engineering" },
    image: "/nit-trichy-campus-green-environment.jpg",
    highlights: [
      "Premier technical institution with rich heritage",
      "Strong research culture and publications",
      "Diverse student community from across India",
      "Excellent sports and cultural facilities",
    ],
    accreditation: ["NAAC A++", "NBA"],
    matchPercentage: 82,
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology",
    location: "Vellore",
    state: "Tamil Nadu",
    type: "Private" as const,
    establishedYear: 1984,
    rating: 4.3,
    reviewCount: 3241,
    courses: ["Computer Science", "Information Technology", "Electronics", "Biotechnology"],
    fees: { min: 350000, max: 400000 },
    placement: { percentage: 85, averagePackage: 1200000, highestPackage: 4100000 },
    ranking: { nirf: 15, category: "Engineering" },
    image: "/vit-vellore-modern-campus-technology.jpg",
    highlights: [
      "International collaborations and exchange programs",
      "Modern infrastructure with smart classrooms",
      "Strong industry connections and internships",
      "Diverse range of specializations available",
    ],
    accreditation: ["NAAC A++", "NBA"],
    matchPercentage: 78,
  },
  {
    id: "manipal-institute",
    name: "Manipal Institute of Technology",
    location: "Manipal",
    state: "Karnataka",
    type: "Private" as const,
    establishedYear: 1957,
    rating: 4.2,
    reviewCount: 2156,
    courses: ["Computer Science", "Information Technology", "Mechanical", "Biomedical Engineering"],
    fees: { min: 400000, max: 450000 },
    placement: { percentage: 83, averagePackage: 1100000, highestPackage: 3600000 },
    ranking: { nirf: 45, category: "Engineering" },
    image: "/manipal-institute-campus-hills-scenic.jpg",
    highlights: [
      "Scenic campus in the Western Ghats",
      "Strong alumni network in healthcare and tech",
      "Comprehensive student support services",
      "Active research and innovation ecosystem",
    ],
    accreditation: ["NAAC A", "NBA"],
    matchPercentage: 75,
  },
]

const sortOptions = [
  { id: "relevance", label: "Relevance" },
  { id: "ranking", label: "Ranking" },
  { id: "fees-low", label: "Fees: Low to High" },
  { id: "fees-high", label: "Fees: High to Low" },
  { id: "placement", label: "Placement %" },
  { id: "rating", label: "Rating" },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedFeeRanges, setSelectedFeeRanges] = useState<string[]>([])
  const [selectedCollegeTypes, setSelectedCollegeTypes] = useState<string[]>([])
  const [selectedQuickFilters, setSelectedQuickFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")

  const toggleFilter = (filterId: string, filterType: "categories" | "locations" | "fees" | "types" | "quick") => {
    const setters = {
      categories: setSelectedCategories,
      locations: setSelectedLocations,
      fees: setSelectedFeeRanges,
      types: setSelectedCollegeTypes,
      quick: setSelectedQuickFilters,
    }

    const setter = setters[filterType]
    setter((prev) => (prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]))
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedLocations([])
    setSelectedFeeRanges([])
    setSelectedCollegeTypes([])
    setSelectedQuickFilters([])
    setSearchQuery("")
  }

  const totalActiveFilters =
    selectedCategories.length +
    selectedLocations.length +
    selectedFeeRanges.length +
    selectedCollegeTypes.length +
    selectedQuickFilters.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold">FuturX</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/compare" className="text-muted-foreground hover:text-foreground transition-colors">
              Compare
            </Link>
            <Link href="/saved" className="text-muted-foreground hover:text-foreground transition-colors">
              Saved
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Find your perfect college</h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl">
            Search through thousands of colleges and courses with our smart filters
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6 border-2 hover:border-primary/20 transition-colors">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search colleges, courses, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-12 px-6">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                  {totalActiveFilters > 0 && (
                    <Badge className="ml-2 bg-primary text-primary-foreground">{totalActiveFilters}</Badge>
                  )}
                </Button>
                <Button className="h-12 px-8 animate-pulse-glow">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Filters */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold">Quick Filters</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickFilters.map((filter) => {
              const Icon = filter.icon
              const isSelected = selectedQuickFilters.includes(filter.id)
              return (
                <Button
                  key={filter.id}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(filter.id, "quick")}
                  className="h-10 px-4"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {filter.label}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Active Filters */}
        {totalActiveFilters > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">Active Filters ({totalActiveFilters})</span>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* Category filters */}
              {selectedCategories.map((categoryId) => {
                const category = courseCategories.find((c) => c.id === categoryId)
                return category ? (
                  <Badge key={categoryId} variant="secondary" className="px-3 py-1">
                    {category.label}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => toggleFilter(categoryId, "categories")} />
                  </Badge>
                ) : null
              })}

              {/* Location filters */}
              {selectedLocations.map((locationId) => {
                const location = locations.find((l) => l.id === locationId)
                return location ? (
                  <Badge key={locationId} variant="secondary" className="px-3 py-1">
                    {location.label}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => toggleFilter(locationId, "locations")} />
                  </Badge>
                ) : null
              })}

              {/* Fee range filters */}
              {selectedFeeRanges.map((feeId) => {
                const fee = feeRanges.find((f) => f.id === feeId)
                return fee ? (
                  <Badge key={feeId} variant="secondary" className="px-3 py-1">
                    {fee.label}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => toggleFilter(feeId, "fees")} />
                  </Badge>
                ) : null
              })}

              {/* College type filters */}
              {selectedCollegeTypes.map((typeId) => {
                const type = collegeTypes.find((t) => t.id === typeId)
                return type ? (
                  <Badge key={typeId} variant="secondary" className="px-3 py-1">
                    {type.label}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => toggleFilter(typeId, "types")} />
                  </Badge>
                ) : null
              })}

              {/* Quick filters */}
              {selectedQuickFilters.map((filterId) => {
                const filter = quickFilters.find((f) => f.id === filterId)
                return filter ? (
                  <Badge key={filterId} variant="secondary" className="px-3 py-1">
                    {filter.label}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => toggleFilter(filterId, "quick")} />
                  </Badge>
                ) : null
              })}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </h3>
                  <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Course Categories */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Course Categories
                  </h4>
                  <div className="space-y-2">
                    {courseCategories.map((category) => (
                      <div
                        key={category.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                          selectedCategories.includes(category.id)
                            ? "bg-primary/5 border-primary/30"
                            : "hover:bg-card/80"
                        }`}
                        onClick={() => toggleFilter(category.id, "categories")}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{category.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Locations */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </h4>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div
                        key={location.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                          selectedLocations.includes(location.id)
                            ? "bg-primary/5 border-primary/30"
                            : "hover:bg-card/80"
                        }`}
                        onClick={() => toggleFilter(location.id, "locations")}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{location.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {location.count}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Fee Range */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Fee Range
                  </h4>
                  <div className="space-y-2">
                    {feeRanges.map((fee) => (
                      <div
                        key={fee.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                          selectedFeeRanges.includes(fee.id) ? "bg-primary/5 border-primary/30" : "hover:bg-card/80"
                        }`}
                        onClick={() => toggleFilter(fee.id, "fees")}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{fee.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {fee.count}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* College Type */}
                <div>
                  <h4 className="font-medium mb-3">College Type</h4>
                  <div className="space-y-2">
                    {collegeTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                          selectedCollegeTypes.includes(type.id) ? "bg-primary/5 border-primary/30" : "hover:bg-card/80"
                        }`}
                        onClick={() => toggleFilter(type.id, "types")}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{type.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {type.count}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Search Results</h2>
                <p className="text-muted-foreground">Found {mockColleges.length} colleges matching your criteria</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                  onClick={() => setSortBy("relevance")}
                >
                  <ArrowUpDown className="h-4 w-4" />
                  {sortOptions.find((opt) => opt.id === sortBy)?.label}
                </Button>
              </div>
            </div>

            {/* College Cards */}
            <div className="space-y-6">
              {mockColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  MapPin,
  Users,
  TrendingUp,
  DollarSign,
  Heart,
  Share2,
  ExternalLink,
  Award,
  Calendar,
  BookOpen,
  Building,
  Phone,
  Mail,
  Globe,
  ArrowLeft,
  CheckCircle,
  Target,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

// Mock detailed college data
const collegeData = {
  id: "iit-delhi",
  name: "Indian Institute of Technology Delhi",
  location: "New Delhi",
  state: "Delhi",
  type: "Government",
  establishedYear: 1961,
  rating: 4.8,
  reviewCount: 2847,
  courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
  fees: { min: 200000, max: 250000 },
  placement: { percentage: 95, averagePackage: 1800000, highestPackage: 5500000 },
  ranking: { nirf: 2, category: "Engineering" },
  image: "/iit-delhi-campus-modern-architecture-aerial-view.jpg",
  highlights: [
    "Top-tier faculty with international recognition",
    "State-of-the-art research facilities and labs",
    "Strong industry partnerships and internship programs",
    "Excellent alumni network in tech and business",
  ],
  accreditation: ["NAAC A++", "NBA"],
  contact: {
    phone: "+91-11-2659-1000",
    email: "admissions@admin.iitd.ac.in",
    website: "https://home.iitd.ac.in",
  },
  admissions: {
    process: "JEE Advanced",
    cutoff: "JEE Advanced Rank: 500-2000",
    seats: 1200,
    reservations: "As per Government norms",
  },
  facilities: [
    "Central Library with 4 lakh books",
    "24/7 Wi-Fi campus",
    "Sports complex with Olympic-size pool",
    "Modern hostels for 8000+ students",
    "Medical center with 24/7 emergency",
    "Multiple cafeterias and food courts",
  ],
  placements: {
    companies: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey", "Uber", "Adobe", "Intel"],
    sectors: ["Technology", "Consulting", "Finance", "Core Engineering", "Research"],
    internships: 98,
  },
}

export default function CollegeDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/search"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Search</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold">FuturX</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
            <img
              src={collegeData.image || "/placeholder.svg"}
              alt={collegeData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">{collegeData.name}</h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {collegeData.location}, {collegeData.state}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>{collegeData.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Est. {collegeData.establishedYear}</span>
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                <Award className="h-3 w-3 mr-1" />
                NIRF #{collegeData.ranking.nirf}
              </Badge>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{collegeData.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground">{collegeData.reviewCount} Reviews</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold text-green-600">{collegeData.placement.percentage}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Placement Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">
                    ₹{(collegeData.placement.averagePackage / 100000).toFixed(1)}L
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Avg Package</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span className="text-2xl font-bold text-secondary">{collegeData.admissions.seats}</span>
                </div>
                <p className="text-sm text-muted-foreground">Total Seats</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
            <TabsTrigger value="placements">Placements</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About the College</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Indian Institute of Technology Delhi is one of the premier engineering institutions in India.
                      Established in 1961, IIT Delhi has been a leader in engineering education and research. The
                      institute offers undergraduate, postgraduate, and doctoral programs in various fields of
                      engineering, science, and technology.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {collegeData.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Accreditation & Rankings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {collegeData.accreditation.map((acc, index) => (
                        <Badge key={index} variant="outline">
                          {acc}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">NIRF Engineering Ranking</span>
                        <span className="font-semibold">#{collegeData.ranking.nirf}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Target className="h-4 w-4 mr-2" />
                      Compare
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{collegeData.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{collegeData.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <a href={collegeData.contact.website} className="text-sm text-primary hover:underline">
                        Visit Website
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {collegeData.courses.map((course, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{course}</h4>
                            <p className="text-sm text-muted-foreground">4 Years • B.Tech</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admission Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Entrance Exam</h4>
                    <p className="text-muted-foreground">{collegeData.admissions.process}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cutoff Range</h4>
                    <p className="text-muted-foreground">{collegeData.admissions.cutoff}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Total Seats</h4>
                    <p className="text-muted-foreground">{collegeData.admissions.seats}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reservations</h4>
                    <p className="text-muted-foreground">{collegeData.admissions.reservations}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="placements" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Placement Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Placement Rate</span>
                      <span className="font-semibold">{collegeData.placement.percentage}%</span>
                    </div>
                    <Progress value={collegeData.placement.percentage} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Internship Rate</span>
                      <span className="font-semibold">{collegeData.placements.internships}%</span>
                    </div>
                    <Progress value={collegeData.placements.internships} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        ₹{(collegeData.placement.averagePackage / 100000).toFixed(1)}L
                      </div>
                      <div className="text-sm text-muted-foreground">Average Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">
                        ₹{(collegeData.placement.highestPackage / 100000).toFixed(1)}L
                      </div>
                      <div className="text-sm text-muted-foreground">Highest Package</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Recruiters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {collegeData.placements.companies.map((company, index) => (
                      <Badge key={index} variant="outline">
                        {company}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Popular Sectors</h4>
                    <div className="flex flex-wrap gap-2">
                      {collegeData.placements.sectors.map((sector, index) => (
                        <Badge key={index} variant="secondary">
                          {sector}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="facilities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Campus Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {collegeData.facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

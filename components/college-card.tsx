"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Link from "next/link"

interface CollegeCardProps {
  college: {
    id: string
    name: string
    location: string
    state: string
    type: "Government" | "Private" | "Deemed" | "Autonomous"
    establishedYear: number
    rating: number
    reviewCount: number
    courses: string[]
    fees: {
      min: number
      max: number
    }
    placement: {
      percentage: number
      averagePackage: number
      highestPackage: number
    }
    ranking: {
      nirf: number | null
      category: string
    }
    image: string
    highlights: string[]
    accreditation: string[]
    isRecommended?: boolean
    matchPercentage?: number
  }
}

export default function CollegeCard({ college }: CollegeCardProps) {
  const [isSaved, setIsSaved] = useState(false)

  const formatFees = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`
    }
    return `₹${(amount / 1000).toFixed(0)}K`
  }

  const formatPackage = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`
    }
    return `₹${(amount / 1000).toFixed(0)}K`
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 relative overflow-hidden">
      {college.isRecommended && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 animate-pulse-glow">
            <Award className="h-3 w-3 mr-1" />
            Recommended
          </Badge>
        </div>
      )}

      {college.matchPercentage && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
            {college.matchPercentage}% Match
          </Badge>
        </div>
      )}

      <CardContent className="p-0">
        {/* College Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
          <img
            src={college.image || "/placeholder.svg"}
            alt={college.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={() => setIsSaved(!isSaved)}
            >
              <Heart className={`h-4 w-4 ${isSaved ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* NIRF Ranking Badge */}
          {college.ranking.nirf && (
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                <Award className="h-3 w-3 mr-1" />
                NIRF #{college.ranking.nirf}
              </Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          {/* College Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-balance leading-tight mb-1 group-hover:text-primary transition-colors">
                  {college.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {college.location}, {college.state}
                  </span>
                  <span>•</span>
                  <Building className="h-4 w-4" />
                  <span>{college.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{college.rating}</span>
                <span className="text-muted-foreground text-sm">({college.reviewCount})</span>
              </div>
            </div>

            {/* College Type & Established */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                Est. {college.establishedYear}
              </Badge>
              {college.accreditation.map((acc, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {acc}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-card/50 rounded-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Fees</span>
              </div>
              <div className="text-lg font-bold text-primary">
                {formatFees(college.fees.min)} - {formatFees(college.fees.max)}
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Placement</span>
              </div>
              <div className="text-lg font-bold text-green-600">{college.placement.percentage}%</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Avg Package</span>
              </div>
              <div className="text-lg font-bold text-secondary">{formatPackage(college.placement.averagePackage)}</div>
            </div>
          </div>

          {/* Courses */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Popular Courses</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {college.courses.slice(0, 3).map((course, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {course}
                </Badge>
              ))}
              {college.courses.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{college.courses.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <div className="text-sm font-medium mb-2">Key Highlights</div>
            <ul className="space-y-1">
              {college.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link href={`/college/${college.id}`} className="flex-1">
              <Button className="w-full group">
                View Details
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" className="px-6 bg-transparent">
              Compare
            </Button>
            <Button
              variant="outline"
              className="px-6 bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary/30"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

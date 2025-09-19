"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Clock } from "lucide-react"

const trendingSearches = [
  "Computer Science Engineering",
  "Medical Colleges in Delhi",
  "MBA colleges under 5L",
  "Design courses in Mumbai",
  "Engineering colleges in Bangalore",
]

const recentSearches = ["IIT Delhi Computer Science", "AIIMS Medical", "BITS Pilani fees"]

const popularCategories = [
  { name: "Engineering", count: "1,250 colleges" },
  { name: "Medical", count: "890 colleges" },
  { name: "Business", count: "670 colleges" },
  { name: "Arts & Design", count: "450 colleges" },
]

interface SearchSuggestionsProps {
  query: string
  onSuggestionClick: (suggestion: string) => void
}

export default function SearchSuggestions({ query, onSuggestionClick }: SearchSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    if (query.length > 0) {
      // Simulate API call for suggestions
      const mockSuggestions = [
        `${query} colleges in Delhi`,
        `${query} fees and admission`,
        `${query} placement statistics`,
        `${query} course details`,
        `${query} eligibility criteria`,
      ]
      setSuggestions(mockSuggestions.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }, [query])

  if (query.length === 0) {
    return (
      <Card className="absolute top-full left-0 right-0 mt-2 z-50 border-2">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Trending Searches */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">Trending Searches</span>
              </div>
              <div className="space-y-2">
                {trendingSearches.map((search, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/80 cursor-pointer transition-colors"
                    onClick={() => onSuggestionClick(search)}
                  >
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{search}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-sm">Recent Searches</span>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/80 cursor-pointer transition-colors"
                      onClick={() => onSuggestionClick(search)}
                    >
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{search}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Categories */}
            <div>
              <span className="font-medium text-sm mb-3 block">Popular Categories</span>
              <div className="flex flex-wrap gap-2">
                {popularCategories.map((category, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary/10 hover:border-primary/30"
                    onClick={() => onSuggestionClick(category.name)}
                  >
                    {category.name}
                    <span className="ml-1 text-xs text-muted-foreground">{category.count}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="absolute top-full left-0 right-0 mt-2 z-50 border-2">
      <CardContent className="p-4">
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/80 cursor-pointer transition-colors"
              onClick={() => onSuggestionClick(suggestion)}
            >
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{suggestion}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

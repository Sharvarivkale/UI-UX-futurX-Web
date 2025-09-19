"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Sparkles, Target, MapPin } from "lucide-react"
import Link from "next/link"

const onboardingSteps = [
  {
    id: "welcome",
    title: "Welcome to FuturX!",
    subtitle: "Your AI-powered college discovery companion",
    content: "welcome",
  },
  {
    id: "interests",
    title: "What excites you most?",
    subtitle: "Help us understand your passions",
    content: "interests",
  },
  {
    id: "goals",
    title: "What are your career goals?",
    subtitle: "Tell us about your dream future",
    content: "goals",
  },
  {
    id: "preferences",
    title: "Your study preferences",
    subtitle: "Location, budget, and lifestyle choices",
    content: "preferences",
  },
  {
    id: "complete",
    title: "You're all set!",
    subtitle: "Let's find your perfect college match",
    content: "complete",
  },
]

const interestOptions = [
  { id: "tech", label: "Technology & Programming", icon: "💻", color: "bg-blue-100 text-blue-700 border-blue-200" },
  {
    id: "business",
    label: "Business & Entrepreneurship",
    icon: "💼",
    color: "bg-green-100 text-green-700 border-green-200",
  },
  { id: "arts", label: "Arts & Design", icon: "🎨", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { id: "science", label: "Science & Research", icon: "🔬", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  { id: "medicine", label: "Healthcare & Medicine", icon: "🏥", color: "bg-red-100 text-red-700 border-red-200" },
  { id: "engineering", label: "Engineering", icon: "⚙️", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { id: "social", label: "Social Sciences", icon: "🌍", color: "bg-teal-100 text-teal-700 border-teal-200" },
  { id: "media", label: "Media & Communication", icon: "📺", color: "bg-pink-100 text-pink-700 border-pink-200" },
]

const goalOptions = [
  { id: "startup", label: "Start my own company", icon: "🚀" },
  { id: "corporate", label: "Work at top companies", icon: "🏢" },
  { id: "research", label: "Pursue research & PhD", icon: "🎓" },
  { id: "creative", label: "Creative & artistic career", icon: "🎭" },
  { id: "social", label: "Make social impact", icon: "🌟" },
  { id: "freelance", label: "Freelance & consulting", icon: "💼" },
]

const locationOptions = [
  { id: "metro", label: "Metro Cities", icon: "🏙️" },
  { id: "tier2", label: "Tier 2 Cities", icon: "🌆" },
  { id: "anywhere", label: "Anywhere in India", icon: "🇮🇳" },
  { id: "abroad", label: "International", icon: "🌍" },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string>("")

  const progress = ((currentStep + 1) / onboardingSteps.length) * 100

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId],
    )
  }

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) => (prev.includes(goalId) ? prev.filter((id) => id !== goalId) : [...prev, goalId]))
  }

  const currentStepData = onboardingSteps[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <div className="border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold">FuturX</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {onboardingSteps.length}
            </span>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">{currentStepData.title}</h1>
          <p className="text-xl text-muted-foreground text-balance">{currentStepData.subtitle}</p>
        </div>

        <Card className="border-2 hover:border-primary/20 transition-colors">
          <CardContent className="p-8">
            {/* Welcome Step */}
            {currentStepData.content === "welcome" && (
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-float">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Meet your AI guide!</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                    I'm here to help you discover colleges and courses that perfectly match your interests, goals, and
                    preferences. This quick 3-minute setup will personalize your entire experience.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    <Badge variant="secondary" className="px-3 py-1">
                      🎯 Personalized recommendations
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      🤖 AI-powered matching
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      📊 Smart comparisons
                    </Badge>
                  </div>
                </div>
              </div>
            )}

            {/* Interests Step */}
            {currentStepData.content === "interests" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select all areas that interest you. Don't worry, you can always change these later!
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interestOptions.map((interest) => (
                    <Card
                      key={interest.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedInterests.includes(interest.id)
                          ? "ring-2 ring-primary bg-primary/5"
                          : "hover:bg-card/80"
                      }`}
                      onClick={() => toggleInterest(interest.id)}
                    >
                      <CardContent className="p-4 flex items-center space-x-3">
                        <span className="text-2xl">{interest.icon}</span>
                        <span className="font-medium">{interest.label}</span>
                        {selectedInterests.includes(interest.id) && (
                          <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Selected: {selectedInterests.length} interests
                </p>
              </div>
            )}

            {/* Goals Step */}
            {currentStepData.content === "goals" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    What do you see yourself doing after graduation? Pick your top career aspirations.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goalOptions.map((goal) => (
                    <Card
                      key={goal.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedGoals.includes(goal.id) ? "ring-2 ring-secondary bg-secondary/5" : "hover:bg-card/80"
                      }`}
                      onClick={() => toggleGoal(goal.id)}
                    >
                      <CardContent className="p-4 flex items-center space-x-3">
                        <span className="text-2xl">{goal.icon}</span>
                        <span className="font-medium">{goal.label}</span>
                        {selectedGoals.includes(goal.id) && (
                          <div className="ml-auto w-2 h-2 bg-secondary rounded-full"></div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground">Selected: {selectedGoals.length} goals</p>
              </div>
            )}

            {/* Preferences Step */}
            {currentStepData.content === "preferences" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Let's talk about your study preferences and lifestyle choices.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Preferred study location</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {locationOptions.map((location) => (
                        <Card
                          key={location.id}
                          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                            selectedLocation === location.id ? "ring-2 ring-accent bg-accent/5" : "hover:bg-card/80"
                          }`}
                          onClick={() => setSelectedLocation(location.id)}
                        >
                          <CardContent className="p-4 flex items-center space-x-3">
                            <span className="text-xl">{location.icon}</span>
                            <span className="font-medium">{location.label}</span>
                            {selectedLocation === location.id && (
                              <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Complete Step */}
            {currentStepData.content === "complete" && (
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Perfect! Your profile is ready</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                    Based on your preferences, I've prepared personalized college recommendations just for you. Let's
                    explore your perfect matches!
                  </p>
                  <div className="bg-card/50 rounded-lg p-6 max-w-md mx-auto">
                    <h4 className="font-semibold mb-3">Your Profile Summary:</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• {selectedInterests.length} interests selected</p>
                      <p>• {selectedGoals.length} career goals identified</p>
                      <p>• Location preference set</p>
                      <p>• Ready for AI matching!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>

          <div className="flex space-x-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index <= currentStep ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>

          {currentStep === onboardingSteps.length - 1 ? (
            <Link href="/dashboard">
              <Button className="flex items-center space-x-2 animate-pulse-glow">
                <span>Start Exploring</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button
              onClick={handleNext}
              className="flex items-center space-x-2"
              disabled={
                (currentStepData.content === "interests" && selectedInterests.length === 0) ||
                (currentStepData.content === "goals" && selectedGoals.length === 0) ||
                (currentStepData.content === "preferences" && !selectedLocation)
              }
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

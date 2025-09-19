"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  BookOpen,
  Heart,
  TrendingUp,
  MapPin,
  Star,
  ArrowRight,
  Target,
  Clock,
  Users,
  Calendar,
  CheckCircle,
  Zap,
  Trophy,
  Flame,
  Bell,
  Settings,
  BarChart3,
  Lightbulb,
  FileText,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FuturXBuddyChat } from "@/components/futurx-buddy-chat"
import { GamificationElements } from "@/components/gamification-elements"

// Mock user data
const userData = {
  name: "Priya Sharma",
  level: 3,
  xp: 2450,
  xpToNext: 3000,
  streak: 7,
  badges: [
    { id: "explorer", name: "Explorer", icon: "🎯", description: "Viewed 10+ colleges", unlocked: true },
    { id: "researcher", name: "Researcher", icon: "📚", description: "Compared 5 colleges", unlocked: true },
    { id: "networker", name: "Networker", icon: "🤝", description: "Connected with 3 alumni", unlocked: true },
    { id: "applicant", name: "Applicant", icon: "🎓", description: "Submit first application", unlocked: false },
    { id: "scholar", name: "Scholar", icon: "⭐", description: "Complete profile 100%", unlocked: false },
  ],
  interests: ["Computer Science", "Artificial Intelligence", "Robotics"],
  goals: ["Work at top tech companies", "Pursue research"],
  preferences: {
    location: "Metro Cities",
    budget: "₹3L - ₹5L",
    type: "Government & Private",
  },
}

const personalizedRecommendations = [
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    location: "Mumbai",
    course: "Computer Science",
    match: 98,
    reason: "Perfect match for AI interests",
    rating: 4.9,
    fees: "₹2.5L",
    placement: "96%",
    image: "/iit-bombay-campus.jpg",
  },
  {
    id: "iisc-bangalore",
    name: "IISc Bangalore",
    location: "Bangalore",
    course: "Computer Science",
    match: 95,
    reason: "Excellent research opportunities",
    rating: 4.8,
    fees: "₹2.2L",
    placement: "94%",
    image: "/iisc-bangalore-campus.jpg",
  },
  {
    id: "iit-kanpur",
    name: "IIT Kanpur",
    location: "Kanpur",
    course: "Computer Science",
    match: 92,
    reason: "Strong AI/ML program",
    rating: 4.7,
    fees: "₹2.4L",
    placement: "93%",
    image: "/iit-kanpur-campus.jpg",
  },
]

const recentActivity = [
  { action: "Viewed", target: "IIT Delhi Computer Science", time: "2 hours ago", icon: Search },
  { action: "Saved", target: "BITS Pilani", time: "1 day ago", icon: Heart },
  { action: "Compared", target: "3 engineering colleges", time: "2 days ago", icon: BarChart3 },
  { action: "Downloaded", target: "IIT Bombay brochure", time: "3 days ago", icon: FileText },
  { action: "Connected", target: "Alumni from Google", time: "5 days ago", icon: Users },
]

const upcomingDeadlines = [
  { exam: "JEE Advanced", date: "May 28, 2024", daysLeft: 45, type: "exam" },
  { exam: "BITSAT", date: "June 15, 2024", daysLeft: 63, type: "exam" },
  { exam: "VITEEE", date: "April 20, 2024", daysLeft: 8, type: "exam" },
]

const learningPath = [
  { title: "Understanding College Rankings", completed: true, xp: 50 },
  { title: "Decoding Placement Statistics", completed: true, xp: 75 },
  { title: "Financial Planning for Education", completed: false, xp: 100 },
  { title: "Application Essay Writing", completed: false, xp: 125 },
  { title: "Interview Preparation", completed: false, xp: 150 },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const completedLearning = learningPath.filter((item) => item.completed).length
  const learningProgress = (completedLearning / learningPath.length) * 100

  const achievements = [
    {
      id: "explorer",
      title: "Explorer",
      description: "Viewed 10+ colleges",
      icon: <Target className="h-4 w-4" />,
      unlocked: true,
    },
    {
      id: "researcher",
      title: "Researcher",
      description: "Compared 5 colleges",
      icon: <BookOpen className="h-4 w-4" />,
      unlocked: true,
    },
    {
      id: "networker",
      title: "Networker",
      description: "Connected with 3 alumni",
      icon: <Users className="h-4 w-4" />,
      unlocked: true,
    },
    {
      id: "applicant",
      title: "Applicant",
      description: "Submit first application",
      icon: <FileText className="h-4 w-4" />,
      unlocked: false,
      progress: 1,
      maxProgress: 3,
    },
    {
      id: "scholar",
      title: "Scholar",
      description: "Complete profile 100%",
      icon: <Star className="h-4 w-4" />,
      unlocked: false,
      progress: 85,
      maxProgress: 100,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/futurx-logo.png" alt="FuturX" width={120} height={32} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
              Search
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
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">P</span>
              </div>
              <span className="text-sm font-medium">{userData.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section with Gamification */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {userData.name}!</h1>
              <p className="text-xl text-muted-foreground">Continue your college discovery journey</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">Level {userData.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-sm">{userData.streak} day streak</span>
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progress to Level {userData.level + 1}</span>
                <span className="text-sm text-muted-foreground">
                  {userData.xp} / {userData.xpToNext} XP
                </span>
              </div>
              <Progress value={(userData.xp / userData.xpToNext) * 100} className="h-3" />
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>Keep exploring to earn more XP!</span>
                <span>{userData.xpToNext - userData.xp} XP to next level</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="recommendations">For You</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Link href="/search">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Search Colleges</h3>
                    <p className="text-sm text-muted-foreground">Find your perfect match</p>
                  </CardContent>
                </Card>
              </Link>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Course Guide</h3>
                  <p className="text-sm text-muted-foreground">Explore career paths</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Saved Colleges</h3>
                  <p className="text-sm text-muted-foreground">Your favorites (5)</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Progress</h3>
                  <p className="text-sm text-muted-foreground">Track your journey</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Progress Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Your College Discovery Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Profile Completion</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">12</div>
                        <div className="text-sm text-muted-foreground">Colleges Explored</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">5</div>
                        <div className="text-sm text-muted-foreground">Saved Favorites</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">3</div>
                        <div className="text-sm text-muted-foreground">Applications Started</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Recommendations Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Top Recommendations</span>
                      <Button variant="ghost" size="sm" onClick={() => setActiveTab("recommendations")}>
                        View All
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {personalizedRecommendations.slice(0, 2).map((college) => (
                      <div
                        key={college.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-card/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-primary">{college.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{college.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span>{college.location}</span>
                              <span>•</span>
                              <span>{college.course}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                {college.match}% Match
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs">{college.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar with Enhanced Gamification */}
              <div className="space-y-6">
                <GamificationElements
                  userLevel={userData.level}
                  xp={userData.xp}
                  nextLevelXp={userData.xpToNext}
                  achievements={achievements}
                  streak={userData.streak}
                />

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentActivity.slice(0, 4).map((activity, index) => {
                      const Icon = activity.icon
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="h-3 w-3 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm">
                              <span className="font-medium">{activity.action}</span> {activity.target}
                            </div>
                            <div className="text-muted-foreground text-xs">{activity.time}</div>
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>

                {/* Quick Tip */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      Quick Tip
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Complete your profile to get better recommendations. Add your academic scores and extracurricular
                      activities for more accurate matches.
                    </p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Complete Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Personalized Recommendations</h2>
              <p className="text-muted-foreground">
                Based on your interests in {userData.interests.join(", ")} and career goals
              </p>
            </div>

            <div className="grid gap-6">
              {personalizedRecommendations.map((college) => (
                <Card key={college.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-primary text-xl">{college.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{college.name}</h3>
                            <Badge className="bg-green-100 text-green-700 border-green-200">
                              <Zap className="h-3 w-3 mr-1" />
                              {college.match}% Match
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{college.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              <span>{college.course}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{college.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-primary font-medium mb-3">{college.reason}</p>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline">{college.fees} fees</Badge>
                            <Badge variant="outline">{college.placement} placement</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm">View Details</Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Heart className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Achievement Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userData.badges.map((badge) => (
                    <div key={badge.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            badge.unlocked ? "bg-yellow-100" : "bg-gray-100"
                          }`}
                        >
                          <span className="text-lg">{badge.icon}</span>
                        </div>
                        <div>
                          <div className="font-medium">{badge.name}</div>
                          <div className="text-sm text-muted-foreground">{badge.description}</div>
                        </div>
                      </div>
                      {badge.unlocked ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Path Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">{Math.round(learningProgress)}%</span>
                  </div>
                  <Progress value={learningProgress} className="h-2 mb-6" />

                  {learningPath.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            item.completed ? "bg-green-100" : "bg-gray-100"
                          }`}
                        >
                          {item.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <span className="text-sm font-medium">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">+{item.xp} XP</div>
                        </div>
                      </div>
                      {!item.completed && (
                        <Button size="sm" variant="outline">
                          Start
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deadlines" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 border rounded-lg ${
                      deadline.daysLeft <= 10 ? "border-red-200 bg-red-50" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          deadline.daysLeft <= 10 ? "bg-red-100" : "bg-primary/10"
                        }`}
                      >
                        <Calendar className={`h-6 w-6 ${deadline.daysLeft <= 10 ? "text-red-600" : "text-primary"}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{deadline.exam}</h4>
                        <p className="text-sm text-muted-foreground">{deadline.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${deadline.daysLeft <= 10 ? "text-red-600" : "text-primary"}`}>
                        {deadline.daysLeft} days
                      </div>
                      <div className="text-sm text-muted-foreground">remaining</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Learning Path</h2>
              <p className="text-muted-foreground">Complete modules to earn XP and unlock achievements</p>
            </div>

            <div className="grid gap-4">
              {learningPath.map((item, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-300 ${
                    item.completed ? "bg-green-50 border-green-200" : "hover:shadow-md"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            item.completed ? "bg-green-100" : "bg-primary/10"
                          }`}
                        >
                          {item.completed ? (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          ) : (
                            <BookOpen className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              +{item.xp} XP
                            </Badge>
                            {item.completed && (
                              <Badge className="text-xs bg-green-100 text-green-700 border-green-200">Completed</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      {!item.completed && (
                        <Button>
                          Start Learning
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <FuturXBuddyChat />
    </div>
  )
}

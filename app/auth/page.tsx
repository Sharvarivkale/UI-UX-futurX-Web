"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Mail, Phone, Chrome, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup")
  const [signupMethod, setSignupMethod] = useState<"email" | "phone" | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 mb-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold">FuturX</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{authMode === "signup" ? "Start Your Journey" : "Welcome Back"}</h1>
          <p className="text-muted-foreground">
            {authMode === "signup"
              ? "Create your account to discover your perfect college match"
              : "Sign in to continue your college search"}
          </p>
        </div>

        <Card className="border-2 hover:border-primary/20 transition-colors">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex space-x-1 bg-muted p-1 rounded-lg">
              <Button
                variant={authMode === "signup" ? "default" : "ghost"}
                size="sm"
                className="flex-1"
                onClick={() => setAuthMode("signup")}
              >
                Sign Up
              </Button>
              <Button
                variant={authMode === "signin" ? "default" : "ghost"}
                size="sm"
                className="flex-1"
                onClick={() => setAuthMode("signin")}
              >
                Sign In
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {authMode === "signup" && !signupMethod && (
              <>
                <Button
                  variant="outline"
                  className="w-full h-12 text-left justify-start space-x-3 hover:bg-primary/5 hover:border-primary/30 bg-transparent"
                  onClick={() => setSignupMethod("email")}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Continue with Email</span>
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-left justify-start space-x-3 hover:bg-primary/5 hover:border-primary/30 bg-transparent"
                  onClick={() => setSignupMethod("phone")}
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Continue with Phone</span>
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full h-12 text-left justify-start space-x-3 hover:bg-primary/5 hover:border-primary/30 bg-transparent"
                >
                  <Chrome className="h-5 w-5 text-primary" />
                  <span>Continue with Google</span>
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Button>
              </>
            )}

            {(authMode === "signin" || signupMethod) && (
              <>
                {signupMethod === "email" && (
                  <div className="space-y-4">
                    <Button variant="ghost" size="sm" className="mb-2" onClick={() => setSignupMethod(null)}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to options
                    </Button>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a strong password" />
                    </div>
                    <Button className="w-full" size="lg">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {signupMethod === "phone" && (
                  <div className="space-y-4">
                    <Button variant="ghost" size="sm" className="mb-2" onClick={() => setSignupMethod(null)}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to options
                    </Button>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <Button className="w-full" size="lg">
                      Send OTP
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {authMode === "signin" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input id="signin-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <Input id="signin-password" type="password" placeholder="Your password" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <Link href="#" className="text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Button className="w-full" size="lg">
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            )}

            <div className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="#" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

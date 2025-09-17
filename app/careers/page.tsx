import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Coffee, Gamepad2 } from "lucide-react"

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Professional development budget, training programs, and conference attendance",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous vacation policy",
    },
    {
      icon: Gamepad2,
      title: "Fun & Culture",
      description: "Team events, game rooms, free snacks, and a vibrant office culture",
    },
  ]

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Karachi",
      type: "Full-time",
      description: "Join our engineering team to build scalable e-commerce solutions using modern technologies.",
      requirements: ["5+ years experience", "React/Node.js", "Cloud platforms", "Team leadership"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Lahore",
      type: "Full-time",
      description: "Lead product strategy and development for our mobile and web platforms.",
      requirements: ["3+ years PM experience", "E-commerce background", "Data-driven mindset", "User research"],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Islamabad",
      type: "Full-time",
      description: "Drive customer acquisition and engagement through digital marketing campaigns.",
      requirements: ["2+ years marketing", "Google Ads/Facebook", "Analytics tools", "Creative thinking"],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Ensure customer satisfaction and drive retention through exceptional service.",
      requirements: ["Customer service experience", "Communication skills", "Problem-solving", "CRM tools"],
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Karachi",
      type: "Full-time",
      description: "Analyze business data to drive insights and support strategic decision-making.",
      requirements: ["SQL/Python", "Data visualization", "Statistics", "Business acumen"],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Lahore",
      type: "Full-time",
      description: "Create intuitive and beautiful user experiences for our e-commerce platform.",
      requirements: ["Design portfolio", "Figma/Sketch", "User research", "Mobile design"],
    },
  ]

  const departments = [
    { name: "Engineering", count: 12, description: "Building the future of e-commerce technology" },
    { name: "Product", count: 5, description: "Defining product strategy and user experience" },
    { name: "Marketing", count: 8, description: "Growing our brand and customer base" },
    { name: "Operations", count: 15, description: "Ensuring smooth operations and logistics" },
    { name: "Customer Success", count: 10, description: "Delivering exceptional customer experiences" },
    { name: "Data & Analytics", count: 4, description: "Driving insights through data analysis" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Careers at EcomPK</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join Pakistan's leading e-commerce platform and help us revolutionize online shopping across the country.
            </p>
          </div>

          {/* Hero Section */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Build the Future of E-commerce</h2>
                  <p className="text-muted-foreground mb-4">
                    At EcomPK, we're not just building an e-commerce platform – we're creating the future of retail in
                    Pakistan. Join our passionate team of innovators, creators, and problem-solvers.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    We believe in empowering our team members to do their best work, grow their careers, and make a
                    meaningful impact on millions of customers across Pakistan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <a href="#open-positions">View Open Positions</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/about">Learn About Us</a>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img src="/diverse-team-office.png" alt="EcomPK Team" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Work With Us */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">Why Work With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Departments */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Our Departments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{dept.name}</h3>
                      <Badge variant="secondary">{dept.count} roles</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Open Positions */}
          <div id="open-positions">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Open Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {openPositions.map((position, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{position.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {position.department}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {position.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {position.type}
                            </div>
                          </div>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div>
                        <h4 className="font-medium mb-2">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <Badge key={reqIndex} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Process */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Our Hiring Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Apply Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your application and resume through our careers portal
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Initial Screening</h3>
                  <p className="text-sm text-muted-foreground">
                    HR team reviews your application and conducts initial screening
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Technical Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    Technical assessment and interview with the hiring team
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Final Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    Final interview with leadership team and offer discussion
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Culture & Values */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Our Culture & Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">What We Believe In</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        <strong>Innovation:</strong> We embrace new ideas and technologies to solve complex problems
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        <strong>Collaboration:</strong> We work together as one team to achieve common goals
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        <strong>Excellence:</strong> We strive for excellence in everything we do
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        <strong>Impact:</strong> We measure success by the positive impact we create
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">What You Can Expect</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Opportunity to work on challenging and meaningful projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Supportive environment that encourages learning and growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Diverse and inclusive workplace that values different perspectives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Competitive compensation and comprehensive benefits package</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our
                team. Send us your resume and let's talk!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="mailto:careers@ecompk.com">Send Your Resume</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">Contact HR Team</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}

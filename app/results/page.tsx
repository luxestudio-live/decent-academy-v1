"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Trophy, Medal, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ResultYear = "2024" | "2023" | "2022"

const resultsData = {
  "2024": {
    highlights: [
      { label: "Top Scorer", value: "99.8%", category: "10th Board" },
      { label: "JEE Mains", value: "AIR 245", category: "12th Science" },
      { label: "CET Topper", value: "State Rank 12", category: "MHT-CET" },
      { label: "NEET Success", value: "AIR 1250", category: "Medical" },
    ],
    toppers: [
      {
        name: "Priya Sharma",
        standard: "10th Standard",
        score: "99.8%",
        rank: "School Topper",
        image: "/decent-academy-v1/student-10th-topper.jpg",
        subjects: ["Math: 100", "Science: 100", "English: 99"],
      },
      {
        name: "Rahul Patil",
        standard: "12th Science",
        score: "AIR 245",
        rank: "JEE Mains",
        image: "/decent-academy-v1/student-jee-topper.jpg",
        subjects: ["Physics: 98", "Chemistry: 97", "Math: 99"],
      },
      {
        name: "Ananya Desai",
        standard: "12th Science",
        score: "State Rank 12",
        rank: "MHT-CET",
        image: "/decent-academy-v1/student-cet-topper.jpg",
        subjects: ["PCM: 189/200"],
      },
      {
        name: "Arjun Kulkarni",
        standard: "12th Science",
        score: "AIR 1250",
        rank: "NEET",
        image: "/decent-academy-v1/student-neet-success.jpg",
        subjects: ["Biology: 340", "Chemistry: 115", "Physics: 110"],
      },
      {
        name: "Sneha Joshi",
        standard: "12th Commerce",
        score: "95.6%",
        rank: "Board Topper",
        image: "/decent-academy-v1/student-commerce-topper.jpg",
        subjects: ["Accounts: 98", "Economics: 96", "Maths: 94"],
      },
      {
        name: "Vikram Naik",
        standard: "10th Standard",
        score: "98.4%",
        rank: "District Rank 5",
        image: "/decent-academy-v1/student-10th-ranker.jpg",
        subjects: ["All subjects above 95%"],
      },
    ],
    statistics: {
      "10th": { total: 145, above90: 128, above75: 142, passRate: 100 },
      "12th": { total: 168, above90: 95, above75: 155, passRate: 99.4 },
    },
  },
  "2023": {
    highlights: [
      { label: "Top Scorer", value: "99.2%", category: "10th Board" },
      { label: "JEE Mains", value: "AIR 389", category: "12th Science" },
      { label: "CET Topper", value: "State Rank 28", category: "MHT-CET" },
      { label: "Success Rate", value: "98.8%", category: "Overall" },
    ],
    toppers: [
      {
        name: "Aditya Khare",
        standard: "10th Standard",
        score: "99.2%",
        rank: "School Topper",
        image: "/decent-academy-v1/student-2023-10th.jpg",
        subjects: ["Science: 100", "Math: 100", "Social: 98"],
      },
      {
        name: "Divya Sawant",
        standard: "12th Science",
        score: "AIR 389",
        rank: "JEE Mains",
        image: "/decent-academy-v1/student-2023-jee.jpg",
        subjects: ["Math: 97", "Physics: 96", "Chemistry: 95"],
      },
      {
        name: "Rohan Marathe",
        standard: "12th Science",
        score: "State Rank 28",
        rank: "MHT-CET",
        image: "/decent-academy-v1/student-2023-cet.jpg",
        subjects: ["PCM: 185/200"],
      },
      {
        name: "Neha Pandey",
        standard: "12th Commerce",
        score: "96.2%",
        rank: "Board Distinction",
        image: "/decent-academy-v1/student-2023-commerce.jpg",
        subjects: ["Economics: 99", "Accounts: 97", "BST: 94"],
      },
    ],
    statistics: {
      "10th": { total: 138, above90: 118, above75: 135, passRate: 100 },
      "12th": { total: 152, above90: 88, above75: 145, passRate: 98.8 },
    },
  },
  "2022": {
    highlights: [
      { label: "Top Scorer", value: "98.8%", category: "10th Board" },
      { label: "JEE Success", value: "AIR 512", category: "12th Science" },
      { label: "State Ranks", value: "15+ Under 50", category: "MHT-CET" },
      { label: "Excellence", value: "95%+", category: "Success Rate" },
    ],
    toppers: [
      {
        name: "Siddharth More",
        standard: "10th Standard",
        score: "98.8%",
        rank: "School Topper",
        image: "/decent-academy-v1/student-2022-10th.jpg",
        subjects: ["Math: 100", "Science: 99", "English: 98"],
      },
      {
        name: "Ishita Kapoor",
        standard: "12th Science",
        score: "AIR 512",
        rank: "JEE Mains",
        image: "/decent-academy-v1/student-2022-jee.jpg",
        subjects: ["Chemistry: 98", "Math: 96", "Physics: 94"],
      },
      {
        name: "Manish Deshpande",
        standard: "12th Science",
        score: "State Rank 35",
        rank: "MHT-CET",
        image: "/decent-academy-v1/student-2022-cet.jpg",
        subjects: ["Overall: 182/200"],
      },
    ],
    statistics: {
      "10th": { total: 125, above90: 105, above75: 122, passRate: 100 },
      "12th": { total: 142, above90: 78, above75: 135, passRate: 95.7 },
    },
  },
}

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState<ResultYear>("2024")
  const results = resultsData[selectedYear]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium border border-primary/20">
              <Trophy className="w-4 h-4" />
              <span>Celebrating Excellence Since 2010</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              Outstanding
              <span className="block mt-2 text-primary">Results & Achievements</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our students' success stories that inspire and motivate
            </p>
          </div>
        </div>
      </section>

      {/* Year Selector */}
      <section className="py-8 bg-background/95 backdrop-blur-lg border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="text-foreground/80 font-medium">Select Year:</span>
            <Select value={selectedYear} onValueChange={(value) => setSelectedYear(value as ResultYear)}>
              <SelectTrigger className="w-48 border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024 Results</SelectItem>
                <SelectItem value="2023">2023 Results</SelectItem>
                <SelectItem value="2022">2022 Results</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {selectedYear}
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Year Highlights
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {results.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border border-border/50 hover:border-primary/50 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">{highlight.category}</div>
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {highlight.value}
                  </div>
                  <div className="text-sm font-medium text-foreground/80">{highlight.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Toppers Gallery */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <Medal className="inline-block w-8 h-8 text-secondary mr-2" />
              Top Performers
            </h3>
            <p className="text-muted-foreground text-lg">Celebrating our star achievers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {results.toppers.map((topper, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-muted">
                  <img
                    src={topper.image || "/placeholder.svg"}
                    alt={topper.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span>{index + 1}</span>
                  </div>
                </div>

                <div className="p-8 -mt-16 relative z-10">
                  {/* Score Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg mb-4 shadow-lg">
                    <Star className="w-5 h-5" />
                    <span>{topper.score}</span>
                  </div>

                  {/* Name & Details */}
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {topper.name}
                  </h4>
                  <p className="text-primary font-semibold mb-1">{topper.rank}</p>
                  <p className="text-sm text-muted-foreground mb-4">{topper.standard}</p>

                  {/* Subject Scores */}
                  <div className="pt-4 border-t border-border/50">
                    <h5 className="text-xs font-semibold text-muted-foreground uppercase mb-3">Subject Scores</h5>
                    <div className="space-y-2">
                      {topper.subjects.map((subject, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-sm text-foreground/80">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Overall
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Performance Statistics
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(results.statistics).map(([standard, stats], index) => (
              <div
                key={standard}
                className="group bg-card rounded-3xl border border-border/50 hover:border-primary/50 p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <h3 className="text-3xl font-bold mb-8 text-center group-hover:text-primary transition-colors duration-300">
                  {standard === "10th" ? "10th Standard" : "11th & 12th"}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/80">Total Students</span>
                    <span className="text-2xl font-bold text-primary">{stats.total}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/80">Above 90%</span>
                    <span className="text-2xl font-bold text-accent">{stats.above90}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/80">Above 75%</span>
                    <span className="text-2xl font-bold text-secondary">{stats.above75}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-foreground/80 font-semibold">Pass Rate</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stats.passRate}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

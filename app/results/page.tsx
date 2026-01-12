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
      { label: "Students Above 90%", value: "16", category: "SSC Toppers" },
      { label: "Students Above 85%", value: "35", category: "SSC Results" },
      { label: "Students Above 80%", value: "51", category: "Overall Excellence" },
      { label: "Success Rate", value: "100%", category: "Pass Percentage" },
    ],
    featuredToppers: [
      {
        name: "Hrithik Pandey",
        standard: "NEET-2023",
        score: "681/720",
        rank: "AIR - 1499",
        category: "Medical",
        subjects: ["Medical Entrance"],
      },
      {
        name: "Ritesh Vishwakarma",
        standard: "NEET-2022",
        score: "645/720",
        rank: "AIR - 5333",
        category: "Medical",
        subjects: ["Grant Medical College - Sir J.J. Hospital Mumbai"],
      },
      {
        name: "Rudra Vengurlekar",
        standard: "JEE-ADV 2021",
        score: "98.33%",
        rank: "AIR - 8025 • Gold Medal",
        category: "Engineering",
        subjects: ["ITI GANDHINAGAR CHEMICAL ENGG."],
      },
      {
        name: "Riddhi Bhor",
        standard: "MHT-CET 2023",
        score: "99.46%",
        rank: "VIT Pune-Chem Eng",
        category: "Engineering",
        subjects: ["Vishwakarma Institute of Technology"],
      },
    ],
    sscToppers: [
      { name: "Sanskruti M.", score: "96.20%", rank: "1st", standard: "PBAG" },
      { name: "Vaibhavi K.", score: "95.00%", rank: "1st", standard: "ADARSH" },
      { name: "Vedant G.", score: "94.50%", rank: "3rd", standard: "PBAG" },
      { name: "Kunal R.", score: "93.50%", rank: "2nd", standard: "ADARSH" },
      { name: "Aaiya D.", score: "93.00%", standard: "PBAG" },
      { name: "Aayesha P.", score: "92.20%", standard: "PBAG" },
      { name: "Rehan S.", score: "92.00%", rank: "1st", standard: "HKVEEVAN" },
      { name: "Samarth P.", score: "91.50%", rank: "2nd", standard: "HKVEEVAN" },
      { name: "Rohana R.", score: "91.60%", standard: "PBAG" },
      { name: "Tanvi R.", score: "91.00%", standard: "OXFORD" },
      { name: "Parth R.", score: "90.00%", standard: "PBAG" },
      { name: "Aarchi S.", score: "90.00%", standard: "PBAG" },
      { name: "Yashshree S.", score: "90.00%", standard: "PBAG" },
      { name: "Sai M.", score: "90.00%", standard: "OXFORD" },
      { name: "Siddhi M.", score: "90.00%", standard: "ADARSH" },
      { name: "Varad D.", score: "90.00%", standard: "ADARSH" },
    ],
    commerceToppers: [
      { name: "Soham G.", score: "96.00%", college: "JHUNJHUNWALA COLLEGE" },
      { name: "Roshni S.", score: "92.75%", college: "NES COLLEGE" },
      { name: "Riya B.", score: "88.50%", college: "MCC COLLEGE" },
      { name: "Harsh J.", score: "86.25%", college: "MCC COLLEGE" },
      { name: "Sarthak S.", score: "86.25%", college: "MCC COLLEGE" },
      { name: "Sandeep P.", score: "84.00%", college: "DAV COLLEGE" },
    ],
    scienceToppers: [
      { name: "Mahesh K.", score: "94.67%", college: "RATNAI COLLEGE" },
      { name: "Aishwarya K.", score: "94.67%", college: "MITHIBAI COLLEGE" },
      { name: "Sanjay U.", score: "92.83%", college: "MAHILA SAMITI COLLEGE" },
      { name: "Piyush M.", score: "91.50%", college: "ROYAL COLLEGE" },
      { name: "Meghana P.", score: "91.17%", college: "SKN COLLEGE" },
    ],
    statistics: {
      "10th": { total: 102, above90: 16, above85: 35, above80: 51, passRate: 100 },
      "12th": { total: 85, above90: 15, above75: 68, passRate: 98.8 },
    },
  },
  "2023": {
    highlights: [
      { label: "NEET AIR", value: "1499", category: "NEET-2023" },
      { label: "NEET AIR", value: "5333", category: "NEET-2022" },
      { label: "JEE-ADV", value: "98.33%", category: "Percentile" },
      { label: "MHT-CET", value: "99.46%", category: "2023" },
    ],
    toppers: [
      {
        name: "Hrithik Pandey",
        standard: "NEET-2023",
        score: "681/720",
        rank: "AIR - 1499",
        image: "",
        subjects: ["Medical Entrance"],
      },
      {
        name: "Ritesh Vishwakarma",
        standard: "NEET-2022",
        score: "645/720",
        rank: "AIR - 5333",
        image: "",
        subjects: ["Grant Medical College - Sir J.J. Hospital Mumbai"],
      },
      {
        name: "Rudra Vengurlekar",
        standard: "JEE-ADV 2021",
        score: "98.33 Percentile",
        rank: "AIR - 8025 • Gold Medal",
        image: "",
        subjects: ["ITI GANDHINAGAR CHEMICAL ENGG."],
      },
      {
        name: "Riddhi Bhor",
        standard: "MHT-CET 2023",
        score: "99.46%",
        rank: "VIT Pune-Chem Eng",
        image: "",
        subjects: ["Vishwakarma Institute of Technology"],
      },
    ],
    statistics: {
      "10th": { total: 138, above90: 118, above75: 135, passRate: 100 },
      "12th": { total: 152, above90: 88, above75: 145, passRate: 98.8 },
    },
  },
  "2022": {
    highlights: [
      { label: "NEET AIR", value: "1499", category: "NEET-2023" },
      { label: "NEET AIR", value: "5333", category: "NEET-2022" },
      { label: "JEE-ADV", value: "98.33%", category: "Percentile" },
      { label: "MHT-CET", value: "99.46%", category: "2023" },
    ],
    toppers: [
      {
        name: "Hrithik Pandey",
        standard: "NEET-2023",
        score: "681/720",
        rank: "AIR - 1499",
        image: "",
        subjects: ["Medical Entrance"],
      },
      {
        name: "Ritesh Vishwakarma",
        standard: "NEET-2022",
        score: "645/720",
        rank: "AIR - 5333",
        image: "",
        subjects: ["Grant Medical College - Sir J.J. Hospital Mumbai"],
      },
      {
        name: "Rudra Vengurlekar",
        standard: "JEE-ADV 2021",
        score: "98.33 Percentile",
        rank: "AIR - 8025 • Gold Medal",
        image: "",
        subjects: ["ITI GANDHINAGAR CHEMICAL ENGG."],
      },
      {
        name: "Riddhi Bhor",
        standard: "MHT-CET 2023",
        score: "99.46%",
        rank: "VIT Pune-Chem Eng",
        image: "",
        subjects: ["Vishwakarma Institute of Technology"],
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
              <span>Celebrating Excellence Since 2006</span>
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

          {/* Featured National & State Rank Holders */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <Trophy className="inline-block w-8 h-8 text-primary mr-2" />
              Featured National & State Rank Holders
            </h3>
            <p className="text-muted-foreground text-lg">Excellence in NEET, JEE & CET</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
            {results.featuredToppers?.map((topper, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl border-2 border-primary/30 hover:border-primary overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />

                {/* Rank Badge */}
                <div className="relative top-4 right-4 float-right bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 w-fit">
                  <Trophy className="w-4 h-4" />
                  <span>{index + 1}</span>
                </div>

                <div className="p-8 relative z-10 clear-both">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-lg text-xs font-bold mb-3">
                    {topper.category}
                  </div>
                  
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

                  {/* Details */}
                  <div className="pt-4 border-t border-border/50">
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

          {/* SSC Toppers Section */}
          {results.sscToppers && (
            <>
              <div className="text-center mb-12 mt-20">
                <h3 className="text-3xl font-bold mb-4">
                  <Medal className="inline-block w-8 h-8 text-secondary mr-2" />
                  S.S.C. Toppers - Academic Year 2024-25
                </h3>
                <p className="text-muted-foreground text-lg">Outstanding 10th Standard Performance</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
                {results.sscToppers.map((topper, index) => (
                  <div
                    key={index}
                    className="group relative bg-card rounded-2xl border border-border/50 hover:border-secondary/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="p-6 relative z-10">
                      {topper.rank && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                          {topper.rank}
                        </div>
                      )}
                      
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-bold text-xl mb-3 shadow-lg">
                          {topper.score}
                        </div>
                        
                        <h4 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors duration-300">
                          {topper.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{topper.standard}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Commerce Toppers Section */}
          {results.commerceToppers && (
            <>
              <div className="text-center mb-12 mt-20">
                <h3 className="text-3xl font-bold mb-4">
                  <Medal className="inline-block w-8 h-8 text-primary mr-2" />
                  Commerce Toppers 2025
                </h3>
                <p className="text-muted-foreground text-lg">12th Commerce Excellence</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                {results.commerceToppers.map((topper, index) => (
                  <div
                    key={index}
                    className="group relative bg-card rounded-2xl border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="p-6 relative z-10">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-xl mb-3 shadow-lg">
                          {topper.score}
                        </div>
                        
                        <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {topper.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{topper.college}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Science Toppers Section */}
          {results.scienceToppers && (
            <>
              <div className="text-center mb-12 mt-20">
                <h3 className="text-3xl font-bold mb-4">
                  <Medal className="inline-block w-8 h-8 text-accent mr-2" />
                  Science Toppers 2025
                </h3>
                <p className="text-muted-foreground text-lg">12th Science Excellence</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-20">
                {results.scienceToppers.map((topper, index) => (
                  <div
                    key={index}
                    className="group relative bg-card rounded-2xl border border-border/50 hover:border-accent/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="p-6 relative z-10">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-secondary text-white rounded-xl font-bold text-xl mb-3 shadow-lg">
                          {topper.score}
                        </div>
                        
                        <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                          {topper.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{topper.college}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
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
                  {stats.above85 && (
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Above 85%</span>
                      <span className="text-2xl font-bold text-secondary">{stats.above85}</span>
                    </div>
                  )}
                  {stats.above80 && (
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Above 80%</span>
                      <span className="text-2xl font-bold text-secondary">{stats.above80}</span>
                    </div>
                  )}
                  {stats.above75 && (
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Above 75%</span>
                      <span className="text-2xl font-bold text-secondary">{stats.above75}</span>
                    </div>
                  )}
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

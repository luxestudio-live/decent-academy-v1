"use client"

import { useState } from "react"
import { Navbar } from "@/decent-academy-v1/components/decent-academy-v1/navbar"
import { Footer } from "@/decent-academy-v1/components/decent-academy-v1/footer"
import { GraduationCap, Calculator, Beaker, BookOpen, CheckCircle2, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/decent-academy-v1/components/decent-academy-v1/ui/decent-academy-v1/button"
import Link from "next/decent-academy-v1/link"

type CourseCategory = "5-10" | "science" | "commerce"

const courseData = {
  "5-10": {
    title: "5th to 10th Standard",
    subtitle: "English Medium",
    icon: GraduationCap,
    color: "from-primary to-accent",
    description:
      "Comprehensive foundational education building strong concepts and academic excellence for board examinations",
    standards: [
      {
        name: "5th & 6th Standard",
        subjects: ["Mathematics", "Science", "English", "Marathi", "Social Studies"],
        features: ["Interactive Learning", "Activity Based Teaching", "Regular Assessments", "Parent Workshops"],
        duration: "Full Academic Year",
        batchSize: "25-30 Students",
      },
      {
        name: "7th & 8th Standard",
        subjects: ["Mathematics", "Science", "English", "Marathi", "History", "Geography"],
        features: ["Concept Building", "Problem Solving", "Mock Tests", "Individual Attention"],
        duration: "Full Academic Year",
        batchSize: "35-40 Students",
      },
      {
        name: "9th & 10th Standard",
        subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "English", "Marathi", "Social Sciences"],
        features: ["Board Exam Focus", "Previous Year Papers", "Intensive Revision", "Doubt Clearing Sessions"],
        duration: "Full Academic Year",
        batchSize: "35-40 Students",
      },
    ],
  },
  science: {
    title: "11th & 12th Science",
    subtitle: "JEE, NEET & CET Preparation",
    icon: Beaker,
    color: "from-accent to-secondary",
    description:
      "Advanced science education with specialized coaching for competitive examinations and board excellence",
    standards: [
      {
        name: "11th Science - PCM",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        features: ["JEE Foundation", "CET Preparation", "Board Syllabus", "Weekly Tests"],
        duration: "Full Academic Year",
        batchSize: "30-35 Students",
      },
      {
        name: "11th Science - PCB",
        subjects: ["Physics", "Chemistry", "Biology"],
        features: ["NEET Foundation", "CET Preparation", "Board Syllabus", "Practical Sessions"],
        duration: "Full Academic Year",
        batchSize: "30-35 Students",
      },
      {
        name: "12th Science - PCM",
        subjects: ["Physics", "Chemistry", "Mathematics", "JEE/decent-academy-v1/CET"],
        features: ["Intensive JEE Training", "CET Mock Tests", "Board Excellence", "All India Test Series"],
        duration: "Full Academic Year + Crash Courses",
        batchSize: "30-35 Students",
      },
      {
        name: "12th Science - PCB",
        subjects: ["Physics", "Chemistry", "Biology", "NEET/decent-academy-v1/CET"],
        features: ["NEET Preparation", "CET Coaching", "Board Excellence", "Medical Entrance Tests"],
        duration: "Full Academic Year + Crash Courses",
        batchSize: "30-35 Students",
      },
    ],
  },
  commerce: {
    title: "11th & 12th Commerce",
    subtitle: "Board & Competitive Exams",
    icon: Calculator,
    color: "from-secondary to-primary",
    description: "Complete commerce education focusing on conceptual clarity and preparation for professional courses",
    standards: [
      {
        name: "11th Commerce",
        subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics/decent-academy-v1/Statistics"],
        features: ["Practical Approach", "Case Studies", "Project Guidance", "Regular Practice"],
        duration: "Full Academic Year",
        batchSize: "30-35 Students",
      },
      {
        name: "12th Commerce",
        subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics/decent-academy-v1/Statistics"],
        features: ["Board Exam Focus", "Entrance Exam Prep", "CA Foundation Support", "Career Counseling"],
        duration: "Full Academic Year",
        batchSize: "30-35 Students",
      },
    ],
  },
}

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("5-10")
  const activeCourse = courseData[activeCategory]
  const Icon = activeCourse.icon

  return (
    <main className="min-h-screen">
      <Navbar /decent-academy-v1/>

      {/decent-academy-v1/* Hero Section */decent-academy-v1/}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/decent-academy-v1/20 rounded-full blur-3xl animate-float" /decent-academy-v1/>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-accent/decent-academy-v1/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          /decent-academy-v1/>
        </decent-academy-v1/div>

        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              Our
              <span className="block mt-2 text-primary">Course Offerings</decent-academy-v1/span>
            </decent-academy-v1/h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Comprehensive programs designed for academic excellence and competitive success
            </decent-academy-v1/p>
          </decent-academy-v1/div>
        </decent-academy-v1/div>
      </decent-academy-v1/section>

      {/decent-academy-v1/* Course Toggle */decent-academy-v1/}
      <section className="py-8 bg-background/decent-academy-v1/95 backdrop-blur-lg border-y border-border/decent-academy-v1/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            {(Object.keys(courseData) as CourseCategory[]).map((category) => {
              const course = courseData[category]
              const CourseIcon = course.icon
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative px-6 py-4 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-xl scale-105"
                      : "bg-card border border-border/decent-academy-v1/50 hover:border-primary/decent-academy-v1/50 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <CourseIcon className="w-5 h-5" /decent-academy-v1/>
                    <span>{course.title}</decent-academy-v1/span>
                  </decent-academy-v1/span>
                </decent-academy-v1/button>
              )
            })}
          </decent-academy-v1/div>
        </decent-academy-v1/div>
      </decent-academy-v1/section>

      {/decent-academy-v1/* Course Details */decent-academy-v1/}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/decent-academy-v1/* Course Header */decent-academy-v1/}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div
              className={`inline-flex w-20 h-20 bg-gradient-to-br ${activeCourse.color} rounded-2xl items-center justify-center mb-6 animate-scale-in`}
            >
              <Icon className="w-10 h-10 text-white" /decent-academy-v1/>
            </decent-academy-v1/div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{activeCourse.title}</decent-academy-v1/h2>
            <p className="text-xl text-primary font-medium mb-6">{activeCourse.subtitle}</decent-academy-v1/p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {activeCourse.description}
            </decent-academy-v1/p>
          </decent-academy-v1/div>

          {/decent-academy-v1/* Course Cards */decent-academy-v1/}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activeCourse.standards.map((standard, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl border border-border/decent-academy-v1/50 hover:border-primary/decent-academy-v1/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/decent-academy-v1/* Gradient Overlay */decent-academy-v1/}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activeCourse.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                /decent-academy-v1/>

                <div className="relative z-10 p-8">
                  {/decent-academy-v1/* Standard Name */decent-academy-v1/}
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                    {standard.name}
                  </decent-academy-v1/h3>

                  {/decent-academy-v1/* Subjects */decent-academy-v1/}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /decent-academy-v1/>
                      Subjects Covered
                    </decent-academy-v1/h4>
                    <div className="flex flex-wrap gap-2">
                      {standard.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-primary/decent-academy-v1/10 text-primary rounded-lg text-sm font-medium border border-primary/decent-academy-v1/20"
                        >
                          {subject}
                        </decent-academy-v1/span>
                      ))}
                    </decent-academy-v1/div>
                  </decent-academy-v1/div>

                  {/decent-academy-v1/* Features */decent-academy-v1/}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Key Features</decent-academy-v1/h4>
                    <div className="space-y-2">
                      {standard.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /decent-academy-v1/>
                          <span className="text-sm text-foreground/decent-academy-v1/80">{feature}</decent-academy-v1/span>
                        </decent-academy-v1/div>
                      ))}
                    </decent-academy-v1/div>
                  </decent-academy-v1/div>

                  {/decent-academy-v1/* Duration & Batch */decent-academy-v1/}
                  <div className="flex items-center gap-6 pt-6 border-t border-border/decent-academy-v1/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" /decent-academy-v1/>
                      <span>{standard.duration}</decent-academy-v1/span>
                    </decent-academy-v1/div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" /decent-academy-v1/>
                      <span>{standard.batchSize}</decent-academy-v1/span>
                    </decent-academy-v1/div>
                  </decent-academy-v1/div>

                  {/decent-academy-v1/* Enroll Button */decent-academy-v1/}
                  <Button className="w-full mt-6 group/decent-academy-v1/btn" asChild>
                    <Link href="/contact">
                      <span className="flex items-center justify-center gap-2">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 group-hover/decent-academy-v1/btn:translate-x-1 transition-transform duration-300" /decent-academy-v1/>
                      </decent-academy-v1/span>
                    </decent-academy-v1/Link>
                  </decent-academy-v1/Button>
                </decent-academy-v1/div>
              </decent-academy-v1/div>
            ))}
          </decent-academy-v1/div>
        </decent-academy-v1/div>
      </decent-academy-v1/section>

      {/decent-academy-v1/* Additional Features */decent-academy-v1/}
      <section className="py-16 lg:py-20 bg-muted/decent-academy-v1/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              What's Included in
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Every Course
              </decent-academy-v1/span>
            </decent-academy-v1/h2>
          </decent-academy-v1/div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: BookOpen, title: "Study Material", desc: "Comprehensive notes and practice sheets" },
              { icon: CheckCircle2, title: "Regular Tests", desc: "Weekly assessments and mock exams" },
              { icon: Users, title: "Doubt Sessions", desc: "Dedicated time for clearing doubts" },
              { icon: Clock, title: "Flexible Timings", desc: "Multiple batch options available" },
              { icon: GraduationCap, title: "Expert Faculty", desc: "Experienced and qualified teachers" },
              { icon: ArrowRight, title: "Progress Tracking", desc: "Regular performance reports" },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border/decent-academy-v1/50 hover:border-primary/decent-academy-v1/50 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" /decent-academy-v1/>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </decent-academy-v1/h3>
                <p className="text-muted-foreground">{feature.desc}</decent-academy-v1/p>
              </decent-academy-v1/div>
            ))}
          </decent-academy-v1/div>
        </decent-academy-v1/div>
      </decent-academy-v1/section>

      <Footer /decent-academy-v1/>
    </decent-academy-v1/main>
  )
}

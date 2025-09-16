"use client"

import type React from "react"
import { mockQuestions } from "@/lib/questions"
import { useState, useMemo } from "react"
import { Calculator, Download, Eye, BookOpen, Users, Target } from "lucide-react"

function getAvailableDomainsForGrade(grade: number): string[] {
  return [
    ...new Set(mockQuestions.filter((q) => q.gradeMin <= grade && q.gradeMax >= grade).map((q) => q.domain)),
  ].sort()
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    grade: "1",
    numQuestions: "10",
    domains: [] as string[],
  })

  // Calculate available domains whenever grade changes
  const availableDomains = useMemo(() => getAvailableDomainsForGrade(Number.parseInt(formData.grade)), [formData.grade])

  // Clear selected domains that are no longer available for the new grade
  const handleGradeChange = (newGrade: string) => {
    const newAvailableDomains = getAvailableDomainsForGrade(Number.parseInt(newGrade))
    setFormData((prev) => ({
      ...prev,
      grade: newGrade,
      domains: prev.domains.filter((domain) => newAvailableDomains.includes(domain)),
    }))
  }

  const generatePDF = async (preview = false) => {
    setLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grade: Number.parseInt(formData.grade),
          numQuestions: Number.parseInt(formData.numQuestions),
          domains: formData.domains,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate test")
      }

      // Get the PDF blob and create a URL
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      if (preview) {
        // Open in VS Code's simple browser
        window.open(url, "_blank")
      } else {
        // Download the file
        const a = document.createElement("a")
        a.href = url
        a.download = "math-test.pdf"
        document.body.appendChild(a)
        a.click()
        a.remove()
      }

      // Clean up the URL
      setTimeout(() => window.URL.revokeObjectURL(url), 1000)
    } catch (error: any) {
      console.error("Error:", error)
      alert(error.message || "Failed to generate test. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await generatePDF(false)
  }

  const handlePreview = async (e: React.MouseEvent) => {
    e.preventDefault()
    await generatePDF(true)
  }

  const handleDomainChange = (domain: string) => {
    setFormData((prev) => ({
      ...prev,
      domains: prev.domains.includes(domain) ? prev.domains.filter((d) => d !== domain) : [...prev.domains, domain],
    }))
  }

  const availableQuestions = mockQuestions.filter(
    (q) =>
      q.gradeMin <= Number.parseInt(formData.grade) &&
      q.gradeMax >= Number.parseInt(formData.grade) &&
      (formData.domains.length === 0 || formData.domains.includes(q.domain)),
  ).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Calculator className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-black text-foreground mb-4 text-balance">Math Test Generator</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Create personalized math assessments in seconds. Choose grade level, topics, and question count to
              generate professional PDF tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground mb-2">Grade 1-8</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive coverage across all elementary and middle school levels
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground mb-2">Custom Topics</h3>
              <p className="text-muted-foreground text-sm">
                Select specific math domains to focus on areas that need practice
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground mb-2">Instant PDF</h3>
              <p className="text-muted-foreground text-sm">
                Generate and download professional test sheets ready for classroom use
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-card border border-border rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label htmlFor="grade" className="block text-sm font-semibold text-foreground">
                  Grade Level
                </label>
                <select
                  id="grade"
                  value={formData.grade}
                  onChange={(e) => handleGradeChange(e.target.value)}
                  className="block w-full rounded-lg border-border bg-input shadow-sm transition-all duration-200
                    focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50
                    text-foreground px-4 py-3"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
                    <option key={grade} value={grade}>
                      Grade {grade}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="numQuestions" className="block text-sm font-semibold text-foreground">
                  Number of Questions
                </label>
                <input
                  type="number"
                  id="numQuestions"
                  min="1"
                  max="50"
                  value={formData.numQuestions}
                  onChange={(e) => setFormData((prev) => ({ ...prev, numQuestions: e.target.value }))}
                  className="block w-full rounded-lg border-border bg-input shadow-sm transition-all duration-200
                    focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50
                    text-foreground px-4 py-3"
                  required
                />
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {availableQuestions}
                  </span>
                  questions available for selection
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">Math Topics</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Selected:</span>
                  <span className="inline-flex items-center justify-center min-w-6 h-6 bg-secondary/10 text-secondary rounded-full text-xs font-bold px-2">
                    {formData.domains.length}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-6 bg-muted/30 rounded-xl border border-border">
                {availableDomains.map((domain) => (
                  <div
                    key={domain}
                    className={`
                      group flex items-center p-4 rounded-lg transition-all duration-200 cursor-pointer
                      border-2 hover:shadow-sm
                      ${
                        formData.domains.includes(domain)
                          ? "bg-primary/5 border-primary/30 shadow-sm"
                          : "bg-input border-border hover:border-primary/30 hover:bg-primary/5"
                      }
                    `}
                    onClick={() => handleDomainChange(domain)}
                  >
                    <input
                      type="checkbox"
                      id={domain}
                      checked={formData.domains.includes(domain)}
                      onChange={() => handleDomainChange(domain)}
                      className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20 focus:ring-2"
                    />
                    <label
                      htmlFor={domain}
                      className="ml-3 block text-sm font-medium text-foreground cursor-pointer select-none group-hover:text-primary transition-colors"
                    >
                      {domain}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <button
                type="button"
                onClick={handlePreview}
                disabled={loading || formData.domains.length === 0}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold
                  rounded-xl transition-all duration-200 
                  border-2 border-primary text-primary bg-primary/5
                  hover:bg-primary/10 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary/5 disabled:hover:shadow-none"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <Eye className="h-5 w-5" />
                    Preview Test
                  </>
                )}
              </button>

              <button
                type="submit"
                disabled={loading || formData.domains.length === 0}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold
                  rounded-xl transition-all duration-200
                  border-2 border-transparent bg-primary text-primary-foreground
                  hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:shadow-none"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    Download Test
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

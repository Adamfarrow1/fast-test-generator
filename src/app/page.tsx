"use client"

import type React from "react"
import { allGradeQuestions, pertQuestions, getAvailableDomainsForGrade, getAvailableDomainsForPERT } from "@/lib/allQuestions"
import { useState, useMemo } from "react"
import { Calculator, Download, Eye, BookOpen, Users, Target } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "1",
    numQuestions: "10",
    domains: [] as string[],
  })

  // Check if grade is a static PDF option
  const isStaticPDF = (grade: string) => grade === 'GEOMETRY' || grade === 'ALGEBRA1';

  // Calculate available domains whenever grade changes
  const availableDomains = useMemo(() => {
    if (formData.grade === 'PERT') {
      return getAvailableDomainsForPERT()
    }
    if (isStaticPDF(formData.grade)) {
      return []
    }
    return getAvailableDomainsForGrade(Number.parseInt(formData.grade))
  }, [formData.grade])

  // Clear selected domains that are no longer available for the new grade
  const handleGradeChange = (newGrade: string) => {
    let newAvailableDomains: string[] = [];
    if (newGrade === 'PERT') {
      newAvailableDomains = getAvailableDomainsForPERT();
    } else if (!isStaticPDF(newGrade)) {
      newAvailableDomains = getAvailableDomainsForGrade(Number.parseInt(newGrade));
    }
    setFormData((prev) => ({
      ...prev,
      grade: newGrade,
      domains: prev.domains.filter((domain) => newAvailableDomains.includes(domain)),
    }))
  }

  const handleStaticPDF = async (preview = false) => {
    const pdfMap: Record<string, string> = {
      'GEOMETRY': '/pdfs/geometry.pdf',
      'ALGEBRA1': '/pdfs/algebra1.pdf'
    };

    const pdfUrl = pdfMap[formData.grade];
    if (!pdfUrl) return;

    if (preview) {
      window.open(pdfUrl, "_blank");
    } else {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = formData.grade === 'GEOMETRY' ? 'geometry_review.pdf' : 'algebra1_review.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const generatePDF = async (preview = false) => {
    // Handle static PDFs
    if (isStaticPDF(formData.grade)) {
      handleStaticPDF(preview);
      return;
    }

    setLoading(true)
    try {
      // Call the API to generate the PDF
      // make sure that there is an associated grade when selectingg 
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          grade: formData.grade === 'PERT' ? 10 : Number.parseInt(formData.grade),
          numQuestions: Number.parseInt(formData.numQuestions),
          domains: formData.domains,
          pert: formData.grade === 'PERT',
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
        window.open(url, "_blank")
      } else {
        // Extract filename from Content-Disposition header
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = formData.grade === 'PERT' ? "pert-practice-test.pdf" : "math-test.pdf";
        
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="?(.+?)"?$/i);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }
        
        const a = document.createElement("a")
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        a.remove()
      }

      setTimeout(() => window.URL.revokeObjectURL(url), 1000)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate test. Please try again.';
      console.error("Error:", error)
      alert(errorMessage)
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

  const availableQuestions = isStaticPDF(formData.grade)
    ? 0
    : formData.grade === 'PERT'
    ? pertQuestions.filter(
        (q) => formData.domains.length === 0 || formData.domains.includes(q.domain)
      ).length
    : allGradeQuestions.filter(
        (q) =>
          q.gradeMin <= Number.parseInt(formData.grade) &&
          q.gradeMax >= Number.parseInt(formData.grade) &&
          (formData.domains.length === 0 || formData.domains.includes(q.domain)),
      ).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-950">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                <div className="relative p-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl">
                  <Calculator className="h-14 w-14 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Math Test Generator
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Create personalized math assessments in seconds with our professional-grade test generator
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>1000+ Questions Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Instant PDF Generation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor" className="text-slate-50 dark:text-slate-950"/>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 text-center">Comprehensive Coverage</h3>
            <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
              Complete question banks for grades 1-8, plus PERT, Geometry, and Algebra 1 review materials
            </p>
          </div>
          
          <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 text-center">Targeted Practice</h3>
            <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
              Select specific math domains and difficulty levels to focus on areas that need the most attention
            </p>
          </div>
          
          <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Download className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 text-center">Professional Output</h3>
            <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
              Generate print-ready PDF tests with answer keys, formatted for immediate classroom use
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 px-8 py-6 border-b border-blue-500/20">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Calculator className="h-6 w-6" />
              </div>
              Configure Your Test
            </h2>
            <p className="text-blue-100 mt-2">Fill in the details below to generate your customized assessment</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {!isStaticPDF(formData.grade) && (
                <div className="space-y-3">
                  <label htmlFor="studentName" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, studentName: e.target.value }))}
                    placeholder="Enter student's full name"
                    className="block w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-200
                      focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-slate-300 dark:hover:border-slate-600
                      text-slate-900 dark:text-white placeholder:text-slate-400 px-4 py-3.5 text-base"
                    required
                  />
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="grade" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    Grade Level / Test Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => handleGradeChange(e.target.value)}
                    className="block w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-200
                      focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-slate-300 dark:hover:border-slate-600
                      text-slate-900 dark:text-white px-4 py-3.5 text-base cursor-pointer"
                    required
                  >
                    <optgroup label="Elementary & Middle School">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
                        <option key={grade} value={grade}>
                          Grade {grade}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Practice Tests & Review Packets">
                      <option value="PERT">PERT Practice Test</option>
                      <option value="GEOMETRY">Geometry Review Packet</option>
                      <option value="ALGEBRA1">Algebra 1 Review Packet</option>
                    </optgroup>
                  </select>
                </div>

                {!isStaticPDF(formData.grade) && (
                  <div className="space-y-3">
                    <label htmlFor="numQuestions" className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Number of Questions <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="numQuestions"
                      min="1"
                      max="200"
                      value={formData.numQuestions}
                      onChange={(e) => setFormData((prev) => ({ ...prev, numQuestions: e.target.value }))}
                      className="block w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-200
                        focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-slate-300 dark:hover:border-slate-600
                        text-slate-900 dark:text-white px-4 py-3.5 text-base"
                      required
                    />
                    <div className="flex items-center gap-2 mt-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">
                          {availableQuestions}
                        </div>
                      </div>
                      <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                        questions available for your selection
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {isStaticPDF(formData.grade) ? (
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-900">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-500 rounded-xl">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                        {formData.grade === 'GEOMETRY' ? 'Geometry Review Packet' : 'Algebra 1 Review Packet'}
                      </h3>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        This is a comprehensive review packet with detailed practice problems and solutions. 
                        Click the buttons below to preview in your browser or download the PDF directly to your device.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                    <label className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      Math Topics
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          if (formData.domains.length === availableDomains.length) {
                            setFormData((prev) => ({ ...prev, domains: [] }))
                          } else {
                            setFormData((prev) => ({ ...prev, domains: [...availableDomains] }))
                          }
                        }}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline decoration-2 underline-offset-4 transition-colors"
                      >
                        {formData.domains.length === availableDomains.length ? 'Deselect All' : 'Select All'}
                      </button>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Selected:</span>
                        <span className="flex items-center justify-center min-w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold px-2">
                          {formData.domains.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
                    {availableDomains.map((domain) => (
                      <div
                        key={domain}
                        className={`
                          group flex items-center p-4 rounded-xl transition-all duration-200 cursor-pointer
                          border-2 hover:shadow-md
                          ${
                            formData.domains.includes(domain)
                              ? "bg-blue-50 dark:bg-blue-950/30 border-blue-500 shadow-sm"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
                          }
                        `}
                        onClick={() => handleDomainChange(domain)}
                      >
                        <input
                          type="checkbox"
                          id={domain}
                          checked={formData.domains.includes(domain)}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => {
                            e.stopPropagation()
                            handleDomainChange(domain)
                          }}
                          className="h-5 w-5 rounded-md border-2 border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-4 focus:ring-blue-500/20 transition-all cursor-pointer"
                        />
                        <label
                          htmlFor={domain}
                          className="ml-3 block text-sm font-medium text-slate-900 dark:text-white cursor-pointer select-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {domain}
                        </label>
                      </div>
                    ))}  
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t-2 border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={handlePreview}
                  disabled={loading || (!isStaticPDF(formData.grade) && formData.domains.length === 0)}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold
                    rounded-xl transition-all duration-200 
                    border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 bg-white dark:bg-slate-900
                    hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
                    focus:outline-none focus:ring-4 focus:ring-blue-500/30
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-slate-900 disabled:hover:shadow-none disabled:hover:scale-100"
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
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span>Preview Test</span>
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  disabled={loading || (!isStaticPDF(formData.grade) && formData.domains.length === 0)}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold
                    rounded-xl transition-all duration-200
                    border-2 border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg
                    hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] hover:from-blue-700 hover:to-indigo-700
                    focus:outline-none focus:ring-4 focus:ring-blue-500/30
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-indigo-600 disabled:hover:shadow-lg disabled:hover:scale-100"
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
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span>Download Test</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

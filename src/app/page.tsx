'use client';

import { MATH_DOMAINS } from '@/lib/types';
import { mockQuestions } from '@/lib/questions';
import { useState, useMemo } from 'react';

function getAvailableDomainsForGrade(grade: number): string[] {
  return [...new Set(
    mockQuestions
      .filter(q => q.gradeMin <= grade && q.gradeMax >= grade)
      .map(q => q.domain)
  )].sort();
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    grade: '1',
    numQuestions: '10',
    domains: [] as string[]
  });

  // Calculate available domains whenever grade changes
  const availableDomains = useMemo(() => 
    getAvailableDomainsForGrade(parseInt(formData.grade)),
    [formData.grade]
  );

  // Clear selected domains that are no longer available for the new grade
  const handleGradeChange = (newGrade: string) => {
    const newAvailableDomains = getAvailableDomainsForGrade(parseInt(newGrade));
    setFormData(prev => ({
      ...prev,
      grade: newGrade,
      domains: prev.domains.filter(domain => newAvailableDomains.includes(domain))
    }));
  };

  const generatePDF = async (preview: boolean = false) => {
    setLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grade: parseInt(formData.grade),
          numQuestions: parseInt(formData.numQuestions),
          domains: formData.domains,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate test');
      }

      // Get the PDF blob and create a URL
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      if (preview) {
        // Open in VS Code's simple browser
        window.open(url, '_blank');
      } else {
        // Download the file
        const a = document.createElement('a');
        a.href = url;
        a.download = 'math-test.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      
      // Clean up the URL
      setTimeout(() => window.URL.revokeObjectURL(url), 1000);
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'Failed to generate test. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generatePDF(false);
  };

  const handlePreview = async (e: React.MouseEvent) => {
    e.preventDefault();
    await generatePDF(true);
  };

  const handleDomainChange = (domain: string) => {
    setFormData(prev => ({
      ...prev,
      domains: prev.domains.includes(domain)
        ? prev.domains.filter(d => d !== domain)
        : [...prev.domains, domain]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Fast Practice Test Generator
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Create customized math tests for your students
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="grade" className="block text-sm font-semibold text-gray-700">
                  Grade Level
                </label>
                <select
                  id="grade"
                  value={formData.grade}
                  onChange={(e) => handleGradeChange(e.target.value)}
                  className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm transition-colors
                    focus:border-indigo-500 focus:ring-indigo-500 hover:bg-white"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(grade => (
                    <option key={grade} value={grade}>
                      Grade {grade}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="numQuestions" className="block text-sm font-semibold text-gray-700">
                  Number of Questions
                </label>
                <input
                  type="number"
                  id="numQuestions"
                  min="1"
                  max="50"
                  value={formData.numQuestions}
                  onChange={(e) => setFormData(prev => ({ ...prev, numQuestions: e.target.value }))}
                  className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm transition-colors
                    focus:border-indigo-500 focus:ring-indigo-500 hover:bg-white"
                  required
                />
                <p className="text-sm text-gray-500">
                  {mockQuestions.filter(q => 
                    q.gradeMin <= parseInt(formData.grade) && 
                    q.gradeMax >= parseInt(formData.grade) &&
                    formData.domains.includes(q.domain)
                  ).length} questions available
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700">
                  Math Domains
                </label>
                <span className="text-sm text-gray-500">
                  Selected: {formData.domains.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-lg">
                {availableDomains.map(domain => (
                  <div 
                    key={domain}
                    className={`
                      flex items-center p-3 rounded-lg transition-colors cursor-pointer
                      ${formData.domains.includes(domain)
                        ? 'bg-indigo-50 border-2 border-indigo-200'
                        : 'bg-white border-2 border-gray-200 hover:border-indigo-200'}
                    `}
                    onClick={() => handleDomainChange(domain)}
                  >
                    <input
                      type="checkbox"
                      id={domain}
                      checked={formData.domains.includes(domain)}
                      onChange={() => handleDomainChange(domain)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label 
                      htmlFor={domain}
                      className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer select-none"
                    >
                      {domain}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <button
                type="button"
                onClick={handlePreview}
                disabled={loading || formData.domains.length === 0}
                className={`
                  inline-flex items-center justify-center px-6 py-3 text-base font-medium
                  rounded-lg transition-all duration-200 
                  border-2 border-indigo-600 text-indigo-600
                  hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent
                `}
              >
                {loading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : 'Preview Test'}
              </button>
              <button
                type="submit"
                disabled={loading || formData.domains.length === 0}
                className={`
                  inline-flex items-center justify-center px-6 py-3 text-base font-medium
                  rounded-lg transition-all duration-200
                  border-2 border-transparent bg-indigo-600 text-white
                  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600
                `}
              >
                {loading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : 'Download Test'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Math Test Generator</h1>
            <p className="mt-2 text-gray-600">Create customized math tests for your students</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                Grade Level
              </label>
              <select
                id="grade"
                value={formData.grade}
                onChange={(e) => handleGradeChange(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(grade => (
                  <option key={grade} value={grade}>
                    Grade {grade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="numQuestions" className="block text-sm font-medium text-gray-700">
                Number of Questions
              </label>
              <input
                type="number"
                id="numQuestions"
                min="1"
                max="50"
                value={formData.numQuestions}
                onChange={(e) => setFormData(prev => ({ ...prev, numQuestions: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Available questions for selected domains: {
                  mockQuestions.filter(q => 
                    q.gradeMin <= parseInt(formData.grade) && 
                    q.gradeMax >= parseInt(formData.grade) &&
                    formData.domains.includes(q.domain)
                  ).length
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Math Domains for Grade {formData.grade}
              </label>
              <div className="space-y-2">
                {availableDomains.map(domain => (
                  <div key={domain} className="flex items-center">
                    <input
                      type="checkbox"
                      id={domain}
                      checked={formData.domains.includes(domain)}
                      onChange={() => handleDomainChange(domain)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor={domain} className="ml-2 block text-sm text-gray-700">
                      {domain}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handlePreview}
                disabled={loading || formData.domains.length === 0}
                className={`flex justify-center py-2 px-4 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  (loading || formData.domains.length === 0) && 'opacity-50 cursor-not-allowed'
                }`}
              >
                {loading ? 'Generating...' : 'Preview'}
              </button>
              <button
                type="submit"
                disabled={loading || formData.domains.length === 0}
                className={`flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  (loading || formData.domains.length === 0) && 'opacity-50 cursor-not-allowed'
                }`}
              >
                {loading ? 'Generating...' : 'Download'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// components/ProcessSteps.jsx
import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Search & Discover",
      description: "Browse thousands of universities filtered by your preferences. Find your perfect match instantly.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Compare Options",
      description: "Analyze fit, cost, and campus life side-by-side. Make data-backed decisions.",
      icon: "⚖️"
    },
    {
      id: 3,
      title: "Apply & Track",
      description: "Submit applications directly and track their status in real-time through our unified portal.",
      icon: "📋"
    }
  ];

  return (
    <section className="process-steps py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">PROCESS</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-600">How It Works</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="relative mb-2">
                  <span className="text-4xl font-bold text-gray-200 opacity-50 absolute -left-6 -top-2">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 relative z-10">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
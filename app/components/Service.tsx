"use client"

import React from 'react';

const services = [
  {
    title: 'Smart College Search',
    description: 'Filter colleges by major, location, and acceptance rates tailored to your unique profile and preferences.',
    link: 'Start Searching →',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Comparative Analytics',
    description: 'View side-by-side comparisons of tuition, global rankings, and campus facilities to find the best value.',
    link: 'Compare Now →',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Application Tracking',
    description: 'Manage deadlines, essay drafts, and required documents for multiple applications in one intuitive dashboard.',
    link: 'Track Applications →',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'bg-green-50 text-green-600',
  },
];

const PremiumServices = () => {
  return (
    <section className="py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          Our Premium Services
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-16">
          Comprehensive tools designed to help you make the best decision for your future. From discovery to enrollment.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="bg-white shadow-sm p-10 rounded-3xl text-left border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              
              {/* Link */}
              <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 transition-colors">
                {service.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
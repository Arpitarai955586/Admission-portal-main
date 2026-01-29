"use client"

import React from 'react';
// Importing specific icons from React Icons
import { HiStar } from 'react-icons/hi'; 
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
  id: number;
  name: string;
  status: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    status: 'Accepted to Stanford',
    quote: '"The college comparison tool saved me hours of research. I found a scholarship I wouldn\'t have known about otherwise!"',
    image: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    status: 'Accepted to MIT',
    quote: '"This portal made the application process so much less stressful. Keeping track of deadlines was a breeze."',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 3,
    name: 'Michael Smith',
    status: 'Accepted to UCLA',
    quote: '"I wasn\'t sure where to apply, but the personalized recommendations were spot on. Highly recommend!"',
    image: 'https://i.pravatar.cc/150?u=michael'
  }
];

const StudentSuccessStories: React.FC = () => {
  return (
    <section className="py-24 px-6  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
              Student Success Stories
            </h2>
            <p className="text-gray-500 text-lg">
              Join thousands of students who found their dream college.
            </p>
          </div>

          {/* Navigation Arrows using React Icons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all">
              <FiChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#f9fbfd] border-1 border-black p-10 rounded-[2.5rem] border  hover:border-gray-200 transition-all duration-300 group"
            >
              {/* Star Rating using React Icons */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <HiStar 
                    key={i} 
                    className="text-yellow-400 text-xl" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-10 text-gray-700 italic leading-relaxed font-medium min-h-[100px]">
                {item.quote}
              </blockquote>

              {/* Profile Information */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 leading-none mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-blue-600 tracking-wide uppercase">
                    {item.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessStories;
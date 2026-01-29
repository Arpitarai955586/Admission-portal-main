"use client";

import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Award, Users, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const slides = [
    {
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
      title: 'Explore Top Colleges, Exams & Results',
      subtitle: 'Empowering Education'
    },
    {
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg',
      title: 'Build Your Academic Future',
      subtitle: 'Quality Education for All'
    },
    {
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg',
      title: 'Discover Learning Excellence',
      subtitle: 'Your Journey Starts Here'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />, number: '6000+', label: 'Institutions' },
    { icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />, number: '200+', label: 'Exams' },
    { icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, number: '200+', label: 'Online Courses' },
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, number: '200+', label: 'Courses' }
  ];

  return (
    <section className="relative min-h-[650px] md:h-[600px] w-full overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 5s ease-out'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Navigation Arrows - Hidden on small mobile */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all border border-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all border border-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-12 md:py-0">
        {/* Title with animation */}
        <div className="text-center mb-8 max-w-5xl animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-tight leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium drop-shadow-lg max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Stats Grid - Responsive grid layout */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-6 justify-center mb-10 w-full max-w-5xl px-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="bg-blue-600 p-1.5 md:p-2 rounded-full text-white shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-lg md:text-2xl font-bold text-white leading-none">{stat.number}</div>
                <div className="text-[10px] md:text-sm text-white/80 uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar - Responsive spacing and sizing */}
        <div className="w-full max-w-4xl px-2">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-1.5 md:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 md:py-0">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Colleges, Courses, Exams..."
                className="w-full py-2 md:py-4 text-gray-700 focus:outline-none text-sm md:text-base bg-transparent"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-8 rounded-lg md:rounded-xl transition-all shadow-lg active:scale-95">
              Search
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-10 bg-blue-500' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
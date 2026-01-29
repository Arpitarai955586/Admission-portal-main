"use client"

import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Building2, 
  GraduationCap, 
  BookOpen, 
  ChevronRight, 
  ChevronLeft,
  Search,
  MapPin,
  TrendingUp
} from 'lucide-react';

interface Program {
  id: string;
  label: string;
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  links: { text: string; items?: string[] }[];
  linkText: string;
  navigate: string;
}

const programs: Program[] = [
  { id: 'all', label: 'All Programs' },
  { id: 'be-btech', label: 'B.E. / B.Tech' },
  { id: 'mba-pgdm', label: 'MBA/PGDM' },
  { id: 'mbbs', label: 'MBBS' },
  { id: 'bca', label: 'BCA' },
  { id: 'bcom', label: 'B.Com' },
  { id: 'bsc', label: 'B.Sc.' },
  { id: 'ba', label: 'B.A.' },
  { id: 'bba', label: 'BBA' },
  { id: 'me-mtech', label: 'M.E./M.Tech' },
  { id: 'mca', label: 'MCA' },
];

const Card: React.FC<CardProps> = ({ icon, title, description, tags, links, linkText, navigate }) => (
  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full border border-slate-100">
    <div className="flex items-center gap-4 mb-5">
      <div className="bg-blue-600 p-3 rounded-xl shadow-blue-100 shadow-lg text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 leading-tight">{title}</h3>
    </div>

    <p className="text-slate-500 text-sm mb-5 leading-relaxed">{description}</p>

    {/* Tags Section */}
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-semibold border border-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors cursor-pointer"
          >
            <TrendingUp className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* Links List */}
    <div className="space-y-3 mb-6 flex-grow">
      {links.map((link, index) => (
        <div key={index}>
          {link.items?.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-slate-600 text-sm hover:text-blue-600 cursor-pointer transition-colors group/item">
              <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 group-hover/item:bg-blue-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>

    <div className="pt-4 border-t border-slate-50">
      <button 
        onClick={() => window.location.href = navigate}
        className="w-full py-2.5 px-4 bg-slate-50 text-blue-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group/btn hover:bg-blue-600 hover:text-white transition-all"
      >
        {linkText}
        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const ExploreProgramsComponent: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<string>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const cards: CardProps[] = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Entrance Exams',
      description: 'Get deep insights into exam dates, syllabus, and preparation strategies.',
      tags: ['JEE Main', 'GATE', 'CAT'],
      links: [{ text: '', items: ['Download Sample Papers', 'Mock Test Series'] }],
      linkText: 'Explore all Exams',
      navigate: '/exam'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Top Colleges',
      description: 'Browse top-rated institutions based on placement and infrastructure.',
      tags: [],
      links: [{ text: '', items: ['Top Colleges in Bangalore', 'Top Colleges in Pune'] }],
      linkText: 'Browse All Colleges',
      navigate: "/college"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Admission Predictor',
      description: "Evaluate your chances of admission in top colleges based on your scores.",
      tags: ['Rank Predictor', 'Cut-off Analysis'],
      links: [{ text: '', items: ['JEE College Predictor', 'NEET College Predictor'] }],
      linkText: 'Predict Now',
      navigate: '/college'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Popular Courses',
      description: 'Explore trending courses and specializations for your career growth.',
      tags: [],
      links: [{ text: '', items: ['Management (MBA/BBA)', 'Computer Apps (BCA/MCA)'] }],
      linkText: 'Explore Courses',
      navigate: '/college'
    },
  ];

  return (
    <div className="bg-[#fcfdfe] py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Find Your Future</h2>
            <h1 className="text-3xl font-semibold font-black text-slate-900 ">Explore Programs</h1>
          </div>
         
        </div>

        {/* Categories Scroller */}
        <div className="relative mb-12 flex items-center group">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 z-10 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth py-2 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${
                  activeProgram === program.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {program.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 z-10 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ExploreProgramsComponent;
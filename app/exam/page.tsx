"use client";

import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

const ExamPortal = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
    const [streamSearch, setStreamSearch] = useState('');
    const [levelSearch, setLevelSearch] = useState('');
    const [categoryExpanded, setCategoryExpanded] = useState(true);
    const [streamExpanded, setStreamExpanded] = useState(true);
    const [levelExpanded, setLevelExpanded] = useState(true);

    const exams = [
        {
            id: 1,
            name: 'JEE Main',
            fullName: 'Joint Entrance Examination Main',
            logo: '🟠',
            type: 'Online',
            level: 'UG',
            organization: 'National Testing Agency (NTA)',
            stream: 'Engineering',
            category: 'Entrance',
            results: '12 Feb, 2026',
            examDate: '21 Jan - 30 Jan, 2026',
            registration: '31 Oct - 27 Nov, 2025'
        },
        {
            id: 2,
            name: 'GATE',
            fullName: 'Graduate Aptitude Test in Engineering',
            logo: '🔵',
            type: 'Online',
            level: 'PG',
            organization: 'IITs and IISc',
            stream: 'Engineering',
            category: 'Entrance',
            results: '10 Mar, 2026',
            examDate: '16 Feb, 2025',
            registration: '7 Feb - 15 Feb, 2026'
        },
        {
            id: 3,
            name: 'CAT',
            fullName: 'Common Admission Test',
            logo: '🟢',
            type: 'Online',
            level: 'PG',
            organization: 'IIMs',
            stream: 'Management',
            category: 'Entrance',
            results: '19 Dec, 2025',
            examDate: '30 Nov, 2025',
            registration: '6 Aug - 20 Sept, 2025'
        },
        // ... (remaining data is the same)
    ];

    const categories = { 'Entrance': 206, 'Board': 42, 'Sarkari': 8, 'Study Abroad': 7 };
    const streams = { 'Engineering': 45, 'Medical': 19, 'Law': 18, 'Management': 16, 'Design': 10 };
    const levels = { 'UG': 158, 'PG': 43, '12th': 14, '10th': 4 };

    const handleReset = () => {
        setSelectedCategories([]);
        setSelectedStreams([]);
        setSelectedLevels([]);
    };

    const filteredExams = useMemo(() => {
        return exams.filter(exam => {
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(exam.category);
            const streamMatch = selectedStreams.length === 0 || selectedStreams.includes(exam.stream);
            const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(exam.level);
            return categoryMatch && streamMatch && levelMatch;
        });
    }, [selectedCategories, selectedStreams, selectedLevels]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header Section */}
          

            {/* Breadcrumb & Title */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <nav className="text-xs text-gray-400 mb-4 flex gap-2">
                        <span>Home</span> <span>/</span> <span className="text-blue-500">Exams</span>
                    </nav>
                    <h2 className="text-3xl font-black text-gray-900 leading-tight">
                        Top Entrance Exams 2026 <br/>
                        <span className="text-gray-400 text-lg font-medium tracking-normal">Explore dates, patterns, and eligibility criteria</span>
                    </h2>
                </div>
            </div>

            {/* MAIN CENTERED CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* LEFT SIDEBAR - FIXED WIDTH */}
                    <aside className="w-full lg:w-80 shrink-0 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-900">Filters</h3>
                            <button onClick={handleReset} className="text-blue-500 text-xs font-bold hover:text-blue-700 uppercase tracking-tighter">
                                Clear All
                            </button>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <button onClick={() => setCategoryExpanded(!categoryExpanded)} className="flex justify-between items-center w-full group">
                                <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">Category</span>
                                {categoryExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </button>
                            {categoryExpanded && (
                                <div className="mt-4 space-y-3">
                                    {Object.entries(categories).map(([category, count]) => (
                                        <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={(e) => e.target.checked ? setSelectedCategories([...selectedCategories, category]) : setSelectedCategories(selectedCategories.filter(c => c !== category))}
                                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-sm text-gray-600 group-hover:text-gray-900">{category}</span>
                                            <span className="ml-auto text-[10px] text-gray-400 font-mono">({count})</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Stream Filter */}
                        <div className="pt-6 border-t border-gray-100">
                            <button onClick={() => setStreamExpanded(!streamExpanded)} className="flex justify-between items-center w-full group">
                                <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">Streams</span>
                                {streamExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </button>
                            {streamExpanded && (
                                <div className="mt-4">
                                    <div className="relative mb-4">
                                        <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                                        <input
                                            type="text"
                                            placeholder="Search streams..."
                                            value={streamSearch}
                                            onChange={(e) => setStreamSearch(e.target.value)}
                                            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                                        {Object.entries(streams).map(([stream, count]) => (
                                            <label key={stream} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedStreams.includes(stream)}
                                                    onChange={(e) => e.target.checked ? setSelectedStreams([...selectedStreams, stream]) : setSelectedStreams(selectedStreams.filter(s => s !== stream))}
                                                    className="w-4 h-4 rounded border-gray-300 text-blue-600"
                                                />
                                                <span className="text-sm text-gray-600">{stream}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* RIGHT LIST AREA - EXPANDS */}
                    <main className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <div className="text-gray-500 text-sm italic">
                                We found <span className="text-blue-600 font-bold not-italic">{filteredExams.length} exams</span> matching your profile
                            </div>
                            <div className="flex gap-2">
                                <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-gray-600 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                                    <option>Sort by: Recommended</option>
                                    <option>Deadline: Nearest</option>
                                    <option>Popularity</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {filteredExams.map((exam) => (
                                <div key={exam.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Logo Section */}
                                        <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl shadow-inner border border-gray-100">
                                            {exam.logo}
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-1">
                                            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                                                        {exam.name} <span className="text-gray-300 font-normal">|</span> <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{exam.fullName}</span>
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{exam.type}</span>
                                                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{exam.level}</span>
                                                        <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{exam.stream}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button className="flex-1 md:flex-none bg-gray-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-600 transition-all">
                                                        APPLY NOW
                                                    </button>
                                                    <button className="flex-1 md:flex-none bg-white border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all">
                                                        DETAILS
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Key Info Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Exam Date</span>
                                                    <span className="text-sm font-bold text-red-500">{exam.examDate}</span>
                                                </div>
                                                <div className="flex flex-col border-gray-200 sm:border-l sm:pl-6">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Registration</span>
                                                    <span className="text-sm font-bold text-gray-700">{exam.registration}</span>
                                                </div>
                                                <div className="flex flex-col border-gray-200 sm:border-l sm:pl-6">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Results</span>
                                                    <span className="text-sm font-bold text-gray-700">{exam.results}</span>
                                                </div>
                                            </div>

                                            {/* Quick Links */}
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-bold text-blue-500 border-t border-gray-100 pt-4">
                                                <a href="#" className="hover:text-blue-800 flex items-center gap-1">Pattern <ChevronRight size={10}/></a>
                                                <a href="#" className="hover:text-blue-800 flex items-center gap-1">Syllabus <ChevronRight size={10}/></a>
                                                <a href="#" className="hover:text-blue-800 flex items-center gap-1">Cutoff <ChevronRight size={10}/></a>
                                                <a href="#" className="hover:text-blue-800 flex items-center gap-1">Sample Papers <ChevronRight size={10}/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ExamPortal;
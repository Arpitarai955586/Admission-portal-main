"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Calendar, Share2, Bell, CheckCircle2, PhoneCall } from "lucide-react";

const BlogPage = () => {
  const param = useParams();
  const slug = param.slug;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Header Section */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              Best Books for CTET 2026 Preparation Recommended by Toppers
            </h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                <Share2 className="w-4 h-4" /> Follow Us
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
                <Bell className="w-4 h-4" /> Keep Me Notified
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1 font-medium"><Calendar className="w-4 h-4" /> 2 minute read</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600"><Share2 className="w-4 h-4" /> Share</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT CONTENT AREA (8 columns) */}
          <main className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            
            {/* Author Info */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 bg-orange-200 rounded-full overflow-hidden">
                <Image src="/author-placeholder.jpg" width={48} height={48} alt="Author" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-blue-600 hover:underline cursor-pointer">Shreya Panagria</span>
                  <CheckCircle2 className="w-4 h-4 text-green-500 fill-current" />
                </div>
                <p className="text-xs text-gray-400 font-semibold uppercase">Update on 30 Dec, 2025, 08:45 PM IST</p>
              </div>
            </div>

            {/* Intro Text */}
            <article className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
              <p>
                The <strong>CTET exam on February 8, 2026</strong>, requires focused study and the right resources to secure success. 
                Top-performing aspirants often credit certain books for comprehensive coverage and abundant practice.
              </p>

              {/* Table of Contents */}
              <div className="my-8 border border-blue-200 rounded-xl overflow-hidden">
                <div className="bg-blue-500 text-white px-5 py-3 font-bold text-lg">Table of Contents</div>
                <ul className="p-4 space-y-3 bg-white">
                  <li className="text-blue-600 hover:underline cursor-pointer font-medium">Essential CTET Core Books List</li>
                  <li className="text-blue-600 hover:underline cursor-pointer font-medium">Best Child Development & Pedagogy Books</li>
                  <li className="text-blue-600 hover:underline cursor-pointer font-medium">Best Language Books for CTET 2026</li>
                  <li className="text-blue-600 hover:underline cursor-pointer font-medium text-sm">+2 View More</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Essential CTET Core Books List</h2>
              <p className="mb-6">Many of these resources offer chapter-wise explanations, previous year questions, and practice sets.</p>

              {/* The Books Table */}
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="p-4 font-semibold border-r border-blue-400">Subject / Section</th>
                      <th className="p-4 font-semibold border-r border-blue-400">Book Title</th>
                      <th className="p-4 font-semibold">Publisher / Author</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm font-medium text-gray-600">Child Development & Pedagogy</td>
                      <td className="p-4 text-sm font-medium text-gray-800">CTET & TETs Child Development & Pedagogy</td>
                      <td className="p-4 text-sm text-gray-600">Arihant Experts</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm font-medium text-gray-600">Language I (English)</td>
                      <td className="p-4 text-sm font-medium text-gray-800">CTET English & Pedagogy</td>
                      <td className="p-4 text-sm text-gray-600">Geeta Sahni / Pearson</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </main>

          {/* RIGHT SIDEBAR (4 columns) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Enquiry Form */}
            <div className="bg-slate-900 text-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-5 text-center border-b border-slate-800">
                   <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Get Started!</p>
                   <h3 className="text-xl font-bold mt-1">What are you waiting for?</h3>
                   <p className="text-xs text-slate-400 mt-1">Discover Your Education Journey With Us</p>
                </div>
                <div className="p-5 space-y-4">
                    <button className="w-full py-3 bg-white text-slate-900 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-100">
                       <PhoneCall className="w-4 h-4" /> Enquiry Now
                    </button>
                    <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700">
                       Apply Now <span className="text-lg">›</span>
                    </button>
                </div>
            </div>

            {/* Widget 2: College Predictor */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-xl text-white relative overflow-hidden">
                <h4 className="text-lg font-bold">College Predictor</h4>
                <p className="text-xs opacity-90 mb-4">Know Your Odds Of Admission</p>
                <button className="bg-white text-indigo-700 px-4 py-1.5 rounded-md text-sm font-bold">
                    Search Now ›
                </button>
                {/* Decorative background element */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white opacity-20 rounded-full blur-xl"></div>
            </div>

            {/* Widget 3: Write a Review */}
            <div className="bg-blue-600 p-6 rounded-xl text-white flex items-center justify-between">
                <div>
                    <h4 className="text-lg font-bold">Write A Review!</h4>
                    <p className="text-xs opacity-90">Win Up to ₹200 Amazing Prizes</p>
                    <button className="mt-4 bg-white text-blue-600 px-4 py-1.5 rounded-md text-sm font-bold">
                        Review Now ›
                    </button>
                </div>
                <div className="w-16 h-16 relative">
                    {/* Placeholder for hand holding phone icon */}
                    <div className="w-12 h-20 bg-gray-200 rounded-md transform rotate-12"></div>
                </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
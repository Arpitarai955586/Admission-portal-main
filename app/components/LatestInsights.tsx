"use client";
import React from "react";
import BlogCard, { BlogPost } from "./BlogCard";

// 1. Ensure your BlogPost interface includes the 'slug' property
// If you're importing this from another file, update it there as well.
/* export interface BlogPost {
  id: string;
  slug: string; // Add this
  category: string;
  categoryColor: string;
  title: string;
  desc: string;
  image: string;
  readTime: string;
  tags: string[];
}
*/

const posts: BlogPost[] = [
  {
    id: "1",
    slug: "top-10-tips-writing-winning-personal-statement",
    category: "GUIDE",
    categoryColor: "text-blue-600",
    title: "Top 10 Tips for Writing a Winning Personal Statement",
    desc: "Crafting a compelling essay is key to standing out. Here's how to tell your story effectively.",
    image: "/images/post1.png",
    readTime: "5 min read",
    tags: ["admissions", "essays"],
  },
  {
    id: "2",
    slug: "navigating-fafsa-step-by-step-tutorial",
    category: "FINANCIAL AID",
    categoryColor: "text-green-600",
    title: "Navigating the FAFSA: A Step-by-Step Tutorial",
    desc: "Don't leave money on the table. We break down the financial aid process simply.",
    image: "/images/post2.png",
    readTime: "8 min read",
    tags: ["finance", "scholarships"],
  },
  {
    id: "3",
    slug: "choosing-right-campus-culture",
    category: "CAMPUS LIFE",
    categoryColor: "text-purple-600",
    title: "Choosing the Right Campus Culture for You",
    desc: "Big city or college town? Understand how environment impacts your college success.",
    image: "/images/post3.png",
    readTime: "6 min read",
    tags: ["campus", "lifestyle"],
  },
];

export default function LatestInsights() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
        <a href="/blog" className="text-blue-600 font-medium hover:underline">
          View all
        </a>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: Blog List */}
        <div className="lg:col-span-2 space-y-6">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug || post.id || index} // Using slug as key is better for React
              post={post}
              // In a real app, you'd likely use Link from next/link inside BlogCard
              onClick={(post) => console.log('Navigating to:', `/blog/${post.slug}`)}
            />
          ))}

          {/* Load More */}
          <div className="pt-4">
            <button className="w-full md:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#3182ce] hover:bg-blue-700 rounded-lg transition shadow-sm">
              Load More Blogs
            </button>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="space-y-6">
          {/* Popular Topics */}
          <div className="bg-white border shadow-sm border-gray-100 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Popular Topics
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "Admissions",
                "Entrance Exams",
                "Scholarships",
                "Campus Life",
                "Placements",
              ].map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition border border-transparent hover:border-blue-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div className="bg-white border shadow-sm border-gray-100 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Helpful Resources
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              {[
                { name: "College Admission Process", href: "/guides/admission" },
                { name: "Entrance Exam Calendar", href: "/exams" },
                { name: "Compare Colleges", href: "/compare" },
                { name: "Scholarship Guide", href: "/scholarships" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-600 transition flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

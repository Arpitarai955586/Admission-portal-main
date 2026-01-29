import Link from "next/link";
import React from "react";

interface College {
  image: string;
  name: string;
  location: string;
  logo: React.ReactNode;
  topRated: boolean;
  tuition: string;
  acceptance: string;
  undergrad: string;
  sat: string;
  slug: string;
}

const CollegeCard = ({ college }: { college: College }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* College Image Header */}
      <div className="h-40 relative">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white transition-colors">
          <span className="text-blue-500 text-xs">💙</span>
        </div>
        {college.topRated && (
          <div className="absolute bottom-3 left-3 bg-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-gray-800 shadow-sm">
            Top Rated
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900 leading-tight">
              {college.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              📍 {college.location}
            </p>
          </div>
          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 text-xl">
            {college.logo}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-dashed border-gray-200 pt-4 mb-6">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">
              Tuition
            </p>
            <p className="text-sm font-bold text-gray-800">{college.tuition}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">
              Acceptance
            </p>
            <p className="text-sm font-bold text-green-600">
              {college.acceptance}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">
              Undergrad
            </p>
            <p className="text-sm font-bold text-gray-800">
              {college.undergrad}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">
              SAT Range
            </p>
            <p className="text-sm font-bold text-gray-800">{college.sat}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 cursor-pointer">
            <input
              type="checkbox"
              className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Compare
          </label>

          <button className="text-xs font-bold text-blue-600 hover:underline">
            <Link
              href={`/college/${college.slug}`}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              View Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
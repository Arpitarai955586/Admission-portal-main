import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Exam {
  logo: React.ReactNode;
  mode: string;
  name: string;
  title?: string;
  date: string;
  slug: string;
}

function ExamCard({ exam }: { exam: Exam }) {
    return (
      <div className="group shadow-sm bg-white border border-gray-100 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-blue-400 hover:shadow-md">
        <div className="p-5">
          {/* Top Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="h-10 w-12 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 text-[10px] font-black text-gray-700 uppercase tracking-tighter text-center leading-tight">
              {exam.logo}
            </div>
            <span
              className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold ${
                exam.mode === "Online"
                  ? "bg-green-50 text-green-600"
                  : "bg-orange-50 text-orange-600"
              }`}
            >
              {exam.mode}
            </span>
          </div>
  
          {/* Info Section */}
          <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
              {exam.name}
            </h3>
            <p className="text-xs text-gray-400 mt-1 font-medium italic">
              {exam.title || "Entrance Exam"}
            </p>
          </div>
  
          {/* Simplified Date */}
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-xs font-semibold">{exam.date}</span>
          </div>
        </div>
  
        {/* Action Footer */}
        <div className="px-5 pb-5 mt-2 flex gap-3">
          <button className="flex-1 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors py-2">
            Details
          </button>
          <Link
            href={`/exam/${exam.slug}`}
            className="flex-[1.5] bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-200"
          >
            Apply Now
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  export default ExamCard;
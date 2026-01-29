import React from 'react';
import { GraduationCap, MapPin, BookOpen, Download, Phone } from 'lucide-react';

interface CollegeHeaderProps {
  name: string;
  location: string;
  courseCount: number;
  type: string;
  established: string;
  ranking: string;
  onBrochureClick?: () => void;
  onApplyClick?: () => void;
}

const CollegeHeader: React.FC<CollegeHeaderProps> = ({
  name,
  location,
  courseCount,
  type,
  established,
  ranking,
  onBrochureClick,
  onApplyClick,
}) => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            {/* College Logo */}
            <div className="w-20 h-20 bg-[#0060d1] rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>

            {/* College Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-[#0060d1]">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-1 text-orange-500">
                  <BookOpen className="w-4 h-4" />
                  <span>{courseCount} Courses</span>
                </div>
              </div>
              <div className="flex gap-6 mt-3 text-sm text-gray-600">
                <span>{type}</span>
                <span>|</span>
                <span>Estd. {established}</span>
                <span>|</span>
                <span className="font-semibold text-[#0060d1]">
                  {ranking}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onBrochureClick}
              className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <button
              onClick={onApplyClick}
              className="px-6 py-2.5 bg-[#0060d1] hover:bg-[#0050b3] text-white rounded-full font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeHeader;

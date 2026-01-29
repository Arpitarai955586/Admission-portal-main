import React from 'react';
import { Phone, Download, ChevronRight } from 'lucide-react';

interface GetStartedCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  onEnquiryClick?: () => void;
  onBrochureClick?: () => void;
  onApplyClick?: () => void;
}

const GetStartedCard: React.FC<GetStartedCardProps> = ({
  title = "Get Started!",
  subtitle = "What are you waiting for?",
  description = "Discover Your Education Journey With Us",
  onEnquiryClick,
  onBrochureClick,
  onApplyClick,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-4 text-gray-900">
        {title}
      </h3>
      <p className="text-sm mb-2 text-gray-700">
        {subtitle}
      </p>
      <p className="text-xs text-gray-500 mb-6">
        {description}
      </p>

      <div className="space-y-3">
        <button
          onClick={onEnquiryClick}
          className="w-full px-6 py-3 bg-white border-2 border-[#0060d1] text-[#0060d1] rounded-full font-semibold hover:bg-[#0060d1] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          <Phone className="w-4 h-4" />
          Enquiry Now
        </button>
        <button
          onClick={onBrochureClick}
          className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          <Download className="w-4 h-4" />
          Brochure
        </button>
        <button
          onClick={onApplyClick}
          className="w-full px-6 py-3 bg-[#0060d1] hover:bg-[#0050b3] text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          Apply Now
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default GetStartedCard;

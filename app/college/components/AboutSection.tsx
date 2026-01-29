import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AboutSectionProps {
  title?: string;
  paragraphs: string[];
  onReadMore?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About IIMA",
  paragraphs,
  onReadMore,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      <div className="text-gray-700 leading-relaxed space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>

      {onReadMore && (
        <button
          onClick={onReadMore}
          className="text-[#0060d1] font-semibold text-sm mt-4 hover:underline flex items-center gap-1 group"
        >
          Read More
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AboutSection;

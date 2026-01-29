import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NewsItem {
  date: string;
  content: string;
}

interface WhatsNewProps {
  title?: string;
  newsItems: NewsItem[];
  onReadMore?: () => void;
}

const WhatsNew: React.FC<WhatsNewProps> = ({
  title = "What's new?",
  newsItems,
  onReadMore,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index}>
            <span className="text-red-500 font-bold text-sm">
              {item.date}:
            </span>
            <span className="text-gray-700 ml-2">
              {item.content}
            </span>
          </div>
        ))}
      </div>

      {onReadMore && (
        <button
          onClick={onReadMore}
          className="text-[#0060d1] font-semibold text-sm mt-4 hover:underline flex items-center gap-1 group"
        >
          Read more
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default WhatsNew;

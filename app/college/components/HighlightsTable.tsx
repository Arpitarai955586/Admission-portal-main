import React from 'react';

interface HighlightItem {
  parameter: string;
  value: string;
  isLink?: boolean;
  links?: Array<{
    text: string;
    href: string;
  }>;
}

interface HighlightsTableProps {
  title?: string;
  highlights: HighlightItem[];
}

const HighlightsTable: React.FC<HighlightsTableProps> = ({
  title = "IIMA Highlights",
  highlights,
}) => {
  const renderValue = (item: HighlightItem) => {
    if (item.isLink && item.links) {
      return (
        <span>
          {item.links.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                className="text-[#0060d1] hover:underline"
              >
                {link.text}
              </a>
              {index < item.links!.length - 1 && ", "}
            </React.Fragment>
          ))}
          {item.value.includes("+") && ` ${item.value.split("+")[1]}`}
        </span>
      );
    }
    return item.value;
  };

  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0060d1] text-white">
              <th className="px-6 py-3 text-left font-semibold rounded-tl-lg">
                Parameter
              </th>
              <th className="px-6 py-3 text-left font-semibold rounded-tr-lg">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {highlights.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item.parameter}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {renderValue(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighlightsTable;

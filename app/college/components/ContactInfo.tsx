import React from 'react';
import { Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
  title?: string;
  mapImageUrl?: string;
  address: string;
  pincode: string;
  phone: string;
  phoneNote?: string;
  onViewMapClick?: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  title = "Contact Information",
  mapImageUrl,
  address,
  pincode,
  phone,
  phoneNote,
  onViewMapClick,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Phone className="w-5 h-5 text-[#0060d1]" />
        <h3 className="font-bold text-lg text-gray-900">
          {title}
        </h3>
      </div>

      {/* Map Image */}
      <div className="relative h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img
          src={mapImageUrl || "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Map+View"}
          alt="Map"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Map+View";
          }}
        />
        {onViewMapClick && (
          <button
            onClick={onViewMapClick}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0060d1] hover:bg-[#0050b3] text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg transition-all"
          >
            <MapPin className="w-4 h-4" />
            View On Map
          </button>
        )}
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <div className="text-gray-500 mb-1">Address</div>
          <div className="font-medium text-gray-900">
            {address}
          </div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">Pincode</div>
          <div className="font-medium text-gray-900">{pincode}</div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">Phone</div>
          <div className="font-medium text-[#0060d1]">
            {phone}
            {phoneNote && (
              <span className="text-xs text-gray-400 ml-2">
                ({phoneNote})
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

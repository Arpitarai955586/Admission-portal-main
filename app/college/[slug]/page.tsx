"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "../components/Breadcrumb";
import CollegeHeader from "../components/CollegeHeader";
import NavigationTabs from "../components/NavigationTabs";
import WhatsNew from "../components/WhatsNew";
import LatestNews from "../components/LatestNews";
import AboutSection from "../components/AboutSection";
import HighlightsTable from "../components/HighlightsTable";
import GetStartedCard from "../components/GetStartedCard";
import ContactInfo from "../components/ContactInfo";
import { BookOpen, Calendar1, ChevronRight, Download, GraduationCap, MapPin, Phone } from "lucide-react";

const CollegeDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    "Info",
    "Courses & Fees",
    "Admissions",
    "Placements",
    "Cutoffs",
    "Scholarships",
    "Rankings",
    "Hostel",
    "Reviews",
    "Gallery",
    "Facilities",
    "Faculty",
    "News",
    "Compare",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "#" },
    { label: "IIMA", href: "#" },
    { label: "College Info", isActive: true },
  ];

  const whatsNewItems = [
    {
      date: "26 Dec, 2025",
      content: "CAT 2025 Result has been announced. Candidates can download their scorecards from <a href='#' class='text-[#0060d1] hover:underline'>iimcat.ac.in</a>. Also, students can use the KollegeApply's <a href='#' class='text-[#0060d1] hover:underline font-semibold'>CAT College Predictor</a> to check their admission chances.",
    },
    {
      date: "13 Nov, 2025",
      content: "IIM Ahmedabad has introduced India's first two-year Blended MBA Programme in Business Analytics & AI. For the 2026 session (Round 1), the last date to apply is December 7, and the admit cards will be released on December 11. The IIMA test is scheduled to take place on December 14, 2025.",
    },
  ];

  const newsArticles = [
    {
      title: "Is XAT Tougher Than CAT? Check Full Comparison, Key...",
      date: "10 Nov, 2025",
    },
    {
      title: "Top MBA Colleges in India 2025 - Fees, Ranking, Exa...",
      date: "22 Sept, 2025",
    },
    {
      title: "IIM Ahmedabad MBA Placements 2025: BFSI Offers...",
      date: "20 Sept, 2025",
    },
    {
      title: "Top 10 IIMs in India: Rankings, Courses and Fee...",
      date: "16 Sept, 2025",
    },
  ];

  const aboutParagraphs = [
    "Indian Institute of Management Ahmedabad, famously known as IIM Ahmedabad or IIMA. It was established in <span class='font-semibold'>1961</span> under the Government of India in Vastrapur, Ahmedabad. IIMA is an institute of National Importance and has been accredited by the European Foundation for Management Development (EFMD) as the first B School in the year of 2003.",
    "IIM Ahmedabad Ranks #1 in India by the NIRF Ranking 2025, #1 amongst B-Schools in India by the Businessworld since 2024, #43 for IIMA Executive Education by Financial Times in 2024, #1 for IIMA 1 Year MBA program by Financial Times Times Global MBA Ranking 2025.",
    "IIMA offers an MBA course with 4 different specialisations, such as Food and Agriculture Management, Post Graduate Program in Management for Executive, and Blended Postgraduate Program in Management. Additionally, IIM Ahmedabad also offers an ePost Graduate Diploma in Advanced Business Analytics. IIM Ahmedabad Free Courses include online courses at EDX in Marketing, Finance, HR, Product Development, operations, and Analytics.",
    "Admission to IIM Ahmedabad is based on CAT entrance exam scores. IIM Ahmedabad PGP 2023-25 Batch size is <span class='font-semibold'>404 students</span> and <span class='font-semibold'>47</span> for the FABM program, with an average work experience of 26 months. IIM Ahmedabad Highest Package reached this year is <span class='font-semibold'>INR 1.1 Crore Per Annum</span>, while the average package stood at <span class='font-semibold'>INR 30 LPA</span>. Some of the IIMA Top Recruiters were Boston Consulting Group, TCS, Goldman Sachs, etc.",
  ];

  const highlights = [
    { parameter: "Founded Year", value: "1961" },
    {
      parameter: "Exams Accepted",
      value: "UGC NET, GRE, GMAT +2 more",
      isLink: true,
      links: [
        { text: "UGC NET", href: "#" },
        { text: "GRE", href: "#" },
        { text: "GMAT", href: "#" },
      ],
    },
    {
      parameter: "Courses Offered",
      value: "5 Degrees (19 Courses)",
      isLink: true,
      links: [{ text: "5 Degrees (19 Courses)", href: "#" }],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Breadcrumb items={breadcrumbItems} />

      <CollegeHeader
        name="IIM Ahmedabad (IIMA): Fees, Cut Off, Placements 2025"
        location="Ahmedabad, Gujarat"
        courseCount={19}
        type="Public/Government"
        established="1961"
        ranking="NIRF #1 (Management) 2025"
        onBrochureClick={() => console.log("Brochure clicked")}
        onApplyClick={() => console.log("Apply clicked")}
      />

      <NavigationTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Last Updated */}
            <div className="text-sm text-gray-600">
              • Updated on <span className="font-semibold">26 Dec, 2025</span>{" "}
              by{" "}
              <span className="text-[#0060d1] font-semibold">Shivam Kumar</span>
            </div>

            <WhatsNew newsItems={whatsNewItems} />

            <LatestNews articles={newsArticles} />

            <AboutSection paragraphs={aboutParagraphs} />

            <HighlightsTable highlights={highlights} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <GetStartedCard
              onEnquiryClick={() => console.log("Enquiry clicked")}
              onBrochureClick={() => console.log("Brochure clicked")}
              onApplyClick={() => console.log("Apply clicked")}
            />

            <ContactInfo
              mapImageUrl="https://maps.googleapis.com/maps/api/staticmap?center=Vastrapur,Ahmedabad,Gujarat&zoom=13&size=400x300&key=YOUR_API_KEY"
              address="Vastrapur, Ahmedabad, Gujarat - 380015"
              pincode="380015"
              phone="79XXXXXXX56"
              phoneNote="for general query"
              onViewMapClick={() => console.log("View map clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailPage;
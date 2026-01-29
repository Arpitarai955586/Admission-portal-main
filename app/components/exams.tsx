import { Calendar, ExternalLink, Info } from "lucide-react";
import Link from "next/link";
import ExamCard from "./ExamCard";

type Exam = {
  id: number;
  slug: string;
  logo: string;
  name: string;
  title: string;
  mode: "Online" | "Offline";
  date: string;
};

const exams: Exam[] = [
  {
    id: 1,
    slug: "ibsat-exam",
    logo: "IBS®",
    name: "IBSAT",
    title: "IBSAT",
    mode: "Offline",
    date: "27 Dec, 2025",
  },
  {
    id: 2,
    slug: "slat-exam",
    logo: "SYMBIOSIS",
    name: "SLAT",
    title: "SLAT",
    mode: "Online",
    date: "28 Dec, 2025",
  },
  {
    id: 3,
    slug: "xat-exam",
    logo: "XAT",
    name: "XAT",
    title: "MBA/PGDM",
    mode: "Online",
    date: "4 Jan, 2026",
  },
  {
    id: 4,
    slug: "wud-aptitude-test",
    logo: "WUD",
    name: "WUD Aptitude Test",
    title: "",
    mode: "Online",
    date: "4 Jan, 2026",
  },

  // ➕ New 4 Cards
  {
    id: 5,
    slug: "cat-exam",
    logo: "CAT",
    name: "CAT",
    title: "MBA",
    mode: "Online",
    date: "30 Nov, 2025",
  },
  {
    id: 6,
    slug: "nmat-by-gmac",
    logo: "NMAT",
    name: "NMAT by GMAC",
    title: "MBA/PGDM",
    mode: "Online",
    date: "15 Oct, 2025",
  },
  {
    id: 7,
    slug: "cmat-exam",
    logo: "CMAT",
    name: "CMAT",
    title: "MBA",
    mode: "Online",
    date: "20 Jan, 2026",
  },
  {
    id: 8,
    slug: "mat-exam",
    logo: "MAT",
    name: "MAT",
    title: "MBA/PGDM",
    mode: "Online",
    date: "10 Feb, 2026",
  },
];

export default function UpcomingExams() {
  return (
    <section className="max-w-7xl bg-[#f8f9fa] mx-auto px-6 py-15 ">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Exams</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {exams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </section>
  );
}
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the exam data type
export interface Exam {
  id: number;
  slug: string;
  logo: string;
  name: string;
  title: string;
  mode: "Online" | "Offline";
  date: string;
}

// Define the context value type
interface ExamsContextType {
  exams: Exam[];
  loading: boolean;
  error: string | null;
  setExams: React.Dispatch<React.SetStateAction<Exam[]>>;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
}

// Define provider props type
interface ExamsProviderProps {
  children: ReactNode;
}

// 1. Create Context with proper typing
const ExamsContext = createContext<ExamsContextType | null>(null);

// 2. Provider with proper typing
export const ExamsProvider: React.FC<ExamsProviderProps> = ({
  children,
}) => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const value: ExamsContextType = {
    exams,
    loading,
    error,
    setExams,
    setLoading,
    setError,
  };

  return (
    <ExamsContext.Provider value={value}>{children}</ExamsContext.Provider>
  );
};

// 3. Custom Hook (Best Practice)
export const useExams = (): ExamsContextType => {
  const context = useContext(ExamsContext);
  if (!context) {
    throw new Error("useExams must be used inside ExamsProvider");
  }
  return context;
};

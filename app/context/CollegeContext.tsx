import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the college data type
export interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  established: string;
  ranking: string;
  courseCount: number;
  description: string;
  highlights: Array<{
    parameter: string;
    value: string;
    isLink?: boolean;
    links?: Array<{
      text: string;
      href: string;
    }>;
  }>;
  newsArticles: Array<{
    title: string;
    date: string;
  }>;
  contactInfo: {
    address: string;
    pincode: string;
    phone: string;
    phoneNote?: string;
    mapImageUrl?: string;
  };
}

// Define the context value type
interface CollegeContextType {
  college: College | null;
  setCollege: React.Dispatch<React.SetStateAction<College | null>>;
}

// Define provider props type
interface CollegeProviderProps {
  children: ReactNode;
}

// 1. Create Context with proper typing
const CollegeContext = createContext<CollegeContextType | null>(null);

// 2. Provider with proper typing
export const CollegeProvider: React.FC<CollegeProviderProps> = ({
  children,
}) => {
  const [college, setCollege] = useState<College | null>(null);

  const value: CollegeContextType = {
    college,
    setCollege,
  };

  return (
    <CollegeContext.Provider value={value}>{children}</CollegeContext.Provider>
  );
};

// 3. Custom Hook (Best Practice)
export const useCollege = (): CollegeContextType => {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error("useCollege must be used inside CollegeProvider");
  }
  return context;
};

import React, { createContext, useContext, useState } from "react";

// Define the news data type
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category?: string;
  slug?: string;
  image?: string;
}

// Define the context value type
interface NewsContextType {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
  setNews: React.Dispatch<React.SetStateAction<NewsItem[]>>;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
}

// 1. Create Context with proper typing
const NewsContext = createContext<NewsContextType | null>(null);

// 2. Provider with proper typing
export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const value: NewsContextType = {
    news,
    loading,
    error,
    setNews,
    setLoading,
    setError,
  };

  return React.createElement(NewsContext.Provider, { value }, children);
};

// 3. Custom Hook (Best Practice)
export const useNews = (): NewsContextType => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used inside NewsProvider");
  }
  return context;
};
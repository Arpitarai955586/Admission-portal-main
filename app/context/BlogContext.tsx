import { createContext, useContext, useState, ReactNode } from "react";

export interface BlogPost {
  id: string;
  title: string;
  desc: string;
  image?: string;
  slug?: string;
}

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <BlogContext.Provider
      value={{
        posts,
        loading,
        error,
        setPosts,
        setLoading,
        setError,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used inside BlogProvider");
  }
  return context;
};

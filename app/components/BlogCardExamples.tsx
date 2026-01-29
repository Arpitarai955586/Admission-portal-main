// Example usage of BlogCard component in different scenarios

import React from 'react';
import BlogCard, { BlogPost } from './BlogCard';

const BlogCardExamples: React.FC = () => {
  // Example blog posts with different data
  const examplePosts: BlogPost[] = [
    {
      id: "1",
      category: "GUIDE",
      categoryColor: "text-blue-600",
      title: "Top 10 Tips for Writing a Winning Personal Statement",
      desc: "Crafting a compelling essay is key to standing out. Here's how to tell your story effectively.",
      image: "/images/post1.png",
      author: "Sarah Johnson",
      date: "Dec 15, 2025",
      readTime: "5 min read",
      tags: ["admissions", "essays"],
    },
    {
      id: "2",
      category: "FINANCIAL AID",
      categoryColor: "text-green-600",
      title: "Navigating the FAFSA: A Step-by-Step Tutorial",
      desc: "Don't leave money on the table. We break down the financial aid process simply.",
      image: "/images/post2.png",
      author: "Mike Chen",
      date: "Dec 12, 2025",
      readTime: "8 min read",
      tags: ["finance", "scholarships"],
    },
  ];

  const handleBlogClick = (post: BlogPost) => {
    console.log('Blog clicked:', post.title);
    // You can add navigation logic here
    // router.push(`/blog/${post.slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      {/* Default Variant */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Default Blog Cards</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examplePosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              variant="default"
              onClick={handleBlogClick}
            />
          ))}
        </div>
      </section>

      {/* Compact Variant */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Compact Blog Cards</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {examplePosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              variant="compact"
              onClick={handleBlogClick}
            />
          ))}
        </div>
      </section>

      {/* Featured Variant */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Blog Card</h2>
        <BlogCard
          post={examplePosts[0]}
          variant="featured"
          showImage={true}
          onClick={handleBlogClick}
        />
      </section>

      {/* With Images */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Blog Cards with Images</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {examplePosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              variant="default"
              showImage={true}
              onClick={handleBlogClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogCardExamples;

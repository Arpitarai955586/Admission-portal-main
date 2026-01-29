import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blob } from 'stream/consumers';

export interface BlogPost {
  id?: string;
  category: string;
  categoryColor: string;
  title: string;
  desc: string;
  image?: string;
  slug?: string;
  date?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
}

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  showImage?: boolean;
  variant?: 'default' | 'compact' | 'featured';
  onClick?: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  className = '',
  showImage = false,
  variant = 'default',
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(post);
    }
  };

  const cardClasses = {
    default: 'bg-white border shadow-sm border-gray-100 rounded-xl p-6 hover:shadow-sm transition',
    compact: 'bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition',
    featured: 'bg-white border shadow-sm border-gray-100 rounded-xl p-6 hover:shadow-md transition lg:flex lg:gap-6',
  };

  const titleClasses = {
    default: 'mt-2 text-xl font-semibold text-gray-900',
    compact: 'mt-1 text-lg font-semibold text-gray-900',
    featured: 'mt-2 text-2xl font-bold text-gray-900 lg:flex-1',
  };

  const descClasses = {
    default: 'mt-2 text-sm text-gray-600 leading-relaxed',
    compact: 'mt-1 text-sm text-gray-600 leading-relaxed line-clamp-2',
    featured: 'mt-2 text-base text-gray-600 leading-relaxed lg:flex-1',
  };

  return (
    <article
      className={`${cardClasses[variant]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      {showImage && post.image && (
        <div className={`mb-4 ${variant === 'featured' ? 'lg:flex-shrink-0 lg:w-80' : ''}`}>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src = '/images/blog-placeholder.png';
              }}
            />
          </div>
        </div>
      )}

      <div className={variant === 'featured' ? 'lg:flex lg:flex-col lg:justify-between' : ''}>
        <div>
          <span
            className={`text-xs font-semibold uppercase tracking-wide ${post.categoryColor}`}
          >
            {post.category}
          </span>

          <h3 className={titleClasses[variant]}>
            {post.title}
          </h3>

          <p className={descClasses[variant]}>
            {post.desc}
          </p>
        </div>

        <div className={`mt-4 flex items-center justify-between ${variant === 'featured' ? 'lg:mt-6' : ''}`}>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {post.author && <span>By {post.author}</span>}
            {post.date && <span>{post.date}</span>}
            {post.readTime && <span>{post.readTime}</span>}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-semibold text-blue-600 hover:underline"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   if (onClick) e.preventDefault();
            // }}
          >
            Read article →
          </Link>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;

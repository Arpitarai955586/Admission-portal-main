"use client";

import { useState, useEffect } from "react";
import { BlogPost } from "@/app/context/BlogContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2, Eye } from "lucide-react";

export function AdminBlogsTable() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching blogs from API
    const fetchBlogs = async () => {
      try {
        // In a real app, this would be an API call
        const mockBlogs: BlogPost[] = [
          {
            id: "1",
            title: "How to Choose the Right College for You",
            desc: "A comprehensive guide to help students make informed decisions about their college choices.",
            image: "/images/blog-1.jpg",
            slug: "how-to-choose-right-college"
          },
          {
            id: "2",
            title: "SAT vs ACT: Which Test Should You Take?",
            desc: "Understanding the differences between SAT and ACT exams and which one suits your strengths.",
            image: "/images/blog-2.jpg",
            slug: "sat-vs-act-guide"
          },
          {
            id: "3",
            title: "Scholarship Opportunities for International Students",
            desc: "Explore various scholarship programs available for international students worldwide.",
            image: "/images/blog-3.jpg",
            slug: "scholarships-international-students"
          }
        ];
        setBlogs(mockBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleEdit = (blog: BlogPost) => {
    // Handle edit functionality
    console.log("Edit blog:", blog);
  };

  const handleDelete = (blogId: string) => {
    // Handle delete functionality
    console.log("Delete blog:", blogId);
    setBlogs(blogs.filter(blog => blog.id !== blogId));
  };

  const handleView = (blog: BlogPost) => {
    // Handle view functionality
    console.log("View blog:", blog);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Blogs Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blogs Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell className="font-medium max-w-xs">
                  <div className="truncate">{blog.title}</div>
                </TableCell>
                <TableCell className="max-w-sm">
                  <div className="truncate text-sm text-muted-foreground">
                    {blog.desc}
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {blog.slug}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Published
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(blog)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(blog)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {blogs.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No blogs found. Click "Create Blog" to add your first blog post.
          </div>
        )}
      </CardContent>
    </Card>
  );
}

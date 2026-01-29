"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlogPost } from "@/app/context/BlogContext";

interface CreateBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateBlogModal({ isOpen, onClose }: CreateBlogModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    slug: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Generate slug from title if not provided
      const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

      // Create new blog post object
      const newBlogPost: Omit<BlogPost, 'id'> = {
        title: formData.title,
        desc: formData.desc,
        image: formData.image || undefined,
        slug: slug,
      };

      // In a real app, this would be an API call
      console.log("Creating blog post:", newBlogPost);

      // Reset form and close modal
      setFormData({
        title: "",
        desc: "",
        image: "",
        slug: "",
      });
      onClose();
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Auto-generate slug from title
  const handleTitleChange = (value: string) => {
    const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    setFormData(prev => ({
      ...prev,
      title: value,
      slug: slug
    }));
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create New Blog Post</SheetTitle>
          <SheetDescription>
            Add a new blog post to the platform. Fill in all the required information below.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 p-[20px] mt-6">
          <div className="space-y-2">
            <Label htmlFor="title">Blog Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Enter blog post title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">URL Slug</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => handleInputChange("slug", e.target.value)}
              placeholder="auto-generated-from-title"
            />
            <p className="text-sm text-muted-foreground">
              This will be used in the URL. Leave empty to auto-generate from title.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Featured Image URL</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => handleInputChange("image", e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="desc">Description *</Label>
            <Textarea
              id="desc"
              value={formData.desc}
              onChange={(e) => handleInputChange("desc", e.target.value)}
              placeholder="Brief description or excerpt of the blog post"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Create Blog Post
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

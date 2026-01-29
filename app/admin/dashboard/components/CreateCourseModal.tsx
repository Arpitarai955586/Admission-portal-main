"use client";

import { useState, useEffect } from "react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { College } from "@/app/context/CollegeContext";

// Define Course interface
interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  level: "Undergraduate" | "Graduate" | "Postgraduate" | "Diploma";
  fees: string;
  collegeId: string;
  collegeName: string;
  category: string;
}

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateCourseModal({ isOpen, onClose }: CreateCourseModalProps) {
  const [colleges, setColleges] = useState<College[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    level: "",
    fees: "",
    collegeId: "",
    category: "",
  });

  useEffect(() => {
    // Fetch colleges for the dropdown
    const fetchColleges = async () => {
      try {
        // In a real app, this would be an API call
        const mockColleges: College[] = [
          {
            id: "1",
            name: "Harvard University",
            location: "Cambridge, MA, USA",
            type: "Private",
            established: "1636",
            ranking: "#1",
            courseCount: 150,
            description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts.",
            highlights: [],
            newsArticles: [],
            contactInfo: { address: "", pincode: "", phone: "" }
          },
          {
            id: "2",
            name: "Stanford University",
            location: "Stanford, CA, USA",
            type: "Private",
            established: "1885",
            ranking: "#2",
            courseCount: 120,
            description: "Stanford University is a private research university in Stanford, California.",
            highlights: [],
            newsArticles: [],
            contactInfo: { address: "", pincode: "", phone: "" }
          }
        ];
        setColleges(mockColleges);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    if (isOpen) {
      fetchColleges();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const selectedCollege = colleges.find(c => c.id === formData.collegeId);

      // Create new course object
      const newCourse: Omit<Course, 'id'> = {
        name: formData.name,
        description: formData.description,
        duration: formData.duration,
        level: formData.level as "Undergraduate" | "Graduate" | "Postgraduate" | "Diploma",
        fees: formData.fees,
        collegeId: formData.collegeId,
        collegeName: selectedCollege?.name || "",
        category: formData.category,
      };

      // In a real app, this would be an API call
      console.log("Creating course:", newCourse);

      // Reset form and close modal
      setFormData({
        name: "",
        description: "",
        duration: "",
        level: "",
        fees: "",
        collegeId: "",
        category: "",
      });
      onClose();
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create New Course</SheetTitle>
          <SheetDescription>
            Add a new course to the platform. Fill in all the required information below.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 p-[20px] mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Course Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter course name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="collegeId">College *</Label>
              <Select value={formData.collegeId} onValueChange={(value) => handleInputChange("collegeId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a college" />
                </SelectTrigger>
                <SelectContent>
                  {colleges.map((college) => (
                    <SelectItem key={college.id} value={college.id}>
                      {college.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="level">Level *</Label>
              <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select course level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="Graduate">Graduate</SelectItem>
                  <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                  <SelectItem value="Diploma">Diploma</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration *</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
                placeholder="e.g., 4 years, 2 semesters"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fees">Fees *</Label>
              <Input
                id="fees"
                value={formData.fees}
                onChange={(e) => handleInputChange("fees", e.target.value)}
                placeholder="e.g., $50,000/year"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Arts">Arts</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Medicine">Medicine</SelectItem>
                  <SelectItem value="Law">Law</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Detailed description of the course"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Create Course
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

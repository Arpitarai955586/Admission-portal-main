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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Exam } from "@/app/context/ExamsContext";

interface CreateExamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateExamModal({ isOpen, onClose }: CreateExamModalProps) {
  const [formData, setFormData] = useState({
    slug: "",
    logo: "",
    name: "",
    title: "",
    mode: "",
    date: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create new exam object
      const newExam: Omit<Exam, 'id'> = {
        slug: formData.slug,
        logo: formData.logo,
        name: formData.name,
        title: formData.title,
        mode: formData.mode as "Online" | "Offline",
        date: formData.date,
      };

      // In a real app, this would be an API call
      console.log("Creating exam:", newExam);

      // Reset form and close modal
      setFormData({
        slug: "",
        logo: "",
        name: "",
        title: "",
        mode: "",
        date: "",
      });
      onClose();
    } catch (error) {
      console.error("Error creating exam:", error);
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
          <SheetTitle>Create New Exam</SheetTitle>
          <SheetDescription>
            Add a new exam to the platform. Fill in all the required information below.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 p-[20px] mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Exam Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="e.g., SAT, ACT, TOEFL"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => handleInputChange("slug", e.target.value)}
                placeholder="sat, act, toefl"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">Logo URL</Label>
              <Input
                id="logo"
                value={formData.logo}
                onChange={(e) => handleInputChange("logo", e.target.value)}
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mode">Exam Mode *</Label>
              <Select value={formData.mode} onValueChange={(value) => handleInputChange("mode", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select exam mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="Offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Full Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="e.g., Scholastic Assessment Test"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Next Exam Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Create Exam
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditCollegeModalProps {
  open: boolean;
  onClose: () => void;
  college: any;
  onUpdated: (college: any) => void;
}

export function EditCollegeModal({
  open,
  onClose,
  college,
  onUpdated,
}: EditCollegeModalProps) {
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (!college) return;

    setFormData({
      name: college.name ?? "",
      slug: college.slug ?? "",
      city: college.city ?? "",
      state: college.state ?? "",
      type: college.type ?? "",
      overview: college.overview ?? "",
      imageUrl: college.imageUrl ?? "",
      approved_by: (college.approved_by || []).join(", "),
      exams: (college.exams || []).join(", "),
      fees: college.fees ?? "",
      duration: college.duration ?? "",
      established: college.established ?? "",
      ranking: college.ranking ?? "",
    });
  }, [college]);

  if (!formData) return null;

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Unauthorized");

      const payload = {
        ...formData,
        approved_by: formData.approved_by
          .split(",")
          .map((v: string) => v.trim())
          .filter(Boolean),
        exams: formData.exams
          .split(",")
          .map((v: string) => v.trim())
          .filter(Boolean),
      };

      const res = await fetch(
        `/api/admin/colleges/${college._id}`, // ✅ SAME API
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (!res.ok) {
        throw new Error(data?.message || "Update failed");
      }

      onUpdated(data.college); // ✅ updated data
      onClose();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit College</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="College Name"
          />

          <Input
            value={formData.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
            placeholder="Slug"
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="City"
            />
            <Input
              value={formData.state}
              onChange={(e) => handleChange("state", e.target.value)}
              placeholder="State"
            />
          </div>

          <Select
            value={formData.type}
            onValueChange={(v) => handleChange("type", v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Govt">Govt</SelectItem>
              <SelectItem value="Private">Private</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            value={formData.overview}
            onChange={(e) => handleChange("overview", e.target.value)}
            placeholder="Overview"
          />

          <Input
            value={formData.approved_by}
            onChange={(e) => handleChange("approved_by", e.target.value)}
            placeholder="Approved by (comma separated)"
          />

          <Input
            value={formData.exams}
            onChange={(e) => handleChange("exams", e.target.value)}
            placeholder="Exams (comma separated)"
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
              value={formData.fees}
              onChange={(e) => handleChange("fees", e.target.value)}
              placeholder="Fees"
            />
            <Input
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              placeholder="Duration"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input
              value={formData.established}
              onChange={(e) => handleChange("established", e.target.value)}
              placeholder="Established"
            />
            <Input
              value={formData.ranking}
              onChange={(e) => handleChange("ranking", e.target.value)}
              placeholder="Ranking"
            />
          </div>

          <Input
            value={formData.imageUrl}
            onChange={(e) => handleChange("imageUrl", e.target.value)}
            placeholder="Image URL"
          />

          <Button className="w-full" onClick={handleSubmit}>
            Update College
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

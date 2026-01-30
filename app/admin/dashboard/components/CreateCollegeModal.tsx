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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import slugify from "slugify";

interface CreateCollegeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateCollegeModal({ isOpen, onClose }: CreateCollegeModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "",
    established: "",
    ranking: "",
    courseCount: "",
    description: "",
    address: "",
    pincode: "",
    phone: "",
    imageUrl: "",
    fees: "",
    exams: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in");
        return;
      }

      const [city = "", state = ""] = formData.location.split(",");

      const payload = {
        name: formData.name,
        slug: slugify(formData.name, { lower: true, strict: true }),
        type: formData.type === "Public" ? "Government" : formData.type,
        overview: formData.description,
        location: {
          city: city.trim(),
          state: state.trim(),
          address: formData.address,
          pincode: formData.pincode,
        },
        placements: {
          fees: Number(formData.fees) || 0,
          admission_process: "TBD",
        },
        exams: formData.exams
          ? formData.exams.split(",").map((e) => e.trim())
          : [],
        established: Number(formData.established) || 1851,
        ranking: {
          text: formData.ranking || "",
          nirf: 0,
          qsWorld: 0,
          timesWorld: 0,
        },
        courseCount: Number(formData.courseCount) || 0,
        phone: formData.phone,
        imageUrl: formData.imageUrl,
        is_active: true,
        created_by: localStorage.getItem("userId") || "696f2c527ee38a0de4fee9d3",
      };

      console.log("🎓 Creating college:", payload);

      const res = await fetch("/api/admin/colleges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      // SAFE RESPONSE HANDLING
      let data: any = null;
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : null;
      } catch {
        console.warn("Response is not JSON");
      }

      if (!res.ok) throw new Error(data?.message || "Failed to create college");

      alert("✅ College created successfully!");

      setFormData({
        name: "",
        location: "",
        type: "",
        established: "",
        ranking: "",
        courseCount: "",
        description: "",
        address: "",
        pincode: "",
        phone: "",
        imageUrl: "",
        fees: "",
        exams: "",
      });

      onClose();

      // Trigger refresh in admin table
      window.dispatchEvent(new Event("collegeCreated"));
    } catch (error: any) {
      console.error("❌ Error creating college:", error);
      alert(error.message);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create New College</SheetTitle>
          <SheetDescription>Add a new college to the platform</SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 p-5 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>College Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Location *</Label>
              <Input
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="City, State"
                required
              />
            </div>

            <div>
              <Label>Type *</Label>
              <Select
                value={formData.type}
                onValueChange={(v) => handleInputChange("type", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Private">Private</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Deemed">Deemed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Established</Label>
              <Input
                value={formData.established}
                onChange={(e) => handleInputChange("established", e.target.value)}
              />
            </div>

            <div>
              <Label>Ranking</Label>
              <Input
                value={formData.ranking}
                onChange={(e) => handleInputChange("ranking", e.target.value)}
              />
            </div>

            <div>
              <Label>Course Count</Label>
              <Input
                type="number"
                value={formData.courseCount}
                onChange={(e) => handleInputChange("courseCount", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label>Description *</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Annual Fees</Label>
              <Input
                value={formData.fees}
                onChange={(e) => handleInputChange("fees", e.target.value)}
              />
            </div>

            <div>
              <Label>Accepted Exams</Label>
              <Input
                value={formData.exams}
                onChange={(e) => handleInputChange("exams", e.target.value)}
                placeholder="JEE, CUET"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
            <Input
              placeholder="Pincode"
              value={formData.pincode}
              onChange={(e) => handleInputChange("pincode", e.target.value)}
            />
            <Input
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            <Input
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={(e) => handleInputChange("imageUrl", e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create College</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ViewCollegeModalProps {
  open: boolean;
  onClose: () => void;
  college: any;
}

export function ViewCollegeModal({
  open,
  onClose,
  college,
}: ViewCollegeModalProps) {
  if (!college) return null;

  const isActive = college.isActive ?? college.is_active ?? true;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>College Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 text-sm">
          {/* Name */}
          <p>
            <strong>Name:</strong> {college.name}
          </p>

          {/* Slug */}
          {college.slug && (
            <p>
              <strong>Slug:</strong>{" "}
              <span className="text-muted-foreground">{college.slug}</span>
            </p>
          )}

          {/* Exams */}
          <p>
            <strong>Exams:</strong>{" "}
            {college.exams?.length ? college.exams.join(", ") : "-"}
          </p>

          {/* Fees */}
          <p>
            <strong>Fees:</strong> {college.fees ?? "-"}
          </p>

          {/* Duration */}
          <p>
            <strong>Duration:</strong> {college.duration ?? "-"}
          </p>

          {/* Established */}
          <p>
            <strong>Established:</strong> {college.established ?? "-"}
          </p>

          {/* Ranking */}
          <p>
            <strong>Ranking:</strong>{" "}
            {typeof college.ranking === "string"
              ? college.ranking
              : college.ranking?.text ||
                college.ranking?.nirf ||
                "-"}
          </p>

          {/* Status */}
          <p className="flex items-center gap-2">
            <strong>Status:</strong>
            <Badge
              variant="outline"
              className={
                isActive
                  ? "text-green-600 border-green-600"
                  : "text-red-600 border-red-600"
              }
            >
              {isActive ? "Active" : "Inactive"}
            </Badge>
          </p>

          {/* Overview */}
          {college.overview && (
            <p>
              <strong>Overview:</strong>{" "}
              <span className="text-muted-foreground">
                {college.overview}
              </span>
            </p>
          )}

          {/* Approved By */}
          {college.approved_by?.length > 0 && (
            <p>
              <strong>Approved By:</strong>{" "}
              {college.approved_by.join(", ")}
            </p>
          )}

          {/* Image */}
          {college.imageUrl && (
            <div>
              <strong>Image:</strong>
              <img
                src={college.imageUrl}
                alt={college.name}
                className="mt-2 w-full h-36 object-cover rounded-lg border"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Created By */}
          {college.created_by && (
            <p className="text-xs text-muted-foreground pt-2">
              Created by {college.created_by.name || "Admin"}
              {college.created_by.email
                ? ` (${college.created_by.email})`
                : ""}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

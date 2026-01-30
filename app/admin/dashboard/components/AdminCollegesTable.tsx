"use client";

import { useState, useEffect } from "react";
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
import { EditCollegeModal } from "./EditCollegeModal";
import { ViewCollegeModal} from "./ViewCollegeModal";


/* ================= TYPES ================= */
interface College {
  _id: string;
  name: string;
  slug: string;
  type?: string;
  overview?: string;
  established?: string;
  location?: {
    city?: string;
    state?: string;
    pincode?: string;
    address?: string;
  };
  placements?: {
    courseCount?: number;
    admission_process?: string;
    fees?: string | number;
  };
  exams?: string[];
  ranking?: {
    nirf?: number;
    qsWorld?: number;
    timesWorld?: number;
    text?: string;
  };
  isActive?: boolean;
  is_active?: boolean;
  created_by?: {
    _id?: string;
    name?: string;
    email?: string;
  };
  courses?: any[];
}

/* ================= COMPONENT ================= */
export function AdminCollegesTable() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewCollege, setViewCollege] = useState<College | null>(null);
  const [editCollege, setEditCollege] = useState<College | null>(null);

  /* ================= FETCH COLLEGES ================= */
  const fetchColleges = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token missing");

      const res = await fetch("/api/colleges", {
        headers: { Authorization: `Bearer ${token}` },
      });

     const text = await res.text();
     const data = text ? JSON.parse(text) : null;

      if (!res.ok) throw new Error(data.message);

      setColleges(Array.isArray(data.colleges) ? data.colleges : []);
    } catch (error: any) {
      console.error("Fetch colleges error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  fetchColleges();

  const refresh = () => fetchColleges();
  window.addEventListener("collegeCreated", refresh);

  return () => {
    window.removeEventListener("collegeCreated", refresh);
  };
}, []);


  /* ================= VIEW ================= */
  const handleView = async (college: College) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token missing");

    const res = await fetch(`/api/admin/colleges/${college._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Failed to fetch college");
    }

    setViewCollege(data.college);
  } catch (error) {
    console.error("View college error:", error);

    // 🛟 fallback → at least modal open ho
    setViewCollege(college);
  }
};


  /* ================= EDIT ================= */
 const handleEdit = async (college: College) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token missing");

    const res = await fetch(`/api/admin/colleges/${college._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Failed to fetch college");
    }

    // ✅ modal open hoga
    setEditCollege(data.college);
  } catch (error) {
    console.error("Edit college error:", error);

    // 🛟 fallback → modal fir bhi open ho
    setEditCollege(college);
  }
};



  // const handleUpdate = async (id: string, updateData: any) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) return;

  //     const res = await fetch(`/api/colleges/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(updateData),
  //     });

  //     const data = await res.json();
  //     if (!res.ok) throw new Error(data.message);

  //     setColleges((prev) =>
  //       prev.map((c) => (c._id === id ? data.college : c))
  //     );
  //   } catch (error: any) {
  //     alert(error.message);
  //   }
  // };

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
  const ok = confirm("Deactivate this college?");
  if (!ok) return;

  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token missing");

    const res = await fetch(`/api/admin/colleges/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const contentType = res.headers.get("content-type");
    let data: any = null;

    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    }

    if (!res.ok) {
      throw new Error(data?.message || "Failed to delete college");
    }

    // ✅ UI se remove
    setColleges((prev) => prev.filter((c) => c._id !== id));

    alert("College deactivated successfully");
  } catch (error: any) {
    console.error("Delete college error:", error);
    alert(error.message || "Delete failed");
  }
};


  /* ================= LINK COURSE ================= */
  // const handleLinkCourse = async (collegeId: string, courseData: any) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) return;

  //     const res = await fetch(`/api/colleges/${collegeId}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(courseData),
  //     });

  //     const data = await res.json();
  //     if (!res.ok) throw new Error(data.message);

  //     // update the local state
  //     setColleges((prev) =>
  //       prev.map((c) =>
  //         c._id === collegeId ? { ...c, courses: data.courses } : c
  //       )
  //     );
  //     alert(data.message);
  //   } catch (err: any) {
  //     alert(err.message);
  //   }
  // };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Colleges Management</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </CardContent>
      </Card>
    );
  }

  /* ================= UI ================= */
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Colleges Management</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>College Name</TableHead>
                <TableHead>Exams</TableHead>
                <TableHead>Fees</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Established</TableHead>
                <TableHead>Ranking</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {colleges.map((college) => {
                const isActive = college.isActive ?? college.is_active ?? true;

                return (
                  <TableRow key={college._id}>
                    <TableCell className="font-medium">{college.name}</TableCell>
                    <TableCell>
                      {college.exams?.length ? college.exams.join(", ") : "-"}
                    </TableCell>
                    <TableCell>{college.placements?.fees || "-"}</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>{college.established || "-"}</TableCell>
                    <TableCell>
                      {college.ranking?.text ||
                        college.ranking?.nirf ||
                        college.ranking?.qsWorld ||
                        "-"}
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      {college.created_by?.name ||
                        college.created_by?.email ||
                        "Admin"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleView(college)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(college)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(college._id)}
                          className="text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {colleges.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No colleges found.
            </div>
          )}
        </CardContent>
      </Card>
      {/* Model */}
       <EditCollegeModal
  open={Boolean(editCollege)}
  college={editCollege}
  onClose={() => setEditCollege(null)}
  onUpdated={(updated: College) => {
    setColleges((prev) =>
      prev.map((c) =>
        c._id === updated._id ? updated : c
      )
    );
    setEditCollege(null); 
  }}
/>

 <ViewCollegeModal
        open={!!viewCollege}
        college={viewCollege}
        onClose={() => setViewCollege(null)}
      />


    </>
  );
}

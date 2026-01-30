"use client";

import { useEffect, useState } from "react";
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

/* ================= TYPES ================= */
interface Exam {
  _id: string;
  name: string;
  slug: string;
  title?: string;
  mode?: "Online" | "Offline";
  date?: string;
  isActive?: boolean;
}

/* ================= COMPONENT ================= */
export function AdminExamsTable() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH EXAMS ================= */
  const fetchExams = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await fetch("/api/admin/exams", {
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : undefined,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setExams(
  Array.isArray(data.exams)
    ? data.exams
    : Array.isArray(data)
    ? data
    : []
);
    } catch (error) {
      console.error("Fetch exams error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  /* ================= ACTIONS ================= */
  const handleView = (exam: Exam) => {
    console.log("View exam:", exam);
  };

  const handleEdit = (exam: Exam) => {
    console.log("Edit exam:", exam);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this exam?")) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`/api/admin/exams/${id}`, {
        method: "DELETE",
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : undefined,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setExams((prev) => prev.filter((e) => e._id !== id));
    } catch (error: any) {
      alert(error.message);
    }
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Exams Management</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </CardContent>
      </Card>
    );
  }

  /* ================= UI ================= */
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exams Management</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Mode</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam._id}>
                <TableCell className="font-medium">{exam.name}</TableCell>

                <TableCell>{exam.title || "-"}</TableCell>

                <TableCell>
                  <Badge
                    variant={exam.mode === "Online" ? "default" : "secondary"}
                  >
                    {exam.mode || "-"}
                  </Badge>
                </TableCell>

                <TableCell>
                  {exam.date
                    ? new Date(exam.date).toLocaleDateString()
                    : "-"}
                </TableCell>

                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    Active
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleView(exam)}>
                      <Eye className="h-4 w-4" />
                    </Button>

                    <Button variant="ghost" size="sm" onClick={() => handleEdit(exam)}>
                      <Edit className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600"
                      onClick={() => handleDelete(exam._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {exams.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No exams found.
          </div>
        )}
      </CardContent>
    </Card>
  );
}

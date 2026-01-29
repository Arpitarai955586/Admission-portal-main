"use client";

import { useState, useEffect } from "react";
import { Exam } from "@/app/context/ExamsContext";
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

export function AdminExamsTable() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching exams from API
    const fetchExams = async () => {
      try {
        // In a real app, this would be an API call
        const mockExams: Exam[] = [
          {
            id: 1,
            slug: "sat",
            logo: "/images/sat-logo.png",
            name: "SAT",
            title: "Scholastic Assessment Test",
            mode: "Online",
            date: "2024-03-15"
          },
          {
            id: 2,
            slug: "act",
            logo: "/images/act-logo.png",
            name: "ACT",
            title: "American College Testing",
            mode: "Offline",
            date: "2024-04-20"
          },
          {
            id: 3,
            slug: "toefl",
            logo: "/images/toefl-logo.png",
            name: "TOEFL",
            title: "Test of English as a Foreign Language",
            mode: "Online",
            date: "2024-02-28"
          }
        ];
        setExams(mockExams);
      } catch (error) {
        console.error("Error fetching exams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  const handleEdit = (exam: Exam) => {
    // Handle edit functionality
    console.log("Edit exam:", exam);
  };

  const handleDelete = (examId: number) => {
    // Handle delete functionality
    console.log("Delete exam:", examId);
    setExams(exams.filter(exam => exam.id !== examId));
  };

  const handleView = (exam: Exam) => {
    // Handle view functionality
    console.log("View exam:", exam);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Exams Management</CardTitle>
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
        <CardTitle>Exams Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Mode</TableHead>
              <TableHead>Next Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell className="font-medium">{exam.name}</TableCell>
                <TableCell className="max-w-xs">
                  <div className="truncate">{exam.title}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={exam.mode === "Online" ? "default" : "secondary"}>
                    {exam.mode}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(exam.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Active
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(exam)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(exam)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(exam.id)}
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
        {exams.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No exams found. Click "Create Exam" to add your first exam.
          </div>
        )}
      </CardContent>
    </Card>
  );
}

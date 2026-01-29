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

export function AdminCoursesTable() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching courses from API
    const fetchCourses = async () => {
      try {
        // In a real app, this would be an API call
        const mockCourses: Course[] = [
          {
            id: "1",
            name: "Computer Science",
            description: "Comprehensive program covering programming, algorithms, and software engineering.",
            duration: "4 years",
            level: "Undergraduate",
            fees: "$50,000/year",
            collegeId: "1",
            collegeName: "Harvard University",
            category: "Technology"
          },
          {
            id: "2",
            name: "Business Administration",
            description: "Learn essential business skills, management principles, and entrepreneurship.",
            duration: "3 years",
            level: "Undergraduate",
            fees: "$45,000/year",
            collegeId: "2",
            collegeName: "Stanford University",
            category: "Business"
          },
          {
            id: "3",
            name: "Data Science & Analytics",
            description: "Advanced program focusing on data analysis, machine learning, and AI.",
            duration: "2 years",
            level: "Graduate",
            fees: "$60,000/year",
            collegeId: "1",
            collegeName: "Harvard University",
            category: "Technology"
          }
        ];
        setCourses(mockCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleEdit = (course: Course) => {
    // Handle edit functionality
    console.log("Edit course:", course);
  };

  const handleDelete = (courseId: string) => {
    // Handle delete functionality
    console.log("Delete course:", courseId);
    setCourses(courses.filter(course => course.id !== courseId));
  };

  const handleView = (course: Course) => {
    // Handle view functionality
    console.log("View course:", course);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Courses Management</CardTitle>
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
        <CardTitle>Courses Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>College</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Fees</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium max-w-xs">
                  <div className="truncate">{course.name}</div>
                </TableCell>
                <TableCell className="max-w-xs">
                  <div className="truncate text-sm">{course.collegeName}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {course.level}
                  </Badge>
                </TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>{course.fees}</TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {course.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(course)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(course)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(course.id)}
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
        {courses.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No courses found. Click "Create Course" to add your first course.
          </div>
        )}
      </CardContent>
    </Card>
  );
}

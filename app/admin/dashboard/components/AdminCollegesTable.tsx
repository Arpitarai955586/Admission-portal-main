"use client";

import { useState, useEffect } from "react";
import { College } from "@/app/context/CollegeContext";
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

export function AdminCollegesTable() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching colleges from API
    const fetchColleges = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll use mock data
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
            highlights: [
              { parameter: "Acceptance Rate", value: "4.6%" },
              { parameter: "Total Students", value: "21,000+" },
              { parameter: "International Students", value: "25%" }
            ],
            newsArticles: [
              { title: "Harvard announces new research initiative", date: "2024-01-15" }
            ],
            contactInfo: {
              address: "Cambridge, MA 02138, USA",
              pincode: "02138",
              phone: "+1 (617) 495-1000",
              mapImageUrl: "/images/harvard-map.jpg"
            }
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
            highlights: [
              { parameter: "Acceptance Rate", value: "3.9%" },
              { parameter: "Total Students", value: "16,000+" },
              { parameter: "International Students", value: "22%" }
            ],
            newsArticles: [
              { title: "Stanford launches AI research center", date: "2024-01-10" }
            ],
            contactInfo: {
              address: "Stanford, CA 94305, USA",
              pincode: "94305",
              phone: "+1 (650) 723-2300",
              mapImageUrl: "/images/stanford-map.jpg"
            }
          }
        ];
        setColleges(mockColleges);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const handleEdit = (college: College) => {
    // Handle edit functionality
    console.log("Edit college:", college);
  };

  const handleDelete = (collegeId: string) => {
    // Handle delete functionality
    console.log("Delete college:", collegeId);
    setColleges(colleges.filter(college => college.id !== collegeId));
  };

  const handleView = (college: College) => {
    // Handle view functionality
    console.log("View college:", college);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Colleges Management</CardTitle>
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
        <CardTitle>Colleges Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Ranking</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {colleges.map((college) => (
              <TableRow key={college.id}>
                <TableCell className="font-medium">{college.name}</TableCell>
                <TableCell>{college.location}</TableCell>
                <TableCell>
                  <Badge variant={college.type === "Private" ? "default" : "secondary"}>
                    {college.type}
                  </Badge>
                </TableCell>
                <TableCell>{college.ranking}</TableCell>
                <TableCell>{college.courseCount} courses</TableCell>
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
                      onClick={() => handleDelete(college.id)}
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
        {colleges.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No colleges found. Click "Create College" to add your first college.
          </div>
        )}
      </CardContent>
    </Card>
  );
}

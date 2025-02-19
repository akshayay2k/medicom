
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function GrievanceList() {
  const navigate = useNavigate();

  const grievances = [
    {
      id: "GRV-001",
      memberName: "John Doe",
      type: "Technical",
      status: "Open",
      priority: "High",
      dueDate: "2024-03-20",
      cmsCode: "GT001",
    },
    // Add more sample data as needed
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-blue-100 text-blue-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Member Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>CMS Code</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grievances.map((grievance) => (
            <TableRow key={grievance.id}>
              <TableCell>{grievance.id}</TableCell>
              <TableCell>{grievance.memberName}</TableCell>
              <TableCell>{grievance.type}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(grievance.status)}>
                  {grievance.status}
                </Badge>
              </TableCell>
              <TableCell>{grievance.priority}</TableCell>
              <TableCell>{grievance.dueDate}</TableCell>
              <TableCell>{grievance.cmsCode}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/grievances/${grievance.id}`)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

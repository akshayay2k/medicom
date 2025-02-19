
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { GrievanceList } from "@/components/grievances/GrievanceList";
import { NewGrievanceDialog } from "@/components/grievances/NewGrievanceDialog";
import { Plus } from "lucide-react";

const GrievancesPage = () => {
  const [isNewGrievanceOpen, setIsNewGrievanceOpen] = useState(false);
  const { toast } = useToast();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Appeals & Grievances</h1>
            <p className="mt-2 text-gray-600">Manage and track member grievances and appeals</p>
          </div>
          <Button onClick={() => setIsNewGrievanceOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> New Grievance
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Open Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">24</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Due This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-yellow-600">8</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-600">3</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <GrievanceList />
          </CardContent>
        </Card>

        <NewGrievanceDialog 
          open={isNewGrievanceOpen} 
          onOpenChange={setIsNewGrievanceOpen}
        />
      </div>
    </DashboardLayout>
  );
};

export default GrievancesPage;

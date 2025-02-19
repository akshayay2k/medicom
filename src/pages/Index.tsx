
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const complianceData = [
  { month: 'Jan', score: 85 },
  { month: 'Feb', score: 88 },
  { month: 'Mar', score: 92 },
  { month: 'Apr', score: 90 },
  { month: 'May', score: 95 },
  { month: 'Jun', score: 89 },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="animate-slide-up">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to MedCompli</h1>
            <p className="mt-2 text-gray-600">Your Medicare Compliance Dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Overall Compliance</h3>
              <p className="text-2xl font-bold text-primary mt-2">95%</p>
            </Card>
            <Card className="p-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Pending Tasks</h3>
              <p className="text-2xl font-bold text-secondary mt-2">12</p>
            </Card>
            <Card className="p-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Risk Score</h3>
              <p className="text-2xl font-bold text-green-600 mt-2">Low</p>
            </Card>
          </div>

          <Card className="p-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Compliance Trend</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={complianceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#14B8A6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Index;

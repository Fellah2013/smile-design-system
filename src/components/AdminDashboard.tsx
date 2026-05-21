import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Clock, 
  Search, 
  MoreVertical, 
  CheckCircle, 
  XCircle,
  Clock3
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface Appointment {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled";
  submittedAt: string;
}

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("renee_appointments");
    if (data) {
      setAppointments(JSON.parse(data));
    } else {
      // Mock some data if empty
      const mockData: Appointment[] = [
        {
          id: "1",
          fullName: "Kelvin Kibet",
          phone: "0712345678",
          email: "kelvin@example.com",
          date: "2024-05-20",
          time: "10:30",
          service: "cleaning",
          status: "confirmed",
          submittedAt: new Date().toISOString()
        },
        {
          id: "2",
          fullName: "Mercy Mwangi",
          phone: "0798765432",
          email: "mercy@example.com",
          date: "2024-05-21",
          time: "14:00",
          service: "braces",
          status: "pending",
          submittedAt: new Date().toISOString()
        }
      ];
      setAppointments(mockData);
      localStorage.setItem("renee_appointments", JSON.stringify(mockData));
    }
  }, []);

  const updateStatus = (id: string, status: "confirmed" | "cancelled") => {
    const updated = appointments.map(app => 
      app.id === id ? { ...app, status } : app
    );
    setAppointments(updated);
    localStorage.setItem("renee_appointments", JSON.stringify(updated));
    toast.success(`Appointment ${status} successfully`);
  };

  const filtered = appointments.filter(app => 
    app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === "pending").length,
    confirmed: appointments.filter(a => a.status === "confirmed").length,
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Appointments Management</h2>
          <p className="text-slate-500">Welcome back, Admin. Here are the latest bookings.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="h-8 px-4 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             Live Dashboard
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Confirmed Today</CardTitle>
            <Calendar className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.confirmed}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="bg-slate-50 border-b">
          <div className="flex items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
              <Input 
                placeholder="Search by name or service..." 
                className="pl-10 h-10" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-64 text-center">
                      <div className="flex flex-col items-center gap-2 text-slate-400">
                         <Search size={40} />
                         <p>No appointments found.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>
                        <div className="font-medium text-slate-900">{app.fullName}</div>
                        <div className="text-xs text-slate-500">{app.phone}</div>
                      </TableCell>
                      <TableCell className="capitalize">{app.service.replace("-", " ")}</TableCell>
                      <TableCell>
                        <div className="flex flex-col text-sm">
                           <span className="flex items-center gap-1"><Calendar size={12}/> {app.date}</span>
                           <span className="flex items-center gap-1 font-bold"><Clock size={12}/> {app.time}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {app.status === "pending" && (
                          <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100 flex items-center gap-1 w-fit">
                            <Clock3 size={12} /> Pending
                          </Badge>
                        )}
                        {app.status === "confirmed" && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 flex items-center gap-1 w-fit">
                            <CheckCircle size={12} /> Confirmed
                          </Badge>
                        )}
                        {app.status === "cancelled" && (
                          <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-100 flex items-center gap-1 w-fit">
                            <XCircle size={12} /> Cancelled
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        {app.status === "pending" && (
                          <div className="flex justify-end gap-2">
                             <Button 
                               size="sm" 
                               variant="outline" 
                               className="h-8 text-xs border-green-200 text-green-700 hover:bg-green-50"
                               onClick={() => updateStatus(app.id, "confirmed")}
                             >
                               Confirm
                             </Button>
                             <Button 
                               size="sm" 
                               variant="outline" 
                               className="h-8 text-xs border-red-200 text-red-700 hover:bg-red-50"
                               onClick={() => updateStatus(app.id, "cancelled")}
                             >
                               Cancel
                             </Button>
                          </div>
                        )}
                        {app.status !== "pending" && (
                           <Button size="icon" variant="ghost">
                             <MoreVertical size={16} />
                           </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-sm text-slate-500">
           Tip: You can use <kbd className="bg-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold">Ctrl + Shift + A</kbd> anywhere on the site to return to the public view.
         </p>
         <Button onClick={() => window.print()} variant="outline" size="sm">
           Export Report
         </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
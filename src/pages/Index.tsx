import { useState } from "react";
import { Bug, AlertTriangle, CheckCircle2, Clock, Activity } from "lucide-react";
import { mockDefects } from "@/data/mockDefects";
import { Defect } from "@/types/defect";
import { StatCard } from "@/components/StatCard";
import { DefectForm } from "@/components/DefectForm";
import { DefectTable } from "@/components/DefectTable";
import { DefectCharts } from "@/components/DefectCharts";

const Index = () => {
  const [defects, setDefects] = useState<Defect[]>(mockDefects);

  const handleAddDefect = (defect: Defect) => {
    setDefects((prev) => [defect, ...prev]);
  };

  const open = defects.filter((d) => d.status === "open").length;
  const inProgress = defects.filter((d) => d.status === "in-progress").length;
  const resolved = defects.filter((d) => d.status === "resolved" || d.status === "closed").length;
  const critical = defects.filter((d) => d.severity === "critical" && d.status !== "closed").length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Bug className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">QA Defect Tracker</h1>
            <p className="text-xs text-muted-foreground">Logging, Tracking & Visualizing Software Defects</p>
          </div>
        </div>
      </header>

      <main className="container py-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Defects" value={defects.length} icon={Activity} />
          <StatCard title="Open" value={open} icon={Bug} iconClassName="text-primary" />
          <StatCard title="In Progress" value={inProgress} icon={Clock} iconClassName="text-high" />
          <StatCard title="Critical Active" value={critical} icon={AlertTriangle} iconClassName="text-critical" />
        </div>

        {/* Charts */}
        <DefectCharts defects={defects} />

        {/* Form + Table */}
        <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-6">
          <DefectForm onSubmit={handleAddDefect} defectCount={defects.length} />
          <DefectTable defects={defects} />
        </div>
      </main>
    </div>
  );
};

export default Index;

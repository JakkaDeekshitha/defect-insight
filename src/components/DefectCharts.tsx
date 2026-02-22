import { Defect } from "@/types/defect";
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const SEVERITY_COLORS = {
  critical: "hsl(0, 72%, 51%)",
  high: "hsl(25, 95%, 53%)",
  medium: "hsl(45, 93%, 47%)",
  low: "hsl(142, 71%, 45%)",
};

const STATUS_COLORS = {
  open: "hsl(217, 91%, 60%)",
  "in-progress": "hsl(25, 95%, 53%)",
  resolved: "hsl(142, 71%, 45%)",
  closed: "hsl(215, 20%, 55%)",
};

function countBy<T extends string>(items: T[]): Record<string, number> {
  return items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

export function DefectCharts({ defects }: { defects: Defect[] }) {
  const severityCounts = countBy(defects.map((d) => d.severity));
  const statusCounts = countBy(defects.map((d) => d.status));

  const severityData = Object.entries(severityCounts).map(([name, value]) => ({ name, value }));
  const statusData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

  const moduleCounts = countBy(defects.map((d) => d.module));
  const moduleData = Object.entries(moduleCounts).map(([name, value]) => ({ name, value }));

  const tooltipStyle = {
    contentStyle: {
      backgroundColor: "hsl(222, 47%, 9%)",
      border: "1px solid hsl(222, 30%, 18%)",
      borderRadius: "8px",
      color: "hsl(210, 40%, 96%)",
      fontSize: "12px",
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Severity Pie */}
      <div className="glass-card rounded-lg p-5 animate-fade-in">
        <h4 className="text-sm font-semibold mb-1">By Severity</h4>
        <p className="text-xs text-muted-foreground mb-3">Distribution of defect priorities</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={severityData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" stroke="none">
              {severityData.map((entry) => (
                <Cell key={entry.name} fill={SEVERITY_COLORS[entry.name as keyof typeof SEVERITY_COLORS]} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: "11px" }} formatter={(value: string) => <span className="capitalize text-muted-foreground">{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Status Pie */}
      <div className="glass-card rounded-lg p-5 animate-fade-in">
        <h4 className="text-sm font-semibold mb-1">By Status</h4>
        <p className="text-xs text-muted-foreground mb-3">Current defect workflow states</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={statusData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" stroke="none">
              {statusData.map((entry) => (
                <Cell key={entry.name} fill={STATUS_COLORS[entry.name as keyof typeof STATUS_COLORS]} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: "11px" }} formatter={(value: string) => <span className="capitalize text-muted-foreground">{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Module Bar */}
      <div className="glass-card rounded-lg p-5 animate-fade-in">
        <h4 className="text-sm font-semibold mb-1">By Module</h4>
        <p className="text-xs text-muted-foreground mb-3">Defects per system module</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={moduleData} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }} allowDecimals={false} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 10 }} width={80} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="value" fill="hsl(217, 91%, 60%)" radius={[0, 4, 4, 0]} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

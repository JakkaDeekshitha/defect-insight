import { Defect } from "@/types/defect";
import { SeverityBadge } from "./SeverityBadge";
import { StatusBadge } from "./StatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DefectTableProps {
  defects: Defect[];
}

export function DefectTable({ defects }: DefectTableProps) {
  return (
    <div className="glass-card rounded-lg overflow-hidden animate-fade-in">
      <div className="p-5 border-b border-border">
        <h3 className="text-lg font-semibold">Defect Log</h3>
        <p className="text-sm text-muted-foreground mt-0.5">All tracked defects with current status</p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground font-medium">ID</TableHead>
              <TableHead className="text-muted-foreground font-medium">Title</TableHead>
              <TableHead className="text-muted-foreground font-medium">Severity</TableHead>
              <TableHead className="text-muted-foreground font-medium">Status</TableHead>
              <TableHead className="text-muted-foreground font-medium">Module</TableHead>
              <TableHead className="text-muted-foreground font-medium">Assignee</TableHead>
              <TableHead className="text-muted-foreground font-medium">Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {defects.map((defect) => (
              <TableRow key={defect.id} className="border-border hover:bg-accent/50 transition-colors">
                <TableCell className="font-mono text-xs text-primary">{defect.id}</TableCell>
                <TableCell className="font-medium max-w-[250px] truncate">{defect.title}</TableCell>
                <TableCell><SeverityBadge severity={defect.severity} /></TableCell>
                <TableCell><StatusBadge status={defect.status} /></TableCell>
                <TableCell className="text-sm text-muted-foreground">{defect.module}</TableCell>
                <TableCell className="text-sm">{defect.assignee}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{defect.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

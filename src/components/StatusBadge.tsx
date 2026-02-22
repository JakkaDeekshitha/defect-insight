import { Status } from "@/types/defect";
import { cn } from "@/lib/utils";

const statusConfig: Record<Status, { label: string; className: string; dot: string }> = {
  open: { label: "Open", className: "bg-primary/10 text-primary", dot: "bg-primary" },
  "in-progress": { label: "In Progress", className: "bg-high/10 text-high", dot: "bg-high" },
  resolved: { label: "Resolved", className: "bg-low/10 text-low", dot: "bg-low" },
  closed: { label: "Closed", className: "bg-muted text-muted-foreground", dot: "bg-muted-foreground" },
};

export function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", config.className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} />
      {config.label}
    </span>
  );
}

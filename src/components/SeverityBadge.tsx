import { Severity } from "@/types/defect";
import { cn } from "@/lib/utils";

const severityConfig: Record<Severity, { label: string; className: string }> = {
  critical: { label: "Critical", className: "bg-critical/15 text-critical border-critical/30" },
  high: { label: "High", className: "bg-high/15 text-high border-high/30" },
  medium: { label: "Medium", className: "bg-medium/15 text-medium border-medium/30" },
  low: { label: "Low", className: "bg-low/15 text-low border-low/30" },
};

export function SeverityBadge({ severity }: { severity: Severity }) {
  const config = severityConfig[severity];
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium", config.className)}>
      {config.label}
    </span>
  );
}

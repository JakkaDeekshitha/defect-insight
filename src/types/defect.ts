export type Severity = "critical" | "high" | "medium" | "low";
export type Status = "open" | "in-progress" | "resolved" | "closed";

export interface Defect {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  status: Status;
  assignee: string;
  module: string;
  createdAt: string;
  updatedAt: string;
}

export const SEVERITY_OPTIONS: Severity[] = ["critical", "high", "medium", "low"];
export const STATUS_OPTIONS: Status[] = ["open", "in-progress", "resolved", "closed"];
export const MODULE_OPTIONS = ["Authentication", "Dashboard", "API", "Database", "UI/UX", "Payment", "Notifications", "Reports"];

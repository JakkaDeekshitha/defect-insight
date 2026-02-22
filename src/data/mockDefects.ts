import { Defect } from "@/types/defect";

export const mockDefects: Defect[] = [
  { id: "BUG-001", title: "Login fails with SSO provider", description: "Users cannot authenticate via Google SSO", severity: "critical", status: "open", assignee: "Alice Chen", module: "Authentication", createdAt: "2026-02-18", updatedAt: "2026-02-20" },
  { id: "BUG-002", title: "Dashboard chart not rendering on Safari", description: "Pie chart component crashes on Safari 17", severity: "high", status: "in-progress", assignee: "Bob Park", module: "Dashboard", createdAt: "2026-02-15", updatedAt: "2026-02-19" },
  { id: "BUG-003", title: "API rate limit not enforced", description: "Rate limiter middleware bypassed with concurrent requests", severity: "critical", status: "in-progress", assignee: "Alice Chen", module: "API", createdAt: "2026-02-10", updatedAt: "2026-02-21" },
  { id: "BUG-004", title: "Tooltip clipped on mobile viewport", description: "Tooltip overflows screen edge on devices < 375px", severity: "low", status: "open", assignee: "Diana Ruiz", module: "UI/UX", createdAt: "2026-02-20", updatedAt: "2026-02-20" },
  { id: "BUG-005", title: "Payment webhook timeout", description: "Stripe webhook processing exceeds 30s timeout", severity: "high", status: "resolved", assignee: "Charlie Kim", module: "Payment", createdAt: "2026-02-08", updatedAt: "2026-02-17" },
  { id: "BUG-006", title: "DB connection pool exhaustion", description: "Connection pool saturated under load testing", severity: "critical", status: "resolved", assignee: "Bob Park", module: "Database", createdAt: "2026-02-05", updatedAt: "2026-02-14" },
  { id: "BUG-007", title: "Notification emails not sent", description: "SMTP config error in production environment", severity: "medium", status: "closed", assignee: "Diana Ruiz", module: "Notifications", createdAt: "2026-02-01", updatedAt: "2026-02-10" },
  { id: "BUG-008", title: "Report export generates corrupt CSV", description: "Unicode characters break CSV formatting", severity: "medium", status: "open", assignee: "Charlie Kim", module: "Reports", createdAt: "2026-02-19", updatedAt: "2026-02-21" },
  { id: "BUG-009", title: "Session token not refreshed", description: "JWT refresh token flow fails silently", severity: "high", status: "open", assignee: "Alice Chen", module: "Authentication", createdAt: "2026-02-21", updatedAt: "2026-02-22" },
  { id: "BUG-010", title: "Dark mode toggle flicker", description: "Brief flash of light mode on page transition", severity: "low", status: "closed", assignee: "Diana Ruiz", module: "UI/UX", createdAt: "2026-01-28", updatedAt: "2026-02-05" },
  { id: "BUG-011", title: "API returns 500 on empty payload", description: "Missing input validation for POST /api/defects", severity: "medium", status: "in-progress", assignee: "Bob Park", module: "API", createdAt: "2026-02-16", updatedAt: "2026-02-22" },
  { id: "BUG-012", title: "Dashboard widget drag broken", description: "Drag-and-drop reorder fails after adding 6+ widgets", severity: "medium", status: "open", assignee: "Charlie Kim", module: "Dashboard", createdAt: "2026-02-22", updatedAt: "2026-02-22" },
];

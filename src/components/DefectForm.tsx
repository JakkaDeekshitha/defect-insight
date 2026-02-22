import { useState } from "react";
import { Defect, SEVERITY_OPTIONS, MODULE_OPTIONS } from "@/types/defect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { Severity } from "@/types/defect";

interface DefectFormProps {
  onSubmit: (defect: Defect) => void;
  defectCount: number;
}

export function DefectForm({ onSubmit, defectCount }: DefectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<Severity>("medium");
  const [module, setModule] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !module) {
      toast.error("Please fill in required fields");
      return;
    }
    const now = new Date().toISOString().split("T")[0];
    const newDefect: Defect = {
      id: `BUG-${String(defectCount + 1).padStart(3, "0")}`,
      title,
      description,
      severity,
      status: "open",
      assignee: assignee || "Unassigned",
      module,
      createdAt: now,
      updatedAt: now,
    };
    onSubmit(newDefect);
    toast.success(`Defect ${newDefect.id} logged successfully`);
    setTitle("");
    setDescription("");
    setSeverity("medium");
    setModule("");
    setAssignee("");
  };

  return (
    <div className="glass-card rounded-lg p-5 animate-fade-in">
      <h3 className="text-lg font-semibold mb-1">Log New Defect</h3>
      <p className="text-sm text-muted-foreground mb-4">Input a new software defect into the tracker</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Brief defect summary" className="bg-input border-border" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="desc">Description</Label>
          <Textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Steps to reproduce, expected vs actual behavior" className="bg-input border-border min-h-[80px]" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Severity *</Label>
            <Select value={severity} onValueChange={(v) => setSeverity(v as Severity)}>
              <SelectTrigger className="bg-input border-border"><SelectValue /></SelectTrigger>
              <SelectContent>
                {SEVERITY_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Module *</Label>
            <Select value={module} onValueChange={setModule}>
              <SelectTrigger className="bg-input border-border"><SelectValue placeholder="Select module" /></SelectTrigger>
              <SelectContent>
                {MODULE_OPTIONS.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="assignee">Assignee</Label>
          <Input id="assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} placeholder="Team member name" className="bg-input border-border" />
        </div>
        <Button type="submit" className="w-full glow-primary">
          <Plus className="h-4 w-4 mr-2" />
          Log Defect
        </Button>
      </form>
    </div>
  );
}

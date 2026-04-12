"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { GraphicProjectForm } from "./graphic-project-form";

export default function GraphicProjectCreateButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="flex items-center gap-2"
      >
        <Plus size={18} />
        Create Project
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="min-w-[calc(100%-100px)] ">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>Write a new Project.</DialogDescription>
          </DialogHeader>
          <GraphicProjectForm closeForm={setIsDialogOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

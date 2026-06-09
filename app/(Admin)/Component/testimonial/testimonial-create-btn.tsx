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
import { TestimonialForm } from "./testimonial-form";

export default function TestimonialCreateButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="flex items-center gap-2"
      >
        <Plus size={18} />
        Create Testimonial
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="min-w-[calc(100%-100px)] ">
          <DialogHeader>
            <DialogTitle>Create Testimonial </DialogTitle>
            <DialogDescription>
              Write a new testimonial and share in website.
            </DialogDescription>
          </DialogHeader>
          <TestimonialForm closeForm={setIsDialogOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import { Edit, Eye, EyeOff, MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Testimonial } from "@/types/type";
import { toast } from "sonner";
import {
  deleteTestimonial,
  toggleTestimonialPublish,
} from "../../action/testimonial";
import { TestimonialCard } from "./testimonial-card";
import { TestimonialForm } from "./testimonial-form";

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export function TestimonialList({ testimonials }: TestimonialListProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [previewTestimonial, setPreviewTestimonial] =
    useState<Testimonial | null>(null);
  const [editTestimonial, setEditTestimonial] = useState<
    Testimonial | undefined
  >(undefined);

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const handleDeleteConfirm = async () => {
    if (deleteId) {
      try {
        await deleteTestimonial(deleteId);

        toast.success("Testimonial deleted", {
          description: "The testimonial has been deleted successfully.",
        });
      } catch {
        toast.error("Error", {
          description: "Failed to delete testimonial",
        });
      } finally {
        setDeleteId(null);
      }
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await toggleTestimonialPublish(id, published);
      toast.success("Success", {
        description: `The testimonial has been ${
          published ? "unpublished" : "published"
        } successfully.`,
      });
    } catch {
      toast.error("Error", {
        description: "Failed to update testimonial status.",
      });
    } finally {
      setDeleteId(null);
    }
  };

  const handlePreview = (testimonial: Testimonial) => {
    setPreviewTestimonial(testimonial);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setIsEditDialogOpen(true);
    setEditTestimonial(testimonial);
  };

  return (
    <div className="w-full overflow-hidden rounded-md border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] sm:w-auto">Name</TableHead>
              <TableHead className="hidden md:table-cell">Company</TableHead>
              <TableHead className="hidden sm:table-cell">Service</TableHead>
              <TableHead className="w-[80px]">Rating</TableHead>
              <TableHead className="hidden xs:table-cell">Status</TableHead>
              <TableHead className="w-[60px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No testimonials found.
                </TableCell>
              </TableRow>
            ) : (
              testimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell className="font-medium truncate max-w-[120px] sm:max-w-none">
                    {testimonial.name}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {testimonial.company}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {testimonial.service}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {testimonial.rating} / 5
                  </TableCell>
                  <TableCell className="hidden xs:table-cell">
                    <Badge
                      variant={testimonial.published ? "default" : "outline"}
                      className="whitespace-nowrap"
                    >
                      {testimonial.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right p-2 sm:p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handlePreview(testimonial)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleEdit(testimonial)}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleTogglePublish(
                              testimonial.id,
                              testimonial.published
                            )
                          }
                        >
                          {testimonial.published ? (
                            <>
                              <EyeOff className="mr-2 h-4 w-4" />
                              Unpublish
                            </>
                          ) : (
                            <>
                              <Eye className="mr-2 h-4 w-4" />
                              Publish
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => handleDeleteClick(testimonial.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog
        open={deleteId !== null}
        onOpenChange={() => setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              testimonial from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={previewTestimonial !== null}
        onOpenChange={() => setPreviewTestimonial(null)}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Testimonial Preview</AlertDialogTitle>
          </AlertDialogHeader>
          {previewTestimonial && (
            <div className="py-4">
              <TestimonialCard testimonial={previewTestimonial} />
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="min-w-[calc(100%-100px)]">
          <DialogHeader>
            <DialogTitle>Create Blog Post</DialogTitle>
            <DialogDescription>
              Start writing your new blog post here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <TestimonialForm
              testimonial={editTestimonial}
              closeForm={setIsEditDialogOpen}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

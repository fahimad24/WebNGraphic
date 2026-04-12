"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format, formatDistanceToNow } from "date-fns";
import { Loader2, Pencil, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { deleteWebDevProject } from "../../action/project-webdev";
import { WebDevProjectForm } from "./web-dev-project-form";

type ProjectData = {
  id: string;
  title: string;
  mission: string;
  category: string;
  client: string;
  completeDate: Date;
  demoUrl: string;
  overView: string;
  features: string[];
  technologies: string[];
  testimonial: { quote: string; author: string };
  images: { url: string; publicId: string }[];
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};
interface WebDevProjectCardProps {
  project: ProjectData;
}

export function WebDevProjectCard({ project }: WebDevProjectCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const handleDeleteConfirm = async () => {
    setDeleting(true);

    const result = await deleteWebDevProject(project.id);

    if (result.success) {
      toast.success("Portfolio Deleted", {
        description: "Your portfolio has been deleted successfully.",
      });
    } else {
      toast.error("Failed to Delete Blog", {
        description:
          result.error || "There was an error deleting the portfolio.",
      });
    }

    setDeleting(false);
    setIsDeleteDialogOpen(false);
  };

  const handleEdit = () => {
    setIsEditDialogOpen(true);
  };

  return (
    <>
      <Card key={project.id} className="gap-5 pb-5 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          {project.images.length > 0 && (
            <Image
              src={project.images[0].url || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              fill
            />
          )}
          {project.featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-yellow-500 hover:bg-yellow-600">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          {!project.published && (
            <div className="absolute top-2 left-2">
              <Badge variant="outline" className="bg-background/80">
                Draft
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="pb-2">
          <h3 className="font-semibold text-lg line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.overView}
          </p>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex flex-wrap gap-1 mb-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>
          Completed: {format(new Date(project.completeDate), "MMM d, yyyy")}
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          <div className="text-xs text-muted-foreground">
            Updated{" "}
            {formatDistanceToNow(new Date(project.updatedAt), {
              addSuffix: true,
            })}
          </div>
          <div className="flex gap-2">
            <Button onClick={handleEdit} variant="outline" size="sm">
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Button>
            <AlertDialog
              open={isDeleteDialogOpen}
              onOpenChange={setIsDeleteDialogOpen}
            >
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  {deleting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4 mr-1" />
                  )}
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the blog post.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteConfirm}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardFooter>
      </Card>
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
            <WebDevProjectForm
              project={project}
              closeForm={setIsEditDialogOpen}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

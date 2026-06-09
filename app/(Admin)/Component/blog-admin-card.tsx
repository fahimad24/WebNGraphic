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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Switch } from "@/components/ui/switch";
import { formatDistanceToNow } from "date-fns";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { deleteBlog, updateBlog } from "../action/blog";
import BlogForm from "./blog-form";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    content: string;
    authorId: string;
    author: {
      id: string;
      name: string;
      image: string | null;
    };
    category: string;
    imageLink: string;
    imagePublicID: string;
    isPopular: boolean;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
  };
}

export function BlogCard({ blog }: BlogCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isPublishedDialogOpen, setIsPublishedDialogOpen] = useState(false);
  const [isPopularDialogOpen, setIsPopularDialogOpen] = useState(false);
  const [newPublishedStatus, setNewPublishedStatus] = useState(blog.published);
  const [newPopularStatus, setNewPopularStatus] = useState(blog.isPopular);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [popularing, setPopularing] = useState(false);

  const handleDeleteConfirm = async () => {
    setDeleting(true);

    const result = await deleteBlog(blog.id);

    if (result.success) {
      toast.success("Blog Deleted", {
        description: "Your blog post has been deleted successfully.",
      });
    } else {
      toast.error("Failed to Delete Blog", {
        description:
          result.error || "There was an error deleting the blog post.",
      });
    }

    setDeleting(false);
    setIsDeleteDialogOpen(false);
  };

  const handleEdit = () => {
    setIsEditDialogOpen(true);
  };
  const handlePublishedConfirm = async () => {
    setPublishing(true);
    const result = await updateBlog(blog.id, { published: newPublishedStatus });

    if (result.success) {
      toast.success("Blog Updated", {
        description: "Your blog post has been updated successfully.",
      });
    } else {
      toast.error("Failed to Update Blog", {
        description: "There was an error updating the blog post.",
      });
    }
    setPublishing(false);

    setIsPublishedDialogOpen(false);
  };

  const handlePopularConfirm = async () => {
    setPopularing(true);
    const result = await updateBlog(blog.id, { isPopular: newPopularStatus });

    if (result.success) {
      toast.success("Blog Updated", {
        description: "Your blog post has been updated successfully.",
      });
    } else {
      toast.error("Failed to Update Blog", {
        description: "There was an error updating the blog post.",
      });
    }
    setPopularing(false);
    setIsPopularDialogOpen(false);
  };

  return (
    <>
      <Card className="gap-5 pb-6 overflow-hidden">
        <div className="relative w-full">
          <Image
            src={blog.imageLink}
            alt={blog.title}
            width={1280}
            height={720}
            priority
            className="object-cover w-full h-auto"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <Badge variant={blog.published ? "default" : "outline"}>
              {blog.published ? "Published" : "Draft"}
            </Badge>
            {blog.isPopular && <Badge variant="secondary">Popular</Badge>}
          </div>
        </div>
        <CardHeader className=" pb-2">
          <Badge variant="outline">{blog.category}</Badge>
          <h3 className="font-semibold text-lg line-clamp-2">{blog.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={blog.author.image || ""}
                alt={blog.author.name || "Author"}
              />
              <AvatarFallback>{blog.author.name?.[0] || "A"}</AvatarFallback>
            </Avatar>
            <span>{blog.author.name || "Unknown author"}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-sm text-muted-foreground line-clamp-2"
          />

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Published</span>
              <AlertDialog
                open={isPublishedDialogOpen}
                onOpenChange={setIsPublishedDialogOpen}
              >
                <AlertDialogTrigger asChild>
                  <div className="relative">
                    {publishing ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Switch
                        checked={blog.published}
                        onCheckedChange={(checked) => {
                          setNewPublishedStatus(checked);
                          setIsPublishedDialogOpen(true);
                        }}
                      />
                    )}
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Status Change</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to{" "}
                      {newPublishedStatus ? "publish" : "unpublish"} this blog
                      post?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handlePublishedConfirm}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Popular</span>
              <AlertDialog
                open={isPopularDialogOpen}
                onOpenChange={setIsPopularDialogOpen}
              >
                <AlertDialogTrigger asChild>
                  <div className="relative">
                    {popularing ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Switch
                        checked={blog.isPopular}
                        onCheckedChange={(checked) => {
                          setNewPopularStatus(checked);
                          setIsPopularDialogOpen(true);
                        }}
                      />
                    )}
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Status Change</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to{" "}
                      {newPopularStatus
                        ? "mark as popular"
                        : "remove from popular"}{" "}
                      this blog post?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handlePopularConfirm}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="text-xs text-muted-foreground">
            Updated{" "}
            {formatDistanceToNow(new Date(blog.updatedAt), { addSuffix: true })}
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
            <BlogForm blog={blog} closeForm={setIsEditDialogOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

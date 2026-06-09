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
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
interface DeleteButtonProps {
  id: string;
  deleteToDo: (id: string) => Promise<void>;
  message?: string;
}

export default function DeleteButton({
  id,
  deleteToDo,
  message,
}: DeleteButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteToDo(id);
      setLoading(false);
      toast("Success", {
        description: message || "Something went wrong. Please try again.",
      });
    } catch {
      setLoading(false);
      toast("Error", {
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          disabled={loading}
          className={`${buttonVariants({
            variant: "destructive",
          })} cursor-pointer`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
              {"Deleting.."}
            </div>
          ) : (
            "Delete"
          )}
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              item and remove its data from our system.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className={`${buttonVariants({
                variant: "destructive",
              })} cursor-pointer`}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

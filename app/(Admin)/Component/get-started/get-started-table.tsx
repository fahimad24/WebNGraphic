"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { deleteGetStarted } from "../../action/get-started";

type Started = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service?: string | null;
  message?: string | null;
  plan?: string | null;
  budget?: string | null;
};

interface StartedTableProps {
  data: Started[];
}

export function GetStartedTable({ data }: StartedTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Started | null>(null);

  const handleDelete = async () => {
    if (!selectedMeeting) return;

    try {
      await deleteGetStarted(selectedMeeting.id);
      toast("Meeting deleted", {
        description: "The response has been deleted successfully.",
      });
    } catch {
      toast.error("Error", {
        description: "Failed to delete response",
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedMeeting(null);
    }
  };

  const openDeleteDialog = (started: Started) => {
    setSelectedMeeting(started);
    setDeleteDialogOpen(true);
  };

  return (
    <>
      <div className=" overflow-hidden rounded-md border">
        <div className="overflow-x-auto">
          <Table className="max-w-full overflow-x-auto">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email/Phone</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="hover:bg-transparent">
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-10 text-muted-foreground"
                  >
                    No meetings found
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-start whitespace-normal max-w-44  break-all">
                      {item.name}
                    </TableCell>
                    <TableCell className="font-medium whitespace-normal max-w-44  break-all">
                      <p>{item.email}</p>
                      <p>{item.phone}</p>
                    </TableCell>
                    <TableCell className="font-medium whitespace-normal max-w-44  break-all">
                      {item.service}
                    </TableCell>
                    <TableCell className="font-medium whitespace-normal max-w-44  break-all">
                      {item.plan}
                    </TableCell>
                    <TableCell className="font-medium whitespace-normal max-w-44  break-all">
                      {item.budget}
                    </TableCell>
                    <TableCell className="font-medium whitespace-normal max-w-44  break-all">
                      {item.message}
                    </TableCell>
                    <TableCell className="text-right p-2 sm:p-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => openDeleteDialog(item)}
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
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this meeting? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

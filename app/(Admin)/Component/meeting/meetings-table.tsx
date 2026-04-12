"use client";

import { Badge } from "@/components/ui/badge";
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
import { format } from "date-fns";
import { Check, MessageSquare, MoreHorizontal, Trash2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  approveMeeting,
  cancelMeeting,
  deleteMeeting,
} from "../../action/meeting";

type Meeting = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string | null;
  bookingDate: Date;
  bookingTime: string;
  timezone: string;
  status: string;
};

interface MeetingsTableProps {
  initialMeetings: Meeting[];
}

export function MeetingsTable({ initialMeetings }: MeetingsTableProps) {
  const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  const handleApprove = async (id: string) => {
    try {
      await approveMeeting(id);

      toast.success("Meeting approved", {
        description: "The meeting has been approved successfully.",
      });
    } catch {
      toast.error("Error", {
        description: "Failed to approve meeting",
      });
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await cancelMeeting(id);
      setMeetings(
        meetings.map((meeting) =>
          meeting.id === id ? { ...meeting, status: "cancelled" } : meeting
        )
      );
      toast("Meeting cancelled", {
        description: "The meeting has been cancelled successfully.",
      });
    } catch {
      toast.error("Error", {
        description: "Failed to cancel meeting",
      });
    }
  };

  const handleDelete = async () => {
    if (!selectedMeeting) return;

    try {
      await deleteMeeting(selectedMeeting.id);
      toast("Meeting deleted", {
        description: "The meeting has been deleted successfully.",
      });
    } catch {
      toast.error("Error", {
        description: "Failed to delete meeting",
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedMeeting(null);
    }
  };

  const openDeleteDialog = (meeting: Meeting) => {
    setSelectedMeeting(meeting);
    setDeleteDialogOpen(true);
  };

  const openMessageDialog = (meeting: Meeting) => {
    setSelectedMeeting(meeting);
    setMessageDialogOpen(true);
  };

  return (
    <>
      <div className="w-full overflow-hidden rounded-md border">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Phone</TableHead>
                <TableHead className="hidden md:table-cell">Service</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="hover:bg-transparent">
              {initialMeetings.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-10 text-muted-foreground"
                  >
                    No meetings found
                  </TableCell>
                </TableRow>
              ) : (
                initialMeetings.map((meeting) => (
                  <TableRow key={meeting.id}>
                    <TableCell className="font-medium">
                      <div className="max-w-[120px] truncate sm:max-w-none">
                        {meeting.name}
                      </div>
                      <div className="md:hidden text-xs text-muted-foreground mt-1">
                        {meeting.service}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {meeting.email}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {meeting.phone}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {meeting.service}
                    </TableCell>
                    <TableCell>
                      <div className="whitespace-nowrap">
                        {format(new Date(meeting.bookingDate), "MMM dd, yyyy")}
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        {meeting.bookingTime} ({meeting.timezone})
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          meeting.status === "approved"
                            ? "default"
                            : meeting.status === "cancelled"
                            ? "destructive"
                            : "outline"
                        }
                      >
                        {meeting.status}
                      </Badge>
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
                          {meeting.status === "pending" && (
                            <DropdownMenuItem
                              onClick={() => handleApprove(meeting.id)}
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Approve
                            </DropdownMenuItem>
                          )}
                          {meeting.status === "pending" && (
                            <DropdownMenuItem
                              onClick={() => handleCancel(meeting.id)}
                            >
                              <X className="mr-2 h-4 w-4" />
                              Cancel
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem
                            onClick={() => openMessageDialog(meeting)}
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            View Message
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => openDeleteDialog(meeting)}
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

      <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message from {selectedMeeting?.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Phone
                </p>
                <p className="text-sm">{selectedMeeting?.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Email
                </p>
                <p className="text-sm">{selectedMeeting?.email}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Message
              </p>
              <div className="mt-1 rounded-md border p-4">
                <p className="text-sm whitespace-pre-wrap">
                  {selectedMeeting?.message || "No message provided"}
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setMessageDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

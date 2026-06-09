import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Phone,
} from "lucide-react";

interface BookingConfirmationProps {
  bookingDetails: {
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
  };
  onNewBooking: () => void;
}

export default function BookingConfirmation({
  bookingDetails,
  onNewBooking,
}: BookingConfirmationProps) {
  return (
    <div className="text-center space-y-6">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-Ttext/10">
        <CheckCircle className="h-10 w-10 text-primary" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Booking Confirmed!
        </h2>
        <p className="text-muted-foreground">
          Thank you for scheduling a meeting with us. We&apos;ve received your
          booking.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="font-semibold text-lg mb-4 flex items-center justify-center">
          <Calendar className="mr-2 h-5 w-5 text-primary" />
          Your Meeting Details
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-[20px_1fr] items-start gap-2 text-left">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Date</p>
              <p className="text-sm text-muted-foreground">
                {format(bookingDetails.date, "EEEE, MMMM dd, yyyy")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[20px_1fr] items-start gap-2 text-left">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Time</p>
              <p className="text-sm text-muted-foreground">
                {bookingDetails.time} (
                {Intl.DateTimeFormat().resolvedOptions().timeZone})
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[20px_1fr] items-start gap-2 text-left">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">
                {bookingDetails.email}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[20px_1fr] items-start gap-2 text-left">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">
                {bookingDetails.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-4 text-sm">
        <p className="font-medium">What happens next?</p>
        <p className="text-muted-foreground mt-1">
          We&apos;ll send a confirmation email to {bookingDetails.email} with
          all the details. You&apos;ll also receive a reminder before the
          meeting.
        </p>
      </div>

      <Button
        onClick={onNewBooking}
        className="group bg-Ttext hover:bg-TtextH mt-6"
      >
        Book Another Meeting
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 h-4 w-4" />
      </Button>
    </div>
  );
}

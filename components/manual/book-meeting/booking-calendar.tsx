"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { addDays, format } from "date-fns";
import { CalendarIcon, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import BookingConfirmation from "./booking-confirmation";
import BookingForm from "./booking-form";
import TimeSlotPicker from "./time-slot-picker";

export default function BookingCalendar() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "time" | "form" | "confirmation">(
    "date"
  );
  const [bookingDetails, setBookingDetails] = useState<{
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
  } | null>(null);
  // Calculate date range (today to next 3 days)
  const today = new Date();
  const maxDate = addDays(today, 7);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset time selection when date changes
  useEffect(() => {
    setSelectedTime(null);
    if (selectedDate) {
      setStep("time");
    }
  }, [selectedDate]);

  // Go to form when time is selected
  useEffect(() => {
    if (selectedTime) {
      setStep("form");
    }
  }, [selectedTime]);

  const handleBackToDate = () => {
    setStep("date");
    setSelectedTime(null);
  };

  const handleBackToTime = () => {
    setStep("time");
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleFormSubmitSuccess = (formData: {
    name: string;
    email: string;
    phone: string;
  }) => {
    if (selectedDate && selectedTime) {
      setBookingDetails({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: selectedDate,
        time: selectedTime,
      });
      setStep("confirmation");
    }
  };

  const handleNewBooking = () => {
    // Reset everything for a new booking
    setSelectedDate(undefined);
    setSelectedTime(null);
    setBookingDetails(null);
    setStep("date");
  };

  if (!isMounted) {
    return (
      <Card className="w-full overflow-hidden border-2 border-Ttext py-0 shadow-lg">
        <CardContent className="p-0">
          <div className="flex min-h-[360px] items-center justify-center p-8 text-sm text-muted-foreground">
            Loading booking calendar...
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden border-2 border-Ttext py-0 shadow-lg">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar with steps */}
          <div className="bg-Ttext/10 w-full md:w-72 p-6 border-b md:border-b-0 md:border-r border-border">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step === "date"
                      ? "bg-Ttext text-primary-foreground"
                      : "bg-muted-foreground/20 text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <div className="font-medium">Select Date</div>
              </div>

              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step === "time"
                      ? "bg-Ttext text-primary-foreground"
                      : "bg-muted-foreground/20 text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <div className="font-medium">Choose Time</div>
              </div>

              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step === "form"
                      ? "bg-Ttext text-primary-foreground"
                      : "bg-muted-foreground/20 text-muted-foreground"
                  }`}
                >
                  3
                </div>
                <div className="font-medium">Your Details</div>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 p-4 sm:p-6 md:p-8">
            {step === "date" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Select a Date
                  </h2>
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => date < today || date > maxDate}
                    className="rounded-md border-2 p-2 sm:p-4 shadow-sm w-full relative mx-auto max-w-[320px] sm:max-w-[420px]"
                    classNames={{
                      selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                      today: "bg-accent text-accent-foreground",
                      day_button: "h-9 w-9 sm:h-10 sm:w-12 md:w-14 text-sm sm:text-base font-medium aria-selected:opacity-100 flex items-center justify-center rounded-md border border-transparent hover:border-gray-200 transition-colors",
                      weekday: "text-muted-foreground font-medium text-xs sm:text-sm w-9 h-8 sm:w-12 md:w-14 sm:h-10 flex items-center justify-center",
                      day: "text-center cursor-pointer p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      button_previous: "h-7 w-7 sm:h-9 sm:w-9 bg-transparent p-0 absolute left-2 top-2 z-10 opacity-50 hover:opacity-100 cursor-pointer",
                      button_next: "h-7 w-7 sm:h-9 sm:w-9 bg-transparent p-0 absolute right-2 top-2 z-10 opacity-50 hover:opacity-100 cursor-pointer",
                      month_caption: "text-sm sm:text-base font-medium py-3 flex justify-center relative",
                      month_grid: "w-full border-collapse",
                      week: "flex w-full mt-2",
                      months: "w-full flex-col",
                    }}
                  />
                </div>

                <div className="text-center text-xs sm:text-sm text-muted-foreground">
                  You can book a meeting from today to{" "}
                  {format(maxDate, "MMMM dd, yyyy")}
                </div>
              </div>
            )}

            {step === "time" && selectedDate && (
              <div className="space-y-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackToDate}
                  className="hover:bg-muted"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Calendar
                </Button>

                <h2 className="text-xl sm:text-2xl font-semibold">
                  {format(selectedDate, "MMMM dd, yyyy")}
                </h2>

                <TimeSlotPicker
                  selectedDate={selectedDate}
                  onTimeSelect={handleTimeSelect}
                />
              </div>
            )}

            {step === "form" && selectedDate && selectedTime && (
              <div className="space-y-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackToTime}
                  className="hover:bg-muted"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Time Selection
                </Button>

                <h2 className="text-xl sm:text-2xl font-semibold">
                  Complete Your Booking
                </h2>

                <div className="mb-6 rounded-lg bg-Ttext/10 p-4 border border-Ttext">
                  <p className="font-medium">Selected Date & Time:</p>
                  <p className="text-lg sm:text-xl font-semibold text-primary">
                    {format(selectedDate, "MMMM dd, yyyy")} at {selectedTime}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Your local timezone:{" "}
                    {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </p>
                </div>

                <BookingForm
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onSuccess={handleFormSubmitSuccess}
                />
              </div>
            )}

            {step === "confirmation" && bookingDetails && (
              <BookingConfirmation
                bookingDetails={bookingDetails}
                onNewBooking={handleNewBooking}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

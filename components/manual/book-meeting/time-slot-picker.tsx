"use client";

import { Button } from "@/components/ui/button";

interface TimeSlotPickerProps {
  selectedDate: Date;
  onTimeSelect: (time: string) => void;
}

// Generate time slots from 9 AM to 5 PM with 30-minute intervals
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour < 18; hour++) {
    const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
    const ampm = hour < 12 ? "AM" : "PM";

    slots.push(`${hourFormatted}:00 ${ampm}`);
    slots.push(`${hourFormatted}:30 ${ampm}`);
  }
  return slots;
};

export default function TimeSlotPicker({ onTimeSelect }: TimeSlotPickerProps) {
  const slots = generateTimeSlots();

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        All times are shown in your local timezone (
        {Intl.DateTimeFormat().resolvedOptions().timeZone})
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {slots.map((time) => (
          <Button
            key={time}
            variant="outline"
            className="h-12 hover:bg-Ttext/10"
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
}

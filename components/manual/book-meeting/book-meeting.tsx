import SectionHeader from "../header/section-header";
import BookingCalendar from "./booking-calendar";

export default function BookMeeting() {
  return (
    <div className="mx-auto py-16 md:py-24 px-5 md:px-12 max-w-5xl">
      <div className="mb-12">
        <SectionHeader
          heading=" Book a Meeting"
          subHeading="Pick a date and time, and we'll connect!"
        />
      </div>
      <BookingCalendar />
    </div>
  );
}

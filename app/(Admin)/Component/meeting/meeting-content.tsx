import { getMeetings } from "../../action/meeting";
import PaginationControl from "../pagination";
import { MeetingsTable } from "./meetings-table";

export default async function MeetingContent({ page }: { page: number }) {
  const pageSize = 12;
  const { meetings, pagination } = await getMeetings(page, pageSize);

  return (
    <div className="max-w-7xl ">
      <MeetingsTable initialMeetings={meetings} />

      <div>
        <PaginationControl
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </div>
    </div>
  );
}

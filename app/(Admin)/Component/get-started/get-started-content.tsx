import { getAllStarted } from "../../action/get-started";
import PaginationControl from "../pagination";
import { GetStartedTable } from "./get-started-table";

export default async function GetStartedContent({ page }: { page: number }) {
  const pageSize = 12;
  const { started, pagination } = await getAllStarted(page, pageSize);

  return (
    <div className="max-w-7xl ">
      <GetStartedTable data={started} />

      <div>
        <PaginationControl
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </div>
    </div>
  );
}

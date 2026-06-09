import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TestimonialsTableSkeleton() {
  // Create an array of 5 items to represent loading rows
  const loadingRows = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="w-full overflow-hidden rounded-md border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] sm:w-auto">Name</TableHead>
              <TableHead className="hidden md:table-cell">Company</TableHead>
              <TableHead className="hidden sm:table-cell">Service</TableHead>
              <TableHead className="w-[80px]">Rating</TableHead>
              <TableHead className="hidden xs:table-cell">Status</TableHead>
              <TableHead className="w-[60px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loadingRows.map((index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-5 w-[80px] sm:w-[120px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Skeleton className="h-5 w-[120px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[40px]" />
                </TableCell>
                <TableCell className="hidden xs:table-cell">
                  <Skeleton className="h-6 w-[80px] rounded-full" />
                </TableCell>
                <TableCell className="text-right p-2 sm:p-4">
                  <div className="flex justify-end">
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

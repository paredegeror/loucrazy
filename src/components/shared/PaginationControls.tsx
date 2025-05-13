"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", page.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrevPage}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {startPage > 1 && (
        <>
          <Button variant="outline" onClick={() => handlePageChange(1)}>1</Button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}

      {endPage < totalPages && (
         <>
          {endPage < totalPages -1 && <span className="px-2">...</span>}
          <Button variant="outline" onClick={() => handlePageChange(totalPages)}>{totalPages}</Button>
        </>
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
        aria-label="Go to next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

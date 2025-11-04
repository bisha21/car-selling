// Props for the pagination component
interface ModelsPaginationProps {
  currentPage: number; // Current active page
  totalPages: number; // Total number of pages
  onPageChange: (page: number) => void; // Function to update the page
}

export default function ModelsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ModelsPaginationProps) {
  // Generate the page numbers to display in the pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // Max number of page buttons to show at once

    // If total pages are less than max visible, show all
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Show ellipsis if current page is far from the start
      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      // Show ellipsis if current page is far from the end
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1} // Disable if on first page
        className="px-3 py-2 rounded border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Previous
      </button>

      {/* Render page numbers */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)} // Only clickable for numbers
          disabled={page === '...'} // Ellipsis are not clickable
          className={`px-3 py-2 rounded ${
            page === currentPage
              ? 'bg-blue-600 text-white' // Highlight current page
              : page === '...'
              ? 'cursor-default' // Ellipsis styling
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50' // Normal page button
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages} // Disable if on last page
        className="px-3 py-2 rounded border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  );
}

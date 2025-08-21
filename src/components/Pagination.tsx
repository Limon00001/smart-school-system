/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { useRouter } from 'next/navigation';

// Internal Imports
import { ITEMS_PER_PAGE } from '@/lib/settings';

/**
 * Pagination Component
 */
const Pagination = ({ page, count }: { page: number; count: number }) => {
  // Router Hook
  const router = useRouter();

  // Check if there is a previous page
  const hasPrev = ITEMS_PER_PAGE * (page - 1) > 0;

  // Check if there is a next page
  const hasNext = ITEMS_PER_PAGE * (page - 1) + ITEMS_PER_PAGE < count;

  // Page Change Handler Function
  const changePage = (newPage: number) => {
    // Get URL Params
    const params = new URLSearchParams(window.location.search);

    // Update Page
    params.set('page', newPage.toString());

    // Update URL
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        onClick={() => changePage(page - 1)}
        disabled={!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: Math.ceil(count / ITEMS_PER_PAGE) }).map(
          (_, index) => {
            const pageIndex = index + 1;

            return (
              <button
                key={pageIndex}
                className={`px-2 rounded-sm cursor-pointer ${
                  page === pageIndex ? 'bg-appSky' : ''
                } `}
                onClick={() => changePage(pageIndex)}
              >
                {pageIndex}
              </button>
            );
          },
        )}
      </div>
      <button
        onClick={() => changePage(page + 1)}
        disabled={!hasNext}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

// Export
export default Pagination;

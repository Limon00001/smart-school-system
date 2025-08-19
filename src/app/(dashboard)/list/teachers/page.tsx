/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { ArrowDownWideNarrow, Plus, SlidersHorizontal } from 'lucide-react';

// Internal Imports
import Pagination from '@/components/Pagination';
import TableSearch from '@/components/TableSearch';

/**
 * Teacher List Page
 */
const TeacherListPage = () => {
  return (
    <div className="flex-1 bg-white p-4 rounded-md m-4 mt-0">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* SEARCH */}
          <TableSearch />

          {/* BUTTONS */}
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-appYellow cursor-pointer">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-appYellow cursor-pointer">
              <ArrowDownWideNarrow className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-appYellow cursor-pointer">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

// Export
export default TeacherListPage;

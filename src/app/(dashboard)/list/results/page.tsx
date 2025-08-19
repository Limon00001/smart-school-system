/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import {
  ArrowDownWideNarrow,
  Plus,
  SlidersHorizontal,
  SquarePen,
  Trash,
} from 'lucide-react';
import Link from 'next/link';

// Internal Imports
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { resultsData, role } from '@/lib/data';

// Types
type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: 'exam' | 'assignment';
  date: string;
  score: number;
};

// Data
const columns = [
  {
    header: 'Subject Name',
    accessor: 'name',
  },
  {
    header: 'Student',
    accessor: 'student',
  },
  {
    header: 'Score',
    accessor: 'score',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Class',
    accessor: 'class',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

/**
 * Result List Page
 */
const ResultListPage = () => {
  // Render Table Row
  const renderRow = (item: Result) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-appPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">{item.subject}</td>
        <td>{item.student}</td>
        <td className="hidden md:table-cell">{item.score}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full text-gray-600 bg-appSky cursor-pointer">
                <SquarePen className="w-4 h-4" />
              </button>
            </Link>
            {role === 'admin' && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500/30 cursor-pointer">
                <Trash className="w-4 h-4" />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex-1 bg-white p-4 rounded-md m-4 mt-0">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

// Export
export default ResultListPage;

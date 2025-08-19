/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import {
  ArrowDownWideNarrow,
  Eye,
  Plus,
  SlidersHorizontal,
  Trash,
} from 'lucide-react';
import Link from 'next/link';

// Internal Imports
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { parentsData, role } from '@/lib/data';

// Types
type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

// Data
const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Student Names',
    accessor: 'students',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

/**
 * Teacher List Page
 */
const ParentListPage = () => {
  // Render Table Row
  const renderRow = (item: Parent) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-appPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.students.join(', ')}</td>
        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-appSky cursor-pointer">
                <Eye className="w-4 h-4" />
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
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
      <Table columns={columns} renderRow={renderRow} data={parentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

// Export
export default ParentListPage;

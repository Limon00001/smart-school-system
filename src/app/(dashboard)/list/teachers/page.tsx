/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Class, Prisma, Subject, Teacher } from '@prisma/client';
import { ArrowDownWideNarrow, Eye, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Internal Imports
import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import prisma from '@/lib/prisma';
import { ITEMS_PER_PAGE } from '@/lib/settings';
import { getCurrentUser } from '@/lib/utils';

// Types
type TeacherList = Teacher & { subjects: Subject[] } & { classes: Class[] };

// Current User
const user = await getCurrentUser();

const role = user?.role;
const userId = user?.userId;

// Data
const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Teacher ID',
    accessor: 'teacherId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Classes',
    accessor: 'classes',
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
  ...(role === 'admin'
    ? [
        {
          header: 'Actions',
          accessor: 'action',
        },
      ]
    : []),
];

// Render Table Row
const renderRow = (item: TeacherList) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-appPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.img || '/avatar.png'}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.username}</td>
      <td className="hidden md:table-cell">
        {item.subjects.map((subject) => subject.name).join(', ')}
      </td>
      <td className="hidden md:table-cell">
        {item.classes.map((classItem) => classItem.name).join(', ')}
      </td>
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
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500/30 cursor-pointer">
            //   <Trash className="w-4 h-4" />
            // </button>
            <FormModal table="teacher" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
};

/**
 * Teacher List Page
 */
const TeacherListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // Pagination
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // Query
  const query: Prisma.TeacherWhereInput = {};

  /***
   * Query Params Filter
   */
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case 'classId':
            query.lessons = {
              some: {
                classId: parseInt(value),
              },
            };
            break;
          case 'search':
            query.name = {
              contains: value,
              mode: 'insensitive',
            };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      where: query,
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEMS_PER_PAGE,
      skip: (p - 1) * ITEMS_PER_PAGE,
    }),
    prisma.teacher.count({ where: query }),
  ]);

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
            {role === 'admin' && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-appYellow cursor-pointer">
              //   <Plus className="w-4 h-4" />
              // </button>
              <FormModal table="teacher" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <Table columns={columns} renderRow={renderRow} data={data} />

      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

// Export
export default TeacherListPage;

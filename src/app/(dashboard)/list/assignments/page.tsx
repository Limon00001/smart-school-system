/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Assignment, Class, Prisma, Subject, Teacher } from '@prisma/client';
import { ArrowDownWideNarrow, SlidersHorizontal } from 'lucide-react';

// Internal Imports
import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { role } from '@/lib/data';
import prisma from '@/lib/prisma';
import { ITEMS_PER_PAGE } from '@/lib/settings';

// Types
type AssignmentList = Assignment & {
  lesson: {
    subject: Subject;
    class: Class;
    teacher: Teacher;
  };
};

// Data
const columns = [
  {
    header: 'Subject Name',
    accessor: 'name',
  },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Due Date',
    accessor: 'dueDate',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

// Render Table Row
const renderRow = (item: AssignmentList) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-appPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        {item.lesson.subject.name}
      </td>
      <td>{item.lesson.class.name}</td>
      <td className="hidden md:table-cell">{`${item.lesson.teacher.name} ${item.lesson.teacher.surname}`}</td>
      <td className="hidden md:table-cell">
        {new Intl.DateTimeFormat('en-US').format(item.dueDate)}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full text-gray-600 bg-appSky cursor-pointer">
              <SquarePen className="w-4 h-4" />
            </button>
          </Link> */}
          {role === 'admin' && (
            <>
              {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500/30 cursor-pointer">
              <Trash className="w-4 h-4" />
            </button> */}
              <FormModal table="assignment" type="update" data={item} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

/**
 * Assignment List Page
 */
const AssignmentsListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // Pagination
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // Query
  const query: Prisma.AssignmentWhereInput = {};

  /***
   * Query Params Filter
   */
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case 'search':
            query.OR = [
              {
                lesson: {
                  subject: {
                    name: {
                      contains: value,
                      mode: 'insensitive',
                    },
                  },
                },
              },
              {
                lesson: {
                  teacher: {
                    name: {
                      contains: value,
                      mode: 'insensitive',
                    },
                  },
                },
              },
              {
                lesson: {
                  teacher: {
                    surname: {
                      contains: value,
                      mode: 'insensitive',
                    },
                  },
                },
              },
            ];
            break;
          case 'teacherId':
            query.lesson = {
              teacherId: value,
            };
            break;
          case 'classId':
            query.lesson = {
              classId: parseInt(value),
            };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.assignment.findMany({
      where: query,
      include: {
        lesson: {
          select: {
            subject: {
              select: {
                name: true,
              },
            },
            teacher: {
              select: {
                name: true,
                surname: true,
              },
            },
            class: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      take: ITEMS_PER_PAGE,
      skip: (p - 1) * ITEMS_PER_PAGE,
    }),
    prisma.assignment.count({ where: query }),
  ]);

  return (
    <div className="flex-1 bg-white p-4 rounded-md m-4 mt-0">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
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
              <FormModal table="assignment" type="create" />
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
export default AssignmentsListPage;

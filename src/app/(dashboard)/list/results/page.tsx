/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { ArrowDownWideNarrow, SlidersHorizontal } from 'lucide-react';

// Internal Imports
import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { role } from '@/lib/data';
import prisma from '@/lib/prisma';
import { ITEMS_PER_PAGE } from '@/lib/settings';
import { Prisma } from '@prisma/client';

// Types
type ResultList = {
  id: string;
  title: string;
  studentName: string;
  studentSurname: string;
  teacherName: string;
  teacherSurname: string;
  score: number;
  className: string;
  date: Date;
};

// Data
const columns = [
  {
    header: 'Title',
    accessor: 'title',
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

// Render Table Row
const renderRow = (item: ResultList) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-appPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{`${item.studentName} ${item.studentSurname}`}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{`${item.teacherName} ${item.teacherSurname}`}</td>
      <td className="hidden md:table-cell">{item.className}</td>
      <td className="hidden md:table-cell">
        {new Intl.DateTimeFormat('en-US').format(item.date)}
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
              <FormModal table="result" type="update" data={item} />
              <FormModal table="result" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

/**
 * Result List Page
 */
const ResultListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // Pagination
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // Query
  const query: Prisma.ResultWhereInput = {};

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
                exam: {
                  title: {
                    contains: value,
                    mode: 'insensitive',
                  },
                },
              },
              {
                assignment: {
                  title: {
                    contains: value,
                    mode: 'insensitive',
                  },
                },
              },
              {
                student: {
                  name: {
                    contains: value,
                    mode: 'insensitive',
                  },
                },
              },
              {
                student: {
                  surname: {
                    contains: value,
                    mode: 'insensitive',
                  },
                },
              },
            ];
            break;
          case 'studentId':
            query.studentId = value;
            break;
          default:
            break;
        }
      }
    }
  }

  const [dataResponse, count] = await prisma.$transaction([
    prisma.result.findMany({
      where: query,
      include: {
        student: {
          select: {
            name: true,
            surname: true,
          },
        },
        exam: {
          include: {
            lesson: {
              select: {
                class: {
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
              },
            },
          },
        },
        assignment: {
          include: {
            lesson: {
              select: {
                class: {
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
              },
            },
          },
        },
      },
      take: ITEMS_PER_PAGE,
      skip: (p - 1) * ITEMS_PER_PAGE,
    }),
    prisma.result.count({ where: query }),
  ]);

  const data = dataResponse.map((item) => {
    const assesment = item.exam || item.assignment;

    if (!assesment) {
      return null;
    }

    const isExam = 'startTime' in assesment;

    return {
      id: item.id,
      title: assesment.title,
      studentName: item.student.name,
      studentSurname: item.student.surname,
      teacherName: assesment.lesson.teacher.name,
      teacherSurname: assesment.lesson.teacher.surname,
      score: item.score,
      className: assesment.lesson.class.name,
      startTime: isExam ? assesment.startTime : assesment.startDate,
    };
  });

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
            {role === 'admin' && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-appYellow cursor-pointer">
              //   <Plus className="w-4 h-4" />
              // </button>
              <FormModal table="result" type="create" />
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
export default ResultListPage;

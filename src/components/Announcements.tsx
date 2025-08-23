/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/utils';

/**
 * Announcements Component
 */
const Announcements = async () => {
  // Current User
  const user = await getCurrentUser();
  const role = user?.role;
  const userId = user?.userId;

  let whereCondition = {};

  // Role-based conditions
  if (role === 'admin') {
    // Admin sees all announcements
    whereCondition = {};
  } else if (role === 'teacher') {
    whereCondition = {
      OR: [
        { classId: null }, // global announcements
        {
          class: {
            lessons: {
              some: { teacherId: userId! },
            },
          },
        },
      ],
    };
  } else if (role === 'student') {
    whereCondition = {
      OR: [
        { classId: null }, // global announcements
        {
          class: {
            students: {
              some: { id: userId! },
            },
          },
        },
      ],
    };
  } else if (role === 'parent') {
    whereCondition = {
      OR: [
        { classId: null }, // global announcements
        {
          class: {
            students: {
              some: { parentId: userId! },
            },
          },
        },
      ],
    };
  }

  // Final query
  const data = await prisma.announcement.findMany({
    take: 3,
    orderBy: { date: 'desc' },
    where: whereCondition,
  });

  return (
    <div className="bg-white p-4 rounded-md">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      {/* ANNOUNCEMENTS LIST */}
      <div className="flex flex-col gap-4 mt-4">
        {/* ANNOUNCEMENT CARD 1 */}
        <div className="bg-appSkyLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">{data[0].title}</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {new Intl.DateTimeFormat('en-US').format(data[0].date)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{data[0].description}</p>
        </div>

        {/* ANNOUNCEMENT CARD 2 */}
        <div className="bg-appPurpleLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">{data[1].title}</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {new Intl.DateTimeFormat('en-US').format(data[1].date)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{data[1].description}</p>
        </div>

        {/* ANNOUNCEMENT CARD 3 */}
        <div className="bg-appYellowLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">{data[2].title}</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {new Intl.DateTimeFormat('en-US').format(data[2].date)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{data[2].description}</p>
        </div>
      </div>
    </div>
  );
};

// Export
export default Announcements;

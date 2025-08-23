/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import Announcements from '@/components/Announcements';
import BigCalendarContainer from '@/components/BigCalendarContainer';
import EventCalendar from '@/components/EventCalendar';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/utils';

/**
 * Student Page
 */
const StudentPage = async () => {
  // Current User
  const user = await getCurrentUser();

  // User ID
  const userId = user?.userId;

  // Classes Data Fetch from the Database
  const classItem = await prisma.class.findMany({
    where: {
      students: {
        some: {
          id: userId!,
        },
      },
    },
  });

  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT SIDE */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

// Export
export default StudentPage;

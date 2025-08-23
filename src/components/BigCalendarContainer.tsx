/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 23 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import prisma from '@/lib/prisma';
import { adjustScheduleToCurrentWeek } from '@/lib/utils';
import BigCalendar from './BigCalendar';

/***
 * Big Calendar Container component
 */
const BigCalendarContainer = async ({
  type,
  id,
}: {
  type: 'teacherId' | 'classId';
  id: string | number;
}) => {
  // Query Database for Lessons by Teacher Id or Class Id
  const responseData = await prisma.lesson.findMany({
    where: {
      ...(type === 'teacherId'
        ? { teacherId: id as string }
        : { classId: id as number }),
    },
  });

  // Create an array of events
  const data = responseData.map((item) => ({
    title: item.name,
    start: item.startTime,
    end: item.endTime,
  }));

  // Adjust the schedule to current week
  const schedule = adjustScheduleToCurrentWeek(data);

  return (
    <div>
      <BigCalendar data={schedule} />
    </div>
  );
};

export default BigCalendarContainer;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 23 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Ellipsis } from 'lucide-react';

// Internal Imports
import prisma from '@/lib/prisma';
import AttendenceChart from './AttendenceChart';

/**
 * Container Component for Attendence Chart
 */
const AttendenceChartContainer = async () => {
  const today = new Date(); // Get today's date
  const dayOfTheWeek = today.getDay(); // Get the day of the week (0-6) - 0 is Sunday

  // Shifts the week to make Monday the first day (0), and Sunday the last (6)
  const daysSinceMonday = dayOfTheWeek === 0 ? 6 : dayOfTheWeek - 1;

  // Calculate the date of the last Monday
  const lastMonday = new Date(today);
  lastMonday.setDate(today.getDate() - daysSinceMonday);

  // Fetch data from the database for the last 7 days of attendance
  const responseData = await prisma.attendance.findMany({
    where: {
      date: {
        gte: lastMonday,
      },
    },
    select: {
      date: true,
      present: true,
    },
  });

  // Create an array of days of the week - Weekdays for the student
  const daysOfWeeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  // Initialize an object to store the attendance for each day
  const attendanceMap: { [key: string]: { present: number; absent: number } } =
    {
      Mon: { present: 0, absent: 0 },
      Tue: { present: 0, absent: 0 },
      Wed: { present: 0, absent: 0 },
      Thu: { present: 0, absent: 0 },
      Fri: { present: 0, absent: 0 },
    };

  /**
   * Looping through each attendance record in the data from the database
   * - If the day is a weekday, update the present or absent count
   **/
  responseData.forEach((item) => {
    // Convert the each item's date string to a Date object
    const itemDate = new Date(item.date);

    const itemDay = itemDate.getDay(); // returns a number between 0 (Sun) to 6 (Sat)

    /**
     * Shifts the week.
     * Adjusts Monday the first day (0), and Friday the last (4)
     * Because of using custom `daysOfWeeks` array
     * Without this shift, JavaScript’s native `getDay()` would make Sunday = 0, which doesn’t match the array
     */
    const dayIndex = itemDay === 0 ? 6 : itemDay - 1;

    // Check if the day is a weekday
    if (dayIndex >= 0 && dayIndex <= 4) {
      // Get the name of the day of the week so we can use it as a key
      const dayName = daysOfWeeks[dayIndex];

      /**
       * If the student was present, increment the present count for that day.
       * If they were absent (i.e., present === false), increment the absent count.
       */
      if (item.present) {
        attendanceMap[dayName].present += 1;
      } else {
        attendanceMap[dayName].absent += 1;
      }
    }
  });

  // Convert the attendanceMap object to an array of objects
  const data = daysOfWeeks.map((day) => ({
    name: day,
    present: attendanceMap[day].present,
    absent: attendanceMap[day].absent,
  }));

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Ellipsis className="w-6 h-6 text-gray-500" />
      </div>

      {/* CHART */}
      <AttendenceChart data={data} />
    </div>
  );
};

// Export
export default AttendenceChartContainer;

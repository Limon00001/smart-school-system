/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import EventCalendar from '@/components/EventCalendar';

/**
 * Student Page
 */
const StudentPage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT SIDE */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
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

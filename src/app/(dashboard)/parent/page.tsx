/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';

/**
 * Parent Page
 */
const ParentPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT SIDE */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Jhon Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

// Export
export default ParentPage;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import AttendenceChart from '@/components/AttendenceChart';
import CountChart from '@/components/CountChart';
import UserCards from '@/components/UserCards';

/**
 * Admin Page
 */
const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
        {/* MIDDLE SECTION */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* LEFT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* RIGHT CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceChart />
          </div>
        </div>
        {/* BOTTOM SECTION */}
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

// Export
export default AdminPage;

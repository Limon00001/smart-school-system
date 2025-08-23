/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import Announcements from '@/components/Announcements';
import AttendenceChartContainer from '@/components/AttendenceChartContainer';
import CountChartContainer from '@/components/CountChartContainer';
import EventCalendarContainer from '@/components/EventCalendarContainer';
import FinanceChart from '@/components/FinanceChart';
import UserCards from '@/components/UserCards';

/**
 * Admin Page
 */
const AdminPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="admin" />
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
        </div>
        {/* MIDDLE SECTION */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* LEFT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* RIGHT CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceChartContainer />
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
};

// Export
export default AdminPage;

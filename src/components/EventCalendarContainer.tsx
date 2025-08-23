/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 23 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Ellipsis } from 'lucide-react';

// Internal Imports
import EventCalendar from './EventCalendar';
import EventList from './EventList';

/***
 * Container Component for Event Calendar
 */
const EventCalendarContainer = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { date } = searchParams;

  return (
    <div className="bg-white p-4 rounded-md">
      {/* CALENDAR SECTION */}
      <EventCalendar />

      {/* EVENTS SECTION */}
      {/* EVENTS TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Ellipsis className="w-6 h-6 text-gray-500" />
      </div>

      {/* EVENTS LIST */}
      <div className="flex flex-col gap-4">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

// Export
export default EventCalendarContainer;

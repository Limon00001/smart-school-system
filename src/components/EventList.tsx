/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 23 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import prisma from '@/lib/prisma';

/**
 * Event List Component
 */
const EventList = async ({ dateParam }: { dateParam: string | undefined }) => {
  /**
   * Convert the dateParam string to a Date object
   * Default to today's date if no dateParam is provided
   */
  const date = dateParam ? new Date(dateParam) : new Date();

  // Fetch events from the database
  const data = await prisma.event.findMany({
    where: {
      startTime: {
        gte: new Date(date.setHours(0, 0, 0, 0)), // Start of the day
        lte: new Date(date.setHours(23, 59, 59, 999)), // End of the day
      },
    },
  });

  return data.length > 0 ? (
    <>
      {data.map(({ id, title, description, startTime }) => (
        <div
          key={id}
          className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-appSky even:border-t-appPurple"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">{title}</h1>
            <span className="text-gray-300 text-xs">
              {startTime.toLocaleString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{description}</p>
        </div>
      ))}
    </>
  ) : (
    <div className="p-5 rounded-md border-2 border-gray-200 border-t-4">
      <p className="text-sm text-gray-400 text-center">No events found.</p>
    </div>
  );
};

// Export
export default EventList;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

/**
 * Announcements Component
 */
const Announcements = () => {
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
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-1
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, quia quos quidem quibusdam quia quas quia quas quae quia.
          </p>
        </div>

        {/* ANNOUNCEMENT CARD 2 */}
        <div className="bg-appPurpleLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-1
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, quia quos quidem quibusdam quia quas quia quas quae quia.
          </p>
        </div>

        {/* ANNOUNCEMENT CARD 3 */}
        <div className="bg-appYellowLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-1
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, quia quos quidem quibusdam quia quas quia quas quae quia.
          </p>
        </div>
      </div>
    </div>
  );
};

// Export
export default Announcements;

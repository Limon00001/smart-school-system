/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Ellipsis } from 'lucide-react';

/**
 * User Cards Component
 */
const UserCards = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-appPurple even:bg-appYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white rounded-full px-2 py-1 text-green-600">
          2024/25
        </span>
        <Ellipsis />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,123</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

// Export
export default UserCards;

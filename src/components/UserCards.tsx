/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Ellipsis } from 'lucide-react';

// Internal Imports
import prisma from '@/lib/prisma';

/**
 * User Cards Component
 */
const UserCards = async ({
  type,
}: {
  type: 'admin' | 'student' | 'teacher' | 'parent';
}) => {
  // // Model Map to get user count by type
  // const modelMap: Record<typeof type, any> = {
  //   admin: prisma.admin,
  //   student: prisma.student,
  //   teacher: prisma.teacher,
  //   parent: prisma.parent,
  // };

  // // Get User Count by type
  // const data = await modelMap[type].count();

  // ============ Second Approach ==================
  let count = 0;

  switch (type) {
    case 'admin':
      count = await prisma.admin.count();
      break;
    case 'student':
      count = await prisma.student.count();
      break;
    case 'parent':
      count = await prisma.parent.count();
      break;
    case 'teacher':
      count = await prisma.teacher.count();
      break;

    default:
      count = 0;
      break;
  }

  return (
    <div className="rounded-2xl odd:bg-appPurple even:bg-appYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white rounded-full px-2 py-1 text-green-600">
          2024/25
        </span>
        <Ellipsis className="w-6 h-6 text-black/30" />
      </div>
      <h1 className="text-2xl font-semibold my-4">{count}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

// Export
export default UserCards;

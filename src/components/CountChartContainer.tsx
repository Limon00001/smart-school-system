/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 23 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import prisma from '@/lib/prisma';
import { Ellipsis } from 'lucide-react';

// Internal Imports
import CountChart from './CountChart';

/***
 * Cntainer Component for CountChart
 */
const CountChartContainer = async () => {
  // Get Boys and Girls Count
  const [boys, girls] = await prisma.$transaction([
    prisma.student.count({
      where: {
        sex: 'MALE',
      },
    }),
    prisma.student.count({
      where: {
        sex: 'FEMALE',
      },
    }),
  ]);

  // Second Approach
  //   const data = await prisma.student.groupBy({
  //     by: ['sex'],
  //     _count: true,
  //   });

  //   const boys = data.find((d) => d.sex === 'MALE')?._count || 0;
  //   const girls = data.find((d) => d.sex === 'FEMALE')?._count || 0;

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Ellipsis className="w-6 h-6 text-gray-500" />
      </div>

      {/* CHART */}
      <CountChart boys={boys} girls={girls} />

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-appSky rounded-full" />
          <h1 className="font-bold">{boys}</h1>
          <h2 className="text-xs text-gray-300">
            Boys ({Math.round((boys / (boys + girls)) * 100)}%)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-appYellow rounded-full" />
          <h1 className="font-bold">{girls}</h1>
          <h2 className="text-xs text-gray-300">
            Girls ({Math.round((girls / (boys + girls)) * 100)}%)
          </h2>
        </div>
      </div>
    </div>
  );
};

// Export
export default CountChartContainer;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

// Data Array
const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#FAE27C',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#C3EBFA',
  },
];

/**
 * Count Chart Component
 */
const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Ellipsis className="w-6 h-6 text-gray-500" />
      </div>
      {/* CHART */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={'/maleFemale.png'}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-appSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-appYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

// Export
export default CountChart;

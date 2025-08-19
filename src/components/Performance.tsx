/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { Ellipsis } from 'lucide-react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

// Data
const data = [
  { name: 'Group A', value: 92, fill: '#C3EBFA' },
  { name: 'Group B', value: 8, fill: '#FAE27C' },
];

/**
 * Performance Pie Chart Component
 */
const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Ellipsis className="w-6 h-6 text-gray-500" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-sm text-gray-300">of 10 points</p>
      </div>
      <h2 className="absolute font-medium bottom-16 left-0 right-0 text-center m-auto">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

// Export
export default Performance;

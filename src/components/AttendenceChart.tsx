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
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Data Array
const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 75,
    absent: 65,
  },
  {
    name: 'Wed',
    present: 90,
    absent: 65,
  },
  {
    name: 'Thu',
    present: 70,
    absent: 45,
  },
  {
    name: 'Fri',
    present: 50,
    absent: 70,
  },
];

/**
 * Attendence Chart Component
 */
const AttendenceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Ellipsis className="w-6 h-6 text-gray-500" />
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Export
export default AttendenceChart;

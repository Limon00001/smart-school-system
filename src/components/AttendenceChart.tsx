/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
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

/**
 * Attendence Chart Component
 */
const AttendenceChart = ({
  data,
}: {
  data: { name: string; present: number; absent: number }[];
}) => {
  return (
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
  );
};

// Export
export default AttendenceChart;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import Image from 'next/image';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

/**
 * Count Chart Component
 */
const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  // Data Array
  const data = [
    {
      name: 'Total',
      count: boys + girls,
      fill: 'white',
    },
    {
      name: 'Boys',
      count: boys,
      fill: '#FAE27C',
    },
    {
      name: 'Girls',
      count: girls,
      fill: '#C3EBFA',
    },
  ];

  return (
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
  );
};

// Export
export default CountChart;

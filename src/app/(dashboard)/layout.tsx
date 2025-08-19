/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

// Internal Imports
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';

/**
 * Dashboard Layout
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href={'/'}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <GraduationCap className="w-7 h-7" />
          <span className="hidden lg:block text-lg font-bold">SchoolApp</span>
        </Link>

        {/* MENU */}
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col">
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        {children}
      </div>
    </div>
  );
}

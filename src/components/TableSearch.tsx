/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

/**
 * Table Search Component
 */
const TableSearch = () => {
  // Router Hook
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission
    e.preventDefault();

    // Get Input Value
    const value = (e.currentTarget[0] as HTMLFormElement).value;

    // Update URL
    const params = new URLSearchParams(window.location.search);
    params.set('search', value);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
    >
      <Search className="h-4 w-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none placeholder:text-sm"
      />
    </form>
  );
};

// Export
export default TableSearch;

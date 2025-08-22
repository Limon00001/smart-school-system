/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Megaphone, MessageSquareMore, Search } from 'lucide-react';

/**
 * Navbar Component
 */
const Navbar = async () => {
  // Get User
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden lg:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none placeholder:text-sm"
        />
      </div>

      {/* ICONS */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <MessageSquareMore className="h-5 w-5" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Megaphone className="h-5 w-5" />
          <div className="absolute w-5 h-5 bg-purple-500 text-white text-xs rounded-full -top-3 -right-3 flex items-center justify-center">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium capitalize">
            {user?.username}
          </span>
          <span className="text-[10px] text-gray-500 text-right">
            {user?.publicMetadata?.role as string}
          </span>
        </div>
        {/* <CircleUser className="h-9 w-9 rounded-full" /> */}
        <UserButton />
      </div>
    </div>
  );
};

// Export
export default Navbar;

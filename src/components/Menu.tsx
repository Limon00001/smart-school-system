/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import {
  Calendar,
  CircleUser,
  GraduationCap,
  House,
  IdCard,
  LogOut,
  Megaphone,
  MessageCircle,
  NotebookPen,
  NotepadText,
  PcCase,
  Settings,
  User,
  UserRoundCheck,
  Users,
} from 'lucide-react';
import Link from 'next/link';

// Menu Items Array
const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        label: 'Home',
        icon: <House />,
        href: '/',
      },
      {
        label: 'Teachers',
        icon: <GraduationCap />,
        href: '/teachers',
      },
      {
        label: 'Parents',
        icon: <Users />,
        href: '/parents',
      },
      {
        label: 'Students',
        icon: <User />,
        href: '/students',
      },
      {
        label: 'Classes',
        icon: <IdCard />,
        href: '/classes',
      },
      {
        label: 'Lessons',
        icon: <NotebookPen />,
        href: '/lessons',
      },
      {
        label: 'Exams',
        icon: <NotepadText />,
        href: '/exams',
      },
      {
        label: 'Assignments',
        icon: <PcCase />,
        href: '/assignments',
      },
      {
        label: 'Attendance',
        icon: <UserRoundCheck />,
        href: '/Attendance',
      },
      {
        label: 'Events',
        icon: <Calendar />,
        href: '/events',
      },
      {
        label: 'Messages',
        icon: <MessageCircle />,
        href: '/messages',
      },
      {
        label: 'Announcements',
        icon: <Megaphone />,
        href: '/announcements',
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        label: 'Profile',
        icon: <CircleUser />,
        href: '/profile',
      },
      {
        label: 'Settings',
        icon: <Settings />,
        href: '/settings',
      },
      {
        label: 'Logout',
        icon: <LogOut />,
        href: '/logout',
      },
    ],
  },
];

/**
 * Menu Component
 */
const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menuItem) => (
        <div key={menuItem.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {menuItem.title}
          </span>
          {menuItem.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <div className="flex items-center gap-2 p-2">
                {item.icon}
                <span className="hidden lg:block">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

// Export
export default Menu;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { currentUser } from '@clerk/nextjs/server';
import {
  BookCheck,
  Calendar,
  Cast,
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
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Teachers',
        icon: <GraduationCap />,
        href: '/list/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        label: 'Parents',
        icon: <Users />,
        href: '/list/parents',
        visible: ['admin', 'teacher'],
      },
      {
        label: 'Students',
        icon: <User />,
        href: '/list/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: <BookCheck />,
        label: 'Subjects',
        href: '/list/subjects',
        visible: ['admin'],
      },
      {
        label: 'Classes',
        icon: <IdCard />,
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },
      {
        label: 'Lessons',
        icon: <NotebookPen />,
        href: '/list/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        label: 'Exams',
        icon: <NotepadText />,
        href: '/list/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Assignments',
        icon: <PcCase />,
        href: '/list/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: <Cast />,
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Attendance',
        icon: <UserRoundCheck />,
        href: '/list/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Events',
        icon: <Calendar />,
        href: '/list/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Messages',
        icon: <MessageCircle />,
        href: '/list/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Announcements',
        icon: <Megaphone />,
        href: '/list/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
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
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Settings',
        icon: <Settings />,
        href: '/settings',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        label: 'Logout',
        icon: <LogOut />,
        href: '/logout',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
];

/**
 * Menu Component
 */
const Menu = async () => {
  // Get User from Clerk
  const user = await currentUser();

  // Get User Role from user
  const role = user?.publicMetadata?.role as string;

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menuItem) => (
        <div key={menuItem.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {menuItem.title}
          </span>
          {menuItem.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 md:px-2 rounded-md hover:bg-appSkyLight"
                >
                  <div className="flex items-center gap-2 p-2">
                    {item.icon}
                    <span className="hidden lg:block">{item.label}</span>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

// Export
export default Menu;

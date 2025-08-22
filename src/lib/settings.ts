/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 21 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Types
type RouteAccessMap = {
  [key: string]: string[];
};

// Constants
const ITEMS_PER_PAGE = 10;

const routeAccessMap: RouteAccessMap = {
  '/admin(.*)': ['admin'],
  '/teacher(.*)': ['teacher'],
  '/student(.*)': ['student'],
  '/parent(.*)': ['parent'],
  '/admin': ['admin'],
  '/list/teachers': ['admin', 'teacher'],
  '/list/students': ['admin', 'teacher'],
  '/list/parents': ['admin', 'teacher'],
  '/list/subjects': ['admin'],
  '/list/classes': ['admin', 'teacher'],
  '/list/exams': ['admin', 'teacher', 'student', 'parent'],
  '/list/assignments': ['admin', 'teacher', 'student', 'parent'],
  '/list/results': ['admin', 'teacher', 'student', 'parent'],
  '/list/attendance': ['admin', 'teacher', 'student', 'parent'],
  '/list/events': ['admin', 'teacher', 'student', 'parent'],
  '/list/announcements': ['admin', 'teacher', 'student', 'parent'],
};

// Export
export { ITEMS_PER_PAGE, routeAccessMap };

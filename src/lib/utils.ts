/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 22 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { auth } from '@clerk/nextjs/server';

/**
 * Get Current User Function
 */
const getCurrentUser = async () => {
  try {
    // Get Current User
    const { userId, sessionClaims } = await auth();

    return {
      userId,
      role: (sessionClaims?.metadata as { role?: string })?.role,
    };
  } catch (error) {
    console.error(`Error fetching user from utils: ${error}`);
  }
};

// Get Current Work Week
const currentWorkWeek = () => {
  // Get today's date
  const today = new Date();

  // Get Day of the Week - 0 is Sunday, 6 is Saturday
  const dayOfWeek = today.getDay();

  // Calculate start of the week
  const startOfWeek = new Date(today);

  // Shift the week to make Monday the first day
  if (dayOfWeek === 0) {
    startOfWeek.setDate(today.getDate() + 1);
  }

  // Shift the week to make Sunday the last day
  if (dayOfWeek === 6) {
    // Shift the week to make Monday the first day
    startOfWeek.setDate(today.getDate() + 2);
  } else {
    // Shift the week to make Monday the first day
    startOfWeek.setDate(today.getDate() - (today.getDate() - 1));
  }

  // Set hours, minutes, seconds, and milliseconds to 0
  startOfWeek.setHours(0, 0, 0, 0);

  // Return start and end of the week
  return startOfWeek;
};

// Adjust Schedule to Current Week
const adjustScheduleToCurrentWeek = (
  lessons: { title: string; start: Date; end: Date }[],
): { title: string; start: Date; end: Date }[] => {
  // Get Current Work Week
  const startOfWeek = currentWorkWeek();

  return lessons.map((lesson) => {
    // Get Day of the Week
    const lessonDayOfWeek = lesson.start.getDay();

    // Shift the week to make Monday the first day
    const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;

    // Adjust the start date
    const adjustedStartDate = new Date(startOfWeek);

    // Shift the week to make Monday the first day
    adjustedStartDate.setDate(adjustedStartDate.getDate() + daysFromMonday);

    // Set hours, minutes, seconds
    adjustedStartDate.setHours(
      lesson.start.getHours(),
      lesson.start.getMinutes(),
      lesson.start.getSeconds(),
    );

    // Adjust the end date
    const adjustedEndDate = new Date(adjustedStartDate);

    // Set hours, minutes, seconds
    adjustedEndDate.setHours(
      lesson.end.getHours(),
      lesson.end.getMinutes(),
      lesson.end.getSeconds(),
    );

    return {
      title: lesson.title,
      start: adjustedStartDate,
      end: adjustedEndDate,
    };
  });
};

// export
export { adjustScheduleToCurrentWeek, getCurrentUser };

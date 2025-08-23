/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

// Styles
import 'react-calendar/dist/Calendar.css';

// Types
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

/**
 * Event Calendar
 */
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  // Router Hook
  const router = useRouter();

  // Update the URL when the value changes
  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value.toLocaleDateString('en-US')}`);
    }
  }, [value, router]);

  return <Calendar onChange={onChange} value={value} />;
};

// Export
export default EventCalendar;

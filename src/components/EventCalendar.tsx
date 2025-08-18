/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { Ellipsis } from 'lucide-react';
import { useState } from 'react';
import Calendar from 'react-calendar';

// Styles
import 'react-calendar/dist/Calendar.css';

// Types
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Events Array
const events = [
  {
    id: 1,
    title: 'Event 1',
    description: 'Description 1',
    time: '12:00 PM - 2:00 PM',
  },
  {
    id: 2,
    title: 'Event 2',
    description: 'Description 2',
    time: '1:00 PM - 3:00 PM',
  },
  {
    id: 3,
    title: 'Event 3',
    description: 'Description 3',
    time: '2:00 PM - 4:00 PM',
  },
];

/**
 * Event Calendar
 */
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      {/* CALENDAR SECTION */}
      <Calendar onChange={onChange} value={value} />

      {/* EVENTS SECTION */}
      {/* EVENTS TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Ellipsis className="w-6 h-6 text-gray-500" />
      </div>

      {/* EVENTS LIST */}
      <div className="flex flex-col gap-4">
        {events.map(({ id, title, description, time }) => (
          <div
            key={id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-appSky even:border-t-appPurple"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{title}</h1>
              <span className="text-gray-300 text-xs">{time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export
export default EventCalendar;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import moment from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';

// Internal Imports

// Styles
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Instance of Big Calendar
const localizer = momentLocalizer(moment);

/**
 * Big Calendar Component
 */
const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  // Change View Handler Function
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      view={view}
      views={['work_week', 'day']}
      style={{ height: '98%' }}
      onView={handleOnChangeView}
      min={new Date(2025, 7, 12, 8, 0)}
      max={new Date(2025, 7, 16, 14, 0)}
    />
  );
};

// Export
export default BigCalendar;

/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 20 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { Plus, SquarePen, Trash, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Internal Imports
// Lazy Loading
const TeacherForm = dynamic(() => import('./forms/TeacherForm'), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import('./forms/StudentForm'), {
  loading: () => <h1>Loading...</h1>,
});

// Types
import type { JSX } from 'react';

// Forms Object
const forms: {
  [key: string]: (type: 'create' | 'update', data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

/**
 * Form Modal Component
 */
const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | 'teacher'
    | 'student'
    | 'parent'
    | 'subject'
    | 'class'
    | 'assignment'
    | 'lesson'
    | 'exam'
    | 'result'
    | 'attendence'
    | 'event'
    | 'announcement';
  type: 'create' | 'update' | 'delete';
  data?: any;
  id?: number | string;
}) => {
  const size = type === 'create' ? 'w-8 h-8' : 'w-7 h-7';
  const bgColor =
    type === 'create'
      ? 'bg-appYellow'
      : type === 'update'
      ? 'bg-appSky'
      : 'bg-red-500/30';

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === 'delete' && id ? (
      <form className="flex flex-col gap-4 p-4">
        <div className="w-max self-center flex items-center justify-center p-4 bg-red-100 rounded-full">
          <Trash className="w-6 h-6 text-red-600" />
        </div>
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <div className="flex items-center justify-center gap-4 mt-5 w-full">
          <button
            type="button"
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-full md:w-36 h-10 rounded-md text-white bg-red-700 font-medium text-sm hover:bg-red-600 active:scale-95 transition cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </form>
    ) : type === 'create' || type === 'update' ? (
      forms[table](type, data)
    ) : null;
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full cursor-pointer ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        {type === 'create' && <Plus className="w-4 h-4" />}
        {type === 'update' && <SquarePen className="w-4 h-4" />}
        {type === 'delete' && <Trash className="w-4 h-4" />}
      </button>
      {open && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Export
export default FormModal;

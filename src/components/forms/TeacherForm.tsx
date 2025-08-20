/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 20 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client Component
'use client';

// External Imports
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Zod Schema
const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long.' })
    .max(20, { message: 'Username must be at most 20 characters long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' }),
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'First name is required.' }),
  phone: z.string().min(1, { message: 'First name is required.' }),
  address: z.string().min(1, { message: 'First name is required.' }),
  birthday: z.date({
    message: 'Birthday is required',
  }),
  sex: z.enum(['male', 'female'], {
    message: 'Sex is required',
  }),
  img: z.instanceof(File, {
    message: 'Image is required',
  }),
});

/**
 * Teacher Form Component
 */
const TeacherForm = ({
  type,
  data,
}: {
  type: 'create' | 'update';
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmitForm}>
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">Username</label>
        <input
          type="text"
          {...register('username')}
          className="w-full text-sm p-2 rounded-md ring-[1.5px] ring-gray-300 focus:outline-none"
        />
        {errors.username?.message && (
          <p className="text-xs text-red-400">
            {errors.username?.message.toString()}
          </p>
        )}
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 ease-in-out text-white p-2 rounded-md cursor-pointer">
        {type === 'create' ? 'Create' : 'Update'}
      </button>
    </form>
  );
};

// Export
export default TeacherForm;

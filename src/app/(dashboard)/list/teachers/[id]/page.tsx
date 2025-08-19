/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Calendar, Droplet, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Internal Imports
import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import Performance from '@/components/Performance';

/**
 * Individual Teacher Page Component
 */
const SingleTeacherPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT SIDE */}
      <div className="w-full xl:w-2/3">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="flex-1 flex gap-4 px-4 py-4 bg-appSky rounded-md">
            <div className="w-1/3">
              <Image
                src={
                  'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg'
                }
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4 justify-between">
              <h1 className="text-xl font-semibold">Neymar Jr.</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 text-xs font-medium flex-wrap">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Droplet className="w-4 h-4" />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>9Dl6y@example.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+880 1234 5678</span>
                </div>
              </div>
            </div>
          </div>
          {/* NORMAL CARD */}
          <div className="flex-1 flex justify-between gap-4 flex-wrap">
            {/* CARD 1 */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[45%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={'/maleFemale.png'}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-500">Attendence</span>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[45%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={'/maleFemale.png'}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[45%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={'/maleFemale.png'}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            {/* CARD 4 */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[45%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={'/maleFemale.png'}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-xl font-semibold mb-4">
            Teacher&apos;s Schedule
          </h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* SHORTCUTS */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href={'/'} className="p-3 rounded-md bg-appSkyLight">
              Teacher&apos;s Classes
            </Link>
            <Link href={'/'} className="p-3 rounded-md bg-appPurpleLight">
              Teacher&apos;s Students
            </Link>
            <Link href={'/'} className="p-3 rounded-md bg-appYellowLight">
              Teacher&apos;s Lessons
            </Link>
            <Link href={'/'} className="p-3 rounded-md bg-pink-50">
              Teacher&apos;s Exams
            </Link>
            <Link href={'/'} className="p-3 rounded-md bg-appSkyLight">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>

        {/* PERFORMANCE PIE CHART */}
        <Performance />

        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

// Export
export default SingleTeacherPage;

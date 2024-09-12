import { Fragment, FC } from 'react';
//Next Imports
import Link from 'next/link';

import Image from 'next/image';

//interfaces imports
import { ISideProps } from '@/types/Interfaces/sidebar.interface';

//assets imports
import logo from '../../../public/assets/images/logo.png';
import dashboardIcon from '../../../public/assets/images/3dcube.png';

export const SideBar: FC<ISideProps> = ({ className }) => {
  return (
    <Fragment>
      <aside
        className={`flex ${className}  h-[2193px] w-64 flex-col bg-sideBarBlue overflow-y-auto border-r  px-5 py-8`}
      >
        <div>
          <Image
            src={logo}
            alt='logo'
            width={400}
            height={400}
            className='mt-12 mr-0 mb-12 ml-0 max-h-[43px] max-w-[243px]'
          />
        </div>

        <div className='mt-1 flex flex-1 flex-col justify-between'>
          <nav className='-mx-3 space-y-6 '>
            <div className='space-y-3 '>
              <Link
                className='flex transform text-staticWhite items-center rounded-lg px-3 py-2   transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 invert-on-hover'
                href='/dashboard'
              >
                <Image
                  className='transition-transform duration-300 ease-in-out logo'
                  src={dashboardIcon}
                  width={22}
                  height={22}
                  alt='dashboard logo'
                ></Image>

                <span className='mx-2  text-sm font-medium'>Dashboard</span>
              </Link>
              <Link
                className='flex transform text-staticWhite items-center rounded-lg px-3 py-2  transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
                href='/dashboard/schedule'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-5 w-5'
                  aria-hidden='true'
                >
                  <path d='M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4'></path>
                  <path d='M4 6v12c0 1.1.9 2 2 2h14v-4'></path>
                  <path d='M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z'></path>
                </svg>
                <span className='mx-2 text-sm  font-medium'>Schedule</span>
              </Link>

              <Link
                className='flex text-staticWhite transform items-center rounded-lg px-3 py-2  transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
                href='/dashboard/shiftSwaps'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-5 w-5'
                  aria-hidden='true'
                >
                  <path d='M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2'></path>
                  <path d='M18 14h-8'></path>
                  <path d='M15 18h-5'></path>
                  <path d='M10 6h8v4h-8V6Z'></path>
                </svg>
                <span className='mx-2 text-sm font-medium'>Shift Swaps</span>
              </Link>
              <Link
                className='flex transform items-center rounded-lg px-3 py-2 text-staticWhite transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
                href='/dashboard/timeSheets'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-5 w-5'
                  aria-hidden='true'
                >
                  <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
                  <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
                  <path d='M2 8c0-2.2.7-4.3 2-6'></path>
                  <path d='M22 8a10 10 0 0 0-2-6'></path>
                </svg>
                <span className='mx-2 text-sm font-medium'>Time Sheets</span>
              </Link>
              <Link
                className='flex transform items-center rounded-lg px-3 py-2 text-staticWhite transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
                href='/dashboard/staffManagement'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-5 w-5'
                  aria-hidden='true'
                >
                  <path d='m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48'></path>
                </svg>
                <span className='mx-2 text-sm font-medium'>
                  Staff Management
                </span>
              </Link>

              <Link
                className='flex transform items-center rounded-lg px-3 py-2 text-staticWhite transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
                href='/dashboard/siteAndLocation'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-5 w-5'
                  aria-hidden='true'
                >
                  <path d='m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08'></path>
                  <path d='M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z'></path>
                </svg>
                <span className='mx-2 text-sm font-medium'>Site&Location</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </Fragment>
  );
};

'use client';
//React Calendar Imports
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

//Ui imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

//Next Imports
import Image from 'next/image';

//assets imports
import copy from '../../../public/assets/images/copy.png';
import blueHospital from '../../../public/assets/images/blue-hospital.png';
import blueCalendar from '../../../public/assets/images/blue-calendar-2.png';
import blueCube from '../../../public/assets/images/blue-3dcube.png';
import blueClock from '../../../public/assets/images/blue-clock.png';
import edit from '../../../public/assets/images/edit.png';
import trash from '../../../public/assets/images/trash.png';

//interface imports
import { scheduleValues } from '@/types/Interfaces/schedule.interface';

import { scheduleInitialValues } from '@/mock/schedule.mock';

export function ReactCalendar({ events }: { events: scheduleValues[] }) {
  const sample = [{ title: 'Meeting', start: new Date() }];

  return (
    <div className=' overflow-x-auto'>
      <FullCalendar
        viewClassNames={() => ['overflow-x-scroll']}
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        initialDate={'2024-03-01'}
        weekends={true}
        events={events.filter(item => {
          if (item != scheduleInitialValues)
            return { start: item.start, extendedProps: item };
        })}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo: any) {
  const { extendedProps } = eventInfo.event;

  return (
    <div className='mx-4 mb-2 text-[12px] flex items-center tracking-wider font-inter text-customGray  font-thin max-w-[171px] h-[31px] border-none bg-white rounded-[2px_8px_8px_2px] shadow'>
      <div className='w-[4px] h-full bg-sideBarBlue mr-1  rounded-[2px_0px_0px_2px]'></div>

      <div className='flex items-center w-full justify-between '>
        {' '}
        <Dialog key={extendedProps.user.id.value}>
          <DialogTrigger className='bg-white font-inter text-[12px] font-medium'>
            {extendedProps.site.length == 8
              ? extendedProps.site
              : extendedProps.site.substring(0, 8) + '...'}
          </DialogTrigger>
          <DialogContent className='w-[600px] h-[500px] p-4'>
            <DialogHeader>
              <DialogTitle className='font-inter font-medium text-[18px] '>
                View Shift
              </DialogTitle>
            </DialogHeader>

            <div className='space-y-2 w-[490px]'>
              <div className='flex items-center '>
                <Image
                  src={blueHospital}
                  width={24}
                  alt='hospital'
                  height={24}
                />
                <div className='ml-2 flex-grow'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium font-inter text-[14px]'>Sites</p>
                    <p className='text-[14px] font-medium font-inter text-customGray'>
                      {extendedProps.site}
                    </p>
                  </div>
                </div>
              </div>
              <hr className='bg-borderGray' />

              <div className='flex items-center'>
                <Image
                  src={blueCube}
                  width={24}
                  alt='cube'
                  height={24}
                />
                <div className='ml-2 flex-grow'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium font-inter text-[14px]'>Job</p>
                    <p className='text-[14px] font-medium font-inter text-customGray'>
                      {extendedProps.job}
                    </p>
                  </div>
                </div>
              </div>
              <hr className='bg-borderGray' />

              <div className='flex items-center'>
                <Image
                  src={blueCalendar}
                  width={24}
                  alt='calendar'
                  height={24}
                />
                <div className='ml-2 flex-grow'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium font-inter text-[14px]'>Date</p>
                    <p className='text-[14px] font-medium font-inter text-customGray'>
                      {extendedProps.start}
                    </p>
                  </div>
                </div>
              </div>
              <hr className='bg-borderGray' />

              <div className='flex items-center'>
                <Image
                  src={blueClock}
                  width={24}
                  alt='clock'
                  height={24}
                />
                <div className='ml-2 flex-grow'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium font-inter text-[14px]'>
                      Schedule Start
                    </p>
                    <p className='text-[14px] font-medium font-inter text-customGray'>
                      {extendedProps.scheduleStart}
                    </p>
                  </div>
                </div>
              </div>
              <hr className='bg-borderGray' />

              <div className='flex items-center'>
                <Image
                  src={blueClock}
                  width={24}
                  alt='clock'
                  height={24}
                />
                <div className='ml-2 flex-grow'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium font-inter text-[14px]'>
                      Schedule End
                    </p>
                    <p className='text-[14px] font-medium font-inter text-customGray'>
                      {extendedProps.scheduleEnd}
                    </p>
                  </div>
                </div>
              </div>
              <hr className='bg-borderGray' />

              <div className='flex items-center'>
                <Image
                  src={blueClock}
                  width={24}
                  alt='clock'
                  height={24}
                />
                <div className='ml-2 flex-grow '>
                  <div className='flex mr-3 items-center justify-between '>
                    <p className='font-medium font-inter text-[14px]'>
                      Actual Start
                    </p>
                    <p className='text-[14px] font-medium font-inter text-customGray'>
                      -
                    </p>
                  </div>
                </div>
              </div>
              <hr className='bg-borderGray ' />
              <div className='flex items-center'>
                <Image
                  src={blueClock}
                  width={24}
                  alt='clock'
                  height={24}
                />
                <div className='ml-2 flex-grow '>
                  <div className='flex mr-3 items-center justify-between '>
                    <p className='font-medium font-inter text-[14px]'>
                      Actual End
                    </p>
                    <p className='text-[14px] font-medium font-inter text-customGray'>
                      -
                    </p>
                  </div>
                </div>
              </div>
              <hr className='bg-borderGray ' />
              <div className='flex items-center justify-star'>
                <Avatar className='h-[58px] w-[58px]'>
                  <AvatarImage src={extendedProps.user?.picture?.medium} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='font-inter ml-2 mt-5 mb-5 font-medium text-neutralGrey'>
                  {extendedProps.user.name.first +
                    ' ' +
                    extendedProps.user.name.last}
                </p>
              </div>

              <div className='flex items-center justify-between '>
                <button className='w-[272px] h-[36px] rounded-lg font-inter font-medium mr-2 text-[14px] text-red-500 flex items-center justify-center border-2 border-borderGray'>
                  <Image
                    src={trash}
                    alt='copy'
                    width={16}
                    height={16}
                  />
                  <span className='ml-2'>Delete</span>
                </button>
                <button className='w-[272px] h-[36px] rounded-lg font-inter font-medium text-[14px] text-sideBarBlue flex items-center justify-center border-2 border-borderGray'>
                  <Image
                    src={edit}
                    alt='copy'
                    width={16}
                    height={16}
                  />
                  <span className='ml-2'>Edit</span>
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Image
          className='mr-2'
          key={extendedProps.user.id.value}
          src={copy}
          alt='copy'
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}

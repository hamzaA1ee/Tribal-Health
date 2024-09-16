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
import { IEventInfo } from '@/types/Interfaces/schedule.interface';

const events = [
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
];

export function ReactCalendar() {
  return (
    <div className=' overflow-x-auto'>
      <FullCalendar
        viewClassNames={() => ['overflow-x-scroll']}
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        initialDate={'2024-03-01'}
        weekends={true}
        dayHeaderClassNames={() => {
          return [
            ' p-[10px] text-center ',
            'w-[201px]',
            'h-[50px]',
            'text-semibold',
            'text-[12px] font-inter tracking-wide',
          ];
        }}
        dayCellClassNames={() => ['h-auto w-[201px]  ']}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo: IEventInfo, key: number = 1) {
  return (
    <div className='mx-4 mb-2 text-[12px] flex items-center tracking-wider font-inter text-customGray  font-thin w-[171px] h-[31px] border-none bg-white rounded-[2px_8px_8px_2px] shadow'>
      <div className='w-[4px] h-full bg-sideBarBlue mr-1  rounded-[2px_0px_0px_2px]'></div>

      <div className='flex items-center w-full justify-between '>
        {' '}
        <Dialog>
          <DialogTrigger className='bg-white font-inter text-[12px] font-medium'>
            {eventInfo.timeText + ' ' + eventInfo.event.title}
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
                      Pine Ridge
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
                      Pine Ridge Service Unit
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
                      Emergency Medicine
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
                      MON 24/05/2024
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
                      {'-'}
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
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='font-inter ml-2 mt-5 mb-5 font-medium text-neutralGrey'>
                  Devon Lames
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
          key={key++}
          src={copy}
          alt='copy'
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}

'use client';
//React Calendar Imports
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//Next Imports
import Image from 'next/image';

//assets imports
import copy from '../../../public/assets/images/copy.png';

const events = [
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
  { title: 'Meeting', start: new Date('2024-09-1') },
];

export function ReactCalendar() {
  return (
    <div className=' overflow-y-auto'>
      <FullCalendar
        viewClassNames={() => ['overflow-y-auto fc-day-header']}
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        dayHeaderClassNames={e => {
          return [
            'p-[10px] text-center',
            'w-[201px]',
            'h-[50px]',
            'text-semibold',
            'text-[12px] font-inter tracking-wide',
          ];
        }}
        dayCellClassNames={e => ['h-auto w-[201px]']}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo: any, key: number = 1) {
  return (
    <div className='mx-4 mb-2 text-[12px] flex items-center tracking-wider font-inter text-customGray font-thin w-[171px] h-[31px] border-none bg-white rounded-[2px_8px_8px_2px] shadow'>
      <div className='w-[4px] h-full bg-sideBarBlue mr-1  rounded-[2px_0px_0px_2px]'></div>
      <div className='flex items-center w-full justify-between '>
        {' '}
        <b>{eventInfo.timeText + ' ' + eventInfo.event.title}</b>
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

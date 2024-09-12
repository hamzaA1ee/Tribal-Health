'use client';
// React Imports
import { FC, Fragment, useState } from 'react';

//view imports
import { ReactCalendar } from '../../ReactCalendar';

//UI imports

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import { Checkbox } from '@/components/ui/checkbox';

//interfaces imports

const ScheduleView = () => {
  return (
    <Fragment>
      <div className='flex'>
        <div className=' mt-[47.5px] w-[194px]'>
          <Command>
            <CommandInput placeholder='Find Staff' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Suggestions'>
                <CommandItem
                  //   onClick={handleItemClick}
                  className='flex items-center justify-between hover:cursor-pointer'
                >
                  <Checkbox />
                  Pappu pager
                </CommandItem>
                <CommandItem className='flex items-center justify-between'>
                  <Checkbox />
                  Calendar
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </div>
        <div className='flex-1'>
          <ReactCalendar />
        </div>
      </div>
    </Fragment>
  );
};

export default ScheduleView;

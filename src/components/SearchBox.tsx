import { Fragment } from 'react';

//UI imports

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Checkbox } from '@/components/ui/checkbox';

//interfaces imports
import { IUserResponse } from '@/types/Interfaces/schedule.interface';

export const SearchBox = ({
  userData,
  height,
  width,
}: {
  userData: IUserResponse;
  width: number;
  height: number;
}) => {
  return (
    <Fragment>
      <Command>
        <CommandInput placeholder='Find Staff' />
        <CommandList
          className={`mt-2 ml-2 max-h-[${height}px] w-[${width}px] overflow-y-auto custom-scrollbar`}
        >
          <CommandEmpty>No results found.</CommandEmpty>

          {userData.results.map(item => (
            <Fragment key={item.id.value}>
              <CommandItem className=' flex items-center hover:cursor-pointer max-h-[40px] mb-2  '>
                <Checkbox className='mr-2 max-w-[18px] max-h-[18px] data-[state=checked]:bg-sideBarBlue ' />

                <Avatar className='w-8 h-8 mr-2'>
                  <AvatarImage
                    width={24}
                    height={24}
                    src={item.picture.medium}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {item.name.first.length + item.name.last.length == 8 ? (
                  <span className='font-semibold text-[12px]  text-searchColor'>
                    {item.name.first + ' ' + item.name.last}
                  </span>
                ) : (
                  <span className='text-[12px] font-semibold  text-searchColor  '>
                    {(item.name.first + ' ' + item.name.last).slice(0, 8) +
                      '...'}
                  </span>
                )}
              </CommandItem>
            </Fragment>
          ))}

          <CommandSeparator />
        </CommandList>
      </Command>
    </Fragment>
  );
};

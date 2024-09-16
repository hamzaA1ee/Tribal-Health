import { Fragment } from 'react';

//ui imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

//Next Imports
import Image, { StaticImageData } from 'next/image';
import { SearchBox } from './SearchBox';
import { IUserResponse } from '@/types/Interfaces/schedule.interface';

export const DropDowns = ({
  src,
  mock,
  title,
  width,
  height,
  search,
  userData,
}: {
  src: StaticImageData;
  mock: string[];
  title: string;
  width: number;
  height: number;
  search: boolean;
  userData?: IUserResponse;
}) => {
  return (
    <Fragment>
      {!search && (
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`w-[120px] h-[36px] text-sm bg-white border-2 border-borderGray mr-2 rounded-lg flex items-center justify-center `}
          >
            {title}
            {
              <Image
                className='ml-5'
                src={src}
                width={16}
                height={16}
                alt='add btn'
              />
            }{' '}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {mock.map(site => (
              <DropdownMenuItem key={site}>{site}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {search && (
        <DropdownMenu>
          <p className='font-inter text-[14px] font-medium'>Staff Members</p>
          <DropdownMenuTrigger
            className={`w-[${width}px] h-[${height}px] text-sm bg-white border-2  border-borderGray mr-2 rounded-lg flex items-center justify-center`}
          >
            {title}
            {
              <Image
                className='ml-[470px]'
                src={src}
                width={16}
                height={16}
                alt='add btn'
              />
            }{' '}
          </DropdownMenuTrigger>
          <DropdownMenuContent className='max-h-[410px] max-w-[552px] overflow-y-auto custom-scrollbar '>
            <SearchBox
              height={410}
              width={552}
              userData={userData}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Fragment>
  );
};

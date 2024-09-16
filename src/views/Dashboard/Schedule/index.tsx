'use client';
// React Imports
import { Fragment } from 'react';

//view imports
import { ReactCalendar } from '../../ReactCalendar';

//assets imports
import add from '../../../../public/assets/images/add.png';
import arrowDown from '../../../../public/assets/images/arrow-down.png';

//components imprts
import { SearchBox } from '@/components/SearchBox';

//UI imports

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

//Next Imports
import Image from 'next/image';

//mocks imports
import { jobs, months, sites } from '@/mock/months';

// interface imports
import { IUserResponse } from '@/types/Interfaces/schedule.interface';

import { DropDowns } from '@/components/DropDowns';

const ScheduleView = ({ userData }: { userData: IUserResponse }) => {
  return (
    <Fragment>
      <div className='w-full h-[50px] flex items-center justify-end mb-3'>
        {/* sites dropdown */}

        <DropDowns
          width={120}
          height={36}
          src={arrowDown}
          mock={sites}
          title='Sites'
          search={false}
        />

        {/* jobs dropdown */}
        <DropDowns
          src={arrowDown}
          width={120}
          height={36}
          mock={jobs}
          title='Jobs'
          search={false}
        />
        {/* months */}

        <DropDowns
          width={120}
          height={36}
          src={arrowDown}
          mock={months}
          title='Months'
          search={false}
        />

        <Dialog>
          <DialogTrigger
            asChild
            className='w-[140px] h-[42px] text-center rounded-lg mr-5  flex items-center justify-center bg-sideBarBlue hover:bg-sideBarBlue hover:text-white text-white text-[15px] font-medium'
          >
            <Button variant='outline'>
              {
                <Image
                  className='mr-2'
                  src={add}
                  width={24}
                  height={24}
                  alt='add btn'
                />
              }{' '}
              New Shift
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-[600px] max-h-[876px]'>
            <DialogHeader>
              <DialogTitle className='text-lg font-inter font-medium'>
                Assign Shift
              </DialogTitle>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <DropDowns
                width={552}
                height={42}
                src={arrowDown}
                mock={[]}
                title='Select'
                search={true}
                userData={userData}
              />
              <div className='grid grid-cols-1 items-center gap-1'>
                <Label
                  htmlFor='username'
                  className='font-inter font-medium text-[14px] text-searchColor '
                >
                  Date
                </Label>
                <Input
                  id='username'
                  placeholder={Date.now().toString()}
                  type='date'
                  className='col-span-3 max-w-[552px] max-h-[42px] border-borderGray rounded-lg'
                />
              </div>
              <div className='grid grid-cols-2 items-center gap-4'>
                <div className='grid grid-cols-2 items-center gap-1'>
                  <Label
                    htmlFor='username'
                    className='font-inter font-medium text-[14px] text-searchColor '
                  >
                    Schedule Start
                  </Label>
                  <Input
                    id='username'
                    type='date'
                    className='col-span-3 w-[268px] h-[42px]'
                    placeholder='e.g. 09:00 or 9am or 9'
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-1'>
                  <Label
                    htmlFor='username'
                    className='font-inter font-medium text-[14px] text-searchColor '
                  >
                    Schedule End
                  </Label>
                  <Input
                    id='username'
                    type='date'
                    className='col-span-3 w-[268px] h-[42px]'
                    placeholder='e.g. 17:00 or 5pm or 17'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 items-center gap-1'>
                <Label
                  htmlFor='username'
                  className='font-inter font-medium text-[14px] text-searchColor '
                >
                  Site
                </Label>
                <Input
                  id='username'
                  className='col-span-3 w-[552px] h-[42px] border-borderGray rounded-lg'
                  placeholder='e.g Company HeadQuarter'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-1'>
                <Label
                  htmlFor='username'
                  className='font-inter font-medium text-[14px] text-searchColor '
                >
                  Job
                </Label>
                <Input
                  id='username'
                  className='col-span-3 w-[552px] h-[42px] border-borderGray rounded-lg'
                  placeholder='e.g Company HeadQuarter'
                />
              </div>
            </div>
            <DialogFooter className='flex sm:items-center sm:justify-center w-full h-auto'>
              <Button
                type='submit'
                className='bg-white w-[272px] h-[36px] text-sideBarBlue hover:bg-white hover:text-sideBarBlue'
              >
                Cancel
              </Button>
              <Button
                type='submit'
                className='w-[272px] h-[36px] text-white rounded-lg font-inter font-medium bg-sideBarBlue hover:bg-sideBarBlue hover:text-white'
              >
                Assign
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className='flex 
      '
      >
        <div className=' mt-[47.5px] w-[194px] '>
          <SearchBox
            width={194}
            height={1836}
            userData={userData}
          />
        </div>
        <div className='flex-1 mt-4  overflow-y-auto'>
          <ReactCalendar />
        </div>
      </div>
    </Fragment>
  );
};

export default ScheduleView;

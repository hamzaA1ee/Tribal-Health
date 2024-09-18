'use client';

// React Imports
import { Fragment, useState } from 'react';
import { format } from 'date-fns';

//view imports
import { ReactCalendar } from '../../ReactCalendar';

//assets imports
import add from '../../../../public/assets/images/add.png';
import arrowDown from '../../../../public/assets/images/arrow-down.png';

//components imprts
import { SearchBox } from '@/components/SearchBox';
import { toast } from 'sonner';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
//mock imports

//Next Imports
import Image from 'next/image';

//mocks imports
import { jobs, months, sites } from '@/mock/months';

// interface imports
import { IUserResponse } from '@/types/Interfaces/schedule.interface';

import { DropDowns } from '@/components/DropDowns';
//schema imports
import { scheduleSchema } from '@/schema/schedule.schema';

//interfaces imports
import { scheduleValues } from '@/types/Interfaces/schedule.interface';

//formik imports
import { Formik, Form, FormikProvider, useFormik } from 'formik';

//mock imports
import { scheduleInitialValues } from '@/mock/schedule.mock';

const ScheduleView = ({ userData }: { userData: IUserResponse }) => {
  const [disabled, setDisabled] = useState(false);

  const [events, setEvents] = useState<scheduleValues[]>([
    scheduleInitialValues,
  ]);
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: scheduleInitialValues,
    validationSchema: scheduleSchema,
    onSubmit: values => {
      console.log(values);
    },
  });
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    const date = new Date(dateValue);
    if (!isNaN(date.getTime())) {
      return format(date, 'yyyy-MM-dd');
    } else {
      console.log('Invalid date');
    }
  };

  return (
    <Fragment>
      <div className='w-full h-[50px] flex items-center justify-end mb-3'>
        {/* sites dropdown */}

        <DropDowns
          key={'sites'}
          width={120}
          height={36}
          src={arrowDown}
          mock={sites}
          title='Sites'
          search={false}
        />

        {/* jobs dropdown */}
        <DropDowns
          key={'jobs'}
          src={arrowDown}
          width={120}
          height={36}
          mock={jobs}
          title='Jobs'
          search={false}
        />
        {/* months */}

        <DropDowns
          key={'months'}
          width={120}
          height={36}
          src={arrowDown}
          mock={months}
          title='Months'
          search={false}
        />
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <Dialog
              key={'new shift'}
              open={open}
              onOpenChange={setOpen}
            >
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
                    key={'user data'}
                    width={552}
                    height={42}
                    src={arrowDown}
                    mock={[]}
                    title='Select'
                    search={true}
                    userData={userData}
                  />
                  {/* here comes the selected */}
                  {formik.errors.user ? (
                    <p className='text-red-500 text-[12px] font-inter font-medium'>
                      {JSON.stringify(formik.errors.user)}
                    </p>
                  ) : (
                    <div className='flex items-center justify-star'>
                      <Avatar className='h-[58px] w-[58px]'>
                        <AvatarImage src={formik.values.user.picture.large} />
                        {/* <AvatarFallback>CN</AvatarFallback> */}
                      </Avatar>
                      <p className='font-inter ml-2 mt-5 mb-5 font-medium text-neutralGrey'>
                        {formik.values.user.name.first +
                          ' ' +
                          formik.values.user.name.last}
                      </p>
                    </div>
                  )}
                  <div className='grid grid-cols-1 items-center gap-1'>
                    <Label
                      htmlFor='date'
                      className='font-inter font-medium text-[14px] text-searchColor '
                    >
                      Date
                    </Label>
                    <Input
                      id='date'
                      type='date'
                      name='start'
                      // name='scheduleStart'
                      // value={values.scheduleStart}
                      onChange={e => {
                        formik.setFieldValue('start', handleDateChange(e));
                      }}
                      onBlur={formik.handleBlur}
                      className='col-span-3 w-[268px] h-[42px]'
                    />

                    <p className='text-red-500 text-[12px] font-inter font-medium'>
                      {formik.errors.start}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 items-center gap-4'>
                    <div className='grid grid-cols-2 items-center gap-1'>
                      <Label
                        htmlFor='scheduleStart'
                        className='font-inter font-medium text-[14px] text-searchColor '
                      >
                        Schedule Start
                      </Label>
                      <Input
                        id='scheduleStart'
                        type='date'
                        // name='scheduleStart'
                        // value={values.scheduleStart}
                        onChange={e => {
                          formik.setFieldValue(
                            'scheduleStart',
                            handleDateChange(e),
                          );
                        }}
                        onBlur={formik.handleBlur}
                        className='col-span-3 w-[268px] h-[42px]'
                      />
                      <p className='text-red-500 text-[12px] font-inter font-medium'>
                        {formik.errors.scheduleStart}
                      </p>
                    </div>
                    <div className='grid grid-cols-2 items-center gap-1'>
                      <Label
                        htmlFor='scheduleEnd'
                        className='font-inter font-medium text-[14px] text-searchColor '
                      >
                        Schedule End
                      </Label>

                      <Input
                        id='scheduleEnd'
                        type='date'
                        name='scheduleEnd'
                        // value={values.scheduleEnd}
                        onChange={e => {
                          formik.setFieldValue(
                            'scheduleEnd',
                            handleDateChange(e),
                          );
                        }}
                        onBlur={formik.handleBlur}
                        className='col-span-3 w-[268px] h-[42px]'
                        placeholder='e.g. 17:00 or 5pm or 17'
                      />
                      <p className='text-red-500 text-[12px] font-inter font-medium'>
                        {formik.errors.scheduleEnd}
                      </p>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name='site'
                    />
                    <p className='text-red-500 text-[12px] font-inter font-medium'>
                      {formik.errors.site}
                    </p>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name='job'
                    />
                    <p className='text-red-500 text-[12px] font-inter font-medium'>
                      {formik.errors.job}
                    </p>
                  </div>
                </div>
                <DialogFooter className='flex sm:items-center sm:justify-center w-full h-auto'>
                  <Button
                    onClick={() => setOpen(false)}
                    className='bg-white w-[272px] h-[36px] text-sideBarBlue hover:bg-white hover:text-sideBarBlue'
                  >
                    Cancel
                  </Button>
                  <Button
                    type='submit'
                    disabled={disabled}
                    onClick={() => {
                      (async () => {
                        const errors = await formik.validateForm();
                        if (Object.keys(errors).length === 0) {
                          // No errors, proceed with custom logic
                          formik.handleSubmit(); // Set submitting state to true

                          setDisabled(true);

                          setTimeout(() => {
                            toast('Shift has been created');
                            setDisabled(false);
                            setOpen(false);
                            formik.resetForm();
                            setEvents(events => [
                              ...events,
                              { ...formik.values },
                            ]);
                          }, 2000);
                        } else {
                          console.log(errors);
                        }
                      })();

                      // console.log(values);
                    }}
                    className='w-[272px] h-[36px] text-white rounded-lg font-inter font-medium bg-sideBarBlue hover:bg-sideBarBlue hover:text-white'
                  >
                    Assign
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Form>
        </FormikProvider>
      </div>
      <div
        className='flex 
      '
      >
        <FormikProvider value={formik}>
          <div className=' mt-[47.5px] w-[194px] '>
            <SearchBox
              width={194}
              height={1836}
              event={false}
              userData={userData}
            />
          </div>
          <div className='flex-1 mt-4  overflow-y-auto'>
            <ReactCalendar events={events} />
          </div>
        </FormikProvider>
      </div>
    </Fragment>
  );
};

export default ScheduleView;

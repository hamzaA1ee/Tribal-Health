import { Fragment } from 'react';

//View Imports
import ScheduleView from '@/views/Dashboard/Schedule';
import { IUserResponse } from '@/types/Interfaces/schedule.interface';

//UI IMports

export default async function Schedule() {
  const data: IUserResponse = await fetchUser();

  return (
    <Fragment>
      <ScheduleView userData={data} />
    </Fragment>
  );
}

const fetchUser = async () => {
  const userData = await fetch('https://randomuser.me/api/?results=40');
  if (!userData.ok) throw new Error('Failed to fetch users');
  const data: IUserResponse = await userData.json();
  return data;
};

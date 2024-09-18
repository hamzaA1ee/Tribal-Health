import { scheduleValues } from '@/types/Interfaces/schedule.interface';

export const scheduleInitialValues: scheduleValues = {
  user: {
    id: {
      value: '',
    },
    name: {
      first: '',
      last: '',
    },
    picture: {
      large: '',
      medium: '',
    },
  },
  scheduleStart: '',
  scheduleEnd: '',
  start: '',
  job: '',
  site: '',
};

import { object, string, date } from 'yup';

export const scheduleSchema = object({
  user: object({
    id: object({ value: string().required('id is required') }),
    name: object({
      first: string().required('first name is required'),
      last: string().required('last name is required'),
    }),
    picture: object({
      large: string().required('large image size is required'),
      medium: string().required('medium image size is required'),
    }),
  }),

  start: date().required('date is required'),
  scheduleStart: date().required('schedule start date is required'),
  scheduleEnd: date().required('schedule end date is required'),
  site: string().required('site is required'),
  job: string().required('job is required'),
});

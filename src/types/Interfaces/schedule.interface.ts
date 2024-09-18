export interface ISchedule {
  className: string;
}

export interface IUser {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
    large: string;
  };
}

export interface IUserResponse {
  results: IUser[];
}

export interface IEventInfo {
  timeText: string;
  event: {
    title: string;
    start: Date;
  };
}

export interface scheduleValues {
  user: IUser;
  scheduleStart: string;
  scheduleEnd: string;
  start: string;
  job: string;
  site: string;
}

export interface IEvent {
  user: IUser;
  eventInfo: IEventInfo;
}

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

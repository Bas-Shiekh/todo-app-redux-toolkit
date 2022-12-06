interface IuserDate {
  username: string;
  password: string;
  remember: boolean;
}

interface Itodo {
  todo: string;
  index: number;
}

export type { IuserDate, Itodo };

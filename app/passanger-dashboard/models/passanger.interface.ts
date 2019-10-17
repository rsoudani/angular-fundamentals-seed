export interface Passenger {
  id: number;
  name: string;
  checkedIn: boolean;
  children?: Child[];
}

export interface Child {
  name: string,
  age: number;
}

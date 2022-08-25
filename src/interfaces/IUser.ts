import { Optional } from 'sequelize';

export interface IUser<T> {
  id: T;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  healthId: T;
  active: boolean;
  rule: string;
}

export interface IUserInput extends Optional<IUser<number>, 'id'> {};
export interface IUserOutput extends Required<IUser<number>> {};

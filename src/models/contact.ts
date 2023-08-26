import { GENDER } from '../constants';

export type Gender = (typeof GENDER)[number];

export interface Contact {
  id: string;
  age: number;
  name: string;
  gender: Gender;
  company: string;
  email: string;
  photo: string;
}

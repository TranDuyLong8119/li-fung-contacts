import { Gender } from './contact';

export interface FilterParam {
  nameLike: string;
  gender?: Gender;
}

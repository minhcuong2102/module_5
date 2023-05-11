import {TypeBds} from './type';
import {CategoryBds} from './categoryBds';

export interface Bds {
  id?: number;
  title?: string;
  type?: TypeBds;
  category?: CategoryBds;
  date?: string;
  status?: string;
  region?: string;
  name?: string;
  address?: string;
  area?: number;
  direction?: string;
  content?: string;
  price?: number;
}

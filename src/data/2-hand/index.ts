import { Item } from '@/src/interfaces/Item';
import { crossbows } from './crossbows';
import { maces } from './maces';
import { bows } from './bows';
import { axes } from './axes';

export const twoHandItems:Item[] = [
  ...crossbows,
  ...maces,
  ...axes,
  ...bows,
]
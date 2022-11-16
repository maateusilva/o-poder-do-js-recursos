import { SvgXml } from 'react-native-svg';

import { markup } from './markup';

export function Empty() {
  return <SvgXml xml={markup} />;
}

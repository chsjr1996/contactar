import ziggyRoute from 'ziggy-js';
import { Ziggy } from '@Root/ziggy';

export default function route(name: string, params?: any, absolute?: boolean) {
  return ziggyRoute(name, params, absolute, Ziggy);
}

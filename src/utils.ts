import _ from 'lodash';
import dayjs from 'dayjs';
import axios from 'axios';

export function sayHello(name: string): string {
  const time = dayjs().format('YYYY-MM-DD HH:mm');
  return _.upperFirst(`hello ${name}, current time is ${time}`);
}

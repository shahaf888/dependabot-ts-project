#!/usr/bin/env ts-node

import { sayHello } from './utils';

const name = process.argv[2] || 'world';
console.log(sayHello(name));

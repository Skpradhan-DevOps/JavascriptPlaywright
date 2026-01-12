import config, { BASE_URL } from './config';

console.log(BASE_URL);         // Output: https://example.com
console.log(config.retries);   // Output: 2

import { add, PI } from './mathUtils';

console.log(add(5, 3));     // Output: 8
console.log(PI);

import { multiply as mul } from './mathUtils';

console.log(mul(4, 5)); // Output: 20   
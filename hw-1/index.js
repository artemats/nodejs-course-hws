import { loadEnv } from './utils/loadEnv.js';
loadEnv();

import { router } from './router/router.js';

const args = process.argv.slice(2);

router(args);

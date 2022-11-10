'use strict';

const coreServer = require('..');
const assert = require('assert').strict;

assert.strictEqual(coreServer(), 'Hello from coreServer');
console.info("coreServer tests passed");

'use strict';

const coreWeb = require('..');
const assert = require('assert').strict;

assert.strictEqual(coreWeb(), 'Hello from coreWeb');
console.info("coreWeb tests passed");

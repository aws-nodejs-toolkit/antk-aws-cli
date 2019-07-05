# AWS Node.js Toolkit - AWS CLI
A tiny wrap around the AWS CLI, which runs any command as a promise.

Easily integrates with node task runners (e.g.: npm and gulp) due to its promise interface.
## Prerequisites
You must have the AWS CLI installed and have its executable added to your path
## Usage

```js
// import
import { cli } from '@aws-toolkit/cli'

// require
const { cli } = require('@aws-toolkit/cli');

const args = [
    'deploy',
    '--template-file', '<value>',
    '--stack-name', '<value>'
];

cli('cloudformation', args);
```

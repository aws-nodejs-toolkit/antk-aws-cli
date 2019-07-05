# AWS Node.js Toolkit - AWS CLI
A tiny wrap around the AWS CLI, which runs any command as a promise.

Easily integrates with node task runners (e.g.: npm and gulp) due to its promise interface.
## Prerequisites
You must have the AWS CLI installed and have its executable added to your path
## Usage
You can execute all commands available from your AWS CLI version
```js
// import
import { cli } from '@aws-toolkit/aws-cli'

// require
const { cli } = require('@aws-toolkit/aws-cli');

const args = [
    'deploy',
    '--template-file', '<value>',
    '--stack-name', '<value>'
];

cli('cloudformation', args);
```

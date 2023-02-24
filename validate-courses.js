'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('_site/courses.json');
let student = JSON.parse(rawdata);
console.log(student);
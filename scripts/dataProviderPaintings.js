const path = require('path');
const fs = require('fs');

const json_path_paintings = path.join(__dirname, '../data', 'paintings-nested.json');
const json_painting_data = fs.readFileSync(json_path_paintings, 'utf8');

const painting_data = JSON.parse(json_painting_data);

module.exports = painting_data;
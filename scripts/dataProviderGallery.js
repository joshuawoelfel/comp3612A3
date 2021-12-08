const path = require('path');
const fs = require('fs');

const json_path_galleries = path.join(__dirname, '../data', 'galleries.json');
const json_gallery_data = fs.readFileSync(json_path_galleries, 'utf8');

const gallery_data = JSON.parse(json_gallery_data);

module.exports = gallery_data;
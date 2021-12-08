const path = require('path');
const fs = require('fs');

const json_path_artists = path.join(__dirname, '../data', 'artists.json');
const json_artist_data = fs.readFileSync(json_path_artists, 'utf8');

const artist_data = JSON.parse(json_artist_data);

module.exports = artist_data;
const express = require('express');
const app = express();

const router = require('./scripts/router.js');
router.handleAllPaintings(app);
router.handlePaintingId(app);
router.handlePaintingsByGallery(app);
router.handlePaintingsByArtist(app);
router.handlePaintingsByYear(app);
router.handlePaintingsByTitle(app);
router.handlePaintingsByColor(app);
router.handleAllArtists(app);
router.handleArtistsByCountry(app);
router.handleAllGalleries(app);
router.handleGalleryByCountry(app);


let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server running at port = " + port);
});
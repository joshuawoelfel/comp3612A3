
const data_p = require('./dataProviderPaintings.js');
const data_a = require('./dataProviderArtists.js');
const data_g = require('./dataProviderGallery.js');

const handleAllPaintings = app => {
    app.get('/paintings', (req, resp) => {resp.json(data_p)});
}

const handlePaintingId = app => {
    app.get('/painting/:id', (req, resp) => {
        const match = data_p.find(p => p.paintingID == req.params.id);
        if (match !== undefined) {
            resp.json(match);
        } else 
            resp.json({"message" : "no painting for provided id"});
    });
}

const handlePaintingsByGallery = app => {
    app.get('/painting/gallery/:id', (req, resp) => {
        const matches = data_p.filter(p => p.gallery.galleryID == req.params.id);
        if (matches.length > 0) {
            resp.json(matches);
        } else 
            resp.json({"message" : "no painting for provided gallery id"});
    });

}

const handlePaintingsByArtist = app => {
    app.get('/painting/artist/:id', (req, resp) => {
        const matches = data_p.filter(p => p.artist.artistID == req.params.id);
        if (matches.length > 0) {
            resp.json(matches);
        } else 
            resp.json({"message" : "no painting for provided artist id"});
    });
}

const handlePaintingsByYear = app => {
    app.get('/painting/year/:min/:max', (req, resp) => {
        const matches = data_p.filter(p => p.yearOfWork > req.params.min && p.yearOfWork < req.params.max);
        if (matches.length > 0) {
            resp.json(matches);
        } else 
            resp.json({"message" : "no painting in provided date range"});
    });
}

const handlePaintingsByTitle = app => {
    app.get('/painting/title/:text', (req, resp) => {
        const matches = data_p.filter(p => p.title.toLowerCase().includes(req.params.text.toLowerCase()));
        if (matches.length > 0) {
            resp.json(matches);
        } else 
            resp.json({"message" : "no painting for provided title"});
    });
}

const handlePaintingsByColor = app => {
    app.get('/painting/color/:name', (req, resp) => {
        const matches = data_p.filter(p => p.details.annotation.dominantColors.filter(color => color.name.toLowerCase() == req.params.name.toLowerCase()).length > 0);    
        if (matches.length > 0) {
            resp.json(matches);
        } else 
            resp.json({"message" : "no painting with provided color"});
    });
}

const handleAllArtists = app => {
    app.get('/artists', (req, resp) => {resp.json(data_a)});
}

const handleArtistsByCountry = app => {
    app.get('/artists/:country', (req, resp) => {
        const matches = data_a.filter(a => a.Nationality.toLowerCase() == req.params.country.toLowerCase());
        if (matches.length > 0) {
            resp.json(matches);
        } else 
            resp.json({"message" : "no artist from provided country"});
    });
}

const handleAllGalleries = app => {
    app.get('/galleries', (req, resp) => {resp.json(data_g)});
}

const handleGalleryByCountry = app => {
    app.get('/galleries/:country', (req, resp) => {
        const matches = data_g.filter(g => g.GalleryCountry.toLowerCase() == req.params.country.toLowerCase());
        if (matches.length > 0) {
            resp.json(matches);
        } else 
            resp.json({"message" : "no artist from provided country"});
    });
}



module.exports = {
    handleAllPaintings,
    handlePaintingId, 
    handlePaintingsByGallery, 
    handlePaintingsByArtist,
    handlePaintingsByYear,
    handlePaintingsByTitle,
    handlePaintingsByColor,
    handleAllArtists,
    handleArtistsByCountry,
    handleAllGalleries,
    handleGalleryByCountry
};
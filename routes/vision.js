/*
this is just a simple class for the vision thing.
everything that the vision route will ask for is what
we will give to the user and all that it entails
to be called by the req client.
*/
var express = require('express'),
    router = express.Router();

router
    .get("/", function (req, res) {
        res.render("vision");
    })



module.exports = router;

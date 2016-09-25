/*
this is just a simple class for the cv thing.
everything that the cv route will ask for is what
we will give to the user and all that it entails
to be called by the req client.
*/
var express = require('express'),
    router = express.Router();
    var fs = require('fs');

router
    .get("/", function (req, res) {
        res.render("cv")
    })
    .get("/pdf_version", function (req, res) {
        pdf = __dirname + "/pdf_version.pdf";
        res.download(pdf);
    })



module.exports = router;

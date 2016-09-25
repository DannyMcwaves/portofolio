/*
this is just a simple class for the skills thing.
everything that the skills route will ask for is what
we will give to the user and all that it entails
to be called by the req client.
*/
var express = require('express'),
    router = express.Router(),
    fs = require("fs"),
    read = fs.readFileSync;

function format(data) {
    return data.replace(/(\b\n\b)|(\n)/g, "<br>").replace(/\s{6,8}/g, "<span class='p-l-3'>").replace(/\s{4,6}/g, "<span class='p-l-2'>").replace(/\s{2,4}/g, "<span class='p-l-1'>");
}

// console.log(fs.readFileSync("./routes/rational.py"));
var pydata = format(read("./routes/notes.py").toString());
var nodedata = format(read("./routes/handler.js").toString());
var jsdata = format(read("./routes/myQuery.js").toString());
var mkdata = format(read("./index/index.css").toString());


router
    .get("/", function (req, res) {
        res.render("skills");
    })
    .get("/py", function (req, res) {
        res.send(pydata);
    })
    .get("/node", function (req, res) {
        res.send(nodedata);
    })
    .get("/jscript", function (req, res) {
        res.send(jsdata);
    })
    .get("/markup", function (req, res) {
        res.send(mkdata)
    })


module.exports = router;

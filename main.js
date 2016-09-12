/*
	okay, okay, okay and this is all the module of the web thing i am trying so hard to create
	and then i will name third one the app thing for me to be able to get the rest of the webpage up
	running from the scratch to the top.
*/

var express = require("express"),
	path = require("path"),
	logger = require("morgan"),
	app = express(),
	body_parser = require("body-parser"),
	cookie_parser = require("cookie-parser"),
	routes = require("./routes"),
	cv = require("./routes/cv"),
	skills = require("./routes/skills"),
	projects = require("./routes/projects"),
	vision = require("./routes/vision");

// this are the various settings for the various for my
// nodejs web server applications. very simple and rather succint.
app.set("views", path.join(__dirname, 'views'));
app.set("appName", "my_portofolio");
app.set("env", "development");
app.set("x-powered-by", false);
app.set("view cache", false);
app.set("view engine", 'pug');
app.locals = {
	author: "Danny Mcwaves",
	title: "myPortofolio"
};


// also i need to setup this middleware thingies real soon.
app.use(body_parser.urlencoded({limit: 10000, extended: true, strict: true}));
app.use(body_parser.json());
app.use(cookie_parser())
app.use(logger("dev"));

// and this is for serving the static files on the server.
app.use("/", express.static("./index"));
app.use("/fonts", express.static("./fonts"));
app.use("/images",  express.static("./images"));
app.use("/js", express.static("./js"));
app.use("/css", express.static("./css"));
app.use("/cv", cv);
app.use("/skills", skills);
app.use("/projects", projects);
app.use("/vision", vision);


app.get("*", function (req, res) {
	res.redirect("/");
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

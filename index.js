var express = require('express'),
    app = express(),
    appLoc = __dirname + '/app',
    port = 3000;

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(appLoc));
    app.use(app.router);
});


app.get('*', function(req, res) {
    res.sendfile(appLoc+'/index.html'); // Serve index.html (gotta catch 'em all)
});

app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});

module.exports = app;
var express = require ( 'express' );

// Create our app
var app = express ();
const PORT = process.env.PORT || 5000;//heroku te to 5000 port e always cholbena..
//tai port specify kore dilam or 5000 port e cholbe..

app.use ( function ( request, response, next ) {
    /*.......This part is for Deploying our app to heroku......
    * amader app ta http te chole.. https e run hobena..
    *tai check korbo jodi http thake tahole next() e agabo..
    * ar jodi https thake tahole take redirect kore http kore dibo...
    * */
    if (request.headers[ 'x-forwarded-proto' ] === 'http') {
        next ();
    }
    else {
        response.redirect('http://' + request.hostname + request.url);
    }
} );

app.use ( express.static ( 'public' ) );

app.listen ( PORT, function () {
    console.log ( 'Express server is up on port ' + PORT );
} );

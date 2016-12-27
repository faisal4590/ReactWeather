var React = require ( 'react' );
var ReactDOM = require ( 'react-dom' );
var {Route, Router, IndexRoute, hashHistory} = require ( 'react-router' );

//Main.jsx component ke nicci
var Main = require ( 'Main' );

//weather component ke nici
var Weather = require ( 'Weather' );

//about component ke nicci
var About = require ( 'About' );

//examples component ke nici
var Examples = require('Examples');

ReactDOM.render (
    <Router history={hashHistory}>
        {/* ........This comment is for hasHistory.........
        hasHistory use korar karon holo ami chai je
        route theke onno kono route e gele page refresh korleo
        jate state ta mone rakhe je last kothay cilam..
        url e / er por kisu garbage lekha ashe.. oitai ei hasHistory*/}
        <Route path="/" component={Main}>

            {/*  ..........This comment is for component={Main} this line...........
             eta hocce amar Route.. user 1page theke arek page e
             je jabe seta Route die jay.. "/" mane eta hocce amr root of the application..
             project er picture e dekhci app er root e je component ota red box dewa
             mane holo ota whole container component.. ei component tai seta..*/}
            <Route path="about" component={About}/>
            {/* ..........This comment is for component={About} this line.........
             Route jodi '/' hoy tahole tahole component={weather} mane
             weather component ke render korbo.. jodi '/about' hoy tahole
             about component ke render korbo.. so nested routing korlam ekhane..
             */}
             <Route path="examples" component={Examples}/>

            <IndexRoute component={Weather}/>
            {/* ..........This comment is for component={Weather} this line.........
             indexRoute hocce amar app er index page..*/}



        </Route>
    </Router>,
    document.getElementById ( 'app' )
);

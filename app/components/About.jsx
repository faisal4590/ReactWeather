var React = require ( 'react' );

/*var About = React.createClass ( {
 render: function () {
 return (
 <h3>About Component</h3>
 );
 }
 } );*/

var About = ( props ) => {
    return (
        <div>
            <h1 className="text-center page-title">About the App</h1>
            <p>
                This is a simple weather application
                in which we can get the current temperature
                of any city or area by searching their name.
                This is version 1.0.0 . Further update may come in later.
            </p>
            <p>
                Here you can see other projects of mine :
            </p>
            <ul>
                <li>
                    <a href="http://books.matrixmp3bd.com/" target="_blank">
                        Online Book Store
                    </a>
                </li>
            </ul>


        </div>

    );
};
/* ........This is comment  for above uncommented part
 * jodi amr component emon hoy jetar moddhe just render
 * function ace and jetay  kono state nai , just presentational component hisabe kaj
 * kortece erokom jaygay arrow function use korte parbo...
 * */


module.exports = About;
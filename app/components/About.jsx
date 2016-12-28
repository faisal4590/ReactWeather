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
            <h3>About Component</h3>
            <p>Welcome to about page</p>
        </div>

    );
};
/* ........This is comment  for above uncommented part
 * jodi amr component emon hoy jetar moddhe just render
 * function ace and jetay  kono state nai , just presentational component hisabe kaj
 * kortece erokom jaygay arrow function use korte parbo...
 * */


module.exports = About;
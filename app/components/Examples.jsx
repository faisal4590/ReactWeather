var React = require ( 'react' );

/*var Examples = React.createClass ( {
 render: function () {
 return (
 <div>
 <h2>Examples Component</h2>
 </div>
 );
 }
 } );*/

var Examples = ( props ) => {
    return (
        <div>
            <h2>Examples Component</h2>
        </div>
    )
};
/* ........This is comment  for above uncommented part
 * jodi amr component emon hoy jetar moddhe just render
 * function ace and jetay  kono state nai , just presentational component hisabe kaj
 * kortece erokom jaygay arrow function use korte parbo...
 * */

module.exports = Examples;
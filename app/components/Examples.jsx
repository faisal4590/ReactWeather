var React = require ( 'react' );

var {Link} = require ( 'react-router' );


/*var Examples = React.createClass ( {
 render: function () {
 return (
 <div>
 <h2>Examples Component</h2>
 </div>
 );
 }
 } );*/

var Examples = () => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are are a few example locations to try out : </p>
            <ol>
                <li>
                    <Link to="/?location=Dhaka">Dhaka</Link>
                </li>
                <li>
                    <Link to="/?location=Chittagong">Chittagong</Link>
                </li>
            </ol>

            {/*
             egula hocce 2ta example location jegulate click korle temp show korbe ei 2ta area er..
             Link e click korle url eo Dhaka location i dekhabe .. sejonno url e
             specify kore dilam.. and result dekhabe home page e..
             tai / er por location likhlam...
             */}

        </div>
    )
};
/* ........This is comment  for above uncommented part
 * jodi amr component emon hoy jetar moddhe just render
 * function ace and jetay  kono state nai , just presentational component hisabe kaj
 * kortece erokom jaygay arrow function use korte parbo...
 * */

module.exports = Examples;
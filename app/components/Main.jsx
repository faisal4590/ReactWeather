var React = require ( 'react' );
var Nav = require ( 'Nav' );

/*var Main = React.createClass ( {
 render: function () {
 return(
 <div>
 <Nav/>
 <h2>Main Component </h2>
 {this.props.children}
 {/!*image er structure onujayi amr sobar upore thakbe navbar
 then thakbe tar niche thakbe component jegula hocce container component
 er children.. tai evabe likhlam..*!/}
 </div>

 );
 }
 } );*/

var Main = ( props ) => {
    return (
        <div>
            <Nav/>
            <h2>Main Component </h2>
            {props.children}
            {/* image er structure onujayi amr sobar upore thakbe navbar
             then thakbe tar niche thakbe component jegula hocce container component
             er children.. tai evabe likhlam..*/}
        </div>

    );
};

module.exports = Main;


// component er name ar page er name same rakhbo always

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
            <div className="row">
                {/*
                 ekhane styling class apply korlam karon ekhane
                 props.children specify korano.. so ekhane je style
                 dicci seta sob page e style hye jabe ekbare....
                 mainly bootstrap er moto kore kon device er jonno kirokom
                 hbe seta specify kore dilam... small-centered mane sob
                 devise er jonnoi center e thakbe text gula...
                 */}
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                    {/* image er structure onujayi amr sobar upore thakbe navbar
                     then thakbe tar niche thakbe component jegula hocce container component
                     er children.. tai evabe likhlam..*/}
                </div>
            </div>


        </div>

    );
};

module.exports = Main;


// component er name ar page er name same rakhbo always

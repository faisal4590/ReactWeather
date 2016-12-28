var React = require('react');

/*var WeatherMessage = React.createClass ( {
    render: function () {
        var {temp,location} = this.props;
        return (
            <div>
                <h3>It is {temp} degree celsius  in {location}.</h3>
            </div>
        );
    }
} );*/

var WeatherMessage = (props) => {
    /*
    * ekhane normal code e props er use cilo..
    * tai parameter e props dewa lage..
    * as parameter e already props dewa
    * tai ar niche var {temp, location} = this.props na likhe
    * var {temp, location} = props; just eta likhlam...
    * */
    var {temp, location} = props;
    return (
        <div>
            <h3>It is {temp} degree celsius  in {location}.</h3>
        </div>
    );
};


//aro shorter lekhar system

var WeatherMessage = ({temp, location}) => {
    /*
    * es6 destructuring format use korlam..
    * */
    /* var {temp, location} = props;*/
    //tahole ar props use kora lagtecena....
    return (
        <div>
            <h3 className="text-center">It is {temp} degree celsius  in {location}.</h3>
        </div>
    );
};

module.exports = WeatherMessage;
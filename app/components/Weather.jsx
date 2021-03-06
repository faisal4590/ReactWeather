var React = require ( 'react' );
var WeatherForm = require ( 'WeatherForm' );
var WeatherMessage = require ( 'WeatherMessage' );
var openWeatherMap = require ( '../api/openWeatherMap' );
var ErrorModal = require ( 'ErrorModal' );

var Weather = React.createClass ( {
    getInitialState: function () {
        return {
            /*location: 'Dhaka city',
             temp: 34*/


            /* ........This comment is for why we will use isLoading property : .........

             now initial state e 1ta loading property dibo..
             then search korle loading disable kore dbo.. search ses
             hole abar loading enable kore dibo..

             */

            isLoading: false //initially loading thakbena kono


        }
    },

    handleSearch: function ( location ) {
        /*this.setState({
         location : location,
         temp : 23
         });*/
        var that = this;

        //debugger;
        /*........This is comment for debugger.......
         eta react er 1ta default feature.. eta likhe
         and jodi react developer tools open thake tahole
         code execute howar somoy automatic ei jaygay code
         asle code pause hye thakbe.. then amra ei jaygar state , component,
         props er value sob check korte parbo...

         * */


        this.setState ( {
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        } );
        //jokhn search korbe tokhn loading hobe...tai ekhane
        //true kore dilam...

        openWeatherMap.getTemp ( location ).then ( function ( temp ) {
            that.setState ( {
                /* //kono function er moddhe this use korte partam na..
                 //tai 1ta variable e nie then use korlam...*/
                location: location,
                temp: temp,
                isLoading: false
                /*.........This comment is for why we use isLoading :false here .........
                 ekhane isLoading add korlam karon kono city er name die
                 enter dewar por dekhlam je always is fetching data lekha ta uthe thake..
                 tar karon holo render e ami isLoading true kore dicilm.. but data fetch kore
                 die dewar por isLoading false hocce na kokhno... tai ekhane jehetu data return kore
                 dicce tai ekhane isLoding false die dilam...
                 */

            } );
        }, function ( e ) {

            that.setState ( {
                isLoading: false,
                errorMessage: e.message
            } );
            /*..........This comment is for why we use isLoading : false here ..............
             ekhaneo isLoading false dilam karon similary kono error paile setake
             alert box e display korar poro fetching data uthei thake caz isLoading false hocce na
             */


            //alert ( errorMessage );
        } );

    },

    componentDidMount: function () {
        var location = this.props.location.query.location;
        /*
         * example page e query string e location=dhaka select kore dicilam..
         * now sei query string take catch korte hbe.. component er onek props
         * er moddhe query o 1ta prop.. eta use kore url er location take location var e nilam..
         *
         * */

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
            /*
             * example er weather search kora hye gele
             * url theke location take remove kore dilam..
             * */
        }


    },
    componentWillReceiveProps: function (newProps) {

        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';

        }
    },

    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {

            //debugger;

            if (isLoading) {
                return <h3 className="text-center">Fetching weather....</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;

            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {/* <WeatherMessage temp={temp} location={location}/>*/}
                {/*.......This comment is for WeatherForm and WeatherMessage component........
                 image ta dekhle dekhte pabo je Weather ta hocce kalo border wala wrapper..
                 er moddhe 1ta input field thakbe and getWeather e click korle niche 1ta message dekhabe
                 je weather koto.. sejonno ei component e nested korlam ei 2take....*/}

                {renderMessage ()}
                {/*.........This comment is about why we commented out the weatherMessage Component and
                 ............  why we add renderMessage().............................
                 amke dorkar 1ta function er moddhe 2ta condition check kora..
                 jodi isLoading true thake mane loading hobe ekhn, tokhn loading message ta show korano..
                 else jodi loading false hoy mane loading ses, tokhn temp ar location ke WeatherMessage component
                 er maddhome render kore show korano... ejonno 1ta function er moddhe nie function take call korllamm..
                 as eta jsx expression tai {} er moddhe funtion name take likhlam...evabe dorkar hole
                 function er moddheo component nie kaj korte parbo....

                 */}

                {renderError ()}
            </div>


        );
    }
} );

module.exports = Weather;
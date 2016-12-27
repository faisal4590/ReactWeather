var axios = require ( 'axios' );
/*..... This comment is for what is axios and why and how we use it .....
 axios plugin ta die weather information fetch kore anbo..
 tai age terminal e npm install axios --save command ta
 chalay nici.. Now axios er feature gulake axios
 var e nie nilam.. now use korte parbo..
 */

//ab59d47d829b573e13775451679f3f7f
//this is the API key from openweathermap.org..
//sign up korle then api key nite parbo....


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=ab59d47d829b573e13775451679f3f7f&units=metric';
//this is the naming convention of using const in es6
//units=metric add korlam karon by default temp ashe kelvin e.. now eta add koray celsius e ashbe..
//units = imperial use korle temp farenhite e asto....


module.exports = {
    getTemp: function ( location ) {
        var encodedLocation = encodeURIComponent ( location );
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        /* .........This comment is for encodedLocation and requestUrl variables.........
         eta es6 er new feature.. etake bole template string.. eta die 1ta variable er moddhe arekta variable string
         akare use korte parteci...bar bar string concat kore use kora jhamela.. `` ei symbol ta ace 1 er bam e..
         encodeURIComponent() use korlam karon browser e jokhn amra space likhi tokhn seta automatic
         %20% te convert kore ney. seta jate amr url e na kore sejonno eta use korlam...caz user location er name
         Dhaka city likhte pare... majhe 1ta space ace.. but browser setake %20% te convert kore nito...
         */

        return axios.get ( requestUrl ).then ( function ( response ) {
            /*axios.get() use kore url ke catch korlam.. now promise
             er mto ekhaneo 2ta case hote pare.. success and error..
             2takei response varibale e nibo...
             eta 1ta promise. so promise mane success/failure return korbe..
             sejonno return dilam...
             */

            //debugger;

            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);

            }
            else
            {
                return response.data.main.temp;
            }


        }, function ( response ) {
            throw new Error ( response.data.message );
            // jodi error ase tahole ki type er error seta throw korlam...

        } );
    }
}

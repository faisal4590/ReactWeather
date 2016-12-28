var webpack = require('webpack');


module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
        /*
        * age jquery ar foundation load kore nilam..
        * now app.jsx load korle styling kaj korbve...
        *
        * */
    ],
    externals: {
        jquery : 'jQuery'
    },
    plugins : [
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery'
            /*
            *etar mane holo jokhni amr js file e ami
            * $ sign dekhte parbo tokhni jquery load kore dibo
            * oi file e.. bar bar script file ar add kora lagtecena..
             *  */
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm : 'app/components/WeatherForm.jsx',
            WeatherMessage : 'app/components/WeatherMessage.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            openWeatherMap : 'app/api/components/openWeatherMap.jsx'



        },
        extensions: [ '', '.js', '.jsx' ]
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015', 'stage-0' ]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool : 'cheap-module-eval-source-map'
};

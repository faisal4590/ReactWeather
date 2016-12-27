var React = require ( 'react' );

var {Link, IndexLink} = require ( 'react-router' );
//nav er element gulake linkup korabo.. tai ei
//library ta nilam

/*var Nav = React.createClass ( {
    render: function () {
        return (
            <div>
                <h2>Nav Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
                {/!*   ........this comment is for why we use IndexLink........
                 App.jsx file e gele dekhbo Main component er under e
                 baki route gulake nested kora.. sejonno IndexRoute ta always i active thake
                 onno kono route e visit korleo/... eta alada korar jonno root component orthat
                 jetake sob page ei rakhte chai sei route ke IndexLink kore dibo just..
                 ekhn ar nav e getWeather always bold hoye thakbena..
                 *!/}


                <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About </Link>
                {/!*'/' e gele home page e jabo.. '/about'
                 e gele About page e jabo...*!/}
                <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples </Link>
                {/!*.......This comment is for activeClassName="active" .............
                 protitay activeClassName="active" use korlam karon
                 ami suppose Example page e aci.. oi page e just Example link tai
                 active thakbe nav e.. tai sobguatei eta add korci...*!/}

                {/!*........ This comment is for activeStyle={{fontWeight:'bold'}}...........
                 activeStyle={{fontWeight:'bold'}} hocce jsx expression for applying inline styling*!/}
            </div>

        );
    }
} );*/

var Nav = () =>{
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
             {/* ........this comment is for why we use IndexLink........
                App.jsx file e gele dekhbo Main component er under e
                baki route gulake nested kora.. sejonno IndexRoute ta always i active thake
                onno kono route e visit korleo/... eta alada korar jonno root component orthat
                jetake sob page ei rakhte chai sei route ke IndexLink kore dibo just..
                ekhn ar nav e getWeather always bold hoye thakbena..*/}



            <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About </Link>
            {/*'/' e gele home page e jabo.. '/about'
                e gele About page e jabo...*/}
            <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples </Link>
            {/*.......This comment is for activeClassName="active" .............
                protitay activeClassName="active" use korlam karon
                ami suppose Example page e aci.. oi page e just Example link tai
                active thakbe nav e.. tai sobguatei eta add korci...*/}

            {/* ........ This comment is for activeStyle={{fontWeight:'bold'}}...........
             activeStyle={{fontWeight:'bold'}} hocce jsx expression for applying inline styling*/}
        </div>

    );
};

module.exports = Nav;
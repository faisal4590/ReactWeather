function getTempCallback ( location, callback ) {
    callback ( undefined, 78 );
    callback ( 'City not found' );
}

getTempCallback ( 'Dhaka', function ( error, temperature ) {
    if (error) {
        console.log ( 'error', error );
    }
    else {
        console.log ( 'Success', temperature );
    }
} );

/*
 uporer ta hocce 1ta callback function... error ar temperature 2takei call korci..
 now terminal e node example-promise.js run korle lekha dekhabe
 Success 78
 error City not found

 eksathe success and fail 2tai hocce.. but eta kono logic holona..
 tai erokom jaygay promise use korbo jeta es6 er 1ta feature..*/


//example of promise
function getTempPromise ( location ) {
    return new Promise ( function ( resolve, reject ) {
        setTimeout ( function () {
            //uporer normal js callback return korar por then 1sec por ei 2ta run korbe..

            resolve ( 79 );//success hole resolve use korbo
            reject ( 'City not found' );//unsuccessful hole eta use korbo..
        }, 1000 );

    } );
}

getTempPromise ( 'Dhaka' ).then ( function ( temperature ) {
    console.log ( 'Promise success', temperature );
}, function ( error ) {
    console.log ( 'Promise failed', error );
} )

//..........challenge problem for promise............
/* ................Problem Description..............
 2ta number add korbo.. jodi 2ta number hoy tahole add kore result ta console e dekhabo..
 jodi  1ta number arekta string hoy tahole error message dekhabo...
 */

function addTwoNumbers ( a, b ) {
    return new Promise ( function ( resolve, reject ) {
        setTimeout ( function () {
            if (typeof  a === 'number' && typeof b === 'number') {
                resolve ( a + b );
            }
            else {
                    reject('The inputs must be in number format');
            }

        }, 1000 );
    } );
}

addTwoNumbers ( 2, 3 ).then ( function ( sum ) {
    console.log('The sum is : ', sum);
} , function ( error ) {
    console.log('Error : ', error);
});

//when the input is not number
addTwoNumbers ( 2, 'hello' ).then ( function ( sum ) {
    console.log('To sum the inputs, all must be is number form');
} , function ( error ) {
    console.log('Error has occurred for second case : ', error);
});
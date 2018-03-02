'use strict'
const yargs = require('yargs');
const address = require('./weather-app/geo/geocode.js');
const yelpBusinesses = require('./yelp.js');

const argv = yargs
	.options({
		a:{
			demand:true,
			alias:'address',
			describe: 'Enter address to search',
			string: true
		}
	})
	.options({
		b:{
			demand:true,
			alias:'search',
			describe:'Search name of the business',
			string:true
		}
	})
	.help()
	.alias('help','h')
	.argv;

address.requestAddress(argv.address,(errorMessage,results)=>{
	if (errorMessage){
		console.log('no donuts for you');
	} else {
		console.log(results.latitude,results.longitude)
		yelpBusinesses.requestBusiness(argv.search,results.latitude,results.longitude,(errorMessage,yelpResults)=>{
			if (errorMessage){
				console.log('no donuts AND coffee for you');
			} else {
				console.log('yo');
				console.log(JSON.stringify(yelpResults.address.length,undefined, 2));
				for (var i = yelpResults.address.length - 1; i >= 0; i--) {
					console.log('Restaurant name: '+JSON.stringify(yelpResults.address[i].name,undefined, 2));
					console.log('ratings: '+JSON.stringify(yelpResults.address[i].rating,undefined, 2));
					console.log('Street address: '+JSON.stringify(yelpResults.address[i].location.display_address[0],undefined, 2));
					console.log('City and zip: '+JSON.stringify(yelpResults.address[i].location.display_address[1],undefined, 2));
					console.log('Phone: '+JSON.stringify(yelpResults.address[i].phone,undefined, 2));
					console.log('-----------------------');
				}
			}

		});
	}
});


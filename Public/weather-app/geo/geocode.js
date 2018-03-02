'use strict'
const request = require('request');

var requestAddress=(address,callback)=>{
	console.log('starting...');
	var encodedAddress = encodeURIComponent(address);
	console.log(address);
	request({
	url:'http://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
	json: true
	}, (error,response,body)=>{
	if (error) {
		callback('Cannot connect to the google server...')
	} else if (body.status==='OK'){
		callback(undefined,{
			address:body.results[0].formatted_address,
			latitude:body.results[0].geometry.location.lat,
			longitude:body.results[0].geometry.location.lng
		})
	} else {
		callback('no donuts for you...');
	}
	}); 
}

module.exports.requestAddress=requestAddress;



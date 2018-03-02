'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client('gSH6AnT2yP7Hc421UjV-D1sRiPQof_Fu-9yyeIzwSnL118MqS7zYoWv-QqkBHzcYFPVVGp4wxVJCjDiPOClLV9tqfrf94ByY3NMCiqtRk_PK3k8yNeSrBw4YpNFqWnYx');

var requestBusiness=(term,lat,lng,callback)=>{
	client.search({
	  term:term,
	  latitude: lat,
	  longitude: lng,
	  sort_by:'distance',
	  limit:2
	}).then(response => {
	  callback(undefined,{
	  	address:response.jsonBody.businesses
	  })
	}).catch(e => {
	  callback(e);
	});
}

module.exports.requestBusiness=requestBusiness;

//gSH6AnT2yP7Hc421UjV-D1sRiPQof_Fu-9yyeIzwSnL118MqS7zYoWv-QqkBHzcYFPVVGp4wxVJCjDiPOClLV9tqfrf94ByY3NMCiqtRk_PK3k8yNeSrBw4YpNFqWnYx
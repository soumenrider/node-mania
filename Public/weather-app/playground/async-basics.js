console.log('Starting app');

setTimeout(()=>{
	console.log('Waiting for callback')
},2000);

setTimeout(()=>{
	console.log('callback with no delay')
},0);

console.log('Finishing up');
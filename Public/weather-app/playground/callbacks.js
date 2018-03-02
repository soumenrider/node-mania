var getUser=(id,callback)=>{
	var user = {
		id:id,
		name:'Vikram'
	}
	callback(user);
}

getUser(31, (user)=>{
	console.log('Name of the user is ', user.name);
})
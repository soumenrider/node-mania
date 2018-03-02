'use strict'
const express=require('express');
const hbs=require('hbs');

var app=express();

hbs.registerPartials(__dirname+'/views/partials');

console.log(__dirname);
app.set('view engine','hbs');
app.use(express.static(__dirname + '/Public'));

hbs.registerHelper('GetLastYear',()=>{
	return new Date().getFullYear()
})

app.get('/', (req,res)=>{
	//res.send('<h1>Hello express</h1>');
	//res.send('About page');
	res.render('about.hbs',{
		pageTitle:'Home page',
		para:'some text on Home',
		cr:'Copyright, '
	});
});

app.get('/about',(req,res)=>{
	//res.send('About page');
	res.render('about.hbs',{
		pageTitle:'about page',
		para:'some text on about',
		cr:'Copyright, '
	});
});

app.get('/bad',(req,res)=>{
	res.send('no donuts for you');
})

app.listen(3000);
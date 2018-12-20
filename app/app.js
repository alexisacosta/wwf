'use strict'

var app = angular.module("wwf",['ngRoute','ngMaterial','ngMessages', 'wwfControl'])

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		title: 'Login',
		templateUrl: 'pages/login.html'
	})
})




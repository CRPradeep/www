/**
 *author: CR Pradeep.
 *
 *defines the paths to the js files and
 *bootstraps the angular app.
 **/ 

requirejs.config({
	"baseUrl": "js/libs",
	"paths": {
		"angular": "angular",
		"angular_route":"angular-route",
		"angular_resource":"angular-resource",
		"app":"../app",
		"controller": "../controllers/baseController",
		"loginController": "../controllers/loginController",
		"router":"../router"
	},
	"shim": {
		"angular": {exports : 'angular'},
		"angular_resource":{deps:['angular']},
		"angular_route":{deps:['angular']},
		"app":{deps:['angular']},
		"router":{deps:['angular','angular_route']},
		"controller":{deps:['angular']}
	},
	priority: ["angular"]
});

define(["angular", "app", "router"], function(angular, app) {
	'use strict';

	angular.bootstrap(document, [app['name']]);
}
);
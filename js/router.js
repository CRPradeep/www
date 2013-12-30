/*author: CR PRADEEP.
 *
 *Define all the navigations in the app inside the $routeProvider.
 */

//TODO: define all the templateUrls under 'paths:' in main.js

define(['angular', 'app', 'loginController'], function(angular, app, loginController) {
	'use strict';
	return app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'loginController'
	}).
	otherwise({
		redirectTo: '/login'
	});
}]);
});
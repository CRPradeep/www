define(['angular', 'controller'], function (angular, baseController) {
	'use strict';

	/* Login Controllers */

	return baseController.controller('loginController',['$scope', function($scope) {
		$scope.user =  { name : 'prokarma', pwd: 'prokarma' };

		$scope.login = function() {
//			TODO: have the validation and authentication steps here
		};
	}]);

});
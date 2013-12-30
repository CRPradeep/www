/**
 *author: CR Pradeep.
 *
 *Load Web App JavaScript Dependencies/Plugins.
 *returns the ng-App instance module with dependencies loaded.
 **/ 

define(['angular', 'controller'], 
		function (angular, baseController) {
	'use strict';

	return angular.module('angularApp', ['ngRoute', baseController['name']]);
}
);
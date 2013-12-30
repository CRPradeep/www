/**
*author: CR Pradeep.
*
*Returns the controller module instance from which any number of controllers can be extracted.
*Add baseController as dependency while creating individual controllers.
**/ 


define(['angular'], function (angular) {
	'use strict';

	/* Base Controller */

	return angular.module('angularApp.controller', []);

});
angular.module('todo',[])
	   .controller('todoCtrl',function($scope, $routeParams, $filter, store){
	   		'use strict';

	   		var tasks = $scope.tasks = store.tasks;

	   		$scope.newTask = ''
	   })
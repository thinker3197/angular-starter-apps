angular.module('todo',['ngRoute'])
		.config(function($routeProvider){
			'use strict';

			var routeConfig = {
				controller: 'todoCtrl',
				templateUrl: 'todoApp.html',
				resolve: {
					store: function(todoStorage) {
						return todoStorage.then(function(module){
							module.get();
							return module;
						});
					}
				}
			};

			$routeProvider.when('/',routeConfig)
						  .when('/:status',routeConfig)
						  .otherwise({
						  	redirectTo: '/'
						  });
		});
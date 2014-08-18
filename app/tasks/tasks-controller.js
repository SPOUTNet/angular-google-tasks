(function() {
	'use strict';

	function tasksController($scope, $routeParams, tasks) {
		
		$scope.title = $routeParams.title;
		
		tasks.getTasks($routeParams.id).then(function(data) {
			$scope.tasks = data;
		});
	}

	tasksController.$inject = ['$scope', '$routeParams', 'tasks'];
	
	angular.module('tasks').controller('tasksController', tasksController);
})();
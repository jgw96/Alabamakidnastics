	// create the module and name it scotchApp
	var myApp = angular.module('myApp', ['ngRoute',"ngAnimate"]);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/dashboard.html',
				controller  : 'dashboardController'
			})
			
			.when('/schedule',{
			  templateUrl : 'pages/schedule.html',
			  controller : 'scheduleController'
			})
			
			.when("/programs",{
			  templateUrl : "pages/programs.html",
			  controller : "programsController"
			})
			
			.when("/events",{
			  templateUrl : "pages/events.html",
			  controller: "eventsController"
			})
			
			.when("/growing",{
			  templateUrl: "pages/growing.html",
			  controller: "growingController"
			})
			
			.when("/portal",{
			  templateUrl : "pages/portal.html",
			  controller: "portalController"
			});

			
	});

	// create the controller and inject Angular's $scope
	myApp.controller('dashboardController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.pageClass="page-home";
	});
	
	myApp.controller('scheduleController',function($scope){
	  $scope.pageClass="page-home";
	});
	
	myApp.controller("programsController",function($scope){
	  $scope.pageClass="page-home";
	});
	
	myApp.controller("eventsController",function($scope){
	  $scope.pageClass="page-home";
	});
	
	myApp.controller("growingController",function($scope){
	  $scope.pageClass="page-home";
	});
	
	myApp.controller("portalController",function($scope){
	  $scope.pageClass="page-home";
	});


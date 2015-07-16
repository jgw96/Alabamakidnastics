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
			})
			
			.when("/gallery",{
			  templateUrl : "pages/gallery.html",
			  controller : "galleryController"
			});
			
			
			
	});

	// create the controller and inject Angular's $scope
	myApp.controller('dashboardController', function($scope) {
		// create a message to display in our view
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
	  
	  $scope.goFullScreen=function(){
	    if (
        document.fullscreenEnabled || 
        document.webkitFullscreenEnabled || 
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
        
        var table=document.querySelector("#classes");
        
        if (table.requestFullscreen) {
          table.requestFullscreen();
        } else if (table.webkitRequestFullscreen) {
          table.webkitRequestFullscreen();
        } else if (table.mozRequestFullScreen) {
          table.mozRequestFullScreen();
        } else if (table.msRequestFullscreen) {
          table.msRequestFullscreen();
        }

        }else{
          alert("Your browser does not support this feature, please consider changing to Google Chrome or Mozilla Firefox.");
        }
	  };
	});
	
	myApp.controller("galleryController",function($scope){
	  $scope.pageClass="page-home";
	});


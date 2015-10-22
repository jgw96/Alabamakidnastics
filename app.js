/* global angular */
angular.module('app', ['ngNewRouter', "app.home", "app.events", "app.portal", "app.programs"])
	.controller('AppController', ['$router', AppController]);

function AppController($router) {
  $router.config([
     { path: '/', component: 'home' },
	 { path:"/events", component: "events"},
	 { path:"/portal", component: "portal"},
	 { path:"/programs", component: "programs"},
	 { path:"/gym", component: "gym"}
   ]);
 }
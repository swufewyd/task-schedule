/**
* home Module
*
* Description
*/
angular.module('ts.home', ['ui.router','ts.navbar','ts.circleMenu']);

angular.module('ts.home')
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    // For any unmatched url, redirect to /state1
    $locationProvider.html5Mode(true);
     $urlRouterProvider.otherwise("/home");
     //
     // Now set up the states
     $stateProvider
       .state('home', {
         url: "/home",
         templateUrl: "app/home/views/home.html",
         controller: 'HomeController'
       })
       

});
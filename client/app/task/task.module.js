/**
* ts.task Module
*
* Description
*/
angular.module('ts.task', []);

angular.module('ts.task')
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    // For any unmatched url, redirect to /state1
    $locationProvider.html5Mode(true);
     $urlRouterProvider.otherwise("/home");
     //
     // Now set up the states
     $stateProvider
       .state('task', {
         url: "/task",
         templateUrl: "app/task/views/task-home.html",
         // controller: 'HomeController'
       })

});
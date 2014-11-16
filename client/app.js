'use strict';


angular.module('ts.main',['ui.bootstrap','ts.home','ts.task']);

angular.module('ts.main')
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    // For any unmatched url, redirect to /state1
    /*$locationProvider.html5Mode(true);
     $urlRouterProvider.otherwise("/home");
     //
     // Now set up the states
     $stateProvider
       .state('home', {
         url: "/home",
         templateUrl: "app/home/views/home.html",
         controller: 'HomeCtrl'
       })*/
});


//只有第一次加载和f5刷新的时候会执行,页面内跳转不执行
/*mainModule.run(function($http,$location,$rootScope,SessionService){
    $rootScope.$on('$locationChangeStart', function(evt) {
      SessionService.getSessionData().then(function(dataResponse) {
          if(dataResponse.data.isLogin==="0"){
            $location.path('/login');
          }else{
          }
      });
    });
});*/
var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../app/components/home/home.view.html',
      controller: 'homeController',
    })
    .when('/login', {
      templateUrl: '../app/components/login/login.view.html',
      controller: 'LoginController'
    })
    .when('/chat', {
      templateUrl: '../app/components/chat/chat.view.html',
      controller: 'chatController'
    })
    .when('/about', {
      templateUrl: '../app/components/about/about.view.html'
    })
    .when('/styleguide', {
      templateUrl: '../assets/css/styleguide.html',
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
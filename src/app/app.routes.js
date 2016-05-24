app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../app/components/static/home.view.html',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: '../app/components/login/login.view.html',
            controller: 'LoginController',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('chat', {
            url: '/chat',
            templateUrl: '../app/components/chat/chat.view.html',
            controller: 'ChatController',
            data: {
                authorizedRoles: [USER_ROLES.all]
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '../app/components/dashboard/dashboard.view.html',
            controller: 'DashboardController',
            data: {
                authorizedRoles: [USER_ROLES.mentor, USER_ROLES.all]
            },
        })
        .state('childNew', {
            url: '/child/new',
            templateUrl: '../app/components/dashboard/child.new.view.html',
            controller: 'DashboardController',
            data: {
                authorizedRoles: [USER_ROLES.mentor]
            }
        })
        .state('childView', {
            url: '/child/',
            templateUrl: '../app/components/dashboard/child.view.html',
            controller: 'DashboardController',
            data: {
                authorizedRoles: [USER_ROLES.mentor]
            }
        })
        .state('register', {
            url: '/register',
            templateUrl: '../app/components/register/register.view.html',
            controller: 'RegisterController',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('forgetpassword', {
            url: '/forgetpassword',
            templateUrl: '../app/components/forgetpassword/forgetpassword.view.html',
            controller: 'ForgetPasswordController',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('newpassword', {
            url: '/newpassword/:tokenId/:email',
            templateUrl: '../app/components/forgetpassword/newpassword.view.html',
            controller: 'NewPasswordController',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: '../app/components/static/about.view.html',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('helpus', {
            url: '/helpus',
            templateUrl: '../app/components/static/helpus.view.html',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('styleguide', {
            url: '/styleguide',
            templateUrl: '../styleguide.html',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        .state('quizView', {
            url: '/quiz',
            templateUrl: '../app/components/quiz/quiz.view.html',
            data: {
                authorizedRoles: [USER_ROLES.mentor]
            }
        }).state('quizNew', {
            url: '/quiz/new',
            templateUrl: '../app/components/quiz/quiz.new.view.html',
            controller: 'DashboardController',
            data: {
                authorizedRoles: [USER_ROLES.mentor]
            }
        })
    $urlRouterProvider.otherwise("/");
});

angular.module('app').run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('test.subs');
}]);

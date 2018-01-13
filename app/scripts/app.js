'use strict';

/**
 * @ngdoc overview
 * @name webWeatherApp
 * @description
 * # webWeatherApp
 *
 * Main module of the application.
 */
angular
		.module('webWeatherApp', [
		'ngAnimate',
		'ngAria',
    'ui.router',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngSanitize',
		'toastr',
    'ngTouch'
	])
	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$windowProvider', '$locationProvider',
		function ($stateProvider, $urlRouterProvider, $httpProvider, $windowProvider, $locationProvider) {
			var $window = $windowProvider.$get();

			$httpProvider.defaults.headers.common = {};
			$httpProvider.defaults.headers.post = {};
			$httpProvider.defaults.headers.put = {};
			$httpProvider.defaults.headers.patch = {};

			$urlRouterProvider.otherwise('/login');

			// Now set up the states
			$stateProvider
				.state('LOGIN', {
					templateUrl: "views/login.html",
					url: "/login",
          controller:'Login',
          controllerAs:'loginCtrl',
					params: null
				})

        .state('REGISTER', {
					templateUrl: "views/register.html",
					url: "/register",
          controller:'Register',
          controllerAs:'registerCtrl',
					params: null
				})

				.state('HOME', {
					templateUrl: "views/home.html",
					url: "/home",
          controller:'Weather',
          controllerAs:'weatherCtrl',
					params: null
				})
				.state('HISTORY', {
					templateUrl: "views/history.html",
					url: "/history",
          controller:'Weather',
          controllerAs:'weatherCtrl',
					params: null
				})
		}
	])
	.run(['$rootScope', '$state', function ($rootScope, $state) {
		$rootScope.$state = $state;
		$rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {

		});
	}])
	.constant('_',
		window._
	);

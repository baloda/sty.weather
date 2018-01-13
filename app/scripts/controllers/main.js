'use strict';

/**
 * @ngdoc function
 * @name webWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webWeatherApp
 */
angular.module('webWeatherApp')
  .controller('MainCtrl',['$rootScope', function ($rootScope) {

      $rootScope.apiUrl='http://localhost:3000/'

  }]);

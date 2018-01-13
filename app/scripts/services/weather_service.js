angular.module('webWeatherApp').service("weatherService", ['$rootScope','authenticationService', '$location', '$window', '$cookies', '$http', function ($rootScope,authenticationService, $location, $window, $cookies, $http) {

	var  weatherService= {

    getWeather: function (data) {
      return $http({
        url: $rootScope.apiUrl + "city-weather",
        method: "POST",
        data: data,
        headers: authenticationService.getHeaders()
      });
    },

	};

	return weatherService;

}]);

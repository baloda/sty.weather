angular.module('webWeatherApp').service("authenticationService", ['$rootScope', '$location', '$window', '$cookies', '$http', function ($rootScope, $location, $window, $cookies, $http) {

	var authenticationService = {

		getHeaders: function () {
			if (authenticationService.getAccessToken()) {
				return {
					"xAccessToken": authenticationService.getAccessToken(),
					"Content-Type": "application/json"
				};
			} else {
				return {
					"Content-Type": "application/json"
				};
			}
		},

		login: function (data) {
			return $http({
				url: $rootScope.apiUrl + "users/login",
				method: "POST",
				data: data,
				headers: authenticationService.getHeaders()
			});
		},

		register: function (data) {
      console.log($rootScope.apiUrl);
			return $http({
				url: $rootScope.apiUrl + "users/register",
				method: "POST",
				data: data,
				headers: authenticationService.getHeaders()
			});
		},

		logout: function () {
			return $http({
				url: $rootScope.apiUrl + "user/logout/",
				method: "POST",
				headers: authenticationService.getHeaders()
			});
		},

		delUser: function (data) {
			$window.localStorage.clear();
		},

		setAccessToken: function (data) {
			$window.localStorage.accessToken = data;
		},

		setUserId: function (data) {
			$window.localStorage.userId = data;
		},

		setLoginData: function (data) {
			$window.localStorage.accessToken = data.xAccessToken;
			$window.localStorage.userId = data._id;
			$window.localStorage.email = data.email;
			$window.localStorage.name = data.name;
			$window.localStorage.image = data.profileImage;
		},

		getAccessToken: function () {
      if(!$window.localStorage) return undefined;
			return $window.localStorage.accessToken;
		},

		getUserId: function () {
      if(!$window.localStorage) return undefined;
			return $window.localStorage.userId;
		},

		getEmail: function () {
      if(!$window.localStorage) return undefined;
			return $window.localStorage.email;
		},

		getName: function () {
      if(!$window.localStorage) return undefined;
			return $window.localStorage.name;
		},

		getImage: function () {
      if(!$window.localStorage) return undefined;
			return $window.localStorage.image;
		}

	};

	return authenticationService;

}]);

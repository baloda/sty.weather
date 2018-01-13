angular.module('webWeatherApp')
	.controller('Home', ['$scope', '$state', 'authenticationService', 'toastr', function ($scope, $state, authenticationService, toastr) {

		var vm = this;

		vm.user = {};

		vm.register = function () {
			console.log(vm.user);
			authenticationService.register(vm.user)
				.then(function (res) {
					if (res) {
						toastr.success('User Registered Successfully');
						$state.go('LOGIN');
					}
				})
				.catch(function (err) {
					if (err.data) toastr.error(err.data.error);
					else toastr.error(err.error);
				})
		}

	}])
	.controller('Login', ['$scope', '$state', 'authenticationService', 'toastr', function ($scope, $state, authenticationService, toastr) {

		var vm = this;

		vm.user = {};

		vm.login = function () {
			console.log(vm.user);
			authenticationService.login(vm.user)
				.then(function (res) {
					if (res) {
						console.log(res);
						authenticationService.setLoginData(res.data.data);
						toastr.success('Login Successfully');
						$state.go('HOME');
					}
				})
				.catch(function (err) {
					console.log(err);
					if (err.data) toastr.error(err.data.error);
					else toastr.error(err.error);
				})
		}

	}])
	.controller('Weather', ['$scope', '$state', 'weatherService', 'authenticationService', 'toastr', function ($scope, $state, weatherService, authenticationService, toastr) {

		var vm = this;
		vm.user = {};

		vm.user.email = authenticationService.getEmail();
		vm.user.image = authenticationService.getImage();
		vm.user.name = authenticationService.getName();
		vm.getClass = function (temp) {
			temp = temp - 273;
			console.log(temp);
			if (temp <= 5) {
				return 'cold'
			} else if (temp > 5 && temp <= 15) {
				return 'rain'
			} else if (temp > 15 & temp <= 22) {
				return 'one'
			} else {
				return 'sunny'
			}
		}

		vm.logout = function (temp) {
			authenticationService.logout()
				.then(function (res) {})
				.catch(function (err) {})
				.finally(function(e){
					authenticationService.delUser();
					toastr.success('Logout Successfully');
					$state.go('LOGIN');
				})
		}

		vm.getWeather = function () {
			if (vm.searchquery.latitude) {
				var temp = {
					lat: vm.searchquery.latitude,
					lon: vm.searchquery.longitude,
					userId: authenticationService.getUserId(),
					location: vm.searchquery.location
				}
				console.log(vm.searchquery);
				weatherService.getWeather(temp).then(function (res) {
					if (res) {
						vm.weather = res.data.weather;
						console.log(vm.weather);
					}
				})
			} else {
				toastr.error('Please Select Location')
			}
		}

		vm.getUserWeatherHistory = function () {
			var filter = {
				limit: 25,
				skip: 0,
				where: {
					userId: authenticationService.getUserId()
				}
			}
			weatherService.getUserWeatherHistory(filter).then(function (res) {
				if (res) {
					vm.histroy = res.data;
				}
			})
		}
	}])

	.controller('Register', ['$scope', '$state', 'authenticationService', 'toastr', function ($scope, $state, authenticationService, toastr) {

		var vm = this;

		vm.user = {};

		vm.register = function () {
			console.log(vm.user);
			authenticationService.register(vm.user)
				.then(function (res) {
					if (res) {
						toastr.success('User Registered Successfully');
						$state.go('LOGIN');
					}
				})
				.catch(function (err) {
					if (err.data) toastr.error(err.data.error);
					else toastr.error(err.error);
				})
		}

	}]);

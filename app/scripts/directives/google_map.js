angular.module('webWeatherApp').directive('googleplace', function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, model) {
			var options = {
				types: []
			};
			scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

			google.maps.event.addListener(scope.gPlace, 'place_changed', function (event) {
				var place = scope.gPlace.getPlace();
				var address = place.formatted_address;
				var latitude = place.geometry.location.lat();
				var longitude = place.geometry.location.lng();
				console.log(latitude + ', ' + longitude + ', ' + address);
				scope.$apply(function () {
					model.$setViewValue({
						'latitude': latitude,
						'longitude': longitude,
						'location': address
					});
				});
			});

		}
	};
});

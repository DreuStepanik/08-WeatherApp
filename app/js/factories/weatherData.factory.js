(function() {
    'use strict';
// Gave a name to the Factory
    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);
// Inject the dependencies within the Factory
    WeatherFactory.$inject = ['$http'];

    /* @ngInject */
    function WeatherFactory($http) {
        var service = {
            getWeatherData: getWeatherData
        };
        return service;

        ////////////////
        

        function getWeatherData(cityName) {
        	console.log('running in factory...');
        	return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=ed5f487c18c10403c896daa2dcacbfc6&units=imperial');
        }
    }
})();


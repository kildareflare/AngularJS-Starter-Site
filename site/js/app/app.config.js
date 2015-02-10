(function () {
    'use strict';

    // Register the module's configuration.
    angular.module('app').config(config);

    // Inject the dependencies.
    config.$inject = ['$httpProvider', '$locationProvider', '$translateProvider'];


    function config($httpProvider, $locationProvider, $translateProvider) {

        // Enable HTML5 routing mode instead of using hash-routing.
        $locationProvider.html5Mode(true);
    }

    angular.module('app').run(function ($rootScope, $state) {

    });


})();
/**
 * This is the application's routes configuration.
 * Only configure routes in this file.
 * @memberOf Application Module
 * @namespace Application Routes
 */
(function () {
    'use strict';

    // Register the application's routes configuration.
    angular.module('app').config(config);

    // Inject the dependencies.
    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    /**
     * @name config
     * @desc Configures the routes.
     * @param $urlRouterProvider
     * @param $stateProvider
     * @memberOf Application Module.Application Routes
     */
    function config($urlRouterProvider, $stateProvider) {

        //register default route
        $urlRouterProvider.otherwise('/home');


        // HOME STATES AND NESTED VIEWS ========================================
        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutController as ctrl',
            resolve: {
                details: function (aboutService) {

                    return aboutService.details();
                },
            }
 
        });
    }

})();
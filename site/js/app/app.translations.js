/**
 * This is the application module's configuration.
 * Do NOT configure routes in this file.
 * @memberOf Application Module
 * @namespace Application Config
 */
(function () {
  'use strict';

  // Register the module's configuration.
  angular.module('app').config(config);

  // Inject the dependencies.
  config.$inject = ['$translateProvider'];

  /**
   * @name config
   * @desc Configures the module.
   * @param $locationProvider
   * @memberOf Application Module.Application Config
   */
  function config( $translateProvider) {    

	  $translateProvider.translations('en', {
		TITLE: 'Starter Site Test'
	  });
	  $translateProvider.translations('fr', {
			TITLE: 'Starter Site Test'
	  });
	  $translateProvider.preferredLanguage('en');
	}
	
 

})();

	
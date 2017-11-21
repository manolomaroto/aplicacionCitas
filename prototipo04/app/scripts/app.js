'use strict';

/**
 * @ngdoc overview
 * @name psicologiaMirafloresApp
 * @description
 * # psicologiaMirafloresApp
 *
 * Main module of the application.
 */
angular
  .module('psicologiaMirafloresApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/psicologa', {
        templateUrl: 'views/psicologa.html',
        controller: 'PsicologaCtrl',
        controllerAs: 'psicologa'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

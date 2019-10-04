(function () {
  'use strict';

  angular
    .module('pfTest.core')
    .config(configure);

  configure.$inject = ['$locationProvider'];
  function configure($locationProvider) {
    $locationProvider.html5Mode(false);
  }
})();
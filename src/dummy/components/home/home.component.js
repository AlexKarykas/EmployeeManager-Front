(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .component('pfHome', {
      templateUrl: 'dummy/components/home/home.component.html',
      controller: HomeController
    });

  HomeController.$inject = [];
  function HomeController() {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;


    ////////////////

    function onInit() {

    }

    function onChanges(changesObj) {

    }

    function onDestroy() {

    }
  }
})();
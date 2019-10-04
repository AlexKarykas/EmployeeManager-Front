(function () {
  'use strict';

  angular
    .module('pfTest')
    .component('app', {
      templateUrl: 'app.component.html',
      controller: AppController,
      controllerAs: "$ctrl" //To vala egw
    });

  AppController.$inject = [];
  function AppController() {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;

    ////////////////

    $ctrl.title = 'Employee Management';

    ////////////////

    function onInit() {

    }

    function onChanges(changesObj) {

    }

    function onDestroy() {

    }
  }
})();
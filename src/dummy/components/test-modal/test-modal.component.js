(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .component('pfTestModal', {
      templateUrl: 'dummy/components/test-modal/test-modal.component.html',
      controller: TestModalController,
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      }
    });

  TestModalController.$inject = ['$scope'];
  function TestModalController($scope) {
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
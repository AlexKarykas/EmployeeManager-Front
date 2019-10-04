(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .component('pfTest', {
      templateUrl: 'dummy/components/test/test.component.html',
      controller: TestController
    });

  TestController.$inject = ['modalService'];
  function TestController(modalService) {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;
    $ctrl.openModal = openModal;

    ////////////////

    function onInit() {

    }

    function onChanges(changesObj) {

    }

    function onDestroy() {

    }

    function openModal() {
      modalService.open('pfTestModal')
        .then(() => {
          console.log('modal closed');
        })
        .catch(() => {
          console.log('modal disposed');
        });
    }
  }
})();
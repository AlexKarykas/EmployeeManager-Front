(function () {
  'use strict';

  angular
    .module('pfTest.widgets')
    .component('pfMenuItem', {
      templateUrl: 'widgets/components/menu-item/menu-item.component.html',
      controller: MenuItemController,
      bindings: {
        item: '<',
        navigateTo: '&'
      },
    });

  MenuItemController.$inject = [];
  function MenuItemController() {
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
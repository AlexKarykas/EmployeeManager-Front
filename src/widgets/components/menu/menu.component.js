(function () {
  'use strict';

  angular
    .module('pfTest.widgets')
    .component('pfMenu', {
      templateUrl: 'widgets/components/menu/menu.component.html',
      controller: MenuController
    });

  MenuController.$inject = ['$state', 'menuService'];
  function MenuController($state, menuService) {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;
    $ctrl.navigateTo = navigateTo;

    ////////////////

    function onInit() {
      $ctrl.items = menuService.getMenuItems();
    }

    function onChanges(changesObj) {

    }

    function onDestroy() {

    }

    function navigateTo(state) {
      if (angular.isString(state) && state != '') {
        $state.go(state);
      }
    }
  }
})();
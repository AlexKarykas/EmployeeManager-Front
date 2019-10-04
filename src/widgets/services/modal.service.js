(function () {
  'use strict';

  angular
    .module('pfTest.widgets')
    .service('modalService', ModalService);

  ModalService.$inject = ['$uibModal'];
  function ModalService($uibModal) {
    this.open = open;

    ////////////////

    function open(component, resolve, size) {
      return $uibModal.open({
        animation: false,
        component: component,
        size: (!!size ? size : 'sm'),
        resolve: resolve
      }).result;
    }
  }
})();
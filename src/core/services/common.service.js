(function () {
  'use strict';

  angular.module('pfTest.core')
    .service('common', CommonService);

  CommonService.$inject = [];
  function CommonService() {
    this.isValidId = isValidId;

    function isValidId(id) {
      return !!id && typeof id === 'number' && id > 0;
    }
  }

})();
(function () {
  'use strict';

  angular.module('pfTest.core')
    .service('logger', Logger);

  Logger.$inject = [];
  function Logger() {
    this.info = info;
    this.warn = warn;
    this.error = error;

    function info(message) {
      console.info(`[info] ${JSON.stringify(message)}`);
    }

    function warn(message) {
      console.warn(`[warning] ${JSON.stringify(message)}`);
    }

    function error(message) {
      console.error(`[error] ${JSON.stringify(message)}`);
    }
  }
})();
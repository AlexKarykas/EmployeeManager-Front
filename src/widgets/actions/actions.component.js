(function () {
  "use strict";

  angular.module("pfTest.widgets")
    .component("actions", {
      templateUrl: "widgets/actions/actions.component.html",
      controller: ActionsController,
      bindings: {
        entityId: '<',
        isMasterDetail: '<',
        onCreate: '&',
        onUpdate: '&',
        onCancel: '&'
      }
    });

  ActionsController.$inject = [];

  function ActionsController() {
    const ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {

    }
    function onCreate() {
      console.log("create clicked");
    }
  }
})();
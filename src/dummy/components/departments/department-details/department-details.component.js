(function () {
  'use strict'

  angular
    .module('pfTest.dummy')
    .component('departmentDetails', {
      templateUrl: 'dummy/components/departments/department-details/department-details.component.html',
      controller: DepartmentDetailsController,
      bindings: {
        departmentId: '<',
        onAction: '&'
      }
    });

  DepartmentDetailsController.$inject = ['common', 'logger', 'departmentsService'];

  function DepartmentDetailsController(common, logger, departmentsService) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.onCreate = onCreate;
    ctrl.onUpdate = onUpdate;
    ctrl.onCancel = onCancel;

    ctrl.department = {};

    function onInit() {
      departmentsService.getDepartments()
        .then(data => {
          ctrl.departmentsArray = data;
        });
    }

    function onChanges(changesObj) {
      if (!!changesObj.departmentId) {
        const id = changesObj.departmentId.currentValue;
        if (common.isValidId(id)) {
          departmentsService.getDepartment(changesObj.departmentId.currentValue)
            .then(data => {
              ctrl.department = data;
            });
        }
      }
    }

    function onCreate(event) {
      departmentsService.createDepartment(ctrl.department)
        .then(data => {
          ctrl.onAction();
        });
    }

    function onUpdate(event) {
      departmentsService.updateDepartment(ctrl.department)
        .then(data => {
          ctrl.onAction();
        });
    }

    function onCancel(event) {
      logger.warn('Cancel');
      console.warn(event);
      ctrl.onAction();
    }
  }
})();
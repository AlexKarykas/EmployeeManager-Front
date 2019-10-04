(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .component('employeeDetails', {
      templateUrl: 'dummy/components/employees/employee-details/employee-details.component.html',
      controller: EmployeeDetailsController,
      bindings: {
        employeeId: '<',
        onAction: '&'
      }
    });

  EmployeeDetailsController.$inject = ['common', 'logger', 'employeesService'];

  function EmployeeDetailsController(common, logger, employeesService) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.onCreate = onCreate;
    ctrl.onUpdate = onUpdate;
    ctrl.onCancel = onCancel;

    // Init empty employee
    ctrl.employee = {};

    function onInit() {

    }

    function onChanges(changesObj) {
      if (!!changesObj.employeeId) {
        const id = changesObj.employeeId.currentValue;
        if (common.isValidId(id)) {
          employeesService.getEmployee(changesObj.employeeId.currentValue)
            .then(data => {
              ctrl.employee = data;
            });
        }
      }
    }

    function onCreate(event) {
      employeesService.createEmployee(ctrl.employee)
        .then(data => {
          ctrl.onAction();
        });
    }

    function onUpdate(event) {
      employeesService.updateEmployee(ctrl.employee)
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
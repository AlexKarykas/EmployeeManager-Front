(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .component('employeesList', {
      templateUrl: "dummy/components/employees/employees-list/employees-list.component.html",
      controller: EmployeesListController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  EmployeesListController.$inject = ['$scope', 'common', 'employeesService'];

  function EmployeesListController($scope, common, employeesService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadEmployees();
    }

    function loadEmployees() {
      employeesService.getEmployees()
        .then(data => {
          ctrl.employeesArray = data;
        });
    }

    function refresh() {
      loadEmployees();
    }

    function onDelete() {
      employeesService.deleteEmployee(Id)
        .then(() => {
          refresh();
        });
    }
    function select(employee) {
      if (!!employee && common.isValidId(employee.Id)) {
        ctrl.onEdit({
          id: employee.Id
        });
      }
    }
  }
})();
(function () {
  'use strict';

  angular.module('pfTest.dummy')
    .service('employeesService', EmployeesService);

  EmployeesService.$inject = ['requestService'];
  function EmployeesService(requestService) {

    this.getEmployee = getEmployee;
    this.getEmployees = getEmployees;
    this.createEmployee = createEmployee;
    this.updateEmployee = updateEmployee;
    this.deleteEmployee = deleteEmployee;

    const employeeEntity = 'Employees'; //Used for the url to db

    function getEmployees() {
      return requestService.getArray(employeeEntity);
    }

    function getEmployee(id) {
      return requestService.getObject(employeeEntity, id);
    }

    function createEmployee(employee) {
      return requestService.createObject(employeeEntity, employee);
    }

    function updateEmployee(employee) {
      return requestService.updateObject(employeeEntity, employee);
    }

    function deleteEmployee(Id) {
      return requestService.deleteObject(employeeEntity, Id);
    }
  }
})();
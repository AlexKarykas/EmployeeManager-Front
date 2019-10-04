(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .component('departmentList', {
      templateUrl: 'dummy/components/departments/departments-list/departments-list.component.html',
      controller: DepartmentsListController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  DepartmentsListController.$inject = ['$scope', 'common', 'departmentsService'];

  function DepartmentsListController($scope, common, departmentsService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadDepartments();
    }

    function loadDepartments() {
      departmentsService.getDepartments()
        .then(data => {
          ctrl.departmentsArray = data;
        })
    }

    function refresh() {
      loadDepartments();
    }

    function onDelete() {
      departmentsService.deleteDepartment(id)
        .then(() => {
          refresh();
        });
    }

    function select(department) {
      if (!!department && common.isValidId(department.id)) {
        ctrl.onEdit({
          id: department.id
        });
      }
    }
  }
})();
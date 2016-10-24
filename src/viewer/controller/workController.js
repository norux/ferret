/**
 * Created by leesangjun on 2016. 10. 16..
 */
angular.module("ferret")
    .controller('workCtrl', ['$scope', function ($scope) {
        $scope.gridOptions = {
            modifierKeysToMultiSelectCells: true,
            showGridFooter: true
        };

        $scope.gridOptions.columnDefs = [
            { name: 'no', width:'40', cellClass:'ar'},
            { name: 'log'},
        ];

        $scope.gridOptions.data = [
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
            {"no": 1, "log": "testsetsetsetsetsetestset"},
        ];
    }]);
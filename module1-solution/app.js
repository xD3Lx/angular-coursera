(function() {
  'use strict';

  angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.showMessage = function() {
      var number = parseItemList($scope.items).length;

      if (number === 0) {
        $scope.message = 'Please enter data first';
      } else if (number <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };

    function parseItemList(items) {
      if (isEmpty(items)) {
        return [];
      }

      return items.split(',');
    }

    function isEmpty(str) {
      return (!str || str.length === 0);
    }
  }
})();

(function() {
  "use strict";

  angular
        .module('data')
        .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function() {
      var config = {
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      };

      return $http(config);
    };

    service.getItemsForCategory = function(categoryShortName) {
      var config = {
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
      };

      return $http(config);
    };
  }
})();

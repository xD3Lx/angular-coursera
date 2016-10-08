(function() {
  "use strict";

  angular
        .module('MenuApp')
        .controller('CategoriesMainController', CategoriesMainController);

  CategoriesMainController.$inject = ['categoriesData'];
  function CategoriesMainController(categoriesData) {
    var ctrl = this;

    ctrl.categories = categoriesData.data;
  }
})();

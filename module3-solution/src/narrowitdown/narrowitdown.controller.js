(function() {
  angular
        .module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.searchTerm = "";
    ctrl.shouldDisplay = true;

    ctrl.getMatchedMenuItems = function() {
      if (ctrl.searchTerm.trim().length === 0) {
        ctrl.shouldDisplay = false;
      } else {
        MenuSearchService
                    .getMatchedMenuItems(ctrl.searchTerm)
                    .then(function(data) {
                      ctrl.found = data;
                      ctrl.shouldDisplay = data.length !== 0;
                    });
      }
    };

    ctrl.onRemove = function(index) {
      ctrl.found.splice(index, 1);
    };
  }
})();

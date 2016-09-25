(function () {
    "use strict";

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)


    MenuSearchService.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {

        }
    }

})();
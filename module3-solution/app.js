(function () {
    "use strict";

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    MenuSearchService.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = "";
        ctrl.shouldDisplay = true;

        ctrl.getMatchedMenuItems = function () {
            if (ctrl.searchTerm.trim().length === 0) {
                ctrl.shouldDisplay = false;
            } else {
                MenuSearchService
                    .getMatchedMenuItems(ctrl.searchTerm)
                    .then(function (data) {
                        ctrl.found = data;
                        ctrl.shouldDisplay = data.length !== 0
                    })
            }
        };

        ctrl.onRemove = function (index) {
            ctrl.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            var config = {
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            };

            function isInDescription(el) {
                return el.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            }

            function filterArr(arr, func) {
                var res = [];
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];
                    if (func(item)) {
                        res.push(item);
                    }
                }
                return res;
            }

            return $http(config)
                .then(function (result) {
                    return filterArr(result.data.menu_items, isInDescription);
                });
        }
    }

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: "foundItems.template.html",
            scope: {
                found: "<",
                onRemove: "&"
            }
        };

        return ddo;
    }

})();
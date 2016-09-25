(function () {

    angular
        .module('NarrowItDownApp')
        .service('MenuSearchService', MenuSearchService);


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

})();
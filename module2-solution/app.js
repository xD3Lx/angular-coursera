(function () {
    'use strict';

    angular
        .module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.isEmpty = function() {
            return toBuy.items.length == 0;
        };

        toBuy.buy = function (index) {
            ShoppingListCheckOffService.buy(index);
        }
    }

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBoughtItems();

        bought.isEmpty = function () {
            return bought.items.length == 0;
        }
    }


    function ShoppingListCheckOffService() {
        var service = this;

        var initial = [
            { name: "cookies", quantity: 10 },
            { name: "apples", quantity: 5 },
            { name: "bananas", quantity: 7 },
            { name: "juices", quantity: 3 },
            { name: "newspapers", quantity: 4 }
        ];

        var toBuy = initial;
        var bought = [];


        service.getToBuyItems = function () {
            return toBuy;
        };

        service.getBoughtItems = function () {
            return bought;
        };

        service.buy = function (index) {
            var elem = toBuy[index];
            toBuy.splice(index, 1);
            bought.push(elem);
        };
    }

})();

(function () {
    "use strict";

    angular
        .module('MenuApp')
        .controller('ItemsMainController', ItemsMainController);


    ItemsMainController.$inject = ['itemsData'];
    function ItemsMainController(itemsData) {
        var ctrl = this;

        ctrl.items = itemsData.data["menu_items"];
    }

})();
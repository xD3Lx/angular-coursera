(function () {
    "use strict";

    angular
        .module('MenuApp')
        .component('categoryMenuItems', {
            templateUrl : "src/items/items.template.html",
            bindings : {
                items: "<"
            }
        })

})();
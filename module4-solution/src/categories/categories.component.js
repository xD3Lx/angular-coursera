(function () {
    "use strict";

    angular
        .module('MenuApp')
        .component('categoryList', {
            templateUrl : "src/categories/categories.template.html",
            bindings : {
                categories : "<"
            }
        })

})();
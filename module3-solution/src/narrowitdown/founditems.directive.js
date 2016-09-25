(function () {

    angular
        .module('NarrowItDownApp')
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: "src/narrowitdown/foundItems.template.html",
            scope: {
                found: "<",
                onRemove: "&"
            }
        };

        return ddo;
    }

})();
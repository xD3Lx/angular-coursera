(function () {
    "use strict";

    angular
        .module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: "src/categories/main-categories.template.html",
                controller: 'CategoriesMainController as categoryCtrl',
                resolve: {
                    categoriesData: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('categories.items', {
                url: '/items/{categoryName}',
                templateUrl: "src/items/main-items.template.html",
                controller: 'ItemsMainController as itemsCtrl',
                resolve: {
                    itemsData: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
                }

            })

    }

})();
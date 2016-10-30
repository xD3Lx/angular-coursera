(function() {
  'use strict';

  angular
    .module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var ctrl = this;
    ctrl.completed = false;
    ctrl.menuItemExists = true;

    ctrl.onSignUp = function() {
      var user = ctrl.user;

      var validateResult = MenuService.validateFavoutiteItem(user.favMenuItem);

      validateResult.then(function(response) {
        ctrl.completed = response;
        ctrl.menuItemExists = response;
        if (response) {
          UserService.register(user);
        }
      });
    };
  }
})();

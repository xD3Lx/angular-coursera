(function() {
  'use strict';

  angular
    .module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['MenuService', 'userInfo'];
  function UserInfoController(MenuService, userInfo) {
    var ctrl = this;
    ctrl.userInfo = userInfo;

    if (userInfo !== null) {
      MenuService.getMenuItem(userInfo.favMenuItem).then(function(response) {
        console.log(response);
        ctrl.menuItem = response;
      });
    }

    ctrl.isRegistered = function() {
      return ctrl.userInfo !== null;
    };
  }
})();

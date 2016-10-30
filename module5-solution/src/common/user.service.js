(function() {
  'use strict';

  angular
    .module('common')
    .service('UserService', UserService);

  function UserService() {
    var service = this;

    service.user = {};

    service.register = function(userInfo) {
      service.user = userInfo;
    };

    service.getUserInfo = function() {
      return service.user;
    };
  }
})();

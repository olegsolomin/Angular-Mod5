(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signup = this;

  signup.name = "";
  signup.lastname = "";
  signup.email = "";
  signup.phone = "";
  signup.favitem = "";

  signup.submit = function (favitem) {
    var promise = SignUpService.getfavitem(signup.favitem);
    promise.
    then (function (response) {
      SignUpService.submit (signup.name, signup.lastname,
      signup.email, signup.phone, signup.favitem);
      signup.completed = true;
      signup.error = false;
    }).catch (function (errorResponse) {
      signup.error = true;
    })

     }
    }
})();

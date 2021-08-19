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


  signup.checkItem = function (favitem) {
  try {
    var promise = SignUpService.getfavitem(signup.favitem);
    promise.then (function (response) {
      signup.item = response.data;
    });
  } catch (e) {
      signup.error = true;
    };
  };

  signup.submit = function (favitem) {
    var promise = signup.checkItem(signup.favitem);
    promise.
    then (function (response) {
      SignUpService.submit (signup.name, signup.lastname,
      signup.email, signup.phone, signup.favitem);
      signup.completed = true;
    }).catch (function (errorResponse) {
      signup.completed = false;
    })

     }
    }
    // try-catch
    // try{
    //   var promise = SignUpService.getfavitem(signup.favitem);
    //   promise.then (function (response) {
    //       signup.item = response.data;
    //   });
    //   SignUpService.submit( signup.name, signup.lastname,
    //   signup.email, signup.phone, signup.favitem);
    //   signup.completed = true;
    // } catch (e) {
    //   signup.error = true;
    // }
  // }
})();

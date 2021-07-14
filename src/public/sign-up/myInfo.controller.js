(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {

  var myInfo = this;
  myInfo.persons = SignUpService.showInfo();
  // myInfo.item = SignUpService.getfavitem(favitem);

  myInfo.IsEmpty = function () {
     if (myInfo.persons.length === 0) {
       return true;
   }
 }
}
})();

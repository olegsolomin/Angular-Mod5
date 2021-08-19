(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {

  var myInfo = this;
  myInfo.persons = SignUpService.showInfo();

try {
  var promise = SignUpService.getfavitem(myInfo.persons[0].favitem);
  promise.then (function (response) {
      myInfo.item = response.data;
  });
} catch (e) {
  console.log("no such item yet");
};



  myInfo.IsEmpty = function () {
     if (
       myInfo.persons[0] === undefined) {
       return true;
   }
 }
}
})();

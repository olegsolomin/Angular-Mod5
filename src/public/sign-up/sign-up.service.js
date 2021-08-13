(function () {
"use strict";

angular.module('public')
.constant('ApiBasePath', "https://son-angular-mod5.herokuapp.com")
.service('SignUpService', SignUpService);

SignUpService.$inject =['$http', 'ApiBasePath'];
function SignUpService($http,ApiBasePath) {
  var service = this;
  var persons = [];

  service.submit = function (name, lastname, email, phone, favitem) {
    var person = {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        favitem: favitem
    };
    persons.push(person);
  };

  service.showInfo = function () {
    return persons;
  };

  service.getfavitem = function (favitem) {
    var response = $http({
      method: "GET",
      url:  (ApiBasePath + '/menu_items/'+ favitem + '.json'),
    });
      return response;
    };
}

})();

(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
// .controller('MyInfoController', MyInfoController)
// .constant('ApiBasePath', "https://son-angular-mod5.herokuapp.com")
// .service('SignUpService', SignUpService);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signup = this;

  signup.name = "";
  signup.lastname = "";
  signup.email = "";
  signup.phone = "";
  signup.favitem = "";

  signup.submit = function () {
    SignUpService.submit( signup.name, signup.lastname,
    signup.email, signup.phone, signup.favitem);
    signup.completed = true;
  }
}

// MyInfoController.$inject = ['SignUpService'];
// function MyInfoController(SignUpService) {
//
//   var myInfo = this;
//   myInfo.persons = SignUpService.showInfo();
//   myInfo.item = SignUpService.getfavitem(favitem);
//   // service not working
//   // myInfo.IsEmpty = function () {
//   //   SignUpService.IsEmpty();
//   // };
//   // function in controller is fine
//    myInfo.IsEmpty = function () {
//      if (myInfo.persons.length === 0) {
//        return true;
//    }
//  };
// }
// SignUpService.$inject =['$http', 'ApiBasePath'];
// function SignUpService($http,ApiBasePath) {
//   var service = this;
//   var persons = [];
//
//   service.submit = function (name, lastname, email, phone, favitem) {
//     var person = {
//         name: name,
//         lastname: lastname,
//         email: email,
//         phone: phone,
//         favitem: favitem
//     };
//     persons.push(person);
//   };
//   service.showInfo = function () {
//     return persons;
//   };
// // service not working
//   // service.IsEmpty = function () {
//   //    if (persons.length === 0 || persons.length === undefined) {
//   //      return true;
//   //    }
//   //   };
//
//
//   service.getfavitem = function (favitem) {
//     var response = $http({
//       method: "GET",
//       url:  (ApiBasePath + '/menu_items/'+ favitem + '.json'),
//     });
//       return response;
//     };
// }

})();

//  some ideas from lessons


// coding Interceptor
// In case there is an error in the response,
// we can handle the responseError property
// and use it to both stop broadcasting the loading spinner event
// (setting "on" to false) and explicitly reject the response
// – return $q.reject(response):
// (function() {
// "use strict";
//
//   angular.module('App')
//     .factory('loadingInterceptor', LoadingInterceptor);
//
//     LoadingInterceptor.$inject = ['$rootScope', '$q'];
//     function LoadingInterceptor($rootScope, $q) {
//       var count = 0; // counts requests happening at the same time
//       var event = 'spinner:activate';
//
//       return {
//         request: function (config) {
//           if (++count === 1) {
//             // only throws event showing the spinner when none is previously thrown
//             $rootScope.$broadcast(event, {on: true});
//           }
//           return config
//         },
//         response: function (response) {
//           if (--count === 0) {
//             // only stops showing the spinner when no pending requests
//             $rootScope.$broadcast(event, {on: false};
//           }
//           return response;
//         },
//         responseError: function (response) {
//           if (--count === 0) {
//             $rootScope.$broadcast(event, {on: false});
//           }
//           return $q.reject(response);
//         }
//       };
//     }
//
// })();


// And configure the $http service provider:
//
// ...
//     .config(config);
//
//     config.$inject = ['$httpProvider'];
//     function config($httpProvider) {
//       $httpProvider.interceptors.push('loadingInterceptor');
//     }
// ...

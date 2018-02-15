/**
 * Created by Admin on 31.05.2017.
 */
'use strict';

var realtApp = angular.module('realtApp', ['ngRoute']);



realtApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'template/home.html',
            controller:'ApartmentsCtrl'
        })
        .when('/blog',{
            templateUrl:'template/blog.html',
            controller:''
        })
        .when('/apartments',{
            templateUrl:'template/apartments.html',
            controller:'ApartmentsCtrl'
        })
        .when('/testimonials',{
            templateUrl:'template/testimonials.html',
            controller:''
        })
        .when('/contact',{
            templateUrl:'template/contact.html',
            controller:''
        })
        .when('/studio',{
            templateUrl:'template/studio.html',
            controller:'ApartmentsCtrl'
        })
        .when('/two-rooms',{
            templateUrl:'template/twoRooms.html',
            controller:'ApartmentsCtrl'
        })
        .when('/large',{
        templateUrl:'template/large.html',
            controller:'ApartmentsCtrl'
         })
        .when('/apartments/:apartmentId', {
            templateUrl:'template/apartments_detail.html',
            controller:'ApartmentsDetailCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
realtApp.controller('ApartmentsCtrl',['$scope','$http', '$location','$scope', function($scope, $http, $location) {
    $http.get('apartments/apartments.json').success(function(data, status, headers, config) {
        $scope.apartments = data;
    })
}]);
realtApp.controller('ApartmentsDetailCtrl',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    $scope.apartmentId = $routeParams.apartmentId;
    var url = 'apartments/'+$routeParams.apartmentId+'.json';
    $http.get(url).success(function(data) {
        $scope.apartment = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    }
}]);
realtApp.controller('formCtrl', function($scope){
    $scope.user = 'Your Name';
    $scope.email = 'your@email.com';
    $scope.message = 'Your Message';
});


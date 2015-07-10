angular.module("myApp.greet", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/greet', {
            templateUrl: 'greet/greet.html',
            controller: 'greetController'
          });
    })
    .service("greetService", function(){
        this.greet = function(name){
            return 'Hi '+ name + ', Have a nice day!';
        };
    })
    .controller("greetController", function($scope, greetService){
        $scope.name = '';
        $scope.message = '';
        $scope.greet = function(){
            $scope.message = greetService.greet($scope.name);
        }
    });

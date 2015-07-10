angular.module("bugTrackerApp")
    .factory("bugService", function($http, Bug, $q){
      /*  return {
            getAll : function(){
                var myPromise = new Promise(function(resolve, reject){
                    var p = $http.get("http://localhost:3000/bugs");
                    p.then(function(response){
                        var result = response.data.map(function(bugData){
                            return new Bug(bugData);
                        });
                        resolve(result);
                    });
                });
                return myPromise;
            }
        };*/

        return {
            getAll : function(){
/*
                var deferred = $q.defer();
                    var p = $http.get("http://localhost:3000/bugs");
                    p.then(function(response){
                        var result = response.data.map(function(bugData){
                            return new Bug(bugData);
                        });
                        deferred.resolve(result);
                    });
                return deferred.promise;
*/

                return  $http.get("http://localhost:3000/bugs")
                        .then(function(response){
                            return response.data.map(function(bugData){
                                return new Bug(bugData);
                            });
                        });
            },
            save : function(bug){
                if (bug.id){
                    //put
                } else {
                    //post
                    return $http.post("http://localhost:3000/bugs", bug)
                        .then(function(response){
                            console.log(response);
                            return new Bug(response.data);
                        });
                }
            }
        }
    })
    .controller("bugsController", function bugsController($scope, Bug, bugStorage, bugService){


        $scope.bugs = [];

        bugService.getAll().then(function(result){
            /*$scope.$apply(function(){
                $scope.bugs = result;
            });*/
            $scope.bugs = result;

        });
        //$scope.bugs = bugStorage.getAll();

        //$scope.newBug = '';
        $scope.addBug = function(bug){
            var newBug = {
                title : bug,
                isClosed : false
            };
            bugService.save(newBug).then(function(newBug){
                $scope.bugs.push(newBug);
            });

        };
        $scope.toggle = function(bug){
            bug.toggle();
            bugStorage.save(bug);
        };

        $scope.removeClosed = function(){
            for(var i= $scope.bugs.length -1; i>=0;i--){
                if ($scope.bugs[i].isClosed){
                    bugStorage.remove($scope.bugs[i]);
                    $scope.bugs.splice(i,1);
                }
            }
        };


    });

/*
angular.module("bugTrackerApp").filter("toClosedCount", function(){
    return function(bugs){
            return bugs.filter(function(bug){
                return bug.isClosed;
            }).length;
        };
});
*/

angular.module("bugTrackerApp").filter("toClosedCount", function($filter){
    return function(bugs){
            var angFilter = $filter('filter')
            return angFilter(bugs, {isClosed : true}).length;
        };
});



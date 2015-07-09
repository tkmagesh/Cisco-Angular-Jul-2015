angular.module("bugTrackerApp")
    .controller("bugsController", function bugsController($scope, Bug, bugStorage){
        $scope.bugs = bugStorage.getAll();

        //$scope.newBug = '';
        $scope.addBug = function(bug){
            var newBug = new Bug({
                title : bug,
                isClosed : false
            });
            bugStorage.save(newBug);
            $scope.bugs.push(newBug);
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


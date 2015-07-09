angular.module("bugTrackerApp")
    .controller("bugsController", function bugsController($scope, Bug){
        $scope.bugs = [
            new Bug({ title : "Null pointer error", isClosed : false}),
            new Bug({ title : "Object reference not found", isClosed : true}),
            new Bug({ title : "Array out of bounds", isClosed : false}),
            new Bug({ title : "Stack overflow error", isClosed : false})
        ];

        //$scope.newBug = '';
        $scope.addBug = function(bug){
            var newBug = new Bug({
                title : bug,
                isClosed : false
            });
            $scope.bugs.push(newBug);
        };
        $scope.toggle = function(bug){
            bug.toggle();
        };

        $scope.removeClosed = function(){
            for(var i= $scope.bugs.length -1; i>=0;i--){
                if ($scope.bugs[i].isClosed)
                    $scope.bugs.splice(i,1);
            }
        };

        $scope.getClosedCount = function(){
            return $scope.bugs.filter(function(bug){
                return bug.isClosed;
            }).length;
        };
    });

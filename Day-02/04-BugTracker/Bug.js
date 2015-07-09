angular.module("bugTrackerApp")
    .factory("Bug",  function(){
        function Bug(defatuls){
            defatuls = defatuls || {};
            this.title = defatuls.title || '';
            this.isClosed = defatuls.isClosed || false;
        }
        Bug.prototype.toggle = function(){
            this.isClosed = !this.isClosed;
        };
        return Bug;
    });

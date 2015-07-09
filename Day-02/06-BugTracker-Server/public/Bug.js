angular.module("bugTrackerApp")
    .factory("Bug",  function(){
        function Bug(defatuls){
            defatuls = defatuls || {};
            this.id = defatuls.id || Date.now().toString();
            this.title = defatuls.title || '';
            this.isClosed = defatuls.isClosed || false;
            this.createdAt = defatuls.createdAt || new Date();
        }
        Bug.prototype.toggle = function(){
            this.isClosed = !this.isClosed;
        };
        return Bug;
    });

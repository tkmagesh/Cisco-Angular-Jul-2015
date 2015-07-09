angular.module("bugTrackerApp", ["utils"]);
        angular
            .module("bugTrackerApp")
            .value("defaultTrimTextLength", 30);
        /*bugTrackerApp.value("Bug",  (function(){
            function Bug(defatuls){
                defatuls = defatuls || {};
                this.title = defatuls.title || '';
                this.isClosed = defatuls.isClosed || false;
            }
            Bug.prototype.toggle = function(){
                this.isClosed = !this.isClosed;
            };
            return Bug;
        })());*/

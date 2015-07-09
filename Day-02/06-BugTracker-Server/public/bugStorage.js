angular
        .module("bugTrackerApp")
        .factory("bugStorage", function(Bug){
            var storage = window.localStorage;
            return {
                save : function(bug){
                    storage.setItem(bug.id.toString(), angular.toJson(bug));
                },
                remove : function(bug){
                    storage.removeItem(bug.id);
                },
                getAll : function(){
                    var result = [];
                    for(var i=0; i<storage.length; i++){
                        var key = storage.key(i);
                        var rawData = storage.getItem(key);
                        var bug = new Bug(angular.fromJson(rawData));
                        result.push(bug);
                    }
                    return result;
                }
            }
        });

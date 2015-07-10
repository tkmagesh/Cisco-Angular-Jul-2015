angular
        .module("bugTrackerApp")
        /*.factory("bugStorage", function(Bug){
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
        })*/
        /*.service("bugStorage", function(Bug){
            var storage = window.localStorage;

                this.save = function(bug){
                    storage.setItem(bug.id.toString(), angular.toJson(bug));
                };
                this.remove = function(bug){
                    storage.removeItem(bug.id);
                };
                this.getAll = function(){
                    var result = [];
                    for(var i=0; i<storage.length; i++){
                        var key = storage.key(i);
                        var rawData = storage.getItem(key);
                        var bug = new Bug(angular.fromJson(rawData));
                        result.push(bug);
                    }
                    return result;
                }
        });*/
        .config(function(bugStorageProvider){
            bugStorageProvider.setStorage("session")
        })
        .constant("defaultStorageOption", "local")
        .run(function(bugStorage){
            console.log("run ", bugStorage);
        })
        .provider("bugStorage", function(defaultStorageOption){ /*factory at config*/
            var storage = window.localStorage;
            setStorageOption(defaultStorageOption);
            function setStorageOption(storageOption){
                storage = (storageOption === "local" ? window.localStorage : window.sessionStorage);
            }
            return {
                setStorage : setStorageOption,
                $get : function(){ /*factory at run*/
                    console.dir(storage);
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
                    };

                }
            };
        })

 angular.module("utils", [])
                .value("defaultTrimTextLength", 20)

                .filter("trimText", function(defaultTrimTextLength){
                    return function(data, trimLength){
                        trimLength = trimLength || defaultTrimTextLength;
                        return data.length > trimLength ? data.substr(0,trimLength) + "..." : data;
                    };
                });

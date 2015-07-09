/* Sync */

function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returing result");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] triggering addSync");
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

/* Async using callbacks */

function addAsync(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returing result");
        if (typeof onResult === "function")
            onResult(result);
    },3000)
}

function addAsyncClient(x,y){
    console.log("[SC] triggering addAsync");
    addAsync(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

/* Async using events */

function getAdder(){
    var handlers = [];
    return {
        add : function(x,y){
           console.log("[SP] processing ", x , " and ", y);
            setTimeout(function(){
                var result = x + y;
                console.log("[SP] returing result");
                handlers.forEach(function(handler){
                    handler(result);
                })
            },3000)
        },
        onResult : function(handler){
            handlers.push(handler);
        }
    }
}


function addAsyncClient(x,y){
    console.log("[SC] triggering addAsync");
    var adder = getAdder();
    adder.onResult(function(result){
        console.log("[SC] result = ", result);
    })
    adder.add(x,y);
}

/* Async using Promise */

function addAsync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returing result");
            resolve(result);
        },3000)
    });
    return promise;
}

var p = addAsync(100,200);

p.then(function(result){
  console.log("[SC] result = ", result);
});



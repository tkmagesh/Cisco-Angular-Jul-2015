describe("greetController", function(){
    beforeEach(module("myApp.greet"));

    it("Should have the name initialized to empty string", inject(function($controller){

        var dummyScope = {};

        var controller = $controller("greetController", {$scope : dummyScope});

        expect(dummyScope.name).toBe('');

    }));
    it("Should have the message initialized to empty string", inject(function($controller){

        var dummyScope = {};

        var controller = $controller("greetController", {$scope : dummyScope});

        expect(dummyScope.message).toBe('');

    }));

    /*it("Should populate the message when greeted", inject(function($controller){

        var dummyScope = {};

        var controller = $controller("greetController", {$scope : dummyScope});

        dummyScope.name = "Magesh";
        dummyScope.greet();
        expect(dummyScope.message).toBe('Hi Magesh, Have a nice day!');

    }));*/

    it("Should populate the message from greetService when greeted", inject(function($controller){

        var dummyScope = {};
        var dummyService = {
            greet : function(){}
        };
        spyOn(dummyService, "greet").and.returnValue("Some dummy greet message");

        var controller = $controller("greetController", {
            $scope : dummyScope,
            greetService : dummyService
        });

        dummyScope.name = "Magesh";
        dummyScope.greet();
        expect(dummyService.greet).toHaveBeenCalledWith(dummyScope.name);
        expect(dummyScope.message).toBe('Some dummy greet message');

    }));
});

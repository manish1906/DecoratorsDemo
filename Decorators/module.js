angular.module('app', [])   
    .service('myService', function () {
        console.log("service");
        this.getDate = function () {
            console.log("service fn");
            return null; 
        };
    })
    .controller('myController', function (myService) {
        console.log("controller");
        var vm = this;
        vm.date = myService.getDate();
    })
    .config(function ($provide) {
        console.log("config");
        $provide.decorator('myService', function ($delegate) {
            console.log("decorator");
            $delegate.getDate = function () {
                return new Date();
            };
            return $delegate;
        });
    });
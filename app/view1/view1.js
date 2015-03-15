'use strict';

angular.module('myApp.view1', ['ngRoute', 'finance'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['currencyConverter', function (currencyConverter) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;

        this.total = function total(outCurr) {
            return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.pay = function pay() {
            window.alert("Thanks to you!");
        };

    }])
    .controller('MyController', ['$scope', 'notify', function ($scope, notify) {
        $scope.callNotify = function (msg) {
            notify(msg);
        };
    }])
    .factory('notify', ['$window', function (win) {
        var msgs = [];
        return function (msg) {
            msgs.push(msg);
            if (msgs.length == 3) {
                win.alert(msgs.join("\n"));
                msgs = [];
            }
        };
    }]);
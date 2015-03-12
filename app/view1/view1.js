'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = ['USD', 'EUR', 'CNY'];
        this.usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };

        this.total = function total(outCurr) {
            return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
            return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
        };
        this.pay = function pay() {
            window.alert("Thanks!");
        };
}]);
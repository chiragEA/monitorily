(function() {
    
    var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .when('/site', {
                controller: 'siteController',
                templateUrl: 'app/views/site.html'
            })
            .when('/user', {
                controller: 'UserController',
                templateUrl: 'app/views/user.html'
            })
            .when('/task', {
                controller: 'TaskController',
                templateUrl: 'app/views/task.html'
            })
            .when('/orders', {
                controller: 'AllOrdersController',
                templateUrl: 'app/views/allorders.html'
            })

            .otherwise( { redirectTo: '/' } );
    });
    
}());
var app = angular.module('app', [ 'ngRoute' ]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "./js/app/invoices/invoices.html",
            controller : "InvoicesController",
            controllerAs: "vm"
        })
        .when("/invoices", {
            templateUrl : "./js/app/invoices/invoices.html",
            controller : "InvoicesController",
            controllerAs: "vm"
        })
        .when("/invoice/:id", {
            templateUrl : "./js/app/invoices/createInvoice.html",
            controller : "CreateInvoiceController",
            controllerAs: "vm"
        })
        .when("/invoices/create", {
            templateUrl : "./js/app/invoices/createInvoice.html",
            controller : "CreateInvoiceController",
            controllerAs: "vm"
        })
        .when("/products", {
            templateUrl : "./js/app/products/products.html",
            controller : "ProductsController",
            controllerAs: "vm"
        })
        .when("/product/:id", {
            templateUrl : "./js/app/products/editProduct.html",
            controller : "EditProductController",
            controllerAs: "vm"
        })
        .when("/customers", {
            templateUrl : "./js/app/customers/customers.html",
            controller : "CustomersController",
            controllerAs: "vm"
        })
        .when("/customer/:id", {
            templateUrl : "./js/app/customers/editCustomer.html",
            controller : "EditCustomerController",
            controllerAs: "vm"
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});
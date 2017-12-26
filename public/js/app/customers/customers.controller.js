app.controller('CustomersController', CustomersController);

InvoicesController.$inject = ['$scope', 'dataservice'];

function CustomersController($scope ,dataservice){
    var vm = this;
    vm.deleteCustomer = deleteCustomer;
    vm.createCustomer = createCustomer;

    dataservice.getData("", "CUSTOMER", vm, 'customers');
    function deleteCustomer(id){
        dataservice.deleteCustomer('/'+id, function(){
            window.location.assign('/customers');
        });
    }

    function createCustomer(){
        dataservice.createCustomer({}, function(response){
            window.location.assign('/customer/'+response.id);
        });
    }
}
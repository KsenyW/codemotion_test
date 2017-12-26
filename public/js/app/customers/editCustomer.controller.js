app.controller('EditCustomerController', EditCustomerController);

EditCustomerController.$inject = ['$scope', 'dataservice', '$routeParams'];

function EditCustomerController($scope, dataservice, $routeParams){
    var vm = this;
    vm.id = $routeParams.id;
    vm.customer = {};

    vm.saveCustomer = saveCustomer;

    if(vm.id){
        dataservice.getData("/"+vm.id, "CUSTOMER", vm, 'customer');
    }

    function saveCustomer(){
        dataservice.editCustomer(vm.customer, function(){
            window.location.assign('/customers');
        });
    }
}
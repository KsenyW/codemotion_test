app.controller('CreateInvoiceController', CreateInvoiceController);

CreateInvoiceController.$inject = ['$scope', 'dataservice', '$routeParams'];

function CreateInvoiceController($scope, dataservice, $routeParams){
    var vm = this;
    vm.id = $routeParams.id || "";
    vm.isSaved = false;
    vm.listOfProducts = [];
    vm.itemAmount = 1;
    vm.createInvoiceForm = {
        "total" : 0,
        "discount": 0,
        "customer_id": ""
    };

    vm.addProduct = addProduct;
    vm.countTotal = countTotal;
    vm.formUpdate = formUpdate;
    vm.saveInvoice = saveInvoice;
    vm.deleteInvoice = deleteInvoice;
    vm.createProduct = createProduct;
    vm.createCustomer = createCustomer;

    dataservice.getData("", "CUSTOMER", vm, 'customers');
    dataservice.getData("", "PRODUCT", vm, 'products');

    $scope.$watchCollection('vm.createInvoiceForm', function(current, original){
        vm.isSaved = false;
        if(JSON.stringify(current) != JSON.stringify(original)){
            vm.saveInvoice(function(){
                vm.isSaved = true;
            });
        }
    });

    if(vm.id){
        dataservice.getData("/"+vm.id, "INVOICE", vm, 'createInvoiceForm');
    } else {
        dataservice.createInvoice();
    }

    function saveInvoice(callback){
        dataservice.editInvoice(vm.createInvoiceForm, callback);
    }
    function deleteInvoice() {
        dataservice.deleteInvoice('/'+vm.id, function(response) {
            window.location.assign('/invoices');
        });
    }
    function formUpdate(item){
        vm.addProduct(item);
        vm.countTotal()
    }
    function addProduct(item){
        item = JSON.parse(item);
        item.quantity = vm.itemAmount<1? 1: vm.itemAmount;

        vm.listOfProducts.push(item);
        console.log(item);
    }
    function countTotal(){
        vm.createInvoiceForm.total = 0;
        vm.createInvoiceForm.discount = vm.createInvoiceForm.discount < 0 ? 0 :
                                        vm.createInvoiceForm.discount > 100 ? 100 : vm.createInvoiceForm.discount || 0;

        for(var i = 0; i < vm.listOfProducts.length; i++){
            vm.createInvoiceForm.total += Number(vm.listOfProducts[i].price) * Number(vm.listOfProducts[i].quantity);
        }
        var discount = vm.createInvoiceForm.total * (Number(vm.createInvoiceForm.discount)/100);
        vm.createInvoiceForm.total = vm.createInvoiceForm.total - discount;
    }
    function createProduct(item){
        dataservice.createProduct(item, function(){
            dataservice.getData("", "PRODUCT", vm, 'products');
            vm.newProduct = {};
        })
    }
    function createCustomer(item){
        dataservice.createCustomer(item, function(){
            dataservice.getData("", "CUSTOMER", vm, 'customers');
            vm.newCustomer = {};
        });
    }
}
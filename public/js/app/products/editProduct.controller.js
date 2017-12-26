app.controller('EditProductController', EditProductController);

EditProductController.$inject = ['$scope', 'dataservice', '$routeParams'];

function EditProductController($scope, dataservice, $routeParams){
    var vm = this;
    vm.id = $routeParams.id;
    vm.product = {};

    vm.saveProduct = saveProduct;

    if(vm.id){
        dataservice.getData("/"+vm.id, "PRODUCT", vm, 'product');
    }

    function saveProduct(){
        dataservice.editProduct(vm.product, function(){
            window.location.assign('/products');
        });
    }
}

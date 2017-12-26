app.controller('ProductsController', ProductsController);

ProductsController.$inject = ['$scope', 'dataservice'];

function ProductsController($scope ,dataservice){
    var vm = this;
    vm.deleteProduct = deleteProduct;
    vm.createProduct = createProduct;

    dataservice.getData("", "PRODUCT", vm, 'products');
    function deleteProduct(id) {
        dataservice.deleteProduct('/'+id, function(){
            window.location.assign('/products');
        });
    }
    function createProduct(){
        dataservice.createProduct({}, function(response){
            window.location.assign('/product/'+response.id);
        })
    }
}
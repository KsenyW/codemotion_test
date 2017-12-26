app.controller('InvoicesController', InvoicesController);

InvoicesController.$inject = ['$scope', 'dataservice'];

function InvoicesController($scope, dataservice){
    var vm = this;
    vm.deleteInvoice = deleteInvoice;
    vm.invoices = [];

    dataservice.getData("", "INVOICE", vm, 'invoices');

    function deleteInvoice(id) {
        dataservice.deleteInvoice("/"+id);
    }
}
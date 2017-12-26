app.service('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
    var URL = {
        "INVOICE":"/api/invoices",
        "PRODUCT":"/api/products",
        "CUSTOMER":"/api/customers",
        "INVOICE_ITEMS":"/api/invoices/"
    };


    return {
        createInvoice: createInvoice,
        deleteInvoice: deleteInvoice,
        editInvoice: editInvoice,
        getData: getData,
        deleteCustomer: deleteCustomer,
        editCustomer: editCustomer,
        createCustomer: createCustomer,
        editProduct: editProduct,
        deleteProduct: deleteProduct,
        createProduct: createProduct
    };

    function getData(id, urlName, scope, name, callback){
        $http.get(URL[urlName]+id)
            .then(function(response){
                scope[name] = response.data;
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log("GET request failed: "+error.data);
            });
    }

    // CUSTOMERS
    function createCustomer(customer, callback){
        $http.post(URL.CUSTOMER, customer)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log("Request failed: "+error.data);

                if(callback){
                    callback(error);
                }
            });
    }
    function deleteCustomer(id, callback) {
        $http.delete(URL.CUSTOMER+id)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log("Delete request failed: "+error.data);
            });
    }
    function editCustomer(customer, callback) {
        $http.put(URL.CUSTOMER+"/"+customer.id, customer)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log(error.data);
            });
    }

    // PRODUCTS
    function editProduct(product, callback){
        $http.put(URL.PRODUCT+"/"+product.id, product)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log(error.data);
            });
    }
    function createProduct(product, callback){
        $http.post(URL.PRODUCT, product)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log("Request failed: "+error.data);

                if(callback){
                    callback(error);
                }
            });
    }
    function deleteProduct(id, callback){
        $http.delete(URL.PRODUCT+id)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log("Delete request failed: "+error.data);
            });
    }

    // INVOICES
    function createInvoice(){
        $http.post(URL.INVOICE)
            .then(function(response){
                window.location.assign('/invoice/'+response.data.id);
            })
            .catch(function(error){
                console.log("Request failed: "+error.data);

                if(callback){
                    callback(error);
                }
            });
    }
    function deleteInvoice(id, callback) {
        $http.delete(URL.INVOICE+id)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log("Delete request failed: "+error.data);
            });
    }
    function editInvoice(invoice, callback){
        $http.put(URL.INVOICE+"/"+invoice.id, invoice)
            .then(function(response){
                if(callback){
                    callback(response.data);
                }
            })
            .catch(function(error){
                console.log(error.data);
            });
    }

}
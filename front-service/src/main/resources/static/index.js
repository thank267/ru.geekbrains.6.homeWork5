angular.module('app', []).controller('indexController', function ($scope, $http) {

    $scope.loadProducts = function () {
        $http({
            url: 'http://localhost:3000/api/v1/products',
            method: 'GET'
        }).then(function (response) {
            console.log(response.data);
            $scope.products = response.data;
        });
    }

    $scope.loadProducts();
});

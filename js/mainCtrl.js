/**
 * Created by Joshua Baert on 11/11/2016.
 */

angular.module('assessment').controller('mainCtrl', function ($scope, mainSvc) {
	function getProducts () {
		mainSvc.getProducts().then(function (response) {
			$scope.products = response.data;
			console.log(response.data);
		})
	}
	
	getProducts();
	
	
	
});
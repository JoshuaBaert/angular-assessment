/**
 * Created by Joshua Baert on 11/11/2016.
 */

angular.module('assessment').service('mainSvc', function ($http, $q) {
	
	this.getProducts = function () {
		return $http({
			method: 'GET',
			url: 'http://practiceapi.devmounta.in/products',
		})
	};
	
	this.getProductDetail = function (id) {
		return $http({
			method: "GET",
			url: 'http://practiceapi.devmounta.in/products/' + id,
		})
	};
	
});
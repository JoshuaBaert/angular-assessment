/**
 * Created by Joshua Baert on 11/11/2016.
 */

angular.module('assessment').controller('productCtrl', function ($scope, mainSvc, $stateParams) {
	
	var id = $stateParams.id;
	
	function getDetails(id) {
		mainSvc.getProductDetail(id).then(function (res) {
			$scope.product = res.data;
			console.log(res.data);
		})
	}
	
	getDetails(id);
	
});
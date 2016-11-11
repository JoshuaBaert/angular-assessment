/**
 * Created by Joshua Baert on 11/11/2016.
 */
angular.module('assessment')
		.directive('item', function () {
			return {
				restrict: 'EA',
				templateUrl: './views/product-tmpl.html',
				scope: {
					product: '='
				},
				link: function (scope, element, attrs) {
					/*scope.clickImage = function () {
						$('.product-grid__img').css('display','none');
						$('.product-grid_text').css('display','block');
						console.log('clicked img');
					};
					scope.clickText = function () {
						$('.product-grid__img').css('display','block');
						$('.product-grid_text').css('display','none');
						console.log('clicked text');
					}*/
				}
			}
		})
		.directive('imageClick', function () {
			return {
				restrict: "A",
				link: function (scope, element, attrs) {
					$(element).on('click', function () {
						$(element).next().removeClass('hide');
						$(element).addClass('hide');
					})
				}
			}
		})
		.directive('textClick', function () {
			return {
				restrict: "A",
				link: function (scope, element, attrs) {
					$(element).on('click', function () {
						$(element).prev().removeClass('hide');
						$(element).addClass('hide');
					})
				}
			}
		});
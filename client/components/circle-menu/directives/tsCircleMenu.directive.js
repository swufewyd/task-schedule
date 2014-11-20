/**
*  Module
*
* Description
*/
angular.module('ts.circleMenu').directive('tsCircleMenu',  function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '<div>sssssssssssssssss</div>',
		templateUrl: 'components/circle-menu/views/circle-menu.html',
		replace: false,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			var items = document.querySelectorAll('.circle a');
			for(var i = 0, l = items.length; i < l; i++) {
			  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
			  
			  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
			}

			document.querySelector('.menu-button').onclick = function(e) {
			   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
			}
		}
	};
});
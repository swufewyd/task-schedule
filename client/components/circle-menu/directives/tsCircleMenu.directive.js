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
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '<div>sssssssssssssssss</div>',
		templateUrl: 'components/circle-menu/views/circle-menu.html',
		replace: true,
		transclude: true,
		compile: function(tElement, tAttrs,transclude){
			/*console.log(angular.element(tElement[0]).find(".circle"));
			var p = angular.element(tElement[0]).find(".circle");
			p.append( "<p>Test</p>" );*/
			return link;
		},
		
	};

	function link ($scope, iElm, iAttrs, controller){
		// var items = document.querySelectorAll('.circle a');
		var items = angular.element('.circle a');
		for(var i = 0, l = items.length; i < l; i++) {
		  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
		  
		  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
		}
		angular.element('.menu-button').click(function(e) {
		   e.preventDefault();
		   angular.element('.circle').toggleClass('open');
		});
	}
});
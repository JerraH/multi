var myApp = angular.module('myApp', []);

myApp.controller('MultiplicationCtrl', function($scope, $attrs) {

	$scope.numberLimit = $attrs.initialNumberLimit;

	$scope.numbers = function() {
		var numbers = [];
		for(var i=0; i<$scope.numberLimit; i++) {
			numbers[i] = i + 1;
		};
		return numbers;
	};

	$scope.compute = function(a,b) {
		return a * b;
	};
});

$(function() {
  $('#numberI').placeholder="Enter a Number";
});
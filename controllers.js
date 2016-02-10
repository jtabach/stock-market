app.controller('listCtrl', function($scope, $log, $state, Stocks) {
	$log.info('list');
})

app.controller('addCtrl', function($scope, $log, $state, Stocks) {

	$scope.findStock = function() {
		Stocks.findByName($scope.nameStock)
		.then(function(res) {
			$scope.stocks = res.data;
			console.log($scope.stocks);
		}, function(err) {
			console.log('err:', err);
		})
	}

	$scope.addStock = function(selectedStock) {
		console.log(selectedStock);
		Stocks.findBySymbol(selectedStock.Symbol)
		.then(function(res) {
			$scope.selection = res.data;
			console.log($scope.selection);
		}, function(err) {
			console.log('err:', err);
		})
	}

})
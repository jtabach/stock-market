app.controller('listCtrl', function($scope, $log, $state, Stocks) {
	$scope.stockList = Stocks.stockList;
	$scope.removeStock = function(index) {
		$scope.stockList.splice(index, 1);
	}
})

app.controller('addCtrl', function($scope, $log, $state, Stocks) {

	$scope.findStock = function() {
		Stocks.findByName($scope.nameStock)
		.then(getStocksByName, errorHandler);

		function getStocksByName(res) {
			$scope.stocks = res.data;
		}
	}

	$scope.addStock = function(selectedStock) {
		Stocks.findBySymbol(selectedStock.Symbol)
		.then(addSelectedStock, errorHandler);

		function addSelectedStock(res) {
			$scope.selection = res.data;
			Stocks.stockList.push($scope.selection);
		}
	}

	function errorHandler(err) {
		console.log('err:', err);
	}

})
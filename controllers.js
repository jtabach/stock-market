app.controller('listCtrl', function($scope, $log, $state, Stocks) {
	$log.info(Stocks.stockList);
	$scope.stockList = Stocks.stockList;
})

app.controller('addCtrl', function($scope, $log, $state, Stocks) {

	$scope.findStock = function() {
		Stocks.findByName($scope.nameStock)
		.then(function(res) {
			$scope.stocks = res.data;
		}, function(err) {
			console.log('err:', err);
		})
	}

	$scope.addStock = function(selectedStock) {
		Stocks.findBySymbol(selectedStock.Symbol)
		.then(function(res) {
			$scope.selection = res.data;
			Stocks.stockList.push($scope.selection);
			console.log($scope.selection);
		}, function(err) {
			console.log('err:', err);
		})
	}

})
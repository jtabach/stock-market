app.service('Stocks', function($http) {
	this.stockList = []

	this.findByName = function(name) {
		var LOOKUP_URL = `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${name}&jsoncallback=JSON_CALLBACK`;
		
		return $http.jsonp(LOOKUP_URL)
	}

	this.findBySymbol = function(symbol) {
		var QUOTE_URL = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}&jsoncallback=JSON_CALLBACK`;
		
		return $http.jsonp(QUOTE_URL)
	}
})
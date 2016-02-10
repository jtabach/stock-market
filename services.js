app.service('Stocks', function($http) {

	this.findByName = function(name) {
		return $http.jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${name}&jsoncallback=JSON_CALLBACK`)
	}

	this.findBySymbol = function(symbol) {
		return $http.jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}&jsoncallback=JSON_CALLBACK`)
	}
})
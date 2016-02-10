app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {url: '/', templateUrl:'./partials/home.html'})
		.state('list', {url: '/list', templateUrl:'./partials/list.html', controller: 'listCtrl'})
		.state('add', {url: '/add', templateUrl:'./partials/add.html', controller: 'addCtrl'})

	$urlRouterProvider.otherwise('/');
})
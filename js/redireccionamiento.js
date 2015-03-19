app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/see',{
		templateUrl: 'plantillas/verContacto.html',
	}).when('/add',{
		templateUrl: 'plantillas/añadirContacto.html',
	}).when('/modify',{
		templateUrl : 'plantillas/modificarContacto.html',
	}).when('/remove',{
		templateUrl : 'plantillas/borrarContacto.html',
	}).otherwise({
		redirecTo: '/',
		templateUrl: 'plantillas/main.html',
	});
}]);
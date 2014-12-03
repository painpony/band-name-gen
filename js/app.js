var app = angular.module('band-name-generator', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider',
        function($urlRouterProvider, $stateProvider){
        	$urlRouterProvider.otherwise('/');

        	$stateProvider.
            state('home',
        		{
        			url: '/',
        			templateUrl: './home.html',
        			controller: 'homeCtrl'
        		}
    		).
            state('about',
                {
                    url : '/about',
                    templateUrl: './about.html'
                }
            );
        }
    ]);
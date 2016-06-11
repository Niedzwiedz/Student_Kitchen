angular.module('studentKitchen')
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'home/_home.html',
                controller: 'MainCtrl'
            });
        $stateProvider
            .state('recipes',{
                url: '/recipes/{id}',
                templateUrl: 'recipes/_recipes.html',
                controller: 'RecipesCtrl'
            });

        $urlRouterProvider.otherwise('home');
    }]);

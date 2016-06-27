angular.module('studentKitchen')
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'home/_home.html',
                controller: 'MainCtrl',
                resolve: {
                    recipePromise: ['recipes', function(recipes){
                        return recipes.getAll()
                    }]
                }
            });
        $stateProvider
            .state('recipes',{
                url: '/recipes/{id}',
                templateUrl: 'recipes/_recipes.html',
                controller: 'RecipesCtrl',
                resolve: {
                    recipe: ['$stateParams', 'recipes', function($stateParams, recipes) {
                        return recipes.get($stateParams.id);
                    }]
                }
            });

        $urlRouterProvider.otherwise('home');
    }]);

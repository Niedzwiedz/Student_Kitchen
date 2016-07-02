angular.module('studentKitchen')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          resolve: {
            recipePromise: ['recipes', function(recipes) {
              return recipes.getAll();
            }]
          }
        })
        .state('recipes', {
          url: '/recipes/{id}',
          templateUrl: 'recipes/_recipes.html',
          controller: 'RecipesCtrl',
          resolve: {
            recipe: ['$stateParams', 'recipes', function($stateParams, recipes) {
              return recipes.get($stateParams.id);
            }]
          }
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            });
          }]
        })
        .state('register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            });
          }]
        });

      $urlRouterProvider.otherwise('home');
    }
  ]);

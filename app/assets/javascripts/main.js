var app = angular.module('studentKitchen', ['ui.router'])
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
            });
        $stateProvider
            .state('recipes',{
                url: '/recipes/{id}',
                templateUrl: '/recipes.html',
                controller: 'RecipesCtrl'
            });

        $urlRouterProvider.otherwise('home');
    }])
app.controller('MainCtrl', ['$scope', 'recipes',
function($scope, recipes){
    $scope.recipes = [{title: 'post 1', upvotes: 5, description: "asd",
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 2', upvotes: 2, description: "asd",
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 3', upvotes: 15, description: "asd",
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 4', upvotes: 9, description: "asd",
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 5', upvotes: 4, description: "asd",
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]}];
    $scope.ingredients = [{element: 'ing1'},
                          {element: 'ing2'},
                          {element: 'ing3'} ];
    $scope.addIngredient = function(){
        if(!$scope.ingredient || $scope.ingredient === '') { return; }
        $scope.ingredients.push({element: $scope.ingredient});
        $scope.ingredient = '';
    };
    $scope.removeIngredient = function(index){
        $scope.ingredients.splice(index, 1);
    };
    $scope.addRecipe = function(){
        if(!$scope.title || $scope.title === '') { return; }
        if(!$scope.description || $scope.description === '') { return; }
        $scope.recipes.push({title: $scope.title,
                             upvotes: 0,
                             description: $scope.description,
                             ingredients: $scope.ingredients,
                             comments: [
                                 {author: 'Joe', body: 'Cool Recipe!', upvotes: 0},
                                 {author: 'Bob', body: 'It could be better', upvotes: 0}]
                             });
        $scope.title = '';
        $scope.description = '';
        $scope.ingredients = [];
    };
    $scope.incrementUpvotes = function(recipe) {
        recipe.upvotes += 1;
    };
    $scope.recipes = recipes.recipes;
}]);

app.controller('RecipesCtrl', [
    '$scope',
    '$stateParams',
    'recipes',
    function($scope, $stateParams, recipes){
        $scope.recipe = recipes.recipes[$stateParams.id];
        $scope.id = $stateParams.id
        $scope.incrementUpvotes = function(comment) {
            comment.upvotes += 1;
        };
        $scope.addComment = function(){
            if($scope.body === ''){ return; }
            $scope.recipe.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body='';
        };
    }]);
app.factory('recipes', [function(){
    var o = {
        recipes: []
    };
    return o;
}])

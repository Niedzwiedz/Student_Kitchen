angular.module('studentKitchen', ['ui.router', 'templates'])
.controller('MainCtrl', ['$scope', 'recipes',
function($scope, recipes){
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

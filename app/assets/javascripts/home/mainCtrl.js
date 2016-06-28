angular.module('studentKitchen', ['ui.router', 'templates'])
.controller('MainCtrl', ['$scope', 'recipes',
function($scope, recipes){
    $scope.ingredients = [{element: 'ing1'},
                          {element: 'ing2'},
                          {element: 'ing3'}];
    $scope.addIngredient = function(){
        if(!$scope.ingredient || $scope.ingredient === '') { return; }
        $scope.ingredients.push({element: $scope.ingredient});
        $scope.ingredient = '';
    };
    $scope.addIngredients = function(){
        alert(JSON.stringify($scope.ingredients, null, 4));
        recipes.createIngredients({ ingredients: $scope.ingredients});
    };
    $scope.removeIngredient = function(index){
        $scope.ingredients.splice(index, 1);
    };
    $scope.addRecipe = function(){
        if(!$scope.title || $scope.title === '') { return; }
        if(!$scope.description || $scope.description === '') { return; }
        recipes.create({
            title: $scope.title,
            upvotes: 0,
            description: $scope.description,
            //comments: [
            //    {author: 'Joe', body: 'Cool Recipe!', upvotes: 0},
            //    {author: 'Bob', body: 'It could be better', upvotes: 0}]
            ingredients: $scope.ingredients
        });
        $scope.title = '';
        $scope.description = '';
        $scope.ingredients = [];
    };
    $scope.incrementUpvotes = function(recipe) {
        recipes.upvote(recipe);
    };
    $scope.recipes = recipes.recipes;
}]);

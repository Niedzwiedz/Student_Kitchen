var app = angular.module('studentKitchen', [])
app.controller('MainCtrl', ['$scope',
function($scope){
    $scope.recipes = [{title: 'post 1', upvotes: 5,
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 2', upvotes: 2,
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 3', upvotes: 15,
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 4', upvotes: 9,
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]},
                      {title: 'post 5', upvotes: 4,
                       ingredients: [{element: 'ing1'}, {element: 'in2'}]}];
    $scope.ingredients = [{element: 'ing1'},
                          {element: 'ing2'},
                          {element: 'ing3'} ];
    $scope.addIngredient = function(){
        if(!$scope.ingredient || $scope.ingredient === '') { return; }
        $scope.ingredients.push({element: $scope.ingredient});
        $scope.ingredient = '';
    };
    $scope.addRecipe = function(){
        if(!$scope.title || $scope.title === '') { return; }
        $scope.recipes.push({title: $scope.title, upvotes: 0, ingredients: $scope.ingredients});
        $scope.title = '';
        $scope.ingredients = [];
    };
    $scope.incrementUpvotes = function(recipe) {
        recipe.upvotes += 1;
    };
}]);

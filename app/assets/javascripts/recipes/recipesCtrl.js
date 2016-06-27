angular.module('studentKitchen')
.controller('RecipesCtrl', [
    '$scope',
    'recipes',
    'recipe',
    function($scope, recipes, recipe){
        $scope.recipe = recipe;
        $scope.addComment = function(){
            if($scope.body === ''){ return; }
            recipes.addComment(recipe.id, {
                body: $scope.body,
            }).success(function(objects) {
                objects.comment.upvotes = 0;
                $scope.recipe.comments.push(objects.comment);
                alert(JSON.stringify(objects.comment, null, 4));
            });
            $scope.body='';
        };
        $scope.incrementUpvotes = function(comment) {
            recipes.upvoteComment(recipe, comment);
        };
    }]);

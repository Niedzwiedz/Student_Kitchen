angular.module('studentKitchen')
.controller('RecipesCtrl', [
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

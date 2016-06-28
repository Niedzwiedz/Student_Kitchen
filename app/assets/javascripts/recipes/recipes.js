angular.module('studentKitchen')
    .factory('recipes', ['$http', function($http){
        var o = {
            recipes: []
        };
        o.getAll = function() {
            return $http.get('/recipes.json').success(function(data){
                angular.copy(data, o.recipes);
            });
        };
        o.create = function(recipe) {
            alert(JSON.stringify(recipe, null, 4));
            return $http.post('/recipes.json', recipe).success(function(data){
                alert(JSON.stringify(data, null, 4));
                o.createIngredients(data.id, {ingredients: recipe.ingredients});
                data.upvotes = 0;
                data.ingredients = recipe.ingredients;
                o.recipes.push(data);
            });
        };
        o.createIngredients = function(id ,ingredients) {
            alert(JSON.stringify(ingredients, null, 4));
            return $http.post('/recipes/' + id + '/ingredients/', ingredients)
        };
        o.upvote = function(recipe) {
            return $http.put('/recipes/' + recipe.id + '/upvote.json')
                .success(function(data){
                    recipe.upvotes += 1;
                });
        };
        o.get = function(id) {
            return $http.get('/recipes/' + id + '.json').then(function(res){
                return res.data;
            });
        };
        o.addComment = function(id, objects) {
            return $http.post('/recipes/' + id + '/comments.json', objects);
        };
        o.upvoteComment = function(recipe, comment) {
            return $http.put('/recipes/' + recipe.id + '/comments/' + comment.id + '/upvote.json')
                .success(function(data){
                    comment.upvotes += 1;
                });
        };
        return o;
    }])

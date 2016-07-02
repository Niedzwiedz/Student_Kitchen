# Ingredients Controller handles creation of multiple
# ingredients for one recipe at once
class IngredientsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]
  def create
    recipe = Recipe.find(params[:recipe_id])
    params['ingredients'].each do |ingredient|
      recipe.ingredients.create(ingredient_params(ingredient))
    end
  end

  private

  def ingredient_params(params_a)
    params_a.permit(:element)
  end
end

class IngredientsController < ApplicationController
  def create
    recipe = Recipe.find(params[:recipe_id])
    params["ingredients"].each do |ingredient|
      ingredient = recipe.ingredients.create(ingredient_params(ingredient))
    end
  end

  private
  def ingredient_params(params_a)
    params_a.permit(:element)
  end
end

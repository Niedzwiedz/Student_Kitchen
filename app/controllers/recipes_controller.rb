# RecipesController handles actions related to RecipesController
# Actions:
# - index  - lists all recipes with ingredients
# - create - creates new recipe
# - show
# - upvote - upvotes recipe
class RecipesController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]

  def index
    recipes = Recipe.all
    respond_to do |format|
      format.html
      format.json { render json: recipes }
    end
  end

  def create
    recipe = current_user.recipes.build(recipe_params)
    # recipe.user = current_user
    if recipe.save
      respond_to do |format|
        format.html
        format.json { render json: recipe }
      end
    end
  end

  def show
    recipe = Recipe.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: recipe }
    end
  end

  def upvote
    recipe = Recipe.find(params[:id])
    recipe.increment!(:upvotes)

    respond_to do |format|
      format.html
      format.json { render json: recipe }
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description)
  end
end

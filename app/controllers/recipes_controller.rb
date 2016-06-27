class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    respond_to do |format|
      format.html
      format.json { render json: recipes}
    end
  end

  def create
    recipe = Recipe.create(recipe_params)
    respond_to do |format|
      format.html
      format.json {render json: recipe}
    end
  end

  def show
    recipe = Recipe.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: recipe }
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

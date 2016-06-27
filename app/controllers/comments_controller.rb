class CommentsController < ApplicationController
  def create
    recipe = Recipe.find(params[:recipe_id])
    comment = recipe.comments.create(comment_params)
    respond_to do |format|
      format.html
      format.json { render json: {:recipe => recipe, :comment => comment} }
    end
  end

  def upvote
    recipe = Recipe.find(params[:recipe_id])
    comment = recipe.comments.find(params[:id])
    comment.increment!(:upvotes)
    respond_to do |format|
      format.html
      format.json { render json: {:recipe => recipe, :comment => comment} }
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author)
  end
end

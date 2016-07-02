# CommentsController handles actions related to commenting recipes
# Actions:
# - create - creates new comment which belongs to user
# - upvote - upvotes comment
class CommentsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]

  def create
    recipe = Recipe.find(params[:recipe_id])
    comment = recipe.comments.create(comment_params.merge(user_id: current_user.id))
    respond_to do |format|
      format.html
      format.json { render json: { recipe: recipe, comment: comment } }
    end
  end

  def upvote
    recipe = Recipe.find(params[:recipe_id])
    comment = recipe.comments.find(params[:id])
    comment.increment!(:upvotes)
    respond_to do |format|
      format.html
      format.json { render json: { recipe: recipe, comment: comment } }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author)
  end
end

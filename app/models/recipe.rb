class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :ingredients
  has_many :comments

  def as_json(options = {})
    super(options.merge(include:
      [:user, :ingredients, comments: { include: :user }]))
  end
end

class Recipe < ActiveRecord::Base
  has_many :ingredients
  has_many :comments

  def as_json(options = {})
    super(options.merge(include: [:comments, :ingredients]))
  end
end

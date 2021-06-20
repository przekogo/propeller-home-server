# frozen_string_literal: true

class CreateUploads < ActiveRecord::Migration[6.1]
  def change
    create_table :uploads, &:timestamps
  end
end

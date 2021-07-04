# frozen_string_literal: true

class Upload < ApplicationRecord
  has_one_attached :file

  validate :file_has_name

  private

  def file_has_name
    errors.add(:file_name, 'file name cannot be blank') unless file.filename.present?
  end
end

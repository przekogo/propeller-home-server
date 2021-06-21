# frozen_string_literal: true

class UploadSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ActionView::Helpers::NumberHelper

  attributes :id, :created_at, :file_url, :file_name, :file_size

  def file_url
    rails_blob_path(object.file, disposition: 'attachment', only_path: true)
  end

  def file_name
    object.file.filename
  end

  def file_size
    number_to_human_size(object.file.byte_size)
  end
end

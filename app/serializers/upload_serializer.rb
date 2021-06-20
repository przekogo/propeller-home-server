# frozen_string_literal: true

class UploadSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :created_at, :file_url, :filename

  def file_url
    rails_blob_path(object.file, disposition: 'attachment', only_path: true)
  end

  def filename
    object.file.filename
  end
end

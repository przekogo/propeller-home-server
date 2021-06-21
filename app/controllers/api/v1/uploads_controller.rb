# frozen_string_literal: true

module Api
  module V1
    class UploadsController < ApplicationController
      skip_before_action :verify_authenticity_token
      def index
        render json: Upload.all.order(created_at: :desc)
      end

      def create
        render json: Upload.create!(upload_params)
      end

      def show; end

      def destroy
        render json: upload.destroy!
      end

      private

      def upload_params
        params.require(:upload).permit(:file)
      end

      def upload
        @upload ||= Upload.find(params[:id])
      end
    end
  end
end

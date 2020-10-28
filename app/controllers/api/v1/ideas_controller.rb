module Api::V1
    class IdeasController < ApplicationController
      def index
        @ideas = Idea.all
        puts "HELLOE"
        @ideas.each do |idea|
            puts idea
        end
        render json: @ideas
      end
    end
  end
class MainController < ApplicationController
    def index
        flash[:a] = "Notice in main"
    end
end
class Api::SearchsController < ApplicationController

    def search

        query = get_search_value["searchCriteria"]

        # @groupNames = Group.where('lower(groupname) LIKE ?', "%#{query.downcase}%")
        # @groupDescs = Group.where('lower(description) LIKE ?', "%#{query.downcase}%")
        # debugger
        @groupNames = Group.where('lower(groupname) LIKE ? OR lower(description) LIKE ?', "%#{query.downcase}%", "%#{query.downcase}%")
        # debugger

        @eventNames = Event.where('lower(eventname) LIKE ? OR lower(description) LIKE ?', "%#{query.downcase}%", "%#{query.downcase}%")
        # @eventNames = Event.where('lower(eventname) LIKE ?', "%#{query.downcase}%")
        # @eventDescs = Event.where('lower(description) LIKE ?', "%#{query.downcase}%")

        render "api/searchs/search"
    end

    private
    def get_search_value
        params.require(:search).permit(:searchCriteria)
    end

end

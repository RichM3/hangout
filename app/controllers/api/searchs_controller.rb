class Api::SearchsController < ApplicationController

    def search

        query = get_search_value["searchCriteria"]

        # Code used when extracting data one at a time in anticipation of using JSON.stringify to combine array of objects
        # @groupNames = Group.where('lower(groupname) LIKE ?', "%#{query.downcase}%")
        # @groupDescs = Group.where('lower(description) LIKE ?', "%#{query.downcase}%")

        @groupNames = Group.where('lower(groupname) LIKE ? OR lower(description) LIKE ?', "%#{query.downcase}%", "%#{query.downcase}%")
        @eventNames = Event.where('lower(eventname) LIKE ? OR lower(description) LIKE ?', "%#{query.downcase}%", "%#{query.downcase}%")

        # Code used when extracting data one at a time in anticipation of using JSON.stringify to combine array of objects
        # @eventNames = Event.where('lower(eventname) LIKE ?', "%#{query.downcase}%")
        # @eventDescs = Event.where('lower(description) LIKE ?', "%#{query.downcase}%")

        render "api/searchs/search"
    end

    private
    def get_search_value
        params.require(:search).permit(:searchCriteria)
    end

end

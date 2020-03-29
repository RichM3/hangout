class Api::SearchsController < ApplicationController

    def search

        query = get_search_value["searchCriteria"]

        @groups = Group.where('lower(groupname) LIKE ?', "%#{query.downcase}%")

        @events = Event.where('lower(eventname) LIKE ?', "%#{query.downcase}%")

        # render "api/groups/search"
        render "api/searchs/search"
    end

    private
    def get_search_value
        params.require(:search).permit(:searchCriteria)
    end

end

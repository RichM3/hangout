class UpdateEventsColumnsLatLng < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :location
    add_column :events, :lat, :float, null: false
    add_column :events, :lng, :float, null: false
  end
end

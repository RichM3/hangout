class AddLocationBackToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :location, :string, null: false
  end
end

class CreateEvent < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :eventname, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.datetime :starttime, null: false
      t.datetime :endtime, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
  end
end

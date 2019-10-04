class CreateGroup < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :groupname, null: false, unique: true
      t.text :description, null: false
      t.string :location, null: false
      t.integer :leader_id, null: false
      t.timestamps
    end
    add_index :groups, :groupname, unique: true
  end
end

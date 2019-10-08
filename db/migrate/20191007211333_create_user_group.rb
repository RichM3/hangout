class CreateUserGroup < ActiveRecord::Migration[5.2]
  def change
    create_table :user_groups do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
    end
  end
end

class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end

      t.string :email, null: false, unique: true
    add_index :users, :email, unique: true


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

    add_index(:events, [:eventname, :group_id])

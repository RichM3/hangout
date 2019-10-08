class CreateRsvp < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.boolean :attending, null: false, default: false
    end
  end
end

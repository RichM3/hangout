class NamebackUserGroups < ActiveRecord::Migration[5.2]
  def change
    rename_table :userGroups, :usergroups
  end
end

class ChangeUserGroupToCorrectUserGroupPrevForgotSave < ActiveRecord::Migration[5.2]
  def change
    rename_table :user_groups, :userGroups
  end
end

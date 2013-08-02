class AddGroupReferenceToContacts < ActiveRecord::Migration
  def change
    change_table :contacts do |t|
      t.references :group
    end
  end
end

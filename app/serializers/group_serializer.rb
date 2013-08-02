class GroupSerializer < ActiveModel::Serializer
  attributes  :id, 
              :name,
              :client_id

  has_many :contacts, embed: :ids
end

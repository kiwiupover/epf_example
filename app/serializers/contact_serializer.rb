class ContactSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :email,
             :notes,
             :client_id

  has_many :phone_numbers, embed: :objects
end

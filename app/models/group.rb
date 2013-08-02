class Group < ActiveRecord::Base
  has_many :contacts
  attr_accessible :name

  attr_accessor :client_id
end

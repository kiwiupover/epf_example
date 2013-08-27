class Group < ActiveRecord::Base
  validates :name, :presence => true
  
  has_many :contacts
  attr_accessible :name

  attr_accessor :client_id
end

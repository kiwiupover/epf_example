class Contact < ActiveRecord::Base
  validates :first_name, :presence => true
  validates :last_name, :presence => true
  belongs_to :group
  has_many :phone_numbers, :dependent => :destroy

  attr_accessor :client_id
  
  def full_name
    self.first_name + ' ' + self.last_name
  end
end

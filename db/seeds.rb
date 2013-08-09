# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
groups = Group.create([{ name: 'Ember' }, { name: 'EPF' }])
contact = Contact.create(first_name: 'Dave',  last_name: "Laird", email: "kiwiupover@gmail.com", group: groups.first)
contact2 = Contact.create(first_name: 'Gordon',  last_name: "Hempton", email: "ghempton@gmail.com", group: groups.last)
phone_numbers = PhoneNumber.create([{number: "646 3456", contact_id: contact.id}, {number: '206 5543', contact_id: contact.id}])


$.ready(function(){
  $('.datepicker').pickadate();
})

$(document).ready(function() {
  $('.datepicker').pickadate();
});

$('date')
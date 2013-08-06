App.ContactEditController = Em.ObjectController.extend({
  needs: ['contact'],

  startEditing: function() {
    // add the contact and its associated phone numbers to a session
    var contact =       this.get('model');
    var childSession =  this.session.newSession();
    var childContact =  childSession.add(contact);

    contact.get('phoneNumbers').forEach(function(phoneNumber) {
      childContact.session.add(phoneNumber);
    });
  },

  save: function() {
    this.session.flush();
    this.get('controllers.contact').stopEditing();
  },

  cancel: function() {
    this.get('controllers.contact').stopEditing();
  },

  addPhoneNumber: function() {
    contact = this.get('model');
    this.session.add(App.PhoneNumber.create({contact: contact}))
  },

  removePhoneNumber: function(phoneNumber) {
    this.session.deleteModel(phoneNumber);
  }
});

App.ContactsNewController = Em.ObjectController.extend({
  needs: ['groups', 'contacts'],

  groups: Ember.computed.alias('controllers.groups'),
  
  startEditing: function() {
    this.set('isEditing', true);
  },

  stopEditing: function() {
    this.set('isEditing', false);
  },

  save: function() {
    var controller = this;
    return this.session.flush().then(function(models) {
      newContact = controller.get('content');
      controller.get('controllers.contacts').content.pushObject(newContact);
      controller.transitionToRoute("contact", newContact);
    }, function(response){
      // TODO add better error message
      alert(response);
    });
  },

  cancel: function() {
    this.stopEditing();
    this.transitionToRoute('contacts.index');
  },

  addPhoneNumber: function() {
    contact = this.get('model');
    contact.session.add(App.PhoneNumber.create({contact: contact}))
  },

  removePhoneNumber: function(phoneNumber) {
    contact = this.get('model');
    contact.session.deleteModel(phoneNumber);
  }

});

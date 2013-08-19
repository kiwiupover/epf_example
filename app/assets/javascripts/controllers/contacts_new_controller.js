App.ContactsNewController = Em.ObjectController.extend({
  needs: ['groups', 'contacts'],

  groups: Ember.computed.alias('controllers.groups'),
  
  startEditing: function() {
    var controller = this;
    this.session.query('group').then( function(model){
      controller.get('controllers.groups').set('content', model);
    });
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
    }, function(exception){
      // TODO add better error message
      alert(exception);
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

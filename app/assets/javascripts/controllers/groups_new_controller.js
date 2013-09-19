App.GroupsNewController = Ember.ObjectController.extend({
  needs: ['groups', 'contactsNew'],
  
  newContact: null,
  newGroup: true,

  startEditing: function() {
    var controller = this;
    var childSession =  this.session.newSession();
    this.newContact = this.session.create('contact');
    return controller.get('contacts').pushObject(this.newContact);
  },

  save: function() {
    var controller = this;

    this.newContact.session.flush().then(function(models) {
      var newGroup = controller.get('model');
      controller.get('controllers.groups').content.pushObject(newGroup);
      controller.transitionToRoute('group', newGroup);
    }, function(models) {
      var errors = models[0].errors;
      if (errors.status !== 422) { // 422 (Unprocessable Entity) errors are handled by the form, see groups/new.hbs
        alert("Error " + errors.status + ": " + errors.xhr.statusText);
      }
    });
  },

  addPhoneNumber: function() {
    this.newContact.session.add(App.PhoneNumber.create({contact: this.newContact}))
  },

  removePhoneNumber: function(phoneNumber) {
    this.newContact.session.deleteModel(phoneNumber);
  }

});

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
    }, function(response){
      // TODO add better error message
      alert(response);
    });
  },

  addPhoneNumber: function() {
    this.newContact.session.add(App.PhoneNumber.create({contact: this.newContact}))
  },

  removePhoneNumber: function(phoneNumber) {
    this.newContact.session.deleteModel(phoneNumber);
  }

});
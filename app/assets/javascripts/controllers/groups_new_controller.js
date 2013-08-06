App.GroupsNewController = Ember.ObjectController.extend({
  needs: ['groups', 'contactsNew'],
  
  startEditing: function(){
    // var newContact = this.session.create('contact');
    // this.get('contacts').pushObject(newContact);
  },

  save: function() {
    var controller = this;
    var childSession =  this.session.newSession();
    var newContact = childSession.create('contact');
   
    newContact.setProperties({
      firstName: this.get('firstName'),
      lastName: this.get('lastName'),
      group: this.get('model')
    });

    return childSession.flush().then(function(models) {
      newGroup = controller.get('content');
      controller.get('controllers.groups').content.pushObject(newGroup);
      controller.transitionToRoute('group', newGroup);
    }, function(response){
      // TODO add better error message
      alert(response);
    });
  },

  addPhoneNumber: function() {
    this.get('controllers.contactsNew').send('addPhoneNumber');
  }

});
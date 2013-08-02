App.GroupRoute = Ember.Route.extend({

  events: {
    editContact: function(contact){
      this.transitionTo('contact', contact);
    },

    destroyContact: function(contact){
      if (window.confirm("Are you sure you want to delete this contact?")) {
        contact.session.deleteModel(contact);
        contact.session.flush();

        this.transitionTo('group', this.modelFor('group'))
      }
    }
  }
});

App.ContactController = Em.ObjectController.extend({
  isEditing: false,
  needs: ['groups', 'contactEdit'],

  groups: Ember.computed.alias('controllers.groups'),

  startEditing: function() {
    var controller = this;
    var contactEditController = this.get('controllers.contactEdit');

    contactEditController.set('model', this.get('model'));
    contactEditController.startEditing();

    this.session.query('group').then( function(model){
      controller.get('controllers.groups').set('content', model);
    });

    this.set('isEditing', true);
  },

  stopEditing: function() {
    this.set('isEditing', false);
  },

  destroyRecord: function() {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      var contact = this.get('model');
      contact.set('group', null);

      contact.session.deleteModel(this.get('model'));
      contact.session.flush();

      // return to the main contacts listing page
      this.transitionToRoute('contacts.index');
    }
  }
});

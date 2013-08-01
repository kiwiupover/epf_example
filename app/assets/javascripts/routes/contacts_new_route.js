App.ContactsNewRoute = Ember.Route.extend({
  model: function() {
    return this.session.create(App.Contact);
  },

  setupController: function(controller) {
    this._super.apply(this, arguments);
    controller.startEditing();
  },

  deactivate: function() {
    this.controllerFor('contacts.new').stopEditing();
  }
});

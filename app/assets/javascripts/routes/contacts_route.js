App.ContactsRoute = Ember.Route.extend({
  model: function() {
    // request all contacts from adapter
    return this.session.query('contact');
  }
});

App.GroupsRoute = Ember.Route.extend({
  model: function() {
    // request all groups from adapter
    return this.session.query('group');
  }
});

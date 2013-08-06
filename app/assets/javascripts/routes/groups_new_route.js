App.GroupsNewRoute = Ember.Route.extend({
  model: function() {
    return this.session.create(App.Group);
  },

  setupController: function(controller) {
    this._super.apply(this, arguments);
    controller.startEditing();
  }
});
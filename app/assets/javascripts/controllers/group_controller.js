App.GroupController = Ember.ObjectController.extend({

  destroyRecord: function(){
    if (window.confirm("Are you sure you want to delete this group?")) {
      this.session.deleteModel(this.get('model'));
      this.session.flush();
      
      this.transitionToRoute('groups');
    }
  },
});
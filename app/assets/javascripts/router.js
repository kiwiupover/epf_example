App.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.resource('contact', {path: ':contact_id'});
  });
  this.resource('groups', function() {
    this.route('new');
    this.resource('group', {path: ':group_id'}, function(){
      this.route('contact', {path: 'contact/:contact_id'});
    });
  });
});

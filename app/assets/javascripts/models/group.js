EmberDataExample.Group = Ep.Model.extend({
  name: Ep.attr('string'),
  contacts: Ep.hasMany(App.Contact)
});

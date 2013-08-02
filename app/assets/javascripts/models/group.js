App.Group.reopen({
  name: Ep.attr('string'),
  contacts:  Ep.hasMany(App.Contact)
});

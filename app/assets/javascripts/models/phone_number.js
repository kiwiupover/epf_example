App.PhoneNumber.reopen({
  number:  Ep.attr('string'),
  contact: Ep.belongsTo(App.Contact)
});
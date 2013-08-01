App.PhoneNumber =  Ep.Model.extend();

App.Contact  = Ep.Model.extend({
  firstName:    Ep.attr('string'),
  lastName:     Ep.attr('string'),
  email:        Ep.attr('string'),
  notes:        Ep.attr('string'),
  phoneNumbers: Ep.hasMany(App.PhoneNumber),

  fullName: function() {
    var firstName = this.get('firstName'),
        lastName = this.get('lastName');

    if (!firstName && !lastName) {
      if (Ember.isNone(this.get('id'))) {
        return '(New Contact)';
      } else {
        return '(No Name)';
      }
    }

    if (firstName === undefined) firstName = '';
    if (lastName === undefined) lastName = '';

    return firstName + ' ' + lastName;
  }.property('firstName', 'lastName'),

  gravatar: function() {
    var email = this.get('email');
    if (!email) email = '';
    return 'http://www.gravatar.com/avatar/' + MD5(email);
  }.property('email')
});

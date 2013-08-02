Ep.RestAdapter.map(App.Contact, {
  sideloadsAs: 'contacts'
});

Ep.RestAdapter.map(App.Contact, {
  phoneNumbers: {embedded: 'always'}
});

App.Adapter = Ep.RestAdapter.extend();
